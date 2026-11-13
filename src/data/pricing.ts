// Preisliste WolfClawz Nail Design by Vera, gültig ab 01.02.2027
// (Quelle: Preisliste_WolfClawz_Nail_Design_2.pdf).
// Bei Änderungen nur die Werte hier anpassen, die Tabelle auf der Website
// aktualisiert sich automatisch.

export const pricingValidFrom = '01.02.2027';

export const pricingIntro =
  'Alle Modellagen beinhalten ein ausführliches Beratungsgespräch, professionelle Maniküre, sorgfältige Naturnagelvorbereitung, Modellage mit hochwertigen Premium-Materialien, Natur-Finish sowie abschließende Pflege.';

export interface PriceItem {
  name: string;
  description?: string;
  note?: string;
  duration?: string;
  price: string;
}

export interface PriceCategory {
  slug: string;
  /** Kurzer Name für den Umschalter. */
  tab: string;
  title: string;
  items: PriceItem[];
}

export const pricingCategories: PriceCategory[] = [
  {
    slug: 'modellagen',
    tab: 'Modellagen',
    title: 'Modellagen (Gel / Acrylgel)',
    items: [
      {
        name: 'Naturnagelverstärkung',
        description: 'Stärkung und Schutz der natürlichen Nägel ohne Verlängerung.',
        duration: 'ca. 90 Min.',
        price: '50,00 €',
      },
      {
        name: 'Neumodellage (Basispreis, Länge S)',
        description:
          'Verlängerung bis zu 5 mm über Fingerkuppe mit Tip-, Schablonen- oder Dualformtechnik.',
        duration: 'ca. 120 Min.',
        price: '65,00 €',
      },
    ],
  },
  {
    slug: 'laenge-refill',
    tab: 'Länge und Refill',
    title: 'Längenzuschläge & Refill',
    items: [
      { name: 'Länge M', description: '5–10 mm über Fingerkuppe.', price: '+ 10,00 €' },
      { name: 'Länge L', description: '10–15 mm über Fingerkuppe.', price: '+ 20,00 €' },
      { name: 'Überlänge', description: 'Ab 15 mm über Fingerkuppe.', price: '+ 30,00 €' },
      {
        name: 'Refill (innerhalb 3–4 Wochen)',
        description: 'Abzug auf den jeweiligen Modellagepreis der entsprechenden Länge.',
        note: 'Ab der 5. Woche wird aufgrund des Mehraufwands der reguläre Neumodellage-Preis berechnet.',
        price: '− 5,00 €',
      },
    ],
  },
  {
    slug: 'design',
    tab: 'Nailart',
    title: 'Design-Kategorien (Nailart-Aufschläge)',
    items: [
      {
        name: 'Level 1: Classic',
        description:
          'French-Design, Fullcover-Farbe, Cat-Eye-Effekt auf allen Nägeln oder dezente Akzente auf 1–2 Nägeln.',
        duration: 'ca. + 15–20 Min.',
        price: '+ 10,00 €',
      },
      {
        name: 'Level 2: Creative',
        description:
          'Chrome-Finish, Babyboomer / Ombré, Aura Nails, Marble, Glitzerverlauf oder Steinchen/Charms.',
        duration: 'ca. + 30–40 Min.',
        price: '+ 20,00 €',
      },
      {
        name: 'Level 3: Complex',
        description: 'Handmalerei, 3D-Gel-Art, Mix & Match auf allen Nägeln, vollständiges Full-Set-Art-Design.',
        duration: 'ca. + 45–60 Min.',
        price: 'ab 30,00 €',
      },
    ],
  },
  {
    slug: 'specials',
    tab: 'Specials',
    title: 'Specials & Zusatzleistungen',
    items: [
      {
        name: 'Hochzeitsnägel',
        description:
          'Ausführliche Vorbesprechung, individuell abgestimmte Modellage und Design passend zu deinem Kleid, Brautstrauß und deinen Vorstellungen.',
        price: 'ab 85,00 €',
      },
      {
        name: 'Sonderformen',
        description:
          'Extremformen wie Stiletto, Edge oder russische Mandel nach vorheriger Absprache und Zeitaufwand.',
        price: 'auf Anfrage',
      },
      {
        name: 'Entfernung Fremdarbeit',
        description: 'Schonendes, professionelles Abtragen von Fremdmaterialien (Acryl, Gel), inklusive Pflege.',
        duration: 'pro 15 Min.',
        price: '15,00 €',
      },
    ],
  },
];
