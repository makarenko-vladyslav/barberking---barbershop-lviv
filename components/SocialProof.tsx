"use client";

import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const tickerItems = (t("ticker") as string[]) || [];

  return (
    <section className="bg-[hsl(220,18%,14%)] border-y border-[hsl(38,88%,52%)]/20 py-3.5 overflow-hidden relative z-20">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[hsl(38,15%,92%)] font-display">
              {item}
            </span>
            <span className="text-[hsl(38,88%,52%)] font-bold text-xs">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}