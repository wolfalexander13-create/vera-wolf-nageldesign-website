import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain before launch — required for correct
// canonical URLs, sitemap.xml entries and Schema.org data.
export default defineConfig({
  site: 'https://www.vera-wolf-nageldesign.de',
  compressHTML: true,
  integrations: [
    sitemap({
      // Impressum/Datenschutz sind bewusst `noindex` (siehe LegalLayout.astro)
      // und werden daher aus der Sitemap ausgeschlossen.
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
