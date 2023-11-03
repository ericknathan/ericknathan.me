import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Erick Nathan',
    short_name: 'Erick Nathan',
    description: 'Erick Nathan: Front-end developer passionate about creating incredible digital experiences. Explore my portfolio and discover how my programming skills can boost your project. Discover my work and get in touch for collaborations or professional opportunities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020817',
    theme_color: '#020817',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    lang: 'en',
    orientation: 'portrait'
  }
}