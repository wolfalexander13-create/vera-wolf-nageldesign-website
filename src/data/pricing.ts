// Preisliste — Richtpreise, Stand: noch nicht final mit Vera abgeglichen.
// Struktur je Position: Name, Kurzbeschreibung, Dauer, Preis.
// Bei Änderungen: einfach die Werte hier anpassen, die Tabelle aktualisiert
// sich automatisch auf der Website.

export interface PriceItem {
  name: string;
  description?: string;
  duration?: string;
  price: string;
}

export interface PriceCategory {
  slug: string;
  title: string;
  items: PriceItem[];
}

export const pricingCategories: PriceCategory[] = [
  {
    slug: 'manikuere',
    title: 'Maniküre & Nagelpflege',
    items: [
      {
        name: 'Russische Maniküre (ohne Farbe)',
        description: 'Apparative Trockenmaniküre mit Fräser, ohne Lack.',
        duration: '45 Min',
        price: '35 €',
      },
      {
        name: 'Russische Maniküre mit Gellack',
        description: 'Apparative Maniküre inklusive Gellack-Auftrag.',
        duration: '60 Min',
        price: '48 €',
      },
      {
        name: 'Naturnagelverstärkung / -stärkung',
        description: 'Aufbauende Pflege ohne Verlängerung.',
        duration: '60 Min',
        price: '45 €',
      },
      {
        name: 'Spa-Maniküre',
        description: 'Klassische, pflegende Maniküre ohne Fräser.',
        duration: '45 Min',
        price: '28 €',
      },
    ],
  },
  {
    slug: 'modellage',
    title: 'Modellage & Verlängerung',
    items: [
      {
        name: 'Neumodellage Gel — Square / klassische Form',
        duration: '90–120 Min',
        price: '65 €',
      },
      {
        name: 'Neumodellage Gel — Russische Mandel, Stiletto oder Ballerina',
        duration: '100–130 Min',
        price: '72 €',
      },
      {
        name: 'Refill / Auffüllung Gel-Modellage',
        description: 'Empfohlen alle 2–3 Wochen.',
        duration: '75–90 Min',
        price: '52 €',
      },
      {
        name: 'Gel-X Neuset',
        duration: '90 Min',
        price: '68 €',
      },
      {
        name: 'Gel-X Refill',
        duration: '60–75 Min',
        price: '50 €',
      },
      {
        name: 'No-File-Technik',
        description: 'Aufpreis auf eine Modellage Ihrer Wahl.',
        price: '+8 €',
      },
      {
        name: 'Entfernen von Fremdmodellage',
        duration: '20–30 Min',
        price: '15 €',
      },
    ],
  },
  {
    slug: 'press-ons',
    title: 'Press-Ons',
    items: [
      {
        name: 'Press-On-Set, individuell angepasst & handgefertigt',
        description: 'Wiederverwendbar.',
        price: '55 €',
      },
      {
        name: 'Anpassung / Kleben eines mitgebrachten Sets',
        duration: '20 Min',
        price: '20 €',
      },
    ],
  },
  {
    slug: 'nailart',
    title: 'Nail Art & Extras',
    items: [
      {
        name: 'French / Ombré / Babyboomer',
        price: '+8–12 €',
      },
      {
        name: 'Nailart je Nagel (einfach)',
        price: '+3 €',
      },
      {
        name: 'Nailart je Nagel (aufwändig — Chrome / 3D / Encapsulated)',
        price: '+6–10 €',
      },
      {
        name: 'Steinchen / Charms je Stück',
        price: '+1–2 €',
      },
    ],
  },
];
