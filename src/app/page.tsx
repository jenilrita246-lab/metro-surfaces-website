import Link from "next/link";

import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ApplicationShowcase } from "@/components/sections/ApplicationShowcase";
import { ContactBand } from "@/components/sections/ContactBand";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Stats } from "@/components/sections/Stats";
import { Values } from "@/components/sections/Values";

const MARQUEE = [
  "Acrycore Sheets",
  "Premium Laminates",
  "Decorative Louvers",
  "Cane Wallpaper",
  "UV Resistant",
  "Weather Proof",
  "8 × 4 Feet",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-ink-raised py-7">
        <Marquee items={MARQUEE} />
      </section>

      {/* ---------------- Philosophy ---------------- */}
      <section className="shell py-24 lg:py-36">
        <SectionHeading
          index="01"
          eyebrow="Our Philosophy"
          title="More than a supplier."
          lead="Built on decades of experience, our approach transcends mere product supply. We craft lasting relationships through principled business practices."
        />
        <div className="mt-14">
          <Values />
        </div>
      </section>

      <Stats />

      {/* ---------------- Products ---------------- */}
      <section className="shell py-24 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="02"
            eyebrow="The Collection"
            title="Four surfaces, specified with intent."
            lead="Each line is selected for architectural excellence and lasting performance — not for catalogue padding."
            className="flex-1"
          />
        </div>

        <div className="mt-14">
          <ProductShowcase />
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 border border-line-strong px-7 py-4 text-xs tracking-[0.2em] uppercase text-bone transition-colors duration-500 hover:border-maroon-bright hover:bg-maroon-bright/10"
          >
            Full specifications
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </section>

      {/* ---------------- Applications ---------------- */}
      <section className="border-t border-line bg-ink-raised py-24 lg:py-36">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="From Product to Space"
            title="See how the material behaves in place."
            lead="Discover how our premium decorative surfaces transform architectural visions into reality. Each product showcases endless possibilities for sophisticated interior design."
          />
          <div className="mt-14">
            <ApplicationShowcase />
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="shell py-24 lg:py-36">
        <SectionHeading
          index="04"
          eyebrow="Connect With Us"
          title="Ready to elevate your next project?"
          lead="Our team is here to provide expert guidance and premium decorative surface solutions."
        />
        <div className="mt-14">
          <ContactBand />
        </div>
      </section>
    </>
  );
}
