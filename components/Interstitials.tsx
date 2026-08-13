"use client";

import { useLocale } from '@/lib/i18n';
import { Marquee } from '@/components/motion';

export function TickerStrip() {
  const { t } = useLocale();
  const rawItems = t('interstitial.tickerItems') as string[];
  const items = Array.isArray(rawItems) ? rawItems : [
    "4.9 / 5.0 GOOGLE MAPS (674+ ВІДГУКІВ)",
    "ВЛАСНИЙ БЕЗКОШТОВНИЙ ПАРКІНГ",
    "СТЕРИЛІЗАЦІЯ ІНСТРУМЕНТУ 180°C",
    "КОМПЛІМЕНТАРНИЙ ВІСКІ-БАР",
    "ПРИВАТНА TATTOO ROOM",
    "ПОНАД 255 000 ВИКОНАНИХ СТРИЖОК",
  ];

  return (
    <div className="bg-[hsl(20,15%,6%)] border-y border-[hsl(38,90%,48%)]/20 py-3.5 overflow-hidden select-none">
      <Marquee speed={22}>
        {items.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 mx-4">
            <span className="text-xs font-display font-bold uppercase tracking-[0.2em] text-[hsl(35,15%,92%)]">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38,90%,48%)] shrink-0" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export function WatermarkStatement({ word = "CRAFT", statement }: { word?: string; statement: string }) {
  return (
    <div className="relative py-16 bg-[hsl(20,12%,10%)] border-y border-white/10 overflow-hidden flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 flex items-center justify-center font-display font-black text-[18vw] text-white/[0.02] uppercase tracking-tighter select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        {word}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <p className="font-display text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
          {statement}
        </p>
        <div className="w-16 h-0.5 bg-[hsl(38,90%,48%)] mx-auto mt-4" />
      </div>
    </div>
  );
}

export function LabeledHairline({ label }: { label: string }) {
  return (
    <div className="bg-[hsl(20,15%,8%)] py-4 px-4 border-y border-white/10 flex items-center justify-between text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/40">
      <div className="h-px bg-white/10 flex-grow mr-6" />
      <span>{label}</span>
      <div className="h-px bg-white/10 flex-grow ml-6" />
    </div>
  );
}
