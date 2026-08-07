import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// Cambia esto por tu dominio real antes de desplegar
export const SITE_URL = 'https://liderazgoyfe.org';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    
    mdx(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  image: {
    // Usa Sharp para optimización automática de imágenes en build
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});

