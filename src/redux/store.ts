import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import moviesReducer from './slices/movies.slice'

const reducer: any = combineReducers({
  movies: moviesReducer,
})

export const setupStore = (preloadedState: Partial<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof reducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
