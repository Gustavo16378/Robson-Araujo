import { useEffect } from "react";

/**
 * Single IntersectionObserver that reveals every `.reveal` / `.slab-line`
 * element as it enters the viewport (fade + translateY, slab lines draw in).
 * Honors `prefers-reduced-motion` by showing everything immediately.
 *
 * Mounted once at the app root — all sections render synchronously, so their
 * elements already exist in the DOM when this effect runs.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .slab-line")
    );

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0 = dispara no primeiro pixel (seguro até p/ elementos altos).
      // rootMargin bottom +14% = começa a revelar ANTES do elemento entrar,
      // então ele já chega pronto na tela em vez de aparecer em branco.
      { threshold: 0, rootMargin: "0px 0px 14% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
