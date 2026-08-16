// Kernleistungen für die Übersicht (Abschnitt "Leistungen").
// Kurze, laienverständliche 1–2-Satz-Beschreibungen ohne Fachchinesisch —
// fachliche Tiefe liefert das Nagel-Lexikon (siehe glossary.ts).

export interface Service {
  slug: string;
  name: string;
  description: string;
  /** Verweist optional auf einen Glossar-Eintrag mit Detailwissen. */
  glossarySlug?: string;
}

export const services: Service[] = [
  {
    slug: 'russische-maniküre',
    name: 'Russische Maniküre',
    description:
      'Apparative Maniküre mit feinem Fräser statt Wasser und Schere — besonders schonend zur Nagelhaut, mit sichtbar sauberem, langanhaltendem Ergebnis.',
    glossarySlug: 'russische-maniküre',
  },
  {
    slug: 'russische-mandel',
    name: 'Russische Mandel',
    description:
      'Elegante, mandelförmige Nagelform mit präzisem, schmal zulaufendem Übergang — edel in der Optik und alltagstauglich zugleich.',
    glossarySlug: 'russische-mandel',
  },
  {
    slug: 'no-file-technik',
    name: 'No-File-Technik',
    description:
      'Modellage mit minimalem Anrauen des Naturnagels — ideal, wenn Ihnen der Schutz Ihres eigenen Nagels besonders wichtig ist.',
    glossarySlug: 'no-file-technik',
  },
  {
    slug: 'stiletto',
    name: 'Stiletto-Nägel',
    description:
      'Spitz zulaufende, ausdrucksstarke Nagelform für einen aufsehenerregenden Auftritt — in stabiler Modellage sauber umgesetzt.',
    glossarySlug: 'stiletto',
  },
  {
    slug: 'ballerina',
    name: 'Ballerina-Form',
    description:
      'Lange Form mit geraden Seiten und flacher, eckiger Spitze (auch „Coffin" genannt) — modern, elegant und angenehm alltagstauglich.',
    glossarySlug: 'ballerina',
  },
  {
    slug: 'gel-x',
    name: 'Gel-X',
    description:
      'Vorgeformte, flexible Gel-Tips zur Verlängerung — schnell aufgetragen, mit natürlichem Ergebnis und schonend für den Naturnagel.',
    glossarySlug: 'gel-x',
  },
  {
    slug: 'press-ons',
    name: 'Press-Ons',
    description:
      'Individuell angepasste, wiederverwendbare Nagel-Tips zum Aufkleben — die schonende Alternative ganz ohne Feilen am Naturnagel.',
    glossarySlug: 'press-ons',
  },
  {
    slug: 'naturnagelpflege',
    name: 'Naturnagelpflege & -stärkung',
    description:
      'Aufbauende Pflege für Ihre eigenen Nägel — kräftigt brüchige Nägel und bereitet sie behutsam auf Gesundheit und Wachstum vor.',
  },
];
