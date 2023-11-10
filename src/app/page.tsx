'use client'
import Theme from '@/styles/theme'
import Main from './components/Main'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Main />
    </ThemeProvider>
  )
}
