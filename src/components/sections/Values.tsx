import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { values } from "@/lib/products";
import { cn } from "@/lib/cn";

export function Values({ detailed = false }: { detailed?: boolean }) {
  return (
    <RevealGroup
      className={cn(
        "grid gap-px border border-line bg-line",
        detailed ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {values.map((value) => (
        <RevealItem key={value.title}>
          <article className="group relative h-full overflow-hidden bg-ink p-8 transition-colors duration-700 hover:bg-ink-card lg:p-10">
            {/* Maroon wash blooms in from the bottom on hover */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-maroon/16 to-transparent transition-[height] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 bg-maroon-bright transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

            <div className="relative">
              <span className="font-display text-4xl font-light text-bone/20 transition-colors duration-700 group-hover:text-maroon-bright">
                {value.index}
              </span>

              <h3 className="mt-6 font-display text-2xl leading-tight font-light text-bone lg:text-[1.75rem]">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-bone-soft text-pretty">
                {value.summary}
              </p>

              {detailed && (
                <>
                  <p className="eyebrow mt-8 mb-4">How we deliver</p>
                  <ul className="space-y-2.5">
                    {value.delivery.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-bone-soft"
                      >
                        <span className="mt-[0.5em] h-1 w-1 shrink-0 rotate-45 bg-maroon-bright" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
