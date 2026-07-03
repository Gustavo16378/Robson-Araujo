import { useState } from "react";
import Section from "./Section";
import ProjectModal from "./ProjectModal";
import { RA_DATA, UI_LABELS, type Project, type ProjectSpan } from "../data/content";

const { projects } = RA_DATA;

// Mosaic sizing per span. flex-basis drives the asymmetric layout; aspect
// keeps each card's proportion. min-width 280px lets cards wrap on mobile.
const spanStyle: Record<ProjectSpan, { basis: string; ratio: string }> = {
  wide: { basis: "58%", ratio: "16 / 10" },
  tall: { basis: "31%", ratio: "4 / 5" },
  normal: { basis: "42%", ratio: "4 / 3" },
};

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projetos" tone="darker">
      <div className="max-w-2xl">
        <p className="reveal mb-5 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {UI_LABELS.projects.kicker.toUpperCase()}
        </p>
        <h2 className="reveal font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {UI_LABELS.projects.title}
        </h2>
        <p className="reveal mt-5 text-base leading-relaxed text-white/65">
          {UI_LABELS.projects.lead}
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4 sm:gap-5">
        {projects.map((project, i) => {
          const s = spanStyle[project.span];
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setActive(project)}
              className="reveal group relative min-w-[280px] flex-1 overflow-hidden rounded-2xl text-left"
              style={{
                flexBasis: s.basis,
                aspectRatio: s.ratio,
                transitionDelay: `${i * 60}ms`,
              }}
              aria-label={`${UI_LABELS.card.open}: ${project.title}`}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-floor group-hover:scale-[1.05]"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-black/90 via-navy-black/25 to-transparent" />

              {/* Arrow badge */}
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-navy-black/55 text-white opacity-0 backdrop-blur transition-[opacity,background-color,color] duration-300 group-hover:bg-gold group-hover:text-navy-black group-hover:opacity-100">
                ↗
              </span>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-[10px] tracking-[0.2em] text-gold/90">
                  {project.type.toUpperCase()} · {project.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-white sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-0.5 text-[12px] text-white/55">{project.place}</p>
              </div>
            </button>
          );
        })}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
