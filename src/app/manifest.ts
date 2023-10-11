import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iNature',
    short_name: 'iNature',
    lang: 'pt-BR',
    description: 'Descubra o iNature, sua solução completa para o diabetes. Com Glicovit, diminua os picos de insulina, controle o fluxo urinário e melhore sua visão. Experimente por 3 meses com nossa garantia de 90 dias!',
    categories: ['iNature', 'Glicovit', 'health', 'diabetes', 'saúde', 'cuidados', 'moléculas DB7', 'remédio', 'medicamento', 'glicose', 'glicemia', 'insulina', 'diabético', 'diabética', 'diabetes tipo 1', 'diabetes tipo 2'],
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}