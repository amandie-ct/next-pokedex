import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import StyledJsxRegistry from '@/lib/registry'
import { Providers } from './providers'
import BackgroundImg from './components/BackgroundImg'
import Logo from './components/Logo'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Pokemon listing app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className={quicksand.className}>
        <StyledJsxRegistry>
          <Providers>
            <>
              <BackgroundImg />
              <Logo />
            </>
            {children}
          </Providers>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
