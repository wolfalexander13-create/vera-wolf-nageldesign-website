import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Produktions-Default: die finale Custom-Domain, sobald sie feststeht.
// Der GitHub-Pages-Vorschau-Workflow (.github/workflows/deploy-pages.yml)
// überschreibt SITE_URL/SITE_BASE, damit interne Links unter dem
// Repo-Unterpfad (https://<user>.github.io/<repo>/) korrekt auflösen.
const site = process.env.SITE_URL ?? 'https://www.vera-wolf-nageldesign.de';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
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
