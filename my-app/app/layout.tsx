import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'My App',
    description: 'A Next.js application',
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <h1> main layout</h1>
                {children}
            </body>
        </html>
    )
}