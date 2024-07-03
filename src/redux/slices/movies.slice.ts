import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { get } from '../../apiService'

import { Movie } from '../../types/movie'

interface State {
  page: number
  movies: Movie[]
  totalPages: number
  totalMovies: number
  loading: boolean
  error: string | null
}

interface Payload {
  page: number
  results: Movie[]
  total_pages: number
  total_result: number
}

export const initialState: State = {
  page: 1,
  movies: [],
  totalPages: 0,
  totalMovies: 0,
  loading: false,
  error: null,
}

export const discoverMovies = createAsyncThunk<
  Payload,
  void,
  { rejectValue: string }
>('movies/fetchMovies', async (_, thunkAPI) => {
  const response = await get(
    '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
  )

  if ('error' in response) {
    return thunkAPI.rejectWithValue('Failed to fetch movies.')
  } else {
    return response.data
  }
})

export const searchMovies = createAsyncThunk<
  Payload,
  string,
  { rejectValue: string }
>('movies/searchMovies', async (criteria, thunkAPI) => {
  const query = encodeURIComponent(criteria)

  const response = await get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  )

  if ('error' in response) {
    return thunkAPI.rejectWithValue('Failed to fetch movies.')
  } else {
    return response.data
  }
})

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(discoverMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        discoverMovies.fulfilled,
        (state, action: PayloadAction<Payload>) => {
          state.loading = false
          state.movies = action.payload.results
          state.page = action.payload.page
          state.totalPages = action.payload.total_pages
          state.totalMovies = action.payload.total_result
        }
      )
      .addCase(discoverMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to fetch movies.'
      })
      .addCase(searchMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        searchMovies.fulfilled,
        (state, action: PayloadAction<Payload>) => {
          state.loading = false
          state.movies = action.payload.results
          state.page = action.payload.page
          state.totalPages = action.payload.total_pages
          state.totalMovies = action.payload.total_result
        }
      )
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to search movies.'
      })
  },
})

export default moviesSlice.reducer
export const {} = moviesSlice.actions
