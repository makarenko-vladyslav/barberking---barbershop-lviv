"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, TextReveal } from "@/components/motion";

export default function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-bg-dark">
      {/* Background Watermark Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none aria-hidden overflow-hidden z-0">
        <span className="text-[18vw] font-display font-black uppercase tracking-widest text-white/[0.02] whitespace-nowrap">
          BARBERKING
        </span>
      </div>

      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6113144/artisan-barber-barber-shop-barbershop-6113144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 filter brightness-45"
        >
          <source
            src="https://videos.pexels.com/video-files/6113144/6113144-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Scrim Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/75 to-bg-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/80 via-transparent to-bg-dark/80" />
      </div>

      {/* Floating Circular Text Seal */}
      <div className="hidden lg:block absolute top-28 right-12 z-20 pointer-events-none select-none">
        <div className="relative w-28 h-28 flex items-center justify-center animate-[spin_20s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent fill-current">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[10px] font-bold uppercase tracking-widest fill-accent">
              <textPath href="#circlePath" startOffset="0%">
                BARBERKING LVIV · EST 2018 · PARKING & BAR ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display font-black text-xs text-white">
            BK
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Kicker with Real Meta */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{String(t("hero.kickerMeta"))}</span>
            </div>
          </Reveal>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
            Чоловічий барбершоп із власним{" "}
            <span className="text-accent italic font-serif">безкоштовним</span>{" "}
            паркінгом
          </h1>

          {/* Subtitle */}
          <Reveal delay={0.3}>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto font-normal leading-relaxed mb-8">
              {String(t("hero.subtitle"))}
            </p>
          </Reveal>

          {/* CTA Pair */}
          <Reveal delay={0.4} className="w-full max-w-md flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-accent/20 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>{String(t("hero.ctaPrimary"))}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-surface/80 hover:bg-surface border border-surface-border text-text-main font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>{String(t("hero.ctaSecondary"))}</span>
              <span>↓</span>
            </a>
          </Reveal>

          {/* Flanking Mini-copy Columns + Meta Strip */}
          <Reveal delay={0.5} className="w-full pt-6 border-t border-surface-border/60 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs text-text-muted">
              <div className="p-3 rounded-lg bg-surface/40 border border-white/5 text-left md:text-center">
                <span className="text-accent font-bold uppercase block mb-1">ПАРКОВКА</span>
                <span>{String(t("hero.flankLeft"))}</span>
              </div>
              <div className="p-3 rounded-lg bg-surface/40 border border-white/5 text-center">
                <span className="text-accent font-bold uppercase block mb-1">ОЦІНКА</span>
                <span>4.9 / 5 на основі 674+ відгуків Google</span>
              </div>
              <div className="p-3 rounded-lg bg-surface/40 border border-white/5 text-right md:text-center">
                <span className="text-accent font-bold uppercase block mb-1">FREE BAR</span>
                <span>{String(t("hero.flankRight"))}</span>
              </div>
            </div>

            {/* 3-Item Meta Strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-bold text-text-main uppercase tracking-wider">
              <span>{String(t("hero.metaHours"))}</span>
              <span className="text-accent">—</span>
              <span>{String(t("hero.metaAddress"))}</span>
              <span className="text-accent">—</span>
              <span className="text-accent">{String(t("hero.metaRating"))}</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Classic Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center gap-1 mt-6 opacity-75">
        <span className="text-[9px] tracking-[0.3em] text-text-muted uppercase font-bold">
          SCROLL
        </span>
        <div className="w-px h-5 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
