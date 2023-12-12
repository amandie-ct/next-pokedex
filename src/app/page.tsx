'use client'
import Theme from '@/styles/theme'
import Main from './components/Main'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../lib/store'

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Main />
      </ThemeProvider>
    </Provider>
  )
}
