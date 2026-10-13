export interface Presentation {
  title: string;
  event: string;
  location: string;
  date: string;
  file: string;
  slides: number;
  sizeMb: number;
  summary: string;
  topics: string[];
}

const suffixes = ["th", "st", "nd", "rd"];

export function dateParts(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  const day = date.getDate();

  return {
    day,
    suffix: suffixes[(day - 20) % 10] ?? suffixes[day] ?? suffixes[0],
    monthYear: `${date.toLocaleDateString("en-GB", {
      month: "long",
    })} ${date.getFullYear()}`,
  };
}

/** Newest first — the order the page renders them in. */
export const presentations: Presentation[] = [
  {
    title: "Automated nucleic acid model building using deep learning",
    event: "Bay Area Users' Light Source Meeting",
    location: "Stanford University, USA",
    date: "2026-09-25",
    file: "/presentations/stanford-ai-in-crystallography.pdf",
    slides: 38,
    sizeMb: 13.8,
    summary:
      "An invited talk on my work on automated model building for nucleic acids using deep learning (NucleoFind). Additionally, I discuss upcoming features for Coot 1.4 at the end of the talk.",
    topics: ["NucleoFind", "Coot", "ModelCraft", "X-ray crystallography"],
  },
  {
    title: "Automated Model Building",
    event: "CCP4 Shanghai Workshop",
    location: "Shanghai, China",
    date: "2026-09-15",
    file: "/presentations/shanghai-automated-model-building.pdf",
    slides: 59,
    sizeMb: 15.2,
    summary:
      "A workshop lecture on how automated model building fits into the structure solution process, and on the programs that do it: ARP/wARP, Buccaneer, ModelCraft, NucleoFind, and SHELXE. The slide captions were written largely by Paul Bond (University of York), who also shared most of the figures.",
    topics: [
      "X-ray crystallography",
      "ARP/wARP",
      "Buccaneer",
      "ModelCraft",
      "NucleoFind",
    ],
  },
  {
    title: "Coot and Moorhen",
    event: "CCP4 Shanghai Workshop",
    location: "Shanghai, China",
    date: "2026-09-14",
    file: "/presentations/shanghai-coot-and-moorhen.pdf",
    slides: 83,
    sizeMb: 29.4,
    summary:
      "A workshop lecture on interactive model building with Coot and Moorhen, covering tools that are available in both programs and information about the technicalities of the methods.",
    topics: ["Coot", "Moorhen", "Interactive model building", "Validation"],
  },
];
