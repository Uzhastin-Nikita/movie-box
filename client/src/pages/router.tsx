import { Route, Routes } from './AppRouter.types'
import { onNavigation } from './AppRouter.utils'
import { Home } from './Home'
import { Movies } from './Movies'

export const useRoutes = (): Route[] => [
  {
    path: Routes.HOME,
    isRouteEnabled: true,
    isNavigationEnabled: true,
    element: <Home />,
    title: 'Home',
    onClick: onNavigation,
  },
  {
    path: Routes.MOVIES,
    isRouteEnabled: true,
    isNavigationEnabled: true,
    element: <Movies />,
    title: 'Movies',
    onClick: onNavigation,
  },
]
