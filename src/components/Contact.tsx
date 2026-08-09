import { site } from "../data/site";
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

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-20"
    >
      <div className="shell">
        <div className="pb-2 text-center">
          <h2 id="contact-heading" className="section-title">
            Contact
          </h2>
          <p className="section-lede mx-auto">
            I am happy to hear from anyone with an interest in applying machine
            learning or web technologies to structural biology. I am open to
            offers and collaborations.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href={`mailto:${site.email}`} className="btn-primary">
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
          <a href={site.cv} className="btn-secondary">
            <DownloadIcon className="h-4 w-4" />
            Curriculum vitae
          </a>
          <div className="flex items-center gap-1 sm:ml-1">
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
    </section>
  );
}
