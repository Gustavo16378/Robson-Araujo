import { RA_DATA } from "../data/content";
import { whatsappHref, emailHref } from "../lib/contact";
import { scrollToAnchor } from "../lib/scroll";

const { brand, nav } = RA_DATA;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-black text-white">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 font-display text-sm font-bold text-gold">
                {brand.monogram}
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-semibold tracking-[0.12em]">
                  {brand.name}
                </div>
                <div className="mt-0.5 text-[11px] tracking-[0.14em] text-gray-softer">
                  {brand.tagline.toUpperCase()}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-1.5 text-sm text-white/65">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-gold"
              >
                {brand.whats}
              </a>
              <a
                href={emailHref}
                className="transition-colors duration-300 hover:text-gold"
              >
                {brand.email}
              </a>
              <span>{brand.city}</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToAnchor(item.id)}
                className="text-[13px] tracking-wide text-white/60 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {brand.name} · {brand.tagline}
          </span>
          <span className="text-gold/70">{brand.credit}</span>
        </div>
      </div>
    </footer>
  );
}
