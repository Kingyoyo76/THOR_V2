import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ModalProvider } from '@/components/providers/modal-provider'
import ErrorBoundary from '@/components/ErrorBoundary'
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
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <ModalProvider>
            {children}
            <Toaster />
          </ModalProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
