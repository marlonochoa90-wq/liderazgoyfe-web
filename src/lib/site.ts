export const SITE = {
  nombre: 'Liderazgo y Fe',
  lema: 'Liderando con propósito. Viviendo por fe.',
  descripcion:
    'Liderazgo y Fe es la plataforma cristiana en español sobre liderazgo, crecimiento espiritual y desarrollo personal basado en principios bíblicos: devocionales diarios, estudios, reels y recursos descargables.',
  url: 'https://liderazgoyfe.netlify.app',
  idioma: 'es',
  localeOG: 'es_ES',
  twitterHandle: '@liderazgoyfe',
};

export const REDES = {
 whatsapp: 'https://chat.whatsapp.com/DP4XOVCgHnd0GsjxGy66KX',
  facebook: 'https://www.facebook.com/share/1Bn5LfLKW7/',
  
};

export const ANALYTICS = {
  // Reemplaza con tus IDs reales antes de desplegar a producción
  googleAnalyticsId: 'G-XXXXXXXXXX',
  microsoftClarityId: 'xxxxxxxxxx',
};

export const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/devocionales', label: 'Devocionales' },
  { href: '/biblioteca', label: 'Biblioteca' },
  { href: REDES.facebook, label: 'Reels', external: true },
  { href: '/estudios', label: 'Estudios' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/acerca', label: 'Acerca' },
  { href: '/contacto', label: 'Contacto' },
];

export const CATEGORIA_COLOR: Record<string, string> = {
  Fe: 'bg-deep-100 text-deep-800',
  Liderazgo: 'bg-gold-100 text-gold-800',
  Sabiduría: 'bg-deep-100 text-deep-800',
  Oración: 'bg-gold-100 text-gold-800',
  Familia: 'bg-deep-100 text-deep-800',
  Jóvenes: 'bg-gold-100 text-gold-800',
  Propósito: 'bg-deep-100 text-deep-800',
};

export const CATEGORIA_IMG: Record<string, string> = {
  Fe: '/images/categorias/fe.jpg',
  Liderazgo: '/images/categorias/liderazgo.jpg',
  Sabiduría: '/images/categorias/sabiduria.jpg',
  Oración: '/images/categorias/oracion.jpg',
  Familia: '/images/categorias/familia.jpg',
  Jóvenes: '/images/categorias/jovenes.jpg',
  Propósito: '/images/categorias/proposito.jpg',
};
