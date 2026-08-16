# Bilder-Ordner — Anleitung für Alex/Vera

Diese Ordnerstruktur ist bewusst so angelegt, dass echte Fotos **ohne
Code-Änderung** eingebunden werden können: einfach die Datei mit exakt dem
unten genannten Dateinamen im passenden Unterordner ablegen. Die Website
zeigt automatisch das echte Foto anstelle des eleganten Platzhalters an,
sobald die Datei vorhanden ist.

Empfohlenes Format: `.jpg` (Fotos) bzw. `.webp`, min. 1600px an der
längeren Kante, komprimiert (z. B. mit Squoosh) für schnelle Ladezeiten.

## /portrait
- `portrait-vera-wolf.jpg` — Portrait von Vera im Studio (Hero + Über mich)

## /studio
- `studio-arbeitsplatz-01.jpg` — Studio-/Arbeitsplatz-Impression (Hero)

## /zertifikate
Ein Foto je Zertifikat, siehe `src/data/certificates.ts` für die exakten
Dateinamen, u. a.:
- `zertifikat-gel-basic.jpg`
- `zertifikat-fraeser-feil.jpg`
- `zertifikat-acrylgel.jpg`
- `zertifikat-no-file.jpg`
- `zertifikat-nailart-basic.jpg`
- `zertifikat-ballerina.jpg`
- `zertifikat-gel-fortgeschrittene.jpg`

## /portfolio
Nahaufnahmen der Nageldesign-Arbeiten, siehe `src/data/portfolio.ts` für
die vollständige Liste und Alt-Texte, u. a.:
- `portfolio-russische-mandel-01.jpg`
- `portfolio-russische-mandel-02.jpg`
- `portfolio-russische-manikuere-01.jpg`
- `portfolio-russische-manikuere-vorher-nachher.jpg`
- `portfolio-stiletto-01.jpg`
- `portfolio-stiletto-02.jpg`
- `portfolio-ballerina-01.jpg`
- `portfolio-ballerina-02.jpg`
- `portfolio-gel-x-01.jpg`
- `portfolio-gel-x-02.jpg`
- `portfolio-press-ons-01.jpg`
- `portfolio-press-ons-02.jpg`

Neue Portfolio-Bilder hinzufügen: Datei hier ablegen und einen passenden
Eintrag in `src/data/portfolio.ts` ergänzen (Bildpfad, Alt-Text, Technik).

## /og
- `og-cover.jpg` — Vorschaubild für Social-Media-Links (empfohlen: 1200×630px)
