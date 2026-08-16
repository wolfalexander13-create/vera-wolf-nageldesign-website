// Portfolio-/Referenzengalerie. Bilder liegen unter /public/images/portfolio/.
// Sobald echte Fotos vorliegen: Datei mit exakt dem angegebenen Dateinamen
// dort ablegen — das Bild erscheint automatisch anstelle des Platzhalters.
// `technique` steuert die Filterfunktion der Galerie.

export type Technique =
  | 'russische-maniküre'
  | 'stiletto'
  | 'ballerina'
  | 'russische-mandel'
  | 'gel-x'
  | 'press-ons';

export const techniqueLabels: Record<Technique, string> = {
  'russische-maniküre': 'Russische Maniküre',
  stiletto: 'Stiletto',
  ballerina: 'Ballerina',
  'russische-mandel': 'Russische Mandel',
  'gel-x': 'Gel-X',
  'press-ons': 'Press-Ons',
};

export interface PortfolioItem {
  id: string;
  image: string;
  alt: string;
  technique: Technique;
  /** Optional: kennzeichnet ein Vorher-Nachher-Paar. */
  beforeAfter?: boolean;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'russische-mandel-01',
    image: '/images/portfolio/portfolio-russische-mandel-01.jpg',
    alt: 'Russische Mandel in dezentem Nude-Ton, präzise Nagelhautbearbeitung',
    technique: 'russische-mandel',
  },
  {
    id: 'russische-mandel-02',
    image: '/images/portfolio/portfolio-russische-mandel-02.jpg',
    alt: 'Russische Mandel mit French-Akzent',
    technique: 'russische-mandel',
  },
  {
    id: 'russische-maniküre-01',
    image: '/images/portfolio/portfolio-russische-manikuere-01.jpg',
    alt: 'Russische Maniküre mit klarem Gellack, Nahaufnahme Nagelhaut',
    technique: 'russische-maniküre',
  },
  {
    id: 'russische-maniküre-vorher-nachher',
    image: '/images/portfolio/portfolio-russische-manikuere-vorher-nachher.jpg',
    alt: 'Vorher-Nachher: Nagelhaut vor und nach der russischen Maniküre',
    technique: 'russische-maniküre',
    beforeAfter: true,
  },
  {
    id: 'stiletto-01',
    image: '/images/portfolio/portfolio-stiletto-01.jpg',
    alt: 'Lange Stiletto-Nägel in Bordeaux',
    technique: 'stiletto',
  },
  {
    id: 'stiletto-02',
    image: '/images/portfolio/portfolio-stiletto-02.jpg',
    alt: 'Stiletto-Nägel mit Chrome-Effekt',
    technique: 'stiletto',
  },
  {
    id: 'ballerina-01',
    image: '/images/portfolio/portfolio-ballerina-01.jpg',
    alt: 'Ballerina-Form (Coffin) in mattem Nude',
    technique: 'ballerina',
  },
  {
    id: 'ballerina-02',
    image: '/images/portfolio/portfolio-ballerina-02.jpg',
    alt: 'Ballerina-Form mit Babyboomer-Verlauf',
    technique: 'ballerina',
  },
  {
    id: 'gel-x-01',
    image: '/images/portfolio/portfolio-gel-x-01.jpg',
    alt: 'Gel-X Verlängerung in natürlichem Rosé',
    technique: 'gel-x',
  },
  {
    id: 'gel-x-02',
    image: '/images/portfolio/portfolio-gel-x-02.jpg',
    alt: 'Gel-X mit feiner Nailart, Einzelakzent',
    technique: 'gel-x',
  },
  {
    id: 'press-ons-01',
    image: '/images/portfolio/portfolio-press-ons-01.jpg',
    alt: 'Individuell angepasstes Press-On-Set in Nude-Tönen',
    technique: 'press-ons',
  },
  {
    id: 'press-ons-02',
    image: '/images/portfolio/portfolio-press-ons-02.jpg',
    alt: 'Press-On-Set mit dezenter Nailart und Steinchen',
    technique: 'press-ons',
  },
];
