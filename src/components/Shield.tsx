import Section from "./Section";
import { RA_DATA, UI_LABELS } from "../data/content";

const { shield } = RA_DATA;

export default function Shield() {
  return (
    <Section id="blindagem" tone="light">
      <div className="max-w-2xl">
        <p className="reveal mb-5 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-ok">
          <span className="h-px w-8 bg-ok" />
          {shield.kicker.toUpperCase()}
        </p>
        <h2 className="reveal font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {shield.title}
        </h2>
      </div>

      <ol className="mt-12 space-y-5">
        {shield.steps.map((step, i) => (
          <li
            key={step.n}
            className="reveal grid gap-5 rounded-2xl border border-ink/10 bg-white p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-7 sm:p-8"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {/* Number + phase */}
            <div className="flex items-center gap-4 sm:w-44 sm:flex-col sm:items-start sm:gap-3">
              <span className="font-display text-3xl font-bold text-ink/15 sm:text-5xl">
                {step.n}
              </span>
              <h3 className="font-display text-base font-semibold leading-tight text-ink sm:text-lg">
                {step.phase}
              </h3>
            </div>

            {/* Risk vs Blindage */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-risk/5 p-4">
                <p className="mb-2 flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-risk">
                  <span className="h-1.5 w-1.5 rounded-full bg-risk" />
                  {UI_LABELS.shield.risk}
                </p>
                <p className="text-sm leading-relaxed text-ink/70">{step.risk}</p>
              </div>
              <div className="rounded-xl bg-ok/5 p-4">
                <p className="mb-2 flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                  {UI_LABELS.shield.blindage}
                </p>
                <p className="text-sm leading-relaxed text-ink/70">{step.shield}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
