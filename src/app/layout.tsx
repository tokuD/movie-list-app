import { MovieListContextProvider } from '@/contexts/MovieListContext'
import './globals.css'
import type { Metadata } from 'next'
import { LoadingContextProvider } from '@/contexts/LoadingContext'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-stone-900">
        <LoadingContextProvider>
          <MovieListContextProvider>{children}</MovieListContextProvider>
        </LoadingContextProvider>
      </body>
    </html>
  )
}
