// Zentrale Geschäftsdaten. Alle mit [PLATZHALTER] markierten Felder müssen
// vor dem Launch durch echte Angaben von Alex/Vera ersetzt werden — sie
// werden an mehreren Stellen verwendet (Kontakt, Footer, Schema.org).

export const site = {
  name: 'Wolf Clawz',
  addition: 'Nail Design by Vera',
  fullName: 'Wolf Clawz Nail Design by Vera',
  owner: 'Vera Wolf',
  tagline: 'Rosa & Gold, Eleganz mit Naturtönen',
  positioning:
    'Gel-X, Modellage und Maniküre mit MMA-freien Produkten, mit Blick auf die Gesundheit des Naturnagels. In March bei Freiburg.',

  // Logo-Dateien aus dem Design System „Wolf Clawz“. Sobald die PNGs unter
  // public/images/logo/ liegen, erscheinen sie automatisch statt des
  // Text-Platzhalters (siehe src/components/clawz/Logo.astro).
  logo: '/images/logo/wolf-clawz-logo-freigestellt.png',
  logoLight: '/images/logo/wolf-clawz-logo-hell.png',
  url: 'https://www.vera-wolf-nageldesign.de', // [PLATZHALTER] finale Domain

  address: {
    street: 'Landstraße 39',
    zip: '79232',
    city: 'March-Hugstetten',
    region: 'Baden-Württemberg',
    country: 'DE',
    mapsEmbedSrc:
      'https://www.google.com/maps?q=Landstra%C3%9Fe+39,+79232+March-Hugstetten&output=embed',
    mapsLinkHref:
      'https://www.google.com/maps/search/?api=1&query=Landstra%C3%9Fe+39%2C+79232+March-Hugstetten',
  },

  // [PLATZHALTER] — echte Kontaktdaten von Alex/Vera einholen.
  phone: '[PLATZHALTER: Telefonnummer]',
  phoneHref: 'tel:', // TODO: z. B. "tel:+497665000000" sobald bekannt
  email: '[PLATZHALTER: E-Mail-Adresse]',
  emailHref: 'mailto:', // TODO: z. B. "mailto:info@vera-wolf-nageldesign.de"
  whatsappHref: 'https://wa.me/', // TODO: Ländervorwahl + Nummer ohne Leerzeichen ergänzen, z. B. https://wa.me/4976650000

  instagramHref: '[PLATZHALTER: Instagram-Profil-URL]',

  openingHours: [
    { day: 'Montag', hours: '[PLATZHALTER]' },
    { day: 'Dienstag', hours: '[PLATZHALTER]' },
    { day: 'Mittwoch', hours: '[PLATZHALTER]' },
    { day: 'Donnerstag', hours: '[PLATZHALTER]' },
    { day: 'Freitag', hours: '[PLATZHALTER]' },
    { day: 'Samstag', hours: '[PLATZHALTER]' },
    { day: 'Sonntag', hours: 'geschlossen' },
  ],

  serviceArea: [
    'March',
    'Umkirch',
    'Hugstetten',
    'Bötzingen',
    'Gundelfingen',
    'Freiburg im Breisgau',
  ],
};
