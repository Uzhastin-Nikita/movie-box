import React from 'react'

export enum Routes {
  HOME = '/',
  MOVIES = '/movies',
}

export type Route = {
  path: string | Routes
  element: React.ReactElement
  isRouteEnabled: boolean
  isNavigationEnabled: boolean
  title: string
  imgUrl?: string
  nameSvg?: string
  onClick?: () => void
}

export type HeaderRoutes = {
  imageRoutes: Route[]
  navigationRoutes: Route[]
}
