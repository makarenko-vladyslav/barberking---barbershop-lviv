"use client";

import { Marquee } from "@/components/motion";

export function TickerInterstitial({ items }: { items: string[] }) {
  return (
    <div className="py-4 bg-surface border-y border-surface-border overflow-hidden select-none">
      <Marquee speed={22}>
        <div className="flex items-center gap-10 px-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 shrink-0">
              <span className="text-xs font-display font-extrabold tracking-widest text-text-main uppercase">
                {item}
              </span>
              <span className="text-accent font-bold text-xs">—</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export function LabeledHairline({ label }: { label: string }) {
  return (
    <div className="py-6 px-4 max-w-7xl mx-auto flex items-center gap-6 select-none">
      <div className="h-px bg-surface-border flex-1" />
      <span className="text-[11px] font-display font-extrabold uppercase tracking-widest text-accent/80 shrink-0">
        {label}
      </span>
      <div className="h-px bg-surface-border flex-1" />
    </div>
  );
}

export function WatermarkStatement({ word, statement }: { word: string; statement: string }) {
  return (
    <div className="py-12 bg-primary/60 border-y border-surface-border relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none aria-hidden overflow-hidden">
        <span className="text-6xl sm:text-9xl font-display font-black uppercase tracking-widest text-white/[0.03] whitespace-nowrap">
          {word}
        </span>
      </div>
      <div className="relative z-10 max-w-4xl px-4">
        <p className="text-base sm:text-xl font-display font-bold uppercase tracking-wider text-text-main leading-relaxed">
          {statement}
        </p>
      </div>
    </div>
  );
}
