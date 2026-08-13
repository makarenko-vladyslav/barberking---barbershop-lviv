"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[hsl(220,22%,8%)]">
      {/* Background Layer 1: Looping Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/9258291/pexels-photo-9258291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source
            src="https://lviv.bking.com.ua/wp-content/themes/bking/video-bg/video-bg.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/6113144/6113144-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Background Layer 2: Dark Tinted Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,22%,8%)] via-[hsl(220,22%,8%)]/75 to-black/70" />
      </div>

      {/* Decorative Type Layer: Giant Watermark Word */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black font-display text-white/[0.03] select-none pointer-events-none whitespace-nowrap z-0"
        aria-hidden="true"
      >
        BARBERKING
      </div>

      {/* Main Hero Content Stack */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Copy Area (8 cols) */}
          <div className="lg:col-span-8 text-center sm:text-left">
            {/* Layer: Kicker with REAL meta */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[hsl(38,88%,52%)]/15 border border-[hsl(38,88%,52%)]/30 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38,88%,52%)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[hsl(38,88%,52%)] font-mono">
                {t("hero.meta_est") as string}
              </span>
            </div>

            {/* Layer: Poster H1 with accent word */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-6 font-display">
              {t("hero.h1_start") as string}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(38,88%,52%)] via-[hsl(38,95%,65%)] to-[hsl(38,88%,52%)] block sm:inline">
                {t("hero.h1_accent") as string}
              </span>
            </h1>

            {/* Layer: Lede paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[hsl(38,15%,92%)]/90 font-normal leading-relaxed mb-8 max-w-2xl">
              {t("hero.subtitle") as string}
            </p>

            {/* Layer: CTA Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-extrabold uppercase tracking-wider bg-[hsl(38,88%,52%)] hover:bg-[hsl(38,95%,45%)] text-[hsl(220,20%,10%)] rounded shadow-lg shadow-[hsl(38,88%,52%)]/20 transition-all transform hover:-translate-y-0.5"
              >
                {t("hero.cta_main") as string}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:border-[hsl(38,88%,52%)]/60 hover:text-[hsl(38,88%,52%)] bg-black/40 backdrop-blur-sm rounded transition-all"
              >
                {t("hero.cta_secondary") as string}
              </a>
            </div>

            {/* Layer: 3-Item Meta Strip with hairline separators */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[hsl(38,15%,92%)]/80">
              <div className="flex items-center gap-2">
                <span className="text-[hsl(38,88%,52%)] font-bold">●</span>
                <span>{t("hero.meta_hours") as string}</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-2">
                <span className="text-[hsl(38,88%,52%)] font-bold">●</span>
                <span>{t("hero.meta_address") as string}</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-2">
                <span className="text-[hsl(38,88%,52%)] font-bold">●</span>
                <span className="font-bold text-white">{t("hero.meta_rating") as string}</span>
              </div>
            </div>
          </div>

          {/* Right Flanking Mini-Copy & Floating Badge (4 cols) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 justify-between items-end border-l border-white/10 pl-8 py-4">
            {/* Flanking Copy Left/Top */}
            <div className="bg-black/50 backdrop-blur-md p-4 rounded border border-white/10 max-w-xs text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] mb-1">
                {t("hero.flank_left_title") as string}
              </div>
              <p className="text-xs text-[hsl(220,12%,70%)] leading-snug">
                {t("hero.flank_left_desc") as string}
              </p>
            </div>

            {/* Floating Text Seal / Circular Badge (NO glyphs) */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[hsl(38,88%,52%)]/30 animate-[spin_20s_linear_infinite]" />
              <div className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] text-center p-2 font-mono">
                {t("hero.seal_text") as string}
              </div>
            </div>

            {/* Flanking Copy Right/Bottom */}
            <div className="bg-black/50 backdrop-blur-md p-4 rounded border border-white/10 max-w-xs text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] mb-1">
                {t("hero.flank_right_title") as string}
              </div>
              <p className="text-xs text-[hsl(220,12%,70%)] leading-snug">
                {t("hero.flank_right_desc") as string}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Layer: Classic Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity my-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[hsl(38,88%,52%)] font-bold font-mono">
          SCROLL
        </span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-[hsl(38,88%,52%)] to-transparent" />
      </div>
    </section>
  );
}