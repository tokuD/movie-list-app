import { InputMovieProps, MovieProps, ResponseProps } from '@/types'
import { Dispatch, SetStateAction } from 'react'

const fetchMovies = async (
  setMovieList: Dispatch<SetStateAction<MovieProps[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  setLoading(true)
  console.log('fetching...')
  const result = await fetch('http://localhost:3000/api/movies')
  console.log(result)
  const data: ResponseProps = await result.json()
  setMovieList(data)
  setLoading(false)
}

const addMovie = async (
  movie: InputMovieProps,
  setMovieList: Dispatch<SetStateAction<MovieProps[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  setLoading(true)
  const response = await fetch('http://localhost:3000/api/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })
  const result: MovieProps = await response.json()
  setMovieList((prev) => [result, ...prev])
  setLoading(false)
  return
}

export { fetchMovies, addMovie }
