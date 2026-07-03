import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { RA_DATA } from "../data/content";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useScrollLock } from "../hooks/useScrollLock";
import { scrollToAnchor } from "../lib/scroll";

const { brand, nav, hero } = RA_DATA;

export default function Navbar() {
  const { hidden, solid } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  // Fecha o menu e agenda a rolagem. NÃO rola aqui: se o menu estiver aberto,
  // o scroll-lock ainda está ativo (window.scrollY = 0) e a rolagem sairia "do
  // topo/hero". Guardamos o alvo e rolamos no efeito abaixo.
  const go = (id: string) => {
    setMenuOpen(false);
    setPendingTarget(id);
  };

  // Roda DEPOIS que o scroll-lock do menu foi desfeito: o React executa todos
  // os cleanups (destravar + restaurar posição) antes de qualquer setup deste
  // efeito. Então aqui a posição real já foi restaurada e o scroll suave parte
  // de onde você estava — não do hero.
  useEffect(() => {
    if (!pendingTarget) return;
    scrollToAnchor(pendingTarget);
    setPendingTarget(null);
  }, [pendingTarget]);

  // Only the DYNAMIC values live inline. The transition itself is declared via
  // the explicit Tailwind class below — never transition-all. Using rgba(...,0)
  // (not `transparent`) so the color fades instead of flashing through black.
  const navStyle: CSSProperties = {
    zIndex: 100,
    transform: hidden ? "translateY(-115%)" : "translateY(0)",
    backgroundColor: solid ? "rgba(8,22,39,.84)" : "rgba(8,22,39,0)",
    backdropFilter: solid ? "blur(14px)" : "blur(0px)",
    WebkitBackdropFilter: solid ? "blur(14px)" : "blur(0px)",
    borderColor: solid ? "rgba(201,169,97,.2)" : "rgba(201,169,97,0)",
  };

  return (
    <>
      <nav
        style={navStyle}
        className="fixed inset-x-0 top-0 border-b transition-[transform,background-color,backdrop-filter,-webkit-backdrop-filter,border-color] duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)]"
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:h-[72px] sm:px-8">
          {/* Brand */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              go("inicio");
            }}
            className="group flex items-center gap-2.5"
            aria-label={`${brand.name} — início`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 font-display text-sm font-bold tracking-tight text-gold transition-colors duration-300 group-hover:border-gold">
              {brand.monogram}
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[13px] font-semibold tracking-[0.14em] text-white">
                {brand.name}
              </span>
              <span className="mt-1 text-[10px] tracking-[0.18em] text-gray-softer">
                {brand.tagline.toUpperCase()}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.id);
                }}
                className="text-[13px] font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go("contato")}
              className="hidden rounded-full bg-gold px-5 py-2.5 font-display text-[12px] font-semibold tracking-wide text-navy-black transition-colors duration-300 hover:bg-gold-light sm:inline-flex"
            >
              {hero.ctaPrimary}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-md text-white transition-colors duration-300 hover:text-gold lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onGo={go} />
    </>
  );
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onGo: (id: string) => void;
}

function MobileMenu({ open, onClose, onGo }: MobileMenuProps) {
  // iOS-safe scroll lock (position:fixed + top:-scrollY), restored on close.
  useScrollLock(open);

  // Backdrop — z 9998. Inline styles so the portal never depends on classes.
  const overlayStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9998,
    backgroundColor: "rgba(4,13,24,.66)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
    transition: "opacity .35s cubic-bezier(.4,0,.2,1)",
  };

  // Panel — z 9999. Slides in from the right.
  const panelStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    width: "min(86vw, 340px)",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#040D18",
    borderLeft: "1px solid rgba(201,169,97,.16)",
    boxShadow: "-24px 0 60px -20px rgba(0,0,0,.7)",
    transform: open ? "translateX(0)" : "translateX(100%)",
    transition: "transform .42s cubic-bezier(.4,0,.2,1)",
  };

  return createPortal(
    <>
      <div style={overlayStyle} onClick={onClose} aria-hidden="true" />

      <aside
        style={panelStyle}
        role="dialog"
        aria-modal="true"
        aria-label={brand.name}
        aria-hidden={!open}
      >
        {/* Panel header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            padding: "0 20px",
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#fff",
            }}
          >
            {brand.name}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            style={{
              display: "grid",
              placeItems: "center",
              height: 40,
              width: 40,
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <X size={22} strokeWidth={1.6} aria-hidden="true" />
          </button>
        </div>

        {/* Links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: "12px 8px" }}>
          {nav.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onGo(item.id)}
              style={{
                textAlign: "left",
                padding: "14px 16px",
                borderRadius: 10,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: "#FAFAF8",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(10px)",
                transition: `opacity .4s ${i * 55 + 120}ms ease, transform .4s ${
                  i * 55 + 120
                }ms cubic-bezier(.4,0,.2,1)`,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer CTA */}
        <div style={{ marginTop: "auto", padding: 20 }}>
          <button
            type="button"
            onClick={() => onGo("contato")}
            style={{
              width: "100%",
              padding: "15px 0",
              borderRadius: 999,
              background: "#C9A961",
              color: "#040D18",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              border: "none",
              cursor: "pointer",
            }}
          >
            {hero.ctaPrimary}
          </button>
          <p
            style={{
              marginTop: 16,
              textAlign: "center",
              fontSize: 12,
              letterSpacing: "0.04em",
              color: "#8A93A0",
            }}
          >
            {brand.whats} · {brand.city}
          </p>
        </div>
      </aside>
    </>,
    document.body
  );
}
