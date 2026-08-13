"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface TattooRoomProps {
  onOpenBooking: () => void;
}

export default function TattooRoom({ onOpenBooking }: TattooRoomProps) {
  const { t } = useLocale();

  const rawBullets = t('tattoo.bullets') as string[];
  const bulletsList = Array.isArray(rawBullets) ? rawBullets : [];

  return (
    <section id="tattoo" className="py-24 bg-[hsl(20,12%,12%)] relative overflow-hidden border-y border-[hsl(38,90%,48%)]/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Layer 9: 2-Photo Overlapped Cluster with Framed Edges */}
          <Reveal className="relative">
            <div className="relative">
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <img
                  src="/barberking---barbershop-lviv/media/18577b77e34c2f08.jpg"
                  alt={String(t('tattoo.imgAlt1'))}
                  loading="lazy"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,15%,8%)] via-transparent to-transparent" />
                
                {/* Photo Caption with Hairline Rule */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[hsl(20,15%,8%)]/90 backdrop-blur-md rounded-xl border border-[hsl(38,90%,48%)]/30">
                  <div className="font-display font-bold text-xs uppercase text-[hsl(38,90%,48%)]">
                    {String(t('tattoo.captionTitle'))}
                  </div>
                  <p className="text-[11px] text-white/80 mt-1">
                    {String(t('tattoo.captionSub'))}
                  </p>
                </div>
              </div>

              {/* Overlapped Secondary Photo Badge */}
              <div className="absolute -bottom-6 -right-4 w-48 h-36 rounded-xl overflow-hidden border-2 border-[hsl(38,90%,48%)] shadow-2xl hidden sm:block">
                <img
                  src="/barberking---barbershop-lviv/media/595ee413a10b5260.jpg"
                  alt={String(t('tattoo.imgAlt2'))}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Text Content Stack */}
          <div>
            {/* Layer 1: Kicker */}
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
                {String(t('tattoo.kicker'))}
              </p>
            </Reveal>

            {/* Layer 2: Heading */}
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
                {String(t('tattoo.h2'))}
              </h2>
            </Reveal>

            {/* Layer 3: Body Copy */}
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                {String(t('tattoo.desc'))}
              </p>
            </Reveal>

            {/* Layer 6: Stat Row */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-4 mb-6 text-center font-display uppercase">
                <div>
                  <div className="font-mono text-xl font-bold text-[hsl(38,90%,48%)]">100%</div>
                  <div className="text-[10px] text-white/60">{String(t('tattoo.stat1'))}</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-white">180°C</div>
                  <div className="text-[10px] text-white/60">{String(t('tattoo.stat2'))}</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-[hsl(38,90%,48%)]">01</div>
                  <div className="text-[10px] text-white/60">{String(t('tattoo.stat3'))}</div>
                </div>
              </div>
            </Reveal>

            {/* Bullets */}
            <Reveal delay={0.3}>
              <div className="space-y-3 mb-8">
                {bulletsList.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,90%,48%)] shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-white/90">{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Layer 8: CTA Pair */}
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 min-h-[44px] bg-[hsl(38,90%,48%)] hover:bg-[hsl(38,95%,58%)] text-[hsl(20,15%,10%)] font-display font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-lg active:scale-95 accent-glow text-center"
                >
                  {String(t('tattoo.cta'))}
                </button>
                <a
                  href={`tel:${String(t('brand.phone')).replace(/\s+/g, '')}`}
                  className="text-xs font-bold uppercase tracking-wider text-white hover:text-[hsl(38,90%,48%)] transition-colors text-center py-2"
                >
                  {String(t('tattoo.consultLabel'))}: {String(t('brand.phone'))}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
