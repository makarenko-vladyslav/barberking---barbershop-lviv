"use client";

import { useLocale } from "@/lib/i18n";
import { Marquee, Reveal } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();
  const tickerItems = (t("proofTicker") as string[]) || [];

  return (
    <section className="py-6 bg-surface border-y border-surface-border overflow-hidden">
      <Marquee speed={25}>
        <div className="flex items-center gap-12 px-4">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <span className="text-xs font-display font-extrabold tracking-widest text-text-main uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
