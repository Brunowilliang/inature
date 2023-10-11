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
  title: 'iNature | A Solução Completa para o Diabetes',
  description: 'Descubra o Glicovit no iNature, a solução completa para o diabetes. Diminua os picos de insulina, acabe com os enjoôs, melhore sua visão e muito mais. Experimente por 3 meses com nossa garantia de 90 dias!',
  keywords: ['iNature, Glicovit, health, diabetes, saúde, cuidados, moléculas DB7, remédio, medicamento, glicose, glicemia, insulina, diabético, diabética, diabetes tipo 1, diabetes tipo 2'],
  authors: [{ name: 'iNature', url: 'https://www.inature.com.br' }],
  category: 'Health, Diabetes, Medicamento, Saúde, Glicose, Glicemia, Insulina, Diabético, Diabética, Diabetes Tipo 1, Diabetes Tipo 2',
  viewport: 'width=device-width, initial-scale=1.0',
  generator: 'iNature Generator',
  applicationName: 'iNature',
  creator: 'Bruno Garcia',
  publisher: 'Bruno Garcia',
  openGraph: {
    type: 'website',
    url: 'https://www.inature.com.br',
    siteName: 'iNature',
    title: 'iNature | A Solução Completa para o Diabetes',
    description: 'Descubra o Glicovit no iNature, a solução completa para o diabetes. Diminua os picos de insulina, acabe com os enjoôs, melhore sua visão e muito mais. Experimente por 3 meses com nossa garantia de 90 dias!',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iNature | A Solução Completa para o Diabetes',
    description: 'Descubra o Glicovit no iNature, a solução completa para o diabetes. Diminua os picos de insulina, acabe com os enjoôs, melhore sua visão e muito mais. Experimente por 3 meses com nossa garantia de 90 dias!',
    site: '@brunowillian',
    creator: '@brunowillian',
  },
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
