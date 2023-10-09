import Header from '@/components/Header';
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Dropshipping',
  description: 'Descrição do site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className='scroll-smooth'>
      <body className={`${montserrat.variable} root font-montserrat`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
