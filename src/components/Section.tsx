import { type ReactNode } from "react";
import { RA_DATA } from "../data/content";

export type Tone = "dark" | "darker" | "black" | "light";

const toneClass: Record<Tone, string> = {
  dark: "bg-navy-deep text-white",
  darker: "bg-navy-darker text-white",
  black: "bg-navy-black text-white",
  light: "bg-base-light text-ink",
};

/** "PAV 01" → "01", "TÉRREO" → "T", "COBERTURA" → "C" */
function shortCode(code: string): string {
  if (code.startsWith("PAV")) return code.replace("PAV", "").trim();
  return code.charAt(0);
}

interface SectionProps {
  id: string;
  tone: Tone;
  children: ReactNode;
  /** Hide the floor divider/marker (e.g. when not wanted). */
  noMarker?: boolean;
}

/**
 * One "pavimento". Owns its background tone (the dark/light alternation that
 * gives the cinematic slab-to-slab effect) and renders the floor divider:
 * a thin line that draws itself in + the big faint pavement number.
 */
export default function Section({ id, tone, children, noMarker }: SectionProps) {
  const floor = RA_DATA.floors.find((f) => f.anchor === id);
  const isLight = tone === "light";

  return (
    <section
      id={id}
      className={`relative overflow-hidden scroll-mt-16 ${toneClass[tone]}`}
    >
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        {floor && !noMarker && (
          <div className="mb-12 flex items-end gap-5 sm:mb-16">
            <div className="min-w-0 flex-1">
              <div
                className={`slab-line mb-3 h-px w-full origin-left ${
                  isLight ? "bg-ink/15" : "bg-gold/30"
                }`}
              />
              <span
                className={`font-display text-[11px] font-medium tracking-[0.3em] ${
                  isLight ? "text-gray-soft" : "text-gold/80"
                }`}
              >
                {floor.code} · {floor.label.toUpperCase()}
              </span>
            </div>
            <span
              aria-hidden="true"
              className={`select-none font-display text-6xl font-bold leading-[0.8] sm:text-7xl ${
                isLight ? "text-ink/10" : "text-white/10"
              }`}
            >
              {shortCode(floor.code)}
            </span>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
