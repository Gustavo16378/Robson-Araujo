/**
 * Smooth-scrolls to a section by id, accounting for scroll offset.
 * Falls back to instant jump when the user prefers reduced motion.
 */
export function scrollToAnchor(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - 4;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
}
