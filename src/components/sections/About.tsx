import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import TerminalWindow from "@/components/ui/terminal-window";

// Counts carry "+" because both lists are selections, not complete records.
const stats = [
  { value: "50+", label: "Vulnerabilities reported" },
  { value: "11+", label: "Projects shipped" },
  { value: "6+", label: "Credentials earned" },
  { value: "92", label: "GitHub stars earned" },
];

const About = () => (
  <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
    <div className="container mx-auto px-4">
      <SectionHeading
        command="cat ./about.md"
        title="From breaking things to building the fix"
        lead="A developer who moved into security, not a security person who picked up code. It shows in what I ship."
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <TerminalWindow title="~/about/mir-shan-talpur.md" scanlines>
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                <span className="font-mono text-primary">## origin</span>
                <br />
                Computer Science degree in 2020, but the freelancing started a
                year earlier — WordPress builds, Elementor, and enough PHP
                customisation to learn how badly a site can be put together.
                That was the first real lesson in security: most systems fail at
                the seams, not the centre.
              </p>
              <p>
                <span className="font-mono text-primary">## the pivot</span>
                <br />
                Python and JavaScript came next, and with them the things I
                actually wanted to make — Discord bots, desktop GUI tools,
                Android apps, cross-platform utilities in Electron. Eleven
                shipped projects later, the pattern was obvious: I kept building
                tools that inspected, audited, or probed something.
              </p>
              <p>
                <span className="font-mono text-primary">## now</span>
                <br />
                Penetration testing and bug bounty hunting, full time. I have
                reported remote code execution, SSRF, privilege escalation,
                IDOR, GraphQL data exposure and hardcoded credentials across
                vendor and private programs. ISO/IEC 27001:2022 Lead Auditor
                certified, CEH training completed at Corvit Systems.
              </p>
              <p>
                <span className="font-mono text-primary">## next</span>
                <br />
                Deeper into vulnerability research, and sharpening the tooling
                around it. bug-reaper and Keyana are both open source and both
                came straight out of the hunt — built because nothing existing
                did the job well enough.
              </p>
            </div>
          </TerminalWindow>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:content-start">
          {stats.map(({ value, label }, index) => (
            <Reveal key={label} delay={index * 0.07}>
              <div className="group h-full rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-primary/40 md:p-6">
                <p className="font-mono text-3xl font-bold text-primary transition-transform duration-300 group-hover:translate-x-0.5 md:text-4xl">
                  {value}
                </p>
                <p className="mt-2 text-xs leading-snug text-muted-foreground md:text-sm">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.28} className="col-span-2">
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-5 md:p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Penetration testing and bug bounty hunting — web and API attack
                surfaces, authorisation flaws, and the tooling that finds them.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
