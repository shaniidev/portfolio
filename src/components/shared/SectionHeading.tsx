import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  /** Shell-style command shown above the title, e.g. `cat ./about.md` */
  command: string;
  title: string;
  lead?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  command,
  title,
  lead,
  className,
  align = "left",
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "mb-12 max-w-2xl md:mb-16",
      align === "center" && "mx-auto text-center",
      className
    )}
  >
    <p className="mb-4 font-mono text-sm text-primary">
      <span className="text-muted-foreground">$</span> {command}
    </p>
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
      {title}
    </h2>
    {lead && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        {lead}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
