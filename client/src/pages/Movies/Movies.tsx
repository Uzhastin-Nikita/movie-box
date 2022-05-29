import React from 'react'

import cx from 'classnames'
import css from './Movies.module.scss'
import { useAppSelector } from 'src/redux/hooks'
import { Status } from 'src/types/status.types'
import { MovieCard } from 'src/components/MovieCard'

export const Movies = () => {
  const movies = useAppSelector((state) => state.movie)
  return (
    <div className={cx(css.movies)}>
      {movies.status === Status.SUCCESS &&
        movies.data &&
        movies.data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}
