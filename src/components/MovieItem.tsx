import type { MovieProps } from '@/types'
import React from 'react'

type Props = {
  movie: MovieProps
}

const MovieItem = (props: Props) => {
  const { movie } = props
  return (
    <div
      className="bg-fuchsia-950 text-white
    rounded-xl p-6 flex flex-col gap-4
    items-center
    "
    >
      <h2 className="text-yellow-300 font-bold text-3xl">{movie.title}</h2>
      <p>{movie.opening_crawl}</p>
    </div>
  )
}

export default MovieItem
