import { useState } from "react";
import { projects, skills, type Project } from "../data/projects";
import { ArrowUpRightIcon, CheckIcon, CopyIcon } from "./icons";

function InstallLine({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard is unavailable over plain HTTP or when blocked; the
      // command remains on screen to be selected by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy install command: ${command}`}
      className="group mt-5 flex w-full items-center gap-3 rounded-md border border-line bg-raised px-3 py-2.5 text-left transition-colors hover:border-accent"
    >
      <span aria-hidden="true" className="font-mono text-xs text-faint">
        $
      </span>
      <code
        aria-hidden="true"
        className="min-w-0 flex-1 truncate font-mono text-xs text-ink"
      >
        {command}
      </code>
      <span
        aria-hidden="true"
        className={`shrink-0 transition-colors ${
          copied ? "text-accent" : "text-faint group-hover:text-accent"
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </span>
      <span role="status" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-surface p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
          {project.name}
        </h3>
        <span className="chip">{project.status}</span>
      </div>

      <p className="mt-3 text-base leading-relaxed text-ink">
        {project.summary}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.detail}
      </p>

      {project.install ? <InstallLine command={project.install} /> : null}

      <ul className="mt-5 flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 lg:mt-auto lg:pt-5">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name}: ${link.label}`}
            className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-accent hover:underline"
          >
            {link.label}
            <ArrowUpRightIcon />
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Software() {
  return (
    <section
      id="software"
      aria-labelledby="software-heading"
      className="border-b border-line py-16 sm:py-20"
    >
      <div className="shell">
        <div className="border-b border-line pb-6">
          <h2 id="software-heading" className="section-title">
            Software
          </h2>
          <p className="section-lede">
            Research software that I have written or maintain. All of it is open
            source and installable.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="font-display text-base font-extrabold tracking-tight text-ink">
            Technical skills
          </h3>
          <dl className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="border-b border-line pb-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">
                  {group.label}
                </dt>
                <dd>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
