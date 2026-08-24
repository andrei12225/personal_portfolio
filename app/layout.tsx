import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Rajdhani, Roboto_Mono } from 'next/font/google'
import './globals.css'

const displayFont = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const terminalFont = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-terminal',
})

export const metadata: Metadata = {
  title: 'Badoi Andrei-Claudiu',
  description:
    'My portfolio - Computer Science student at the University of Bucharest',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111417',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${displayFont.variable} ${terminalFont.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
