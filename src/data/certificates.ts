// Zertifikats-Kachel-Galerie — mehrfache Qualifikation von Vera Wolf bei der
// Lynis Nailacademy (Trainerinnen: Evelyn Gerz & Milla Spät).
// Bewusst ohne exaktes Datum (Datenschutz/Aktualität) — nur Titel & Academy.
//
// Sobald echte Zertifikatsfotos vorliegen: Datei unter
// /public/images/zertifikate/ mit dem angegebenen `image`-Dateinamen ablegen —
// die Kachel übernimmt das Foto automatisch.

export interface Certificate {
  title: string;
  academy: string;
  trainers?: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Gel Basic',
    academy: 'Lynis Nailacademy',
    trainers: 'Evelyn Gerz & Milla Spät',
    image: '/images/zertifikate/zertifikat-gel-basic.jpg',
  },
  {
    title: 'Fräser & Feil',
    academy: 'Lynis Nailacademy',
    trainers: 'Evelyn Gerz & Milla Spät',
    image: '/images/zertifikate/zertifikat-fraeser-feil.jpg',
  },
  {
    title: 'Acrylgel',
    academy: 'Lynis Nailacademy',
    trainers: 'Evelyn Gerz & Milla Spät',
    image: '/images/zertifikate/zertifikat-acrylgel.jpg',
  },
  {
    title: 'No File',
    academy: 'Lynis Nailacademy',
    trainers: 'Evelyn Gerz & Milla Spät',
    image: '/images/zertifikate/zertifikat-no-file.jpg',
  },
  {
    title: 'Nailart Basic',
    academy: 'Lynis Nailacademy',
    trainers: 'Evelyn Gerz & Milla Spät',
    image: '/images/zertifikate/zertifikat-nailart-basic.jpg',
  },
  {
    title: 'Ballerina (Nagelform)',
    academy: 'Lynis Nailacademy',
    trainers: 'Evelyn Gerz & Milla Spät',
    image: '/images/zertifikate/zertifikat-ballerina.jpg',
  },
  {
    title: 'Gel-Schulung für Fortgeschrittene',
    academy: 'Lynis Nailacademy',
    trainers: 'Evelyn Gerz & Milla Spät',
    image: '/images/zertifikate/zertifikat-gel-fortgeschrittene.jpg',
  },
];
