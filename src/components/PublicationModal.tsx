import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import { type Publication } from "../data/publications";
import { ArrowUpRightIcon, CloseIcon } from "./icons";

export default function PublicationModal(props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  publication: Publication;
}) {
  const { publication } = props;
  const close = () => props.setOpen(false);

  return (
    <Dialog open={props.open} onClose={close} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-6">
          <DialogPanel
            transition
            className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex items-start gap-4 border-b border-line px-6 py-5">
              <DialogTitle
                as="h2"
                className="font-display text-lg font-extrabold leading-snug tracking-tight text-ink"
              >
                {publication.title}
              </DialogTitle>
              <button
                type="button"
                onClick={close}
                data-autofocus
                className="-mr-1 ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-raised hover:text-ink"
              >
                <CloseIcon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="max-h-[60vh] space-y-4 overflow-y-auto px-6 py-5">
              {(publication.abstract ?? "")
                .split(/\n\s*\n/)
                .map((paragraph) => paragraph.trim())
                .filter(Boolean)
                .map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-raised px-6 py-4">
              <p className="min-w-0 text-xs leading-relaxed text-muted">
                {publication.authors} ·{" "}
                <span className="italic">{publication.journal}</span>,{" "}
                {publication.year}
              </p>
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0 px-3 py-2 text-xs"
              >
                View paper
                <ArrowUpRightIcon />
              </a>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
