import type { Metadata } from 'next'
import { Noto_Sans_TC, Lato } from 'next/font/google'
import './globals.css'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Yu Hsuan's Portfolio",
  description: 'UI/UX Designer & Visual Designer — Yu Hsuan Liu',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={`${lato.variable} ${notoSansTC.variable}`}>{children}</body>
    </html>
  )
}
