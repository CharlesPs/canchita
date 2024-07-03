import { fireEvent, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import { renderWithProviders } from "../../test-utils";
import SearchInput from "./SearchInput";

describe('SearchInput', () => {

  it('gets an error on search', async () => {

    const { getByPlaceholderText, store } = renderWithProviders(<SearchInput />)

    const input = await getByPlaceholderText('Search movies…')

    fireEvent.change(input, { target: { value: 'criteria' } });

    await waitFor(() => {

      const state = store.getState();

      expect(state.movies.error).not.toBe('');
    })
  })

  it('Searches a movie', async () => {

    const { getByPlaceholderText, store } = renderWithProviders(<SearchInput />)

    const input = await getByPlaceholderText('Search movies…')

    fireEvent.change(input, { target: { value: 'Inception' } })

    await waitFor(() => {

      const state = store.getState()

      const found = state.movies.movies.find((movie: any) => movie.title === 'Inception')

      expect(found.id).toEqual(27205)
    })
  })
})
