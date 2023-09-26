interface MovieProps {
  title: string
  episode_id: number
  opening_crawl: string
  director?: string
  producer?: string
  release_date?: string
  characters?: URL[]
}

interface InputMovieProps {
  title: string
  opening_crawl: string
  release_date: string
}

type ResponseProps = MovieProps[]

export type { MovieProps, ResponseProps, InputMovieProps }
