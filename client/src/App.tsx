import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { Provider } from 'react-redux'

import { store } from 'src/redux/store'

import './App.module.scss'
import { AppRouter } from './pages'
import { Header } from './components/Header/Header'
import { GET_MOVIE } from './redux/reducers/movieReducer'

function App() {
  const dispatch = useAppDispatch()
  dispatch(GET_MOVIE(null))

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App
