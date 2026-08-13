"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[hsl(20,15%,8%)]">
      {/* Layer 10: Giant Decorative Background Watermark Word (Zero-height, select-none, aria-hidden) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-[22vw] text-white/[0.03] uppercase tracking-widest whitespace-nowrap pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {String(t('hero.watermark'))}
      </div>

      {/* Layer 9: Background Stack: Looping Video + Multilayer Dark Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6113144/artisan-barber-barber-shop-barbershop-6113144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 opacity-40"
        >
          <source
            src="https://videos.pexels.com/video-files/6113144/6113144-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,15%,8%)] via-[hsl(20,15%,8%)]/80 to-[hsl(20,15%,8%)]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[hsl(20,15%,8%)]/40 to-[hsl(20,15%,8%)]" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Copy (8 Cols) */}
          <div className="lg:col-span-8 text-left">
            {/* Layer 1: Status Pill Badge */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[hsl(38,90%,48%)]/15 border border-[hsl(38,90%,48%)]/30 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[hsl(38,90%,48%)] animate-pulse" />
                <span className="text-xs font-semibold text-[hsl(38,90%,58%)] uppercase tracking-wider">
                  {String(t('hero.badge'))}
                </span>
              </div>
            </Reveal>

            {/* Layer 2: Kicker with REAL Meta */}
            <Reveal delay={0.2}>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-3">
                {String(t('hero.kicker'))}
              </p>
            </Reveal>

            {/* Layer 3: Poster H1 with ONE word styled differently */}
            <Reveal delay={0.3}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-6">
                {String(t('hero.h1Part1'))} <span className="gold-gradient-text italic font-serif font-normal">{String(t('hero.h1Royal'))}</span> {String(t('hero.h1Part2'))}
              </h1>
            </Reveal>

            {/* Layer 4: Lede Paragraph */}
            <Reveal delay={0.4}>
              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-8 max-w-2xl">
                {String(t('hero.lede'))}
              </p>
            </Reveal>

            {/* Layer 5: CTA Pair (Solid Button + Text Link) */}
            <Reveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-10">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 min-h-[44px] bg-[hsl(38,90%,48%)] hover:bg-[hsl(38,95%,58%)] text-[hsl(20,15%,10%)] font-display font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-lg active:scale-95 accent-glow text-center"
                >
                  {String(t('hero.ctaMain'))}
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[44px] text-xs font-bold uppercase tracking-wider text-white hover:text-[hsl(38,90%,48%)] transition-colors group"
                >
                  <span>{String(t('hero.ctaSecondary'))}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Reveal>

            {/* Layer 6: 3-Item Meta Strip with Hairline Separators */}
            <Reveal delay={0.6}>
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/15 text-xs text-white/80 font-display uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="text-[hsl(38,90%,48%)] font-bold">{String(t('hero.hoursLabel'))}:</span>
                  <span>{String(t('hero.hoursVal'))}</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2">
                  <span className="text-[hsl(38,90%,48%)] font-bold">{String(t('hero.locationLabel'))}:</span>
                  <span>{String(t('hero.locationVal'))}</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2">
                  <span className="text-[hsl(38,90%,48%)] font-bold">{String(t('hero.ratingLabel'))}:</span>
                  <span className="text-white font-bold">{String(t('hero.ratingVal'))}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Flanking Stack (4 Cols) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 items-end">
            {/* Layer 7: Floating Text-Only Seal (Rotating Text Circle, NO glyphs) */}
            <div className="relative w-36 h-36 flex items-center justify-center rounded-full border border-[hsl(38,90%,48%)]/40 bg-[hsl(20,15%,10%)]/80 backdrop-blur-md">
              <div className="absolute inset-0 rounded-full border border-dashed border-[hsl(38,90%,48%)]/30 animate-spin [animation-duration:20s]" />
              <div className="text-center">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[hsl(38,90%,48%)]">{String(t('hero.sealEst'))}</span>
                <span className="block font-display font-extrabold text-sm text-white uppercase">{String(t('hero.sealName'))}</span>
                <span className="block text-[9px] text-white/60 uppercase tracking-wider">{String(t('hero.sealCity'))}</span>
              </div>
            </div>

            {/* Layer 11: Two Flanking Mini-Copy Columns */}
            <div className="w-full bg-[hsl(20,12%,12%)]/90 border border-white/10 rounded-xl p-5 space-y-4 text-left">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,90%,48%)] block mb-1">
                  {String(t('hero.flank1Title'))}
                </span>
                <p className="text-xs text-white/80 leading-snug">
                  {String(t('hero.flank1Desc'))}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,90%,48%)] block mb-1">
                  {String(t('hero.flank2Title'))}
                </span>
                <p className="text-xs text-white/80 leading-snug">
                  {String(t('hero.flank2Desc'))}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Layer 8: Scroll Cue (Classic tiny indicator at bottom-center) */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 pt-6 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-display font-bold uppercase tracking-[0.3em] text-white/80">{String(t('hero.scrollLabel'))}</span>
        <div className="w-px h-6 bg-gradient-to-b from-[hsl(38,90%,48%)] via-[hsl(38,90%,48%)]/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
