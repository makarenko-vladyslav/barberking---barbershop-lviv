"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

interface AdvItem {
  title: string;
  text: string;
}

interface StatItem {
  value: string;
  label: string;
}

export default function Advantages() {
  const { t } = useLocale();
  const items = (t("advantages.items") as AdvItem[]) || [];
  const stats = (t("advantages.stats") as StatItem[]) || [];

  return (
    <section id="advantages" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute bottom-6 right-0 pointer-events-none select-none aria-hidden overflow-hidden">
        <span className="text-9xl font-display font-black uppercase text-white/[0.02] whitespace-nowrap">
          BARBERKING CRAFT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
            {String(t("advantages.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("advantages.title"))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {String(t("advantages.subtitle"))}
          </p>
        </Reveal>

        {/* Statement Pull-Quote Row */}
        <Reveal delay={0.2} className="mb-16 p-8 rounded-3xl bg-surface border border-surface-border text-center max-w-4xl mx-auto relative">
          <p className="text-xl sm:text-2xl font-display font-bold text-white uppercase italic leading-relaxed mb-4">
            {String(t("advantages.quote"))}
          </p>
          <div className="text-xs font-bold uppercase tracking-wider text-accent">
            {String(t("advantages.author"))}
          </div>
        </Reveal>

        {/* 4 Numerals Stats Row */}
        <Reveal delay={0.3} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((st, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface/60 border border-surface-border text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-accent tracking-tight mb-1 tabular-nums">
                {st.value}
              </div>
              <div className="text-xs text-text-muted font-medium uppercase tracking-wider">
                {st.label}
              </div>
            </div>
          ))}
        </Reveal>

        {/* Advantages Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((adv, idx) => (
            <StaggerItem key={idx}>
              <div className="p-8 rounded-3xl bg-surface border border-surface-border hover:border-accent/40 transition-all duration-300 relative overflow-hidden group h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-display font-black text-xl mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white uppercase mb-3 tracking-wide">
                    {adv.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {adv.text}
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border/40 text-xs text-accent font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>Barberking Стандарт</span>
                  <span>✓</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
