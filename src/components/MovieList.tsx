'use client'
import { Card } from '@/UI'
import React from 'react'
import MovieItem from './MovieItem'
import { useMovieList } from '@/contexts/MovieListContext'
import { useLoading } from '@/contexts/LoadingContext'

type Props = {}

const MovieList = (props: Props) => {
  const movieList = useMovieList()
  const loading = useLoading()

  return (
    <Card className="flex flex-col gap-4 text-center">
      {loading && <p>Loading...</p>}
      {!loading && movieList.length === 0 && <p>Found no movies.</p>}
      {!loading &&
        movieList.length !== 0 &&
        movieList.map((movie) => (
          <MovieItem
            key={movie.episode_id}
            movie={movie}
          />
        ))}
    </Card>
  )
}

export default MovieList
