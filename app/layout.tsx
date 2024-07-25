import { Footer, Navbar } from '@/Components'
import './globals.css'

export const metadata = {
  title: 'Car showcase',
  description: 'Discover your favourite car, book and enjoy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
