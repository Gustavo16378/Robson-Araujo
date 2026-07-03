import Section from "./Section";
import { RA_DATA } from "../data/content";

const { cost } = RA_DATA;

export default function Cost() {
  return (
    <Section id="custo" tone="light">
      <div className="max-w-2xl">
        <p className="reveal mb-5 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-risk">
          <span className="h-px w-8 bg-risk" />
          {cost.kicker.toUpperCase()}
        </p>
        <h2 className="reveal font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {cost.title}
        </h2>
        <p className="reveal mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
          {cost.lead}
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
        {cost.items.map((item, i) => (
          <div
            key={item.title}
            className="reveal flex flex-col gap-3 bg-base-light p-7 sm:p-9"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="font-display text-3xl font-bold tracking-tight text-risk sm:text-4xl">
              {item.stat}
            </span>
            <h3 className="font-display text-lg font-semibold text-ink">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink/65">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
