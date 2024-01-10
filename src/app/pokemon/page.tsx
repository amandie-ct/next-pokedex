'use client'
import Theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import PokemonDetails from '../components/PokemonDetails'

export default function Pokemon() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <main>
          <PokemonDetails id={'3'} />
        </main>
      </ThemeProvider>
    </Provider>
  )
}
