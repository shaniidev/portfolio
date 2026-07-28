import React from "react";
import { Lock, ShieldAlert } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import {
  findings,
  findingsSummary,
  disclosurePlatforms,
} from "@/data/findings";
import type { Finding } from "@/data/findings";

const FindingCard = ({ finding, index }: { finding: Finding; index: number }) => {
  const isNamed = finding.disclosure === "named";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-raised">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(3, "0")}
        </span>
        {finding.severity && (
          <span className="rounded-md border border-destructive/40 bg-destructive/10 px-2 py-0.5 font-mono text-[0.65rem] text-destructive">
            {finding.severity}
          </span>
        )}
      </div>

      <h3 className="relative mt-4 text-lg font-semibold leading-snug text-foreground">
        {finding.vulnClass}
      </h3>

      <p className="relative mt-1 inline-flex items-center gap-1.5 font-mono text-xs">
        {isNamed ? (
          <span className="text-primary">{finding.target}</span>
        ) : (
          <>
            <Lock className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">{finding.sector}</span>
          </>
        )}
      </p>

      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {finding.summary}
      </p>
    </article>
  );
};

const Findings = () => {
  const summaryStats = [
    { value: findingsSummary.reported, label: "Vulnerabilities reported" },
    { value: String(findingsSummary.classes), label: "Vulnerability classes" },
  ];

  return (
    <section id="findings" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        aria-hidden
        className="bg-grid-fine mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-60"
      />

      <div className="container mx-auto px-4">
        <SectionHeading
          command="cat ./findings.log"
          title="Findings"
          lead="Over fifty vulnerabilities reported through bug bounty programs. Below is a sample by class — targets are described by category because these reports are not publicly disclosed."
        />

        {/* Headline totals: the twelve cards below are a sample, so the real
            volume has to be stated up front or the section undersells itself. */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          {summaryStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.07}>
              <div className="h-full rounded-xl border border-border bg-surface p-5 md:p-6">
                <p className="font-mono text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-border bg-surface px-5 py-4">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <ShieldAlert className="h-4 w-4 text-primary" />
              reported to
            </span>
            {disclosurePlatforms.map((platform) => (
              <span
                key={platform}
                className="rounded-md border border-border-strong/50 bg-muted px-2.5 py-1 font-mono text-xs text-secondary-foreground"
              >
                {platform}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-6">
          <h3 className="font-mono text-sm text-foreground">
            <span className="text-primary">$</span> selected by class
          </h3>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {findings.map((finding, index) => (
            <Reveal
              key={finding.id}
              delay={Math.min(index, 5) * 0.05}
              className="h-full"
            >
              <FindingCard finding={finding} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="max-w-3xl font-mono text-xs leading-relaxed text-muted-foreground">
            <span className="text-primary">note:</span> none of these reports are
            publicly disclosed, so no program is named. Each finding is described
            by class and impact only. Details available on request, subject to
            the relevant program&apos;s disclosure policy.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Findings;
