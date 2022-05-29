import React from 'react'

import cx from 'classnames'
import css from './Home.module.scss'
import { Intro } from 'src/components/Intro'

export const Home = () => {
  return (
    <div className={cx(css.home)}>
      <Intro />
    </div>
  )
}
