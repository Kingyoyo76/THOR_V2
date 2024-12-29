'use client'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ModalProvider } from './modal-provider'
import { Toaster } from 'sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <main className="relative flex min-h-screen flex-col">
        <ModalProvider>
          {children}
          <Toaster position="top-right" />
        </ModalProvider>
      </main>
    </ErrorBoundary>
  )
}
