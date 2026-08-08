import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export const SITE_URL = 'https://liderazgoyfe.org';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});

