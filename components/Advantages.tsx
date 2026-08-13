"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface AdvantageItem {
  title: string;
  desc: string;
}

export default function Advantages() {
  const { t } = useLocale();

  const rawAdvantages = t('advantages.items') as AdvantageItem[];
  const advantagesList = Array.isArray(rawAdvantages) ? rawAdvantages : [];

  return (
    <section id="advantages" className="py-24 bg-[hsl(20,15%,8%)] relative overflow-hidden scroll-mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layer 1 & 2 & 3: Kicker + Heading + Lede */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
              {String(t('advantages.kicker'))}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {String(t('advantages.h2'))}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-white/70">
              {String(t('advantages.subtitle'))}
            </p>
          </Reveal>
        </div>

        {/* Layer 4: Pull-Quote / Statement Line */}
        <Reveal delay={0.3} className="mb-16">
          <div className="bg-[hsl(20,12%,12%)] border-l-4 border-[hsl(38,90%,48%)] p-6 rounded-r-xl max-w-4xl mx-auto text-left">
            <p className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white leading-relaxed">
              {String(t('advantages.quoteText'))}
            </p>
            <span className="block text-xs font-bold uppercase tracking-widest text-[hsl(38,90%,48%)] mt-2">
              {String(t('advantages.quoteAuthor'))}
            </span>
          </div>
        </Reveal>

        {/* Layer 5: Stat Row of Real Numerals */}
        <Reveal delay={0.4} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-white/10 py-8 text-center">
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[hsl(38,90%,48%)]">255 000+</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{String(t('advantages.statCuts'))}</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">68 000+</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{String(t('advantages.statClients'))}</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[hsl(38,90%,48%)]">674</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{String(t('advantages.statReviews'))}</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">100%</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{String(t('advantages.statParking'))}</div>
          </div>
        </Reveal>

        {/* Advantage Cards */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesList.map((adv, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-[hsl(20,12%,12%)] border border-white/10 rounded-2xl p-8 hover:border-[hsl(38,90%,48%)]/50 transition-all duration-300 relative group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[hsl(38,90%,48%)]/10 border border-[hsl(38,90%,48%)]/30 flex items-center justify-center text-xs text-[hsl(38,90%,48%)] font-mono font-bold">
                      0{idx + 1}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      {String(t('advantages.standardLabel'))}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-3 group-hover:text-[hsl(38,90%,48%)] transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="w-12 h-0.5 bg-[hsl(38,90%,48%)]/30 group-hover:w-full transition-all duration-300 mt-6" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
