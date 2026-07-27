"use client";

import { motion } from "motion/react";
import { Fragment } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Reveals a heading word-by-word, each word sliding up out of a clipped box.
 *
 * Real space text nodes sit between the words rather than margin-only
 * spacing, so the heading still reads as a normal sentence to crawlers,
 * screen readers and anyone copying the text.
 */
export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em]">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "115%", opacity: 0 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.95, ease: EASE },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}
