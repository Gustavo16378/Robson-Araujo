import { RA_DATA } from "../data/content";
import { scrollToAnchor } from "../lib/scroll";

const { hero } = RA_DATA;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-black"
    >
      {/* Background image + scrims */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-black/90 via-navy-black/55 to-navy-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-black/90 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-content px-5 pb-28 pt-28 sm:px-8">
        <p className="reveal mb-6 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {hero.kicker.toUpperCase()}
        </p>

        <h1 className="reveal max-w-3xl font-display text-[clamp(2.6rem,8vw,5.5rem)] font-bold leading-[0.98] tracking-tight text-white">
          <span className="block">{hero.title[0]}</span>
          <span className="block text-gold">{hero.title[1]}</span>
        </h1>

        <p
          className="reveal mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          style={{ transitionDelay: "120ms" }}
        >
          {hero.lead}
        </p>

        <div
          className="reveal mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          style={{ transitionDelay: "220ms" }}
        >
          <button
            type="button"
            onClick={() => scrollToAnchor("contato")}
            className="w-full rounded-full bg-gold px-7 py-3.5 text-center font-display text-sm font-semibold tracking-wide text-navy-black transition-colors duration-300 hover:bg-gold-light sm:w-auto"
          >
            {hero.ctaPrimary}
          </button>
          <button
            type="button"
            onClick={() => scrollToAnchor("projetos")}
            className="group inline-flex items-center gap-2 font-display text-sm font-medium tracking-wide text-white/85 transition-colors duration-300 hover:text-gold"
          >
            {hero.ctaSecondary}
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </button>
        </div>

        <p
          className="reveal mt-14 text-[11px] tracking-[0.16em] text-white/40"
          style={{ transitionDelay: "320ms" }}
        >
          {hero.caption.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
