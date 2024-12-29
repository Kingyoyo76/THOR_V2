import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { siteMetadata } from './metadata'
import { organizationSchema, faqSchema } from './schema'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thorservices.vercel.app'),
  ...siteMetadata
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <Providers>
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
