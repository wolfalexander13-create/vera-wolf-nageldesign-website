// Nagel-Lexikon — zentrales Differenzierungsmerkmal gegenüber lokalen
// Wettbewerbern. Jeder Eintrag folgt demselben Muster: Was ist es? Was ist
// die Technik/Besonderheit? Was ist der konkrete Vorteil gegenüber einer
// klassischen Modellage? Eignet sich für FAQ-/Glossar-Schema-Markup.

export interface GlossaryEntry {
  slug: string;
  term: string;
  what: string;
  technique: string;
  advantage: string;
}

export const glossary: GlossaryEntry[] = [
  {
    slug: 'russische-maniküre',
    term: 'Russische Maniküre',
    what: 'Eine apparative Trockenmaniküre: Statt mit Wasser aufzuweichen und mit der Schere zu schneiden, wird die Nagelhaut mit einem feinen Fräser (E-File) präzise bearbeitet.',
    technique:
      'Die Kombi-Fräser-Technik arbeitet die Nagelhaut Schicht für Schicht ab, ohne den Nagel selbst zu belasten. Das erfordert Übung und ein ruhiges, geschultes Auge.',
    advantage:
      'Schonender für die Nagelhaut, ein sichtbar saubereres Ergebnis und eine längere Haltbarkeit von Lack oder Gel, da der Nagel präziser vorbereitet ist als bei der klassischen Wasser-Maniküre.',
  },
  {
    slug: 'gel-x',
    term: 'Gel-X',
    what: 'Ein modernes Verlängerungssystem mit vorgeformten, flexiblen Gel-Tips — im Gegensatz zur klassischen Modellage mit Schablone.',
    technique:
      'Die passende Tip-Größe wird ausgewählt, mit Gel auf den Naturnagel aufgebracht und ausgehärtet — ganz ohne Staub-intensives Feilen einer kompletten Form von Grund auf.',
    advantage:
      'Schnellerer Auftrag, geringere Belastung des Naturnagels, ein besonders natürliches Ergebnis und eine leichtere, schonendere Entfernung als bei klassischer Schablonen-Modellage.',
  },
  {
    slug: 'stiletto',
    term: 'Stiletto-Nägel',
    what: 'Eine spitz zulaufende, sehr lange Nagelform mit ausdrucksstarker, eleganter Silhouette.',
    technique:
      'Die Form verlangt eine stabile Modellage-Basis, da die schmale Spitze mechanisch stärker beansprucht wird als rundere Formen. Besonders geeignet für besondere Anlässe oder Kundinnen, die eine auffällige, sehr feminine Form bevorzugen.',
    advantage:
      'Ein maximal auffälliger, eleganter Look — bei sorgfältiger Modellage und etwas Pflegeaufwand im Alltag ebenso langlebig wie andere lange Formen.',
  },
  {
    slug: 'russische-mandel',
    term: 'Russische Mandel',
    what: 'Eine statisch präzise, mandelförmige Nagelform — schmaler und spitzer zulaufend als ein „Soft Square", aber runder als Stiletto.',
    technique:
      'Die Form lebt von einer symmetrischen, sauber austarierten Rundung, die auf beiden Händen exakt gleich sitzen muss — das Markenzeichen einer präzisen Modellage.',
    advantage:
      'Eine elegante, sehr feminine Optik bei gleichzeitig guter Alltagstauglichkeit — deutlich unauffälliger im Alltag zu tragen als extremere Formen wie Stiletto.',
  },
  {
    slug: 'ballerina',
    term: 'Ballerina-Form (Coffin)',
    what: 'Eine lange Nagelform mit geraden Seiten und einer flach-eckig abgeschnittenen Spitze, statt spitz zulaufend wie bei Stiletto. International auch „Coffin" genannt.',
    technique:
      'Die gerade abgeschnittene Spitze verlangt exaktes, symmetrisches Arbeiten — kleinste Abweichungen fallen bei dieser klaren Linienführung sofort auf.',
    advantage:
      'Wirkt modern und elegant bei gleichzeitig höherer Alltagstauglichkeit und Stabilität als Stiletto, da die breitere Spitze weniger bruchgefährdet ist.',
  },
  {
    slug: 'no-file-technik',
    term: 'No-File-Technik',
    what: 'Ein Modellage-Ansatz, bei dem der Naturnagel vor dem Auftragen minimal bis gar nicht angeraut wird — im Gegensatz zur klassischen Modellage, die stärker anfeilt.',
    technique:
      'Statt der Nageloberfläche wird gezielt vorbereitet, sodass Gel oder Acrylgel dennoch sicher haftet, ohne die Nagelplatte mechanisch zu schwächen.',
    advantage:
      'Maximale Schonung des Naturnagels — ideal für Kundinnen mit empfindlichen, dünnen oder ohnehin beanspruchten Nägeln, die dennoch nicht auf Modellage verzichten möchten.',
  },
  {
    slug: 'press-ons',
    term: 'Press-Ons',
    what: 'Individuell angepasste, wiederverwendbare Nagel-Tips zum Aufkleben — vorgefertigt oder handgefertigt nach Maß.',
    technique:
      'Die Tips werden exakt auf Ihre Nagelform angepasst, sodass sie sicher sitzen und optisch kaum von einer festen Modellage zu unterscheiden sind.',
    advantage:
      'Eine schonende, flexible Alternative ganz ohne Feilen oder Fräsen am Naturnagel — außerdem eine gute, risikoarme Einstiegsoption, um Modellage unverbindlich auszuprobieren.',
  },
];
