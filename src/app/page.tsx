import { AddMovie, FetchMovie, MovieList } from '@/components'

export default function Home() {
  return (
    <main className="max-w-[700px] mx-auto py-6 flex flex-col gap-6">
      <AddMovie />
      <FetchMovie />
      <MovieList />
    </main>
  )
}
