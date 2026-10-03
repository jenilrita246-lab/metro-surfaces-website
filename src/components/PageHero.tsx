import type { CSSProperties } from "react";

import { SplitWords } from "@/components/motion/SplitWords";
import { GridLines } from "@/components/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-[132px] pb-20 lg:pt-[176px] lg:pb-28">
      <div className="bloom pointer-events-none absolute -top-40 left-1/3 h-[18rem] w-[22rem] opacity-70 sm:h-[26rem] sm:w-[32rem] lg:h-[32rem] lg:w-[42rem]" />

      <div className="shell relative">
        <GridLines className="opacity-50" />

        <div className="relative max-w-4xl">
          {/* CSS entrances throughout: this block is on screen at load, so
              it must not wait for JavaScript to become visible. */}
          <p className="rise eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-maroon-deep" />
            {eyebrow}
          </p>

          {/* No gradient-clip here: SplitWords nests each word in its own
              span, and background-clip:text on the wrapper would leave the
              children transparent with nothing painted behind them. */}
          <h1 className="mt-7 font-display text-5xl leading-[1.02] font-light tracking-[-0.02em] text-balance text-ink sm:text-6xl lg:text-7xl">
            <SplitWords text={title} immediate delay={0.1} />
          </h1>

          {lead && (
            <p
              style={{ "--rise-delay": "0.3s" } as CSSProperties}
              className="rise mt-7 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty lg:text-lg"
            >
              {lead}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
