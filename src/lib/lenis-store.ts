import type Lenis from "lenis";

/**
 * Module-level handle on the running Lenis instance so UI that needs to
 * freeze the page (the mobile menu) can stop momentum scrolling properly.
 * `overflow: hidden` alone doesn't stop Lenis.
 */
let instance: Lenis | null = null;

export const setLenis = (next: Lenis | null) => {
  instance = next;
};

export const getLenis = () => instance;
