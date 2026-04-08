import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sepps JK — Jalgpalliklubi',
  description: 'Saaremaa jalgpalliklubi noortele',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="et">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}