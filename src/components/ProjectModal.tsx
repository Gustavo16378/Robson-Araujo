import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { UI_LABELS, type Project } from "../data/content";
import { useScrollLock } from "../hooks/useScrollLock";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const open = project !== null;
  const closeRef = useRef<HTMLButtonElement>(null);

  // Keep the last project visible during the close fade-out.
  const [shown, setShown] = useState<Project | null>(project);
  useEffect(() => {
    if (project) setShown(project);
  }, [project]);

  useScrollLock(open);

  // ESC to close + initial focus on the close button.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const overlayStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9998,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "16px",
    overflowY: "auto",
    backgroundColor: "rgba(4,13,24,.86)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
    transition: "opacity .35s cubic-bezier(.4,0,.2,1)",
  };

  const p = shown;

  return createPortal(
    <div
      style={overlayStyle}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p?.title}
      aria-hidden={!open}
    >
      {p && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-navy-darker text-white shadow-2xl"
          style={{
            transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
            transition: "transform .4s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {/* Header image */}
          <div
            className="w-full bg-cover bg-center"
            style={{ aspectRatio: "16 / 8", backgroundImage: `url(${p.img})` }}
            role="img"
            aria-label={p.caption}
          />

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={UI_LABELS.modal.close}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-navy-black/70 text-white backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-navy-black"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>

          <div className="p-6 sm:p-9">
            <p className="font-display text-[11px] tracking-[0.22em] text-gold">
              {p.type.toUpperCase()} · {p.year}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-white/55">{p.place}</p>

            <div className="mt-7 space-y-6">
              <Block label={UI_LABELS.modal.problem} text={p.problem} />
              <Block label={UI_LABELS.modal.decision} text={p.decision} accent />
              <Block label={UI_LABELS.modal.result} text={p.result} />
            </div>

            {/* Facts strip */}
            <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl border border-gold/15">
              {p.facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`px-4 py-4 text-center ${i > 0 ? "border-l border-gold/15" : ""}`}
                >
                  <div className="font-display text-lg font-bold text-gold sm:text-xl">
                    {f.v}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {f.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

function Block({
  label,
  text,
  accent,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className={accent ? "border-l-2 border-gold pl-4" : "pl-4"}>
      <p
        className={`mb-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] ${
          accent ? "text-gold" : "text-white/45"
        }`}
      >
        {label}
      </p>
      <p className="text-sm leading-relaxed text-white/75">{text}</p>
    </div>
  );
}
