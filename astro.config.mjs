import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // V4.4 — Custom domain mekluc.co.za (PRIMARY, via Afrihost)
  // meklucfreight.co.za (Xneelo) to be added as alias in V2
  site: 'https://mekluc.co.za',
  // No base path — serves from root of custom domain
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-ZA',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
});
