"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-20 bg-bg-dark">
      {/* Background Video Stack */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6113144/artisan-barber-barber-shop-barbershop-6113144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 filter brightness-60 contrast-110"
        >
          <source src="https://lviv.bking.com.ua/wp-content/themes/bking/video-bg/video-bg.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/6113144/6113144-hd_1280_720_25fps.mp4" type="video/mp4" />
        </video>
        {/* Multi-layered dark gradient overlay scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/95 via-bg-dark/50 to-bg-dark/85" />
      </div>

      {/* Giant Background Watermark Layer (10-Layer Law) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-5 z-0"
      >
        <span className="font-display font-black text-[22vw] text-accent tracking-tighter whitespace-nowrap leading-none">
          BARBERKING
        </span>
      </div>

      {/* Floating Rotating Text Seal */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute top-32 right-12 z-20 w-32 h-32 items-center justify-center pointer-events-none select-none"
      >
        <div className="relative w-full h-full animate-[spin_20s_linear_infinite] opacity-60">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-accent font-mono text-[9.5px] uppercase tracking-widest font-bold">
            <path id="sealPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text>
              <textPath href="#sealPath">
                BARBERKING LVIV · EST. 2019 · ROYAL SERVICE ·
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two Flanking Mini-copy Columns */}
        <div className="hidden sm:flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-text-muted mb-8 pb-3 border-b border-border-gold/30">
          <span>{t("hero.badgeParking")}</span>
          <span>{t("hero.subLocation")}</span>
          <span>{t("hero.badgeDrinks")}</span>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow Kicker with Real Meta */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/40 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono">
              {t("hero.kicker")}
            </span>
          </div>

          {/* Multi-line Poster H1 with ONE word set differently */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-display">
            {t("hero.title1")}{" "}
            <span className="font-serif italic font-normal text-gold-gradient block mt-1">
              {t("hero.titleAccent")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* Feature Badges Row */}
          <div className="flex flex-wrap gap-3 mb-8 text-xs font-bold text-text-main font-display">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-bg-card/90 border border-border-gold">
              <span className="text-accent font-mono text-sm">◆</span>
              <span>{t("hero.badgeParking")}</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-bg-card/90 border border-border-gold">
              <span className="text-accent font-mono text-sm">◆</span>
              <span>{t("hero.badgeDrinks")}</span>
            </div>
          </div>

          {/* CTA Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#booking"
              className="bg-gold-gradient text-bg-dark font-display font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-sm shadow-xl shadow-accent/20 hover:brightness-110 transition-all text-center min-h-[44px] flex items-center justify-center"
            >
              {t("hero.ctaBook")}
            </a>
            <a
              href="#services"
              className="text-text-main hover:text-accent font-display font-bold text-xs uppercase tracking-widest py-3 px-6 inline-flex items-center justify-center gap-2 group transition-colors min-h-[44px]"
            >
              <span>{t("hero.ctaServices")}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* 3-Item Meta Strip with Hairline Separators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-gold/40 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">{t("hero.hoursLabel")}</span>
              <span className="text-text-muted">|</span>
              <span className="text-white font-bold">10:00 – 21:00</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">{t("hero.addressLabel")}</span>
              <span className="text-text-muted">|</span>
              <span className="text-white font-bold">{t("hero.addressValue")}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">{t("hero.ratingLabel")}</span>
              <span className="text-text-muted">|</span>
              <span className="text-gold-gradient font-bold">{t("hero.ratingValue")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Classic Scroll Cue */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[9px] tracking-widest text-text-muted uppercase font-mono">{t("hero.scrollCue")}</span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-accent via-accent/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}