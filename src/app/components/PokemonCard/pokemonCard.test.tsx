import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from '@/styles/theme'
import PokemonCard from '.'

describe('Pokemon Card', () => {
  test('renders correctly', () => {
    render(
      <ThemeProvider theme={Theme}>
        <PokemonCard pokemonName="Pikachu" id="2" />
      </ThemeProvider>
    )
    const cardElement = screen.getByText('Pikachu')
    expect(cardElement).toBeInTheDocument()
  })
})
