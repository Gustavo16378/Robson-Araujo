import Section from "./Section";
import { RA_DATA } from "../data/content";

const { philosophy } = RA_DATA;

export default function Philosophy() {
  return (
    <Section id="filosofia" tone="dark">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        {/* Thesis */}
        <div>
          <p className="reveal mb-6 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {philosophy.kicker.toUpperCase()}
          </p>

          <h2 className="reveal font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-[2.7rem]">
            {philosophy.thesis.map((line, i) => (
              <span key={i} className="block">
                {i === philosophy.thesis.length - 1 ? (
                  <span className="text-gold">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>

          <div className="mt-8 max-w-md space-y-5">
            {philosophy.body.map((p, i) => (
              <p
                key={i}
                className="reveal text-[15px] leading-relaxed text-white/70"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Numbered services list */}
        <ul className="flex flex-col">
          {philosophy.services.map((s, i) => (
            <li
              key={s.n}
              className="reveal group flex gap-5 border-t border-white/10 py-5 last:border-b"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-display text-sm font-semibold text-gold/70">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-gold">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
