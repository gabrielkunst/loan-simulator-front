import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Simulador de Empréstimos',
  description: 'Simulador de empréstimos para pessoa física.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pr-BR">
      <body className={openSans.className}>
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  )
}
