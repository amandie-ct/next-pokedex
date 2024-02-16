'use client'
import Theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../../../lib/store'
import PokemonDetails from '../../components/PokemonDetails'

export default function Pokemon({ params }: { params: { pokemonId: number } }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <main>
          <PokemonDetails id={params.pokemonId.toString()} />
        </main>
      </ThemeProvider>
    </Provider>
  )
}
