// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Nicolas49122.github.io',
  base: '/astro-landing',
  vite: {
    plugins: [tailwindcss()]
  },
  
});