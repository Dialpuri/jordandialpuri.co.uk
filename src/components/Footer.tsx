import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="shell flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © 2024–{new Date().getFullYear()} {site.name}
        </p>
        <p className="text-faint">
          Interested in the source for this site? Click{" "}
          <a
            href="https://github.com/Dialpuri/jordandialpuri.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md hover:text-accent hover:underline"
          >
            here
          </a>
        </p>
      </div>
    </footer>
  );
}
