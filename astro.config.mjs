import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // V4.5 — Custom domain meklucfreight.co.za (PRIMARY, Elitehost reg + Cloudflare DNS)
  // mekluc.co.za (Afrihost) to be added as alias once Microsoft 365 DNS is migrated
  site: 'https://meklucfreight.co.za',
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
