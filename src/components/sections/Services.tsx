import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { services } from "@/data/services";

const Services = () => (
  <section id="services" className="relative scroll-mt-24 py-24 md:py-32">
    <div
      aria-hidden
      className="bg-grid-fine mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-60"
    />

    <div className="container mx-auto px-4">
      <SectionHeading
        command="./services --list"
        title="What I can do for you"
        lead="Available for contract engagements and full-time roles — remote, hybrid, or on-site."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.06} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-raised md:p-7">
              {/* Index watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 font-mono text-7xl font-bold text-foreground/[0.035] transition-colors duration-300 group-hover:text-primary/10"
              >
                {service.index}
              </span>

              <p className="font-mono text-xs text-primary">{service.index}</p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border-strong/50 bg-muted px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
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

export default Services;
