import { site } from "../data/site";
import { MailIcon } from "./icons";

const links = [
  { href: "#software", label: "Software" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center gap-6 sm:h-20">
        <a href="#top" className="mr-auto min-w-0 rounded-md">
          <span className="block truncate font-display text-base font-extrabold tracking-tight text-ink sm:text-lg">
            {site.name}
          </span>
          {/* Only shown once there is room for it to sit on one line. */}
          <span className="mt-0.5 hidden truncate text-xs text-muted lg:block">
            {site.role} · {site.org}
          </span>
        </a>

        {/* Section links are a convenience on wide screens. On a phone the
                    page is short enough to scroll, so they make way for Contact. */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary">
          <MailIcon className="h-4 w-4" />
          Contact
        </a>
      </div>
    </header>
  );
}
