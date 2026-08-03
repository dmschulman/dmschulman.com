import { defineConfig } from 'astro/config';

// Astro modules
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

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
  integrations: [
    sitemap({
    }),
    icon({
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
    })
  ],
  redirects: {
    // GENERAL
    '/about/portfolio.html': '/work',
    // BLOG
    'a-man-a-plan-a-eurorack-modular/': '/words/2014/a-man-a-plan-a-eurorack-modular',
    '/six-link-saturday-second-helpings-edition/': '/words/2013/six-link-saturday-second-helpings-edition',
    '/solving-cloud-sync-issues-with-synology-cloudstation/': '/words/2014/solving-cloud-sync-issues-with-synology-cloudstation',
    '/2014/11/01/Fortune-TV-fortune-files-full-of-TV-quotes.html': '/words/2014/fortune-tv-fortune-files-full-of-tv-quotes',
    '/2008/11/16/MacDailyNews-more-like-MacDailySnooze.html': '/words/2008/macdailynews-more-like-macdailysnooze'
  }
});
