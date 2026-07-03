import Section from "./Section";
import { RA_DATA } from "../data/content";

const { about } = RA_DATA;

export default function About() {
  return (
    <Section id="sobre" tone="light">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
        {/* Photo */}
        <div className="reveal relative">
          <div
            className="aspect-[4/5] w-full rounded-2xl bg-cover bg-center shadow-[0_30px_60px_-25px_rgba(15,42,74,0.45)]"
            style={{ backgroundImage: `url(${about.photo})` }}
            role="img"
            aria-label={about.photoCaption}
          />
          <span className="absolute -bottom-3 left-4 rounded-full bg-navy-deep px-4 py-1.5 text-[11px] tracking-wide text-gold-light shadow-lg">
            {about.photoCaption}
          </span>
        </div>

        {/* Text */}
        <div>
          <p className="reveal mb-5 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-gold-deep">
            <span className="h-px w-8 bg-gold-deep" />
            {about.kicker.toUpperCase()}
          </p>

          <h2 className="reveal font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {about.title}
          </h2>
          <p className="reveal mt-2 font-display text-sm font-medium tracking-wide text-gray-soft">
            {about.role}
          </p>

          <div className="mt-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal text-[15px] leading-relaxed text-ink/75 sm:text-base"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {p}
              </p>
            ))}
          </div>

          <p className="reveal mt-7 inline-flex items-center gap-2 rounded-full border border-gold-deep/30 bg-gold/10 px-4 py-2 text-[12px] font-medium tracking-wide text-gold-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
            {about.badge}
          </p>

          <div className="reveal mt-9 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7">
            {about.miniStats.map((m) => (
              <div key={m.label}>
                <div className="font-display text-lg font-bold text-ink sm:text-xl">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] tracking-wide text-gray-soft">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
