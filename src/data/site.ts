// Zentrale Geschäftsdaten. Alle mit [PLATZHALTER] markierten Felder müssen
// vor dem Launch durch echte Angaben von Alex/Vera ersetzt werden — sie
// werden an mehreren Stellen verwendet (Kontakt, Footer, Schema.org).

export const site = {
  name: 'Vera Wolf Nageldesign',
  tagline: 'Ein stiller Ort für gepflegte Hände',
  positioning:
    'Präzise Modellage, apparative Maniküre und kompromisslose Naturnagelgesundheit — im Premium-Segment für March, Freiburg und das Umland.',
  url: 'https://www.vera-wolf-nageldesign.de',

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
