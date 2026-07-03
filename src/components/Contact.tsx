import Section from "./Section";
import { RA_DATA, UI_LABELS } from "../data/content";
import { whatsappHref, emailHref } from "../lib/contact";

const { contact, brand } = RA_DATA;

export default function Contact() {
  const info = [
    { label: UI_LABELS.contactInfo.whatsLabel, value: brand.whats, href: whatsappHref },
    { label: UI_LABELS.contactInfo.emailLabel, value: brand.email, href: emailHref },
    { label: UI_LABELS.contactInfo.baseLabel, value: brand.city },
  ];

  return (
    <Section id="contato" tone="black">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
        <div>
          <p className="reveal mb-6 flex items-center gap-3 font-display text-[12px] font-medium tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {contact.kicker.toUpperCase()}
          </p>
          <h2 className="reveal font-display text-[clamp(2.4rem,6vw,4rem)] font-bold leading-[1.04] tracking-tight text-white">
            {contact.title.map((line, i) => (
              <span key={i} className="block">
                {i === contact.title.length - 1 ? (
                  <span className="text-gold">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>
          <p className="reveal mt-7 max-w-md text-base leading-relaxed text-white/70">
            {contact.lead}
          </p>

          <div
            className="reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ transitionDelay: "120ms" }}
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-navy-black transition-colors duration-300 hover:bg-gold-light"
            >
              {contact.cta}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-display text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {contact.ctaAlt}
            </a>
          </div>
        </div>

        {/* Contact details */}
        <dl className="reveal space-y-5" style={{ transitionDelay: "180ms" }}>
          {info.map((item) => (
            <div key={item.label} className="border-t border-white/10 pt-4">
              <dt className="font-display text-[11px] uppercase tracking-[0.2em] text-gold/70">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-base text-white/85">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="transition-colors duration-300 hover:text-gold"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
