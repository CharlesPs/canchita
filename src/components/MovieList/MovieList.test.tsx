import { expect } from "vitest"
import { renderWithProviders } from "../../test-utils"
import MovieList from "./MovieList"

describe('MovieList', () => {

  it('should show a loading animation', async () => {

    const { getByTestId } = renderWithProviders(<MovieList movies={[]} loading={true} error={''} />)

    expect(getByTestId('LoadingProgress')).toBeInTheDocument()
  })

  it('should show an error', async () => {

    const { getByText } = renderWithProviders(<MovieList movies={[]} loading={false} error={'This is an error'} />)

    expect(getByText('This is an error')).toBeInTheDocument()
  })

  it('should render movies', async () => {

    const movies: any = [{
      id: 1,
      poster_path: '',
      title: 'Inception',
      release_date: '2020-01-01'
    }]

    const { getByText } = renderWithProviders(<MovieList movies={movies} loading={false} error={''} />)

    expect(getByText('Inception')).toBeInTheDocument()
  })
})
