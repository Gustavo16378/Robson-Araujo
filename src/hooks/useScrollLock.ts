import { useEffect } from "react";

/**
 * iOS-safe scroll lock. While `active`, the body is frozen with
 * `position:fixed` (NEVER `overflow:hidden`, which iOS Safari ignores).
 * The scroll position is captured on lock and restored on unlock.
 * Shared by the mobile menu and the project modal.
 */
export function useScrollLock(active: boolean): void {
  useEffect(() => {
    if (!active) return;

    const scrollY = window.scrollY;
    const { body } = document;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [active]);
}
