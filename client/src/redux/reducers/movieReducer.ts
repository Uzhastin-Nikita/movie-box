import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { asyncThunk, setError, setLoading, setSuccess } from 'src/helpers/redux.helper'
import { RequestMethod } from 'src/helpers/request.helper'
import { MovieType } from 'src/types/movie.types'
import { Status } from 'src/types/status.types'
import API_ROUTER from '../router'

export type MovieState = {
  status: Status
  data: MovieType[] | null
}

const initialState: MovieState = {
  status: Status.LOADING,
  data: null,
}

export const GET_MOVIE = asyncThunk<unknown, MovieType[], null>({
  thunk: 'movieSlice/GET_MOVIE',
  route: API_ROUTER.getMovie,
  method: RequestMethod.GET,
})

export const CREATE_MOVIE = asyncThunk<unknown, MovieType[], null>({
  thunk: 'movieSlice/CREATE_MOVIE',
  route: API_ROUTER.createMovie,
  method: RequestMethod.POST,
})

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MovieState>) => {
    builder.addCase(GET_MOVIE.fulfilled, setSuccess)
    builder.addCase(CREATE_MOVIE.fulfilled, setSuccess)
    builder.addCase(GET_MOVIE.rejected, setError)
    builder.addCase(GET_MOVIE.pending, setLoading)
    builder.addCase(CREATE_MOVIE.rejected, setError)
  },
})
