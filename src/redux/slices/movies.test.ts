import { expect } from 'vitest'

import moviesReducer, { initialState } from './movies.slice'

describe('movies.slice', () => {
  it('should return the initial state', () => {
    const state = moviesReducer(undefined, { type: 'unknown' })

    expect(state).toEqual(initialState)
  })
})
