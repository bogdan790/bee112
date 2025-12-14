// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static site generation (for Cloudflare Pages)
  output: 'static',

  // Build optimizations
  build: {
    // Inline small CSS files for performance (critical CSS strategy)
    inlineStylesheets: 'auto',
  },

  // Compress HTML (removes whitespace, comments)
  compressHTML: true,

  // Vite configuration (Astro uses Vite under the hood)
  vite: {
    build: {
      // Single CSS file (faster for small sites, reduces HTTP requests)
      cssCodeSplit: false,

      // Minification (esbuild is fastest)
      minify: 'esbuild',

      // Target modern browsers only (smaller bundle, better performance)
      target: 'es2018',
    },
  },
});
