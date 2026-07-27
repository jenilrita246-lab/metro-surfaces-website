import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/PageHero";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ApplicationShowcase } from "@/components/sections/ApplicationShowcase";
import { applicationSectors } from "@/lib/products";

export const metadata: Metadata = {
  title: "Applications — From Product to Space",
  description:
    "See Metro Surfaces decorative surfaces in place: corporate office paneling, residential feature walls, restaurant ceilings, partitions, exterior cladding and more.",
  alternates: { canonical: "/applications" },
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="From Product to Space"
        title="Where the material meets the room."
        lead="Discover how our premium decorative surfaces transform architectural visions into reality. Each product showcases endless possibilities for sophisticated interior design."
      />

      <section className="shell py-20 lg:py-28">
        <ApplicationShowcase />
      </section>

      {/* ---------------- Sectors ---------------- */}
      <section className="border-t border-line bg-ink-raised py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Versatile Applications"
            title="Specified across every kind of space."
          />

          <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3">
            {applicationSectors.map((sector) => (
              <RevealItem key={sector.title}>
                <article className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden border border-line p-8">
                  <Image
                    src={sector.image}
                    alt={`${sector.title} — decorative surfaces by Metro Surfaces`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-30 grayscale transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-55 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />

                  <span className="absolute top-8 left-8 font-display text-4xl font-light text-bone/25 transition-colors duration-700 group-hover:text-maroon-bright">
                    {sector.index}
                  </span>

                  <div className="relative">
                    <h3 className="font-display text-3xl leading-tight font-light text-bone">
                      {sector.title}
                    </h3>
                    <p className="mt-2 text-sm text-bone-dim">
                      {sector.summary}
                    </p>

                    <ul className="mt-7 space-y-px border-t border-line pt-5">
                      {sector.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 py-1.5 text-sm text-bone-soft"
                        >
                          <span className="h-1 w-1 rotate-45 bg-maroon-bright" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
