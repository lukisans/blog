// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from "@astrojs/sitemap";
import { SITE_CONFIG } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: SITE_CONFIG.website,
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: cloudflare(),
  experimental: {
    responsiveImages: true,
    preserveScriptOrder: true,
  },
  integrations: [sitemap()],
});