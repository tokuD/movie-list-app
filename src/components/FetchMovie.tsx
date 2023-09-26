'use client'
import { Card, CustomButton } from '@/UI'
import { useSetLoading } from '@/contexts/LoadingContext'
import { useSetMovieList } from '@/contexts/MovieListContext'
import { fetchMovies } from '@/utils'
import React from 'react'

type Props = {}

const FetchMovie = (props: Props) => {
  const setMovieList = useSetMovieList()
  const setLoading = useSetLoading()

  return (
    <Card className="flex justify-center items-center py-8">
      <CustomButton
        onClick={() => fetchMovies(setMovieList, setLoading)}
        className="px-6"
      >
        Fetch Movies
      </CustomButton>
    </Card>
  )
}

export default FetchMovie
