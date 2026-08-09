import { site } from "../data/site";
// Scholar metrics are kept out of the hero deliberately; raw citation counts
// invite comparison against people much further into their careers. Restore the
// `stats` block below (and this import) if you ever want them back.
// import { metrics } from "../data/site";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ScholarIcon,
} from "./icons";

const socials = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.scholar, label: "Google Scholar", Icon: ScholarIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

// const stats = [
//     { value: `${metrics.publications}`, label: "Publications" },
//     { value: `${metrics.citations}`, label: "Citations" },
//     { value: `${metrics.hIndex}`, label: "h-index" },
//     { value: "4", label: "Software packages" },
// ];

const summary: { term: string; description: string }[] = [
  { term: "Field", description: "Machine learning for structural biology" },
  { term: "Languages", description: "C++, Python, TypeScript" },
  {
    term: "Current",
    description:
      "Development of Coot at the MRC Laboratory of Molecular Biology",
  },
  {
    term: "Doctorate",
    description: "Biological Chemistry, University of York",
  },
  {
    term: "Open to",
    description: "Research software and machine learning positions",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-line"
    >
      <div className="shell grid animate-fade-up gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:items-start lg:gap-16 lg:py-24">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
            {site.org} · {site.location}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Machine learning and software for macromolecular structure
            determination.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            I am a postdoctoral scientist at the MRC Laboratory of Molecular
            Biology, where I work on{" "}
            <strong className="font-semibold text-ink">Coot</strong>, a program
            used throughout structural biology to build and validate
            macromolecular models against experimental data.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            My doctoral research at the University of York addressed the
            automated model building of nucleic acids and carbohydrates. I
            produced open-source convolutional neural networks that interpret
            experimental density directly, together with the C++ and Python
            packages which use that information to automatically build models.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.cv}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon className="h-4 w-4" />
              Curriculum vitae
            </a>
            <a href={`mailto:${site.email}`} className="btn-secondary">
              <MailIcon className="h-4 w-4" />
              Email
            </a>
            <div className="ml-1 flex items-center gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-faint transition-colors hover:bg-raised hover:text-ink"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl border border-line bg-surface p-6">
            {/* Stacked when the card is narrow (phone, and the lg sidebar);
                            side by side in between, where a centred portrait would
                            otherwise float in a lot of empty width. */}
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:flex-col lg:text-center">
              <img
                src="/jordandialpuri.jpeg"
                alt="Jordan Dialpuri"
                width={160}
                height={160}
                className="h-28 w-28 shrink-0 rounded-full bg-accentSoft object-cover"
              />
              <div>
                <p className="font-display text-lg font-extrabold tracking-tight text-ink">
                  {site.name}, PhD
                </p>
                <p className="mt-0.5 text-sm text-muted">{site.role}</p>
              </div>
            </div>

            <dl className="mt-6 divide-y divide-line border-t border-line">
              {summary.map((row) => (
                <div key={row.term} className="py-3 sm:flex sm:gap-4">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint sm:w-24 sm:shrink-0 sm:pt-0.5">
                    {row.term}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-ink sm:mt-0">
                    {row.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
