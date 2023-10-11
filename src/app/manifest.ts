import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iNature',
    short_name: 'iNature',
    description: 'Descubra o iNature, sua solução completa para o diabetes. Com Glicovit, diminua os picos de insulina, controle o fluxo urinário e melhore sua visão. Experimente por 3 meses com nossa garantia de 90 dias!',
    categories: ['health', 'diabetes care', 'wellness', 'dropshipping', 'online shopping'],
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
  }
}