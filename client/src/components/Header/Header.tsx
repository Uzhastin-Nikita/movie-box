import React from 'react'
import { NavLink } from 'react-router-dom'

import cx from 'classnames'
import css from './Header.module.scss'

import { Button, Size } from '../common/Button'
import { Icon, Icons } from '../Icon'
import { Routes } from 'src/pages/AppRouter.types'

export const Header = () => {
  return (
    <header className={cx(css.header)}>
      <NavLink className={cx(css.header__logo)} to={Routes.HOME}>
        <Icon className={cx(css.header__logo_icon)} name={Icons.movie} />
        Movie
      </NavLink>
    </header>
  )
}
