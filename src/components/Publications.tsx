import { useState } from "react";
import PublicationModal from "./PublicationModal";
import { publications, type Publication } from "../data/publications";
import { site } from "../data/site";
import { ArrowUpRightIcon } from "./icons";

function Authors({ authors }: { authors: string }) {
  const parts = authors.split(/(J\. S\. Dialpuri)/g);
  return (
    <p className="mt-2 text-sm leading-relaxed text-muted">
      {parts.map((part, i) =>
        part === "J. S. Dialpuri" ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

function ThesisCard({ publication }: { publication: Publication }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article className="mt-8 rounded-xl border border-line bg-surface p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="chip">Doctoral thesis</span>
        <span className="font-mono text-sm font-medium text-faint">
          {publication.year}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-2xl">
        {publication.title}
      </h3>
      <p className="mt-2 text-sm text-muted">
        {publication.authors} · {publication.journal}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View thesis
          <ArrowUpRightIcon />
        </a>
        {publication.abstract ? (
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-secondary"
          >
            Read abstract
          </button>
        ) : null}
      </div>

      {publication.abstract ? (
        <PublicationModal
          open={modalOpen}
          setOpen={setModalOpen}
          publication={publication}
        />
      ) : null}
    </article>
  );
}

function PublicationRow({ publication }: { publication: Publication }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <li className="grid gap-x-8 gap-y-3 border-b border-line py-7 last:border-0 sm:grid-cols-[6.5rem_1fr]">
      <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
        <span className="font-mono text-sm font-medium text-faint">
          {publication.year}
        </span>
        {publication.firstAuthor ? (
          <span className="chip whitespace-nowrap">First author</span>
        ) : null}
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink">
          {publication.title}
        </h3>
        <Authors authors={publication.authors} />
        <p className="mt-1.5 text-sm italic text-muted">
          {publication.journal}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {publication.abstract ? (
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label={`Read abstract of ${publication.title}`}
              className="rounded-md text-sm font-semibold text-accent hover:underline"
            >
              Read abstract
            </button>
          ) : null}
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View paper: ${publication.title}`}
            className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-accent hover:underline"
          >
            View paper
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>

      {publication.abstract ? (
        <PublicationModal
          open={modalOpen}
          setOpen={setModalOpen}
          publication={publication}
        />
      ) : null}
    </li>
  );
}

export default function Publications() {
  const thesis = publications.find(
    (publication) => publication.kind === "thesis",
  );
  const articles = publications.filter(
    (publication) => publication.kind !== "thesis",
  );

  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="border-b border-line py-16 sm:py-20"
    >
      <div className="shell">
        <div className="border-b border-line pb-6">
          <h2 id="publications-heading" className="section-title">
            Publications
          </h2>
          <p className="section-lede">
            Peer-reviewed papers on automated model building, carbohydrate
            validation, and the application of deep learning to structural
            biology. A complete list is held on{" "}
            <a
              href={site.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Google Scholar
            </a>
            .
          </p>
        </div>

        {thesis ? <ThesisCard publication={thesis} /> : null}

        <ol className="mt-4">
          {articles.map((publication) => (
            <PublicationRow key={publication.url} publication={publication} />
          ))}
        </ol>
      </div>
    </section>
  );
}
