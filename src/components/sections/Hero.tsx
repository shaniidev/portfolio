"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = [
  "Penetration Tester",
  "Bug Bounty Hunter",
  "ISO 27001 Lead Auditor",
  "Security Tooling Engineer",
];

const TYPE_SPEED_MS = 55;
const DELETE_SPEED_MS = 28;
const HOLD_MS = 1900;

/** Types each role out, holds, deletes, moves to the next. */
const useTypedRole = (enabled: boolean) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const current = ROLES[roleIndex];

    if (!isDeleting && text === current) {
      const hold = window.setTimeout(() => setIsDeleting(true), HOLD_MS);
      return () => window.clearTimeout(hold);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((index) => (index + 1) % ROLES.length);
      return;
    }

    const tick = window.setTimeout(
      () => {
        setText((previous) =>
          isDeleting
            ? current.slice(0, previous.length - 1)
            : current.slice(0, previous.length + 1)
        );
      },
      isDeleting ? DELETE_SPEED_MS : TYPE_SPEED_MS
    );

    return () => window.clearTimeout(tick);
  }, [text, isDeleting, roleIndex, enabled]);

  return text;
};

const SYSTEM_READOUT = [
  { key: "location", value: "Pakistan · Remote" },
  { key: "focus", value: "Pentest / Bug Bounty" },
  { key: "clearance", value: "ISO 27001 LA" },
  { key: "status", value: "Available" },
];

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  // Typing is inherently animated, so fall back to a static role when the
  // visitor has asked for reduced motion.
  const typed = useTypedRole(!prefersReducedMotion);
  const roleText = prefersReducedMotion ? ROLES[0] : typed;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.09 },
    },
  };

  const item = prefersReducedMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-dvh items-center overflow-hidden pt-24 pb-16"
    >
      {/* Layer 1 — grid backdrop, dissolved at the edges */}
      <div
        aria-hidden
        className="bg-grid mask-radial-fade pointer-events-none absolute inset-0 -z-10"
      />

      {/* Layer 2 — ambient green bloom */}
      <div
        aria-hidden
        className="animate-pulse-slow pointer-events-none absolute -top-40 left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]"
      />

      {/* Layer 3 — sweeping scan line */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-scan h-px w-full bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* ---------- Left: identity ---------- */}
          <div className="lg:col-span-7">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for work
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 font-mono text-sm text-muted-foreground"
            >
              <span className="text-primary">shan@talpur</span>:<span className="text-sky-400">~</span>${" "}
              whoami
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] tracking-tight"
            >
              Mir Shan
              <br />
              <span className="text-primary text-glow">Talpur</span>
            </motion.h1>

            {/* Fixed min-height stops the typing effect reflowing the page */}
            <motion.p
              variants={item}
              className="mt-6 min-h-[2rem] font-mono text-lg text-foreground/90 sm:text-xl"
            >
              <span className="text-muted-foreground">&gt;</span>{" "}
              <span className="caret">{roleText}</span>
              <span className="sr-only">
                {ROLES.join(", ")}
              </span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Penetration tester and bug bounty hunter. I have reported remote
              code execution, SSRF, privilege escalation, IDOR and GraphQL data
              exposure across vendor and private programs — then built the
              open-source tooling that finds them faster.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View my work
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="/cv.html" target="_blank" rel="noopener noreferrer">
                  <FileText />
                  Résumé
                </a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-2">
              {[
                {
                  href: "https://github.com/shaniidev",
                  label: "GitHub profile",
                  Icon: Github,
                },
                {
                  href: "https://www.linkedin.com/in/shaniii/",
                  label: "LinkedIn profile",
                  Icon: Linkedin,
                },
                {
                  href: "mailto:mirshantalpur@outlook.com",
                  label: "Email Mir Shan Talpur",
                  Icon: Mail,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ---------- Right: framed portrait + readout ---------- */}
          <motion.div variants={item} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Corner brackets */}
              <span
                aria-hidden
                className="absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-primary/60"
              />
              <span
                aria-hidden
                className="absolute -right-2 -top-2 h-8 w-8 border-r-2 border-t-2 border-primary/60"
              />
              <span
                aria-hidden
                className="absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 border-primary/60"
              />
              <span
                aria-hidden
                className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-primary/60"
              />

              <div className="scanlines relative overflow-hidden rounded-lg border border-border bg-surface">
                <div className="relative z-2 flex flex-col items-center px-6 py-10">
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl"
                    />
                    {/*
                      The source is a full-body shot in snow, so the circle
                      crops to head-and-shoulders. Rendering at 250% of the
                      frame shows roughly the top 40% of the photo, and the
                      horizontal offset re-centres on the subject, who sits
                      slightly right of the image centre.
                    */}
                    <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-primary/40 ring-offset-4 ring-offset-surface md:h-44 md:w-44">
                      <Image
                        src="/images/profile.png"
                        alt="Portrait of Mir Shan Talpur"
                        width={400}
                        height={400}
                        priority
                        sizes="440px"
                        className="absolute left-1/2 top-0 w-[250%] max-w-none -translate-x-[52.5%] -translate-y-[4%]"
                      />
                    </div>
                    <span
                      aria-hidden
                      className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-surface bg-primary"
                    >
                      <span className="h-2 w-2 animate-ping rounded-full bg-primary-foreground/60" />
                    </span>
                  </div>

                  <p className="mt-6 font-mono text-sm text-foreground">
                    <span className="text-primary">shan@talpur</span>
                    <span className="text-muted-foreground">:~$</span>
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    Penetration Tester · Developer
                  </p>
                </div>

                <dl className="relative z-2 grid grid-cols-2 gap-px border-t border-border bg-border">
                  {SYSTEM_READOUT.map(({ key, value }) => (
                    <div key={key} className="bg-surface px-4 py-3">
                      <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                        {key}
                      </dt>
                      <dd className="mt-1 font-mono text-xs text-foreground">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
