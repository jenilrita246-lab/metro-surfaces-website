"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RevealItem, RevealGroup } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { products } from "@/lib/products";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Desktop: an expanding panel rail. Hovering a product grows it and reveals
 * its detail, the way a sample board opens up.
 * Mobile: the same content as stacked cards.
 */
export function ProductShowcase() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ---------- Desktop rail ---------- */}
      <div className="hidden h-[34rem] gap-2 lg:flex">
        {products.map((product, i) => {
          const isActive = active === i;
          return (
            <Link
              key={product.slug}
              href={`/products#${product.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden border border-line transition-[flex-grow] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                isActive ? "grow-[2.6]" : "grow",
              )}
              style={{ flexBasis: 0 }}
            >
              <Image
                src={product.image}
                alt={`${product.name}, ${product.category} surface by Metro Surfaces`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className={cn(
                  "object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isActive
                    ? "scale-105 grayscale-0"
                    : "scale-100 grayscale-[0.55]",
                )}
              />

              <div
                className={cn(
                  // Caption band only. Veiling the whole image would bleach
                  // it out, since these photographs are already high-key
                  "absolute inset-0 transition-opacity duration-700",
                  isActive
                    ? "bg-gradient-to-t from-paper from-46% via-paper/25 to-transparent"
                    : "bg-gradient-to-t from-paper from-46% via-paper/30 to-transparent",
                )}
              />

              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-px transition-opacity duration-700",
                  isActive ? "bg-maroon-deep opacity-100" : "opacity-0",
                )}
              />

              <div className="relative flex h-full flex-col justify-between p-7">
                <span
                  className={cn(
                    "font-display text-5xl font-light transition-colors duration-700",
                    isActive ? "text-maroon" : "text-ink/45",
                  )}
                >
                  {product.index}
                </span>

                <div>
                  <p className="eyebrow mb-3">{product.category}</p>
                  <h3 className="font-display text-3xl leading-tight font-light text-ink">
                    {product.name}
                  </h3>

                  <motion.div
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft text-pretty">
                      {product.blurb}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="border border-line-strong px-3 py-1.5 text-[0.7rem] tracking-wide text-ink-soft"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ink">
                      View details
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </motion.div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ---------- Mobile stack ---------- */}
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {products.map((product) => (
          <RevealItem key={product.slug}>
            <Link
              href={`/products#${product.slug}`}
              className="group relative flex h-80 flex-col justify-end overflow-hidden border border-line p-6"
            >
              <Image
                src={product.image}
                alt={`${product.name}, ${product.category} surface by Metro Surfaces`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover opacity-95 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/80 to-paper/25" />
              <span className="absolute top-6 right-6 font-display text-4xl font-light text-ink/25">
                {product.index}
              </span>
              <div className="relative">
                <p className="eyebrow mb-2">{product.category}</p>
                <h3 className="font-display text-2xl font-light text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft text-pretty">
                  {product.blurb}
                </p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}
