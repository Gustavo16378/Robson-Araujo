import { useEffect, useState } from "react";
import { RA_DATA } from "../data/content";
import { useInView } from "../hooks/useInView";

const { stats } = RA_DATA;

/**
 * Floating dark card straddling the hero → Sobre seam.
 * `-mt-16` lifts the top half over the dark hero; the negative bottom margin
 * pulls the light Sobre section up so its white sits behind the bottom half —
 * so the card sits ON the line between the two pavimentos.
 */
export default function StatsBar() {
  return (
    <div className="relative z-30 mx-auto -mt-16 mb-[-2.75rem] max-w-content px-5 sm:px-8">
      <div className="reveal grid grid-cols-2 overflow-hidden rounded-2xl border border-gold/20 bg-navy-darker shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)] sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-5 py-7 text-center sm:px-6 sm:py-9 ${
              i % 2 === 1 ? "border-l border-white/10" : ""
            } ${i >= 2 ? "border-t border-white/10 sm:border-t-0" : ""} ${
              i >= 1 ? "sm:border-l sm:border-white/10" : ""
            }`}
          >
            <div className="font-display text-3xl font-bold text-gold sm:text-[2.5rem]">
              <CountUp value={stat.value} />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-gray-softer sm:text-[11px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Counts up to the numeric part of a value (e.g. "320+") once scrolled into view. */
function CountUp({ value }: { value: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);

  const match = value.match(/^(\d+)(.*)$/);
  const hasNumber = match !== null;
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [n, setN] = useState(0);

  // Deps are PRIMITIVES only (inView/target/hasNumber). Depending on `match`
  // — a fresh object every render — restarted the animation on each setN and
  // kept it frozen near zero. That was the "0+/4+/1%" bug.
  useEffect(() => {
    if (!hasNumber || !inView) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setN(target);
      return;
    }

    const duration = 1400;
    let raf = 0;
    let start = 0;

    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, hasNumber]);

  if (!hasNumber) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
