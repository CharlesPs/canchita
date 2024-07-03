
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Error from './Error';

describe('Test Error Component', () => {

  it('Renders "Unknown error"', () => {

    const { findByText } = render(<Error message="Unknown error" />)

    const message = findByText('Unknown error')

    expect(message).toBe(message)
  })
})