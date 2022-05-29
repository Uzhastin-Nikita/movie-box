import React from 'react'

import cx from 'classnames'
import css from './MovieCard.module.scss'
import { MovieType } from 'src/types/movie.types'
import { Heading, Size } from '../common/Heading'

export type MovieProps = {
  movie: MovieType
}

export const MovieCard = ({ movie }: MovieProps) => (
  <div className={cx(css.movieCard)}>
    <div className={cx(css.movieCard__image)}>
      <img src={movie.image} alt={movie.title} />
    </div>
    <div className={cx(css.movieCard__content)}>
      <Heading size={Size.large} value={movie.title} />
      <div className={cx(css.movieCard__content__description)}>{movie.description}</div>
      <span className={cx(css.movieCard__content__cinemas)}>Cinemas: {movie.cinemas}</span>
    </div>
  </div>
)
