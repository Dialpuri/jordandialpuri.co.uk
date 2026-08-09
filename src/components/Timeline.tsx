import { BuildingIcon, CapIcon } from "./icons";

interface Entry {
  kind: "work" | "education";
  title: string;
  org: string;
  period: string;
  award?: string;
  note?: string;
  points: string[];
  awards?: string[];
}

const entries: Entry[] = [
  {
    kind: "work",
    title: "Postdoctoral Scientist",
    org: "MRC Laboratory of Molecular Biology, Cambridge",
    period: "April 2026 — Present",
    points: [
      "Modernisation of its C++ codebase and the extension of Coot Python API.",
      "Creation of next-generation features using machine learning and large language models.",
    ],
  },
  {
    kind: "education",
    title: "PhD, Biological Chemistry",
    org: "University of York",
    period: "October 2022 — April 2026",
    note: "Thesis: Automated Model Building of Nucleic Acids and Carbohydrates Using Experimental Data and Deep Learning Models.",
    points: [
      "Produced deep learning models which simulate the intuition of an expert crystallographer to produce accurate and efficient macromolecular structures.",
      "Developed deep convolutional neural networks to guide automated model building of nucleic acids and carbohydrates.",
      "Created innovative web application to allow easy and intuitive online carbohydrate structure validation.",
      "Invited to present machine learning work at national and international conferences.",
      "Aided undergraduate students learning through demonstrating JavaScript, Python and R courses as a Graduate Teaching Assistant.",
    ],
    awards: [
      "Kathleen Mary Stott Prize for excellence in scientific research",
      "Margaret C. Etter Award for exceptional scientific quality and potential in the field of crystallography",
    ],
  },
  {
    kind: "work",
    title: "Placement Student",
    org: "Afton Chemical",
    period: "July 2021 — September 2022",
    points: [
      "One-year placement as part of fourth year of undergraduate degree, undertaking a research project in engine oil additive optimisation.",
      "Enhanced computational skills by creating macros using VBA and performing hundreds of quantum chemical and molecular dynamics simulations.",
      "Implementing novel machine learning models to predict the outcome of £150,000 industrial test.",
      "Presented monthly to the wider team discussing project updates and goals.",
    ],
  },
  {
    kind: "education",
    title: "MChem, Chemistry",
    org: "University of York",
    period: "September 2018 — July 2022",
    award: "First Class Honours with Distinction (1*)",
    points: [],
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-line py-16 sm:py-20"
    >
      <div className="shell">
        <div className="border-b border-line pb-6">
          <h2 id="experience-heading" className="section-title">
            Experience and education
          </h2>
        </div>

        <ol className="mt-10 border-s border-line">
          {entries.map((entry) => {
            const Icon = entry.kind === "work" ? BuildingIcon : CapIcon;
            return (
              <li
                key={entry.title}
                className="relative ms-6 pb-10 last:pb-0 sm:ms-8"
              >
                <span className="absolute -start-[2.25rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-surface text-accent sm:-start-[2.75rem]">
                  <Icon className="h-3.5 w-3.5" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                    {entry.title}
                  </h3>
                  {/* Not a <time>: these are ranges, which have no
                                        valid machine-readable datetime value. */}
                  <span className="font-mono text-xs text-faint">
                    {entry.period}
                  </span>
                </div>

                <p className="mt-1 text-sm text-muted">{entry.org}</p>

                {entry.award ? (
                  <p className="mt-3">
                    <span className="chip">{entry.award}</span>
                  </p>
                ) : null}

                {entry.note ? (
                  <p className="mt-3 border-s-2 border-line ps-3 text-sm leading-relaxed text-muted">
                    {entry.note}
                  </p>
                ) : null}

                {entry.points.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="relative ps-5 text-sm leading-relaxed text-muted before:absolute before:start-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {entry.awards && entry.awards.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    <span className={"text-muted text-sm font-bold"}>
                      Awards
                    </span>
                    {entry.awards.map((point) => (
                      <li
                        key={point}
                        className="relative ps-5 text-sm leading-relaxed text-muted before:absolute before:start-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
