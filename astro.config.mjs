import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lriaomol.github.io',
  vite: {
    plugins: [tailwind()],
  },
});
