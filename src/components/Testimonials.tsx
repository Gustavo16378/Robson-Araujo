import Section from "./Section";
import { RA_DATA, UI_LABELS } from "../data/content";

const { testimonials } = RA_DATA;

export default function Testimonials() {
  return (
    <Section id="vozes" tone="dark">
      <div className="max-w-2xl">
        <p className="reveal mb-5 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {UI_LABELS.testimonials.kicker.toUpperCase()}
        </p>
        <h2 className="reveal font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {UI_LABELS.testimonials.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span
              aria-hidden="true"
              className="font-display text-5xl leading-none text-gold/70"
            >
              &ldquo;
            </span>
            <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-white/80">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-5">
              <div className="font-display text-sm font-semibold text-white">
                {t.name}
              </div>
              <div className="mt-0.5 text-[12px] tracking-wide text-gold/80">
                {t.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
