import React from 'react'

import cx from 'classnames'
import css from './Intro.module.scss'
import { Heading } from '../common/Heading'
import { Size } from '../common/Button'
import { Icon, Icons } from '../Icon'
import { NavLink } from 'react-router-dom'
import { Routes } from 'src/pages/AppRouter.types'

export const Intro = () => {
  return (
    <div className={cx(css.intro)}>
      <Heading className={cx(css.intro__heading)} size={Size.large} value={'Welcome to Movie!'} />
      <Heading size={Size.large} value={'Click play to start'} />
      <NavLink to={Routes.MOVIES}>
        <Icon name={Icons.play} className={cx(css.intro__icon)} />
      </NavLink>
    </div>
  )
}
