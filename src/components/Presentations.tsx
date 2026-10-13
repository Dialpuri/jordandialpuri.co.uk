import { presentations, type Presentation } from "../data/presentations";
import { ArrowUpRightIcon, DownloadIcon } from "./icons";

function PresentationCard({ presentation }: { presentation: Presentation }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-surface p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="chip">{presentation.event}</span>
        <time
          dateTime={presentation.date}
          className="font-mono text-sm font-medium text-faint"
        >
          {presentation.dateLabel}
        </time>
      </div>

      <h2 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-2xl">
        {presentation.title}
      </h2>
      <p className="mt-2 text-sm text-muted">{presentation.location}</p>

      <p className="mt-4 text-base leading-relaxed text-muted">
        {presentation.summary}
      </p>

      <ul className="mb-3 mt-5 flex flex-wrap gap-2">
        {presentation.topics.map((topic) => (
          <li key={topic} className="tag">
            {topic}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5 lg:mt-auto">
        <a
          href={presentation.file}
          download
          className="btn-primary"
          aria-label={`Download slides: ${presentation.title} (PDF, ${presentation.sizeMb} MB)`}
        >
          <DownloadIcon className="h-4 w-4" />
          Download slides
        </a>
        <a
          href={presentation.file}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          aria-label={`Open slides in a new tab: ${presentation.title}`}
        >
          Open in browser
          <ArrowUpRightIcon />
        </a>
        <p className="font-mono text-xs text-faint">
          PDF · {presentation.slides} slides · {presentation.sizeMb} MB
        </p>
      </div>
    </article>
  );
}

export default function Presentations() {
  return (
    <section
      aria-labelledby="presentations-heading"
      className="border-b border-line py-16 sm:py-20"
    >
      <div className="shell">
        <div className="border-b border-line pb-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Talks and workshops
          </p>
          <h1
            id="presentations-heading"
            className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl"
          >
            Presentations
          </h1>
          <p className="section-lede">
            Slides from talks and workshop lectures I have given, free to
            download. Several are teaching material written for
            workshops which include captions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {presentations.map((presentation) => (
            <PresentationCard
              key={presentation.file}
              presentation={presentation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
