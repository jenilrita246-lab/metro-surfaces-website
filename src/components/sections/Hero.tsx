"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Magnetic } from "@/components/motion/Magnetic";
import { SplitWords } from "@/components/motion/SplitWords";
import { GridLines } from "@/components/SectionHeading";
import { contact } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;
const LINES = ["Acrycore", "Laminates", "Louvers", "Cane Wallpaper"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background drifts slower than the copy — classic depth parallax.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/hero-ambient.webp"
          alt="Contemporary interior finished in Metro Surfaces decorative panels and Acrycore sheets"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Tonal wash — dark enough on the left for type, open on the right so
          the material in the photograph still reads */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/45 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/60 to-ink/10" />

      {/* Sized down on small screens — at 46rem the bloom is wider than a
          phone viewport and washes the whole hero red */}
      <div className="bloom pointer-events-none absolute -top-1/4 -right-1/4 -z-10 h-[24rem] w-[24rem] animate-[pulse-glow] sm:h-[36rem] sm:w-[36rem] lg:h-[46rem] lg:w-[46rem]" />

      <div className="shell relative w-full">
        <GridLines className="opacity-60" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative max-w-4xl pt-32 pb-28"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="eyebrow flex items-center gap-3"
          >
            <span className="h-px w-10 bg-maroon-bright" />
            Premium Decorative Surfaces
          </motion.p>

          <h1 className="mt-8 font-display text-[3.25rem] leading-[0.95] font-light tracking-[-0.02em] sm:text-7xl lg:text-[6.5rem]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
                className="block text-gradient-bone"
              >
                Beautiful Spaces,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.38, ease: EASE }}
                className="block italic text-maroon-bright"
              >
                Beautiful Life
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62, ease: EASE }}
            className="mt-10 max-w-xl"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {LINES.map((line, i) => (
                <span key={line} className="flex items-center gap-3">
                  <span className="text-sm font-light tracking-wide text-bone-soft">
                    {line}
                  </span>
                  {i < LINES.length - 1 && (
                    <span className="h-3 w-px bg-line-strong" />
                  )}
                </span>
              ))}
            </div>
            <p className="mt-4 text-base leading-relaxed text-bone-dim text-pretty">
              For discerning architects and interior designers who specify
              materials that have to hold up — visually and physically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.78, ease: EASE }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-maroon px-8 py-4 text-xs tracking-[0.22em] uppercase text-bone"
              >
                <span className="absolute inset-0 -translate-x-full bg-maroon-bright transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                <span className="relative">Explore Surfaces</span>
                <span className="relative transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Magnetic>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline py-4 text-xs tracking-[0.22em] uppercase text-bone-soft transition-colors duration-300 hover:text-bone"
            >
              Request samples
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ opacity: contentOpacity }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-line-strong">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-hint] bg-maroon-bright" />
        </span>
      </motion.div>
    </section>
  );
}
