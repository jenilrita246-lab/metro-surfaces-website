"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/products";
import { contact } from "@/lib/site";

/** One full-width product entry, image and copy alternating sides. */
export function ProductRow({
  product,
  flipped,
}: {
  product: Product;
  flipped: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <article
      id={product.slug}
      className="scroll-mt-28 border-b border-line py-20 last:border-b-0 lg:py-28"
    >
      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
          flipped && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* Image */}
        <div
          ref={ref}
          className="group relative aspect-[4/3] overflow-hidden border border-line"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-[-8%]">
            <Image
              src={product.image}
              alt={`${product.name} — ${product.category} decorative surface supplied by Metro Surfaces`}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
          <span className="absolute top-6 left-6 font-display text-5xl font-light text-bone/30">
            {product.index}
          </span>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow">{product.category}</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-light text-bone lg:text-5xl">
              {product.name}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft text-pretty">
              {product.description}
            </p>
          </Reveal>

          <p className="eyebrow mt-10 mb-4">Key features</p>
          <RevealGroup className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {product.features.map((feature) => (
              <RevealItem key={feature}>
                <div className="group flex h-full items-center gap-3 bg-ink px-5 py-4 transition-colors duration-500 hover:bg-ink-card">
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-maroon-bright transition-transform duration-500 group-hover:rotate-[135deg]" />
                  <span className="text-sm text-bone-soft">{feature}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-9 flex flex-wrap gap-4">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-maroon px-7 py-3.5 text-xs tracking-[0.2em] uppercase text-bone transition-colors duration-500 hover:bg-maroon-bright"
            >
              Request samples
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/applications"
              className="group inline-flex items-center gap-3 border border-line-strong px-7 py-3.5 text-xs tracking-[0.2em] uppercase text-bone-soft transition-colors duration-500 hover:border-bone-soft hover:text-bone"
            >
              View applications
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
