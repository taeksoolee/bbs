import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bulletin Board System',
  description: 'written in nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-full h-14 p-2 bg-primary-400'>
          <Image
            src="logo.svg"
            alt="BBS Logo"
            width={180}
            height={40}
            priority
          />
        </div>
        {children}
      </body>
    </html>
  )
}
