import type { Metadata } from 'next'
import { Noto_Sans_TC, Lato } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DXB4Y2ZZMJ" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DXB4Y2ZZMJ');
        `}</Script>
      </head>
      <body className={`${lato.variable} ${notoSansTC.variable}`}>{children}</body>
    </html>
  )
}
