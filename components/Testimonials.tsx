"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface Review {
  author: string;
  date: string;
  text: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const reviews = (t("reviews.list") as Review[]) || [];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="reviews" className="scroll-mt-20 py-24 bg-[hsl(220,18%,14%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("reviews.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("reviews.title") as string}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)] font-mono">
            {t("reviews.rating_source") as string}
          </p>
        </div>

        {/* Featured Pull Quote Block */}
        <div className="mb-16 p-8 sm:p-12 rounded-2xl bg-[hsl(220,22%,8%)] border border-[hsl(38,88%,52%)]/30 text-center max-w-4xl mx-auto relative shadow-2xl">
          <div className="text-6xl text-[hsl(38,88%,52%)]/30 font-serif leading-none absolute top-4 left-6 select-none">
            “
          </div>
          <p className="text-base sm:text-xl font-bold font-display uppercase tracking-wide text-white leading-relaxed mb-6 relative z-10">
            {t("reviews.featured_quote") as string}
          </p>
          <div className="text-xs font-extrabold uppercase tracking-widest text-[hsl(38,88%,52%)] font-mono">
            {t("reviews.featured_author") as string}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[hsl(220,22%,8%)] border border-white/5 flex flex-col justify-between hover:border-[hsl(38,88%,52%)]/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[hsl(38,88%,52%)] font-mono">
                    5.0 / 5.0
                  </span>
                  <span className="text-[10px] text-[hsl(220,12%,50%)] font-mono">
                    {r.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[hsl(220,12%,70%)] leading-relaxed italic mb-6">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-white font-display">
                  {r.author}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[hsl(38,88%,52%)]/80 bg-[hsl(38,88%,52%)]/10 px-2 py-0.5 rounded font-mono">
                  Google Maps
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DOT Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {reviews.slice(0, 4).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === idx
                  ? "w-8 bg-[hsl(38,88%,52%)]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`${t("reviews.slide_aria") as string} ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
