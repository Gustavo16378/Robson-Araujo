import { useEffect, useState } from "react";

export interface ScrollState {
  /** true → navbar should slide out of view (scrolling down past threshold) */
  hidden: boolean;
  /** true → navbar should switch to its solid/blurred state */
  solid: boolean;
}

/**
 * Tracks scroll direction + offset via requestAnimationFrame on a passive
 * listener. Drives the navbar's hide-on-down / show-on-up behavior.
 */
export function useScrollDirection(): ScrollState {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setSolid(y > 40);

      if (y > lastY && y > 140) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { hidden, solid };
}
