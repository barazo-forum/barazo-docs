import { RootProvider } from 'fumadocs-ui/provider/next'
import { Source_Sans_3, Source_Code_Pro } from 'next/font/google'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Barazo Docs',
    template: '%s | Barazo Docs',
  },
  description: 'Documentation for the Barazo forum platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceCodePro.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            enableSystem: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
