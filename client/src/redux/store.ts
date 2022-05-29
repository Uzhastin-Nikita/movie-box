import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { movieSlice } from './reducers/movieReducer'

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
