import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CategoryContainer from '.'

it('should render the heading', () => {
  render(<CategoryContainer />)
  expect(
    screen.getByRole('heading', { name: /filter by/i })
  ).toBeInTheDocument()
})
