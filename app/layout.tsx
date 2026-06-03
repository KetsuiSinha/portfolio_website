import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
// Force dark theme by default; remove runtime theme switching
import './globals.css'

export const metadata: Metadata = {
  title: 'Nishchay Sinha | Full-Stack Developer',
  description: 'Business-focused Full-Stack Developer with experience in React, Next.js, Node.js, and system design.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
