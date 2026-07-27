import { Counter } from "@/components/motion/Counter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <RevealGroup className="grid grid-cols-2 gap-px border-y border-line bg-line lg:grid-cols-4">
      {stats.map((stat) => (
        <RevealItem key={stat.label}>
          <div className="group h-full bg-ink px-6 py-12 text-center transition-colors duration-700 hover:bg-ink-card lg:py-16">
            <p className="font-display text-5xl font-light text-bone lg:text-6xl">
              <Counter to={stat.value} suffix={stat.suffix} />
            </p>
            <div className="mx-auto mt-5 h-px w-8 bg-maroon-bright transition-all duration-700 group-hover:w-16" />
            <p className="mt-5 text-xs leading-relaxed tracking-wide text-bone-dim">
              {stat.label}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
