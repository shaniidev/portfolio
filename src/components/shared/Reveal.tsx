"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the entry transition starts. */
  delay?: number;
}

/**
 * Scroll-triggered entry animation, built to fail *visible*.
 *
 * The hidden state lives in CSS behind `html.js`, which is only set by a
 * blocking script in the document head. If JavaScript never runs, never
 * loads, or throws, nothing is hidden and the page reads normally.
 *
 * IntersectionObserver fires an initial callback for every element it starts
 * observing, so content that is already on screen — including after a deep
 * link jumps to an anchor — is revealed immediately rather than waiting for
 * a scroll event that may never come.
 */
const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => element.setAttribute("data-visible", "true");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
