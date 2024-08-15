import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/ui/theme-provider'
const inter = Inter({ subsets: ['latin'] })
// import { listAllBuckets, addObjectS3 } from '@/s3'
export const metadata: Metadata = {
  title: 'Recipe Generator',
  description: 'Recipe Generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: '#ea580b' },
        }}
      >
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
