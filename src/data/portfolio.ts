// Arbeiten von Vera. Bilder liegen unter /public/images/portfolio/
// (auf 2000px verkleinert, Metadaten entfernt). Neue Fotos: Datei dort
// ablegen und hier einen Eintrag ergänzen. `caption` steht unter dem Bild,
// `alt` beschreibt es für Screenreader. `hero: true` markiert das Foto im
// Einstieg der Seite; `featured: false` blendet ein Foto in der Galerie aus.

export type Technique =
  | 'russische-maniküre'
  | 'stiletto'
  | 'ballerina'
  | 'russische-mandel'
  | 'gel-x'
  | 'press-ons'
  | 'naturnagel'
  | 'nailart';

export const techniqueLabels: Record<Technique, string> = {
  'russische-maniküre': 'Russische Maniküre',
  stiletto: 'Stiletto',
  ballerina: 'Ballerina',
  'russische-mandel': 'Russische Mandel',
  'gel-x': 'Gel-X',
  'press-ons': 'Press-Ons',
  naturnagel: 'Naturnagel',
  nailart: 'Nailart',
};

export interface PortfolioItem {
  id: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  technique: Technique;
  hero?: boolean;
  featured?: boolean;
  /** Bildausschnitt für object-position, z. B. '50% 60%'. */
  focus?: string;
  /** Optional: kennzeichnet ein Vorher-Nachher-Paar. */
  beforeAfter?: boolean;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'babyboomer-kurz',
    image: '/images/portfolio/babyboomer-kurz-marmor.jpg',
    width: 2000,
    height: 1468,
    alt: 'Zwei Hände auf weißem Marmor, kurze Nägel im Babyboomer-Verlauf von Rosé zu Weiß',
    caption: 'Babyboomer, kurz',
    technique: 'naturnagel',
    hero: true,
    focus: '60% 45%',
  },
  {
    id: 'mandel-pink-leopard',
    image: '/images/portfolio/mandel-pink-leopard.jpg',
    width: 2000,
    height: 1301,
    alt: 'Mandelförmige Nägel in Pink mit Leopardenmuster und schwarzer French-Spitze',
    caption: 'Mandel, Leopard in Pink',
    technique: 'nailart',
    focus: '50% 55%',
  },
  {
    id: 'press-ons-chrom',
    image: '/images/portfolio/press-ons-schwarz-bordeaux-chrom.jpg',
    width: 2000,
    height: 1412,
    alt: 'Fünf handgefertigte Press-Ons in Schwarz und Bordeaux mit Chrom-Ornamenten, Rosen und Perlen',
    caption: 'Press-On-Set, Chrom und Rosen',
    technique: 'press-ons',
    // Press-Ons sind nicht mehr im Angebot, daher ausgeblendet.
    featured: false,
    focus: '50% 50%',
  },
  {
    id: 'mandel-orange-blueten',
    image: '/images/portfolio/mandel-orange-bluemchen.jpg',
    width: 2000,
    height: 1514,
    alt: 'Mandelförmige Nägel in Orange mit handgemalten pinken Blüten und Steinchen',
    caption: 'Mandel, handgemalte Blüten',
    technique: 'nailart',
    focus: '55% 60%',
  },
  {
    id: 'naturnagel-nude',
    image: '/images/portfolio/naturnagel-nude-kurz.jpg',
    width: 1869,
    height: 1701,
    alt: 'Kurze, glänzende Nägel in Nude auf Marmor',
    caption: 'Naturnagel in Nude',
    technique: 'naturnagel',
    focus: '50% 50%',
  },
  {
    id: 'square-babyblau',
    image: '/images/portfolio/square-babyblau-french.jpg',
    width: 2000,
    height: 1545,
    alt: 'Square-Nägel in Babyblau, einige mit blauer French-Spitze',
    caption: 'Square, Babyblau',
    technique: 'nailart',
    focus: '55% 55%',
  },
  {
    id: 'bordeaux-cateye',
    image: '/images/portfolio/kurz-bordeaux-cateye.jpg',
    width: 2000,
    height: 1699,
    alt: 'Kurze ovale Nägel in Bordeaux mit Cat-Eye-Schimmer',
    caption: 'Bordeaux mit Cat-Eye',
    technique: 'russische-maniküre',
    focus: '55% 50%',
  },
  {
    id: 'halloween-orange',
    image: '/images/portfolio/mandel-halloween-orange.jpg',
    width: 2000,
    height: 1702,
    alt: 'Mandelförmige Nägel in Orange mit Halloween-Motiven: Geist, Spinnennetz und Spinne',
    caption: 'Halloween-Nailart',
    technique: 'nailart',
    focus: '45% 55%',
  },
];
