import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { site } from "../data/site";
import { CloseIcon, MailIcon, MenuIcon } from "./icons";

const links = [
  { href: "/#software", label: "Software" },
  { href: "/#publications", label: "Publications" },
  { href: "/presentations/", label: "Presentations" },
  { href: "/#experience", label: "Experience" },
];

const path = window.location.pathname;

function isCurrent(href: string) {
  return !href.startsWith("/#") && path.startsWith(href);
}

export default function Navbar() {
  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md"
    >
      {({ open }) => (
        <>
          <div className="shell flex h-16 items-center gap-3 sm:h-20 sm:gap-6">
            <a href="/" className="mr-auto min-w-0 rounded-md">
              <span className="block truncate font-display text-base font-extrabold tracking-tight text-ink sm:text-lg">
                {site.name}
              </span>
              <span className="mt-0.5 hidden truncate text-xs text-muted lg:block">
                {site.role} · {site.org}
              </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="rounded-md text-sm font-medium text-muted transition-colors hover:text-ink aria-[current=page]:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="/#contact"
              className="btn-primary h-10 w-10 shrink-0 px-0 sm:h-auto sm:w-auto sm:px-4"
            >
              <MailIcon className="h-4 w-4" />
              <span className="max-sm:sr-only">Contact</span>
            </a>

            <DisclosureButton className="-mr-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-raised hover:text-ink md:hidden">
              {open ? <CloseIcon /> : <MenuIcon />}
              <span className="sr-only">{open ? "Close menu" : "Menu"}</span>
            </DisclosureButton>
          </div>

          <DisclosurePanel className="border-t border-line bg-bg md:hidden">
            <nav className="shell flex flex-col py-3">
              {links.map((link) => (
                <DisclosureButton
                  key={link.href}
                  as="a"
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="rounded-md px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-raised hover:text-ink aria-[current=page]:text-ink"
                >
                  {link.label}
                </DisclosureButton>
              ))}
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
