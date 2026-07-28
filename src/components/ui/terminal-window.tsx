import React from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Path shown in the title bar, e.g. `~/about/mir-shan-talpur.md` */
  title: string;
  children: React.ReactNode;
  /** Adds the faint CRT scanline overlay. */
  scanlines?: boolean;
}

/**
 * Reusable terminal chrome — traffic-light dots, a monospace title bar, and a
 * body slot. Used anywhere a block should read as a shell session.
 */
const TerminalWindow = ({
  title,
  children,
  className,
  scanlines = false,
  ...props
}: TerminalWindowProps) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40",
      scanlines && "scanlines",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-destructive/70" />
      <span className="h-3 w-3 rounded-full bg-amber-500/70" />
      <span className="h-3 w-3 rounded-full bg-primary/70" />
      <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
        {title}
      </span>
    </div>
    <div className="relative z-2 p-5 md:p-7">{children}</div>
  </div>
);

export default TerminalWindow;
