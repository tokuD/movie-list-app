'use client'
import { Card, CustomButton, CustomInput } from '@/UI'
import { useSetLoading } from '@/contexts/LoadingContext'
import { useSetMovieList } from '@/contexts/MovieListContext'
import { InputMovieProps } from '@/types'
import { addMovie } from '@/utils/movies'
import React, { useState } from 'react'

type Props = {}

const AddMovie = (props: Props) => {
  const setMovieList = useSetMovieList()
  const setLoading = useSetLoading()
  const [inputMovie, setInputMovie] = useState<InputMovieProps>({
    title: '',
    opening_crawl: '',
    release_date: '',
  })

  const addMovieHandler = () => {
    addMovie(inputMovie, setMovieList, setLoading)
    setInputMovie({ title: '', opening_crawl: '', release_date: '' })
  }

  return (
    <Card className="flex flex-col gap-4">
      <CustomInput
        label="Title"
        name="title"
        type="text"
        onChange={(event) =>
          setInputMovie((prev) => ({ ...prev, title: event.target.value }))
        }
      />
      <div className="flex flex-col gap-1">
        <label
          className="text-xl font-bold"
          htmlFor="opening_crawl"
        >
          Opening Text
        </label>
        <textarea
          name="opening_crawl"
          rows={4}
          className="rounded-xl py-1 px-2 border"
          onChange={(event) =>
            setInputMovie((prev) => ({
              ...prev,
              opening_crawl: event.target.value,
            }))
          }
        />
      </div>
      <CustomInput
        label="Release Date"
        name="release_date"
        type="date"
        onChange={(event) =>
          setInputMovie((prev) => ({
            ...prev,
            release_date: event.target.value,
          }))
        }
      />
      <CustomButton
        onClick={addMovieHandler}
        className="w-fit place-self-center"
      >
        Add Movie
      </CustomButton>
    </Card>
  )
}

export default AddMovie
