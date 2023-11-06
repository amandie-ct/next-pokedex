import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledJsxRegistry from '@/lib/registry'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxRegistry>
          <Providers>{children}</Providers>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
