
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Loading from './Loading';

describe('Test Error Component', () => {

  it('Renders "Unknown error"', async () => {

    const { findByTestId } = render(<Loading />)

    const progress = await findByTestId('LoadingProgress')

    expect(progress).toBeInTheDocument()
  })
})