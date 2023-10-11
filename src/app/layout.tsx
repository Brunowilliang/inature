import Header from '@/components/Header';
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer';
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'iNature - A Solução Completa para o Diabetes',
  description: 'Descubra o Glicovit no iNature, a solução completa para o diabetes. Diminua os picos de insulina, acabe com os enjoôs, melhore sua visão e muito mais. Experimente por 3 meses com nossa garantia de 90 dias!',
  keywords: 'iNature, Glicovit, diabetes care, dropshipping, saúde, wellness, online shopping',
  authors: [{ name: 'iNature', url: 'https://www.inature.com.br' }],  // Substitua com o URL real do seu site
  generator: 'iNature Generator',
  applicationName: 'iNature',
  creator: 'Bruno Garcia',
  publisher: 'Bruno Garcia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className='scroll-smooth'>
      <body className={`${montserrat.variable} root font-montserrat`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
