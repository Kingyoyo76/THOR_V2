import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thor Services - Transform IT Complexity into Results-Driven Simplicity',
  description: 'Thor Services helps organizations take control of IT chaos, simplify operations, enhance security, and drive success through innovative IT solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <Providers>
          <main className="relative flex min-h-screen flex-col">
            {children}
            <Toaster />
          </main>
        </Providers>
      </body>
    </html>
  )
}
