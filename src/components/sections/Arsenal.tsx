import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { arsenal } from "@/data/arsenal";
import { cn } from "@/lib/utils";

/**
 * Bento layout across a 6-column grid:
 *   row 1 — the two security categories, half width each (3 + 3)
 *   row 2 — three supporting categories (2 + 2 + 2)
 *   row 3 — the final category spans the full width rather than being
 *           orphaned in a third of a row
 */
const spanFor = (index: number, total: number) => {
  if (index === total - 1) return "md:col-span-6";
  return index < 2 ? "md:col-span-3" : "md:col-span-2";
};

const Arsenal = () => (
  <section id="arsenal" className="relative scroll-mt-24 py-24 md:py-32">
    {/* Faint grid so this band reads differently from the sections either side */}
    <div
      aria-hidden
      className="bg-grid-fine mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-60"
    />

    <div className="container mx-auto px-4">
      <SectionHeading
        command="ls -la ./arsenal"
        title="The arsenal"
        lead="What I actually use, grouped by what it is for rather than by how impressive the list looks."
      />

      <div className="grid gap-4 md:grid-cols-6">
        {arsenal.map((category, index) => (
          <Reveal
            key={category.id}
            delay={index * 0.06}
            className={cn("h-full", spanFor(index, arsenal.length))}
          >
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-raised">
              {/* Glow that fades in on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <p className="font-mono text-xs text-primary">./{category.slug}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground md:text-xl">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {category.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border-strong/60 bg-muted px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors duration-200 group-hover:border-primary/25"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Arsenal;
