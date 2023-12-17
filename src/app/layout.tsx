import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import StyledJsxRegistry from '@/lib/registry'
import { Providers } from './providers'

const quicksand = Quicksand({ subsets: ['latin'] })

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
          <Providers>{children}</Providers>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
