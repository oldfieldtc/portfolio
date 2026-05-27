import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: "https://tommyoldfield.co.uk",
  output: "static",
  integrations: [mdx()],

  redirects: {
    '/portfolio/pinocchio': {
      status: 301,
      destination: '/work/cs50/'
    },
    '/portfolio/flack': {
      status: 301,
      destination: '/work/cs50/'
    },
    '/portfolio/biblio': {
      status: 301,
      destination: '/work/cs50/'
    },
    '/portfolio/dotahead': {
      status: 301,
      destination: '/work/cs50/'
    }
  },

  adapter: node({
    mode: 'standalone'
  })
});