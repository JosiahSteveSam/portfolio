// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Keep CSS comments so the Hallmark stamp stays on line 1 of the built stylesheet (sloplint reads it).
  vite: { build: { cssMinify: false } },
});
