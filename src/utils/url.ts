// Verbindet einen Pfad mit dem konfigurierten `base`-Präfix (astro.config.mjs).
// Nötig für alle fest verdrahteten internen Links/Asset-Pfade, damit die
// Seite sowohl unter der Root-Domain als auch unter einem Unterpfad
// (z. B. GitHub-Pages-Vorschau unter /vera-wolf-nageldesign-website/)
// korrekt funktioniert.
export function withBase(path: string): string {
  // BASE_URL kommt je nach `base`-Konfiguration mit oder ohne
  // abschließenden Slash zurück — hier vereinheitlicht, damit kein Segment
  // beim Zusammenfügen verschluckt wird (z. B. ".../reponameimages/...").
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
