import type { APIRoute } from 'astro';
import { withBase } from '../utils/url';

// Dynamisch statt als statische Datei unter /public erzeugt, damit die
// Sitemap-URL automatisch zum jeweiligen Build passt (Custom-Domain-
// Produktion vs. GitHub-Pages-Vorschau mit Unterpfad).
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), site).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
