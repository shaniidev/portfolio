import React from "react";
import { tickerItems } from "@/data/arsenal";

/**
 * Infinite horizontal marquee. The list is rendered twice so the -50%
 * translation loops seamlessly.
 */
const Ticker = () => (
  // overflow-hidden is load-bearing: the inner track is several thousand px
  // wide, and without clipping it drags the whole page into horizontal scroll.
  <div
    aria-hidden
    className="mask-fade-x relative overflow-hidden border-y border-border bg-surface/40 py-4"
  >
    <div className="animate-marquee flex w-max items-center gap-8">
      {[...tickerItems, ...tickerItems].map((label, index) => (
        <div key={`${label}-${index}`} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">
            {label}
          </span>
          <span className="text-primary/40">◆</span>
        </div>
      ))}
    </div>
  </div>
);

export default Ticker;
