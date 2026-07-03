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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
