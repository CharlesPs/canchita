
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../test-utils';
import Header from './Header';

describe('Test Header component', () => {

  it('Renders successfully', async () => {

    const { findByText } = renderWithProviders(<Header />)

    const text = await findByText('Movie Search')

    expect(text).toBeInTheDocument()
  })
})