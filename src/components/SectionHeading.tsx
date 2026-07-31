import { Reveal, RevealRule } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { cn } from "@/lib/cn";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  center = false,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "mx-auto text-center", "max-w-3xl", className)}>
      <Reveal>
        <p className="eyebrow flex items-center gap-3">
          {index && <span className="text-maroon">{index}</span>}
          {index && <span className="h-px w-8 bg-line-strong" />}
          {eyebrow}
        </p>
      </Reveal>

      <h2 className="mt-6 font-display text-4xl leading-[1.08] font-light text-balance text-ink sm:text-5xl lg:text-6xl">
        <SplitWords text={title} />
      </h2>

      {lead && (
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
            {lead}
          </p>
        </Reveal>
      )}

      <RevealRule className="mt-10" />
    </div>
  );
}

/** Faint vertical rules forming a quiet architectural grid behind heroes. */
export function GridLines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 flex justify-between",
        className,
      )}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="h-full w-px bg-line" />
      ))}
    </div>
  );
}
