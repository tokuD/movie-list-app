import { InputMovieProps, MovieProps } from '@/types'
import { NextResponse } from 'next/server'
import * as mysql from 'promise-mysql'

export const sqlConfig = {
  host: process.env.DB_HOST,
  port: 3306,
  database: 'movie_app',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}

export async function GET() {
  const connection = await mysql.createConnection(sqlConfig)

  const query = 'SELECT * FROM movie'
  const result = await connection.query(query)
  connection.end()

  return NextResponse.json(result)
}

export async function POST(request: Request) {
  const connection = await mysql.createConnection(sqlConfig)
  const movie: InputMovieProps = await request.json()

  const query = `INSERT INTO movie (title, opening_crawl, release_date) VALUES ("${movie.title}", "${movie.opening_crawl}", "${movie.release_date}")`
  const result = await connection.query(query)
  const insertedMovie: MovieProps = { ...movie, episode_id: result.insertId }
  console.log(insertedMovie)
  return NextResponse.json(insertedMovie)
}
