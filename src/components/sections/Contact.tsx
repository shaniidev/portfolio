import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import TerminalWindow from "@/components/ui/terminal-window";
import { Button } from "@/components/ui/button";

const channels = [
  {
    href: "mailto:mirshantalpur@outlook.com",
    label: "Email",
    value: "mirshantalpur@outlook.com",
    Icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/shaniii/",
    label: "LinkedIn",
    value: "/in/shaniii",
    Icon: Linkedin,
  },
  {
    href: "https://github.com/shaniidev",
    label: "GitHub",
    value: "@shaniidev",
    Icon: Github,
  },
];

const Contact = () => (
  <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
    {/* Ambient bloom to close the page the way the hero opened it */}
    <div
      aria-hidden
      className="animate-pulse-slow pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
    />

    <div className="container mx-auto px-4">
      <Reveal className="mx-auto max-w-3xl">
        <TerminalWindow title="~/contact — bash" scanlines>
          <div className="space-y-6">
            <p className="font-mono text-sm">
              <span className="text-primary">shan@talpur</span>
              <span className="text-muted-foreground">:~$</span>{" "}
              <span className="text-foreground">./connect --now</span>
            </p>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s find what&apos;s broken
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Open to penetration testing engagements, ISO 27001 audit
                preparation, security tooling work, and full-time roles. If you
                have something that needs testing — or building properly the
                first time — get in touch.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Pakistan · available remote, hybrid, or on-site
            </div>

            <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {channels.map(({ href, label, value, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-surface p-4 transition-colors duration-200 hover:bg-primary/10"
                >
                  <dt className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </dt>
                  <dd className="mt-2 truncate font-mono text-xs text-foreground transition-colors group-hover:text-primary">
                    {value}
                  </dd>
                </Link>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg">
                <a href="mailto:mirshantalpur@outlook.com">
                  <Mail />
                  Send an email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/cv.html" target="_blank" rel="noopener noreferrer">
                  View résumé
                </a>
              </Button>
            </div>
          </div>
        </TerminalWindow>
      </Reveal>
    </div>
  </section>
);

export default Contact;
