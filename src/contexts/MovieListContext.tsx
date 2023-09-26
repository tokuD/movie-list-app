'use client'
import { MovieProps } from '@/types'
import { fetchMovies } from '@/utils'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useSetLoading } from './LoadingContext'

const MovieListValueContext = createContext<MovieProps[]>([])
const MovieListSetContext = createContext<
  Dispatch<SetStateAction<MovieProps[]>>
>(() => {})

const MovieListValueContextProvider = (props: {
  children: ReactNode
  value: MovieProps[]
}) => {
  return (
    <MovieListValueContext.Provider value={props.value}>
      {props.children}
    </MovieListValueContext.Provider>
  )
}

const MovieListSetContextProvider = (props: {
  children: ReactNode
  value: Dispatch<SetStateAction<MovieProps[]>>
}) => {
  return (
    <MovieListSetContext.Provider value={props.value}>
      {props.children}
    </MovieListSetContext.Provider>
  )
}

export const useMovieList = () => useContext(MovieListValueContext)
export const useSetMovieList = () => useContext(MovieListSetContext)

export const MovieListContextProvider = (props: { children: ReactNode }) => {
  const [movieList, setMovieList] = useState<MovieProps[]>([])
  const setLoading = useSetLoading()

  useEffect(() => {
    fetchMovies(setMovieList, setLoading)
  }, [setLoading])

  return (
    <MovieListSetContextProvider value={setMovieList}>
      <MovieListValueContextProvider value={movieList}>
        {props.children}
      </MovieListValueContextProvider>
    </MovieListSetContextProvider>
  )
}
