// @ts-check
import { defineConfig } from 'astro/config';

// Astro modules
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://dmschulman.com',
  base: '/',
  cacheDir: './node_modules/.astro',
  trailingSlash: "never",
  build: {
    inlineStylesheets: `never`,
  },
  image: {
    domains: ["astro.build"],
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      }
    }
  },
  integrations: [icon({
    iconDir: "src/assets/icons",
    svgoOptions: {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // customize default plugin options
              inlineStyles: {
                onlyMatchedOnce: false,
              },

              // or disable plugins
              removeDoctype: false,
            },
          },
        },
      ],
    },
  })]
});
