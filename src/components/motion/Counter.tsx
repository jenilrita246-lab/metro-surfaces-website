"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Counts up from zero the first time it scrolls into view.
 *
 * The real figure is what renders server-side, so the number is still
 * correct without JavaScript; the client resets it to zero on mount and
 * animates when the band is reached. Because the stats sit well below the
 * fold, that reset happens long before anyone sees it.
 */
export function Counter({
  to,
  suffix = "",
  duration = 2.1,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed || !inView) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [armed, inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
