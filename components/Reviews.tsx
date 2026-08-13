"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export default function Reviews() {
  const { t, getObject } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = getObject<Review[]>("reviewsSection.reviews") || [];

  return (
    <section id="reviews" className="py-24 bg-bg-dark relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
            {t("reviewsSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            {t("reviewsSection.title")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("reviewsSection.subtitle")}
          </p>
        </div>

        {/* Featured Display Quote Block with Oversized Quote Mark */}
        {reviews.length > 0 && (
          <div className="max-w-4xl mx-auto mb-14 p-8 sm:p-10 rounded bg-bg-card border-2 border-border-gold relative overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute top-2 left-4 text-8xl font-serif text-accent/15 select-none pointer-events-none leading-none"
            >
              «
            </span>

            <div className="relative z-10 space-y-4">
              <p className="text-lg sm:text-2xl font-display font-bold text-white leading-relaxed">
                "{reviews[activeIdx].text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-border-dark">
                <div>
                  <div className="text-sm font-bold text-accent font-display">
                    {reviews[activeIdx].name}
                  </div>
                  <div className="text-xs text-text-muted font-mono">
                    {reviews[activeIdx].date}
                  </div>
                </div>

                <div className="text-xs font-mono text-gold-gradient font-bold">
                  {t("reviewsSection.googleVerified")}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Carousel DOT Indicators & Slide Selector */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center ${
                activeIdx === idx
                  ? "w-8 h-2.5 bg-accent"
                  : "w-2.5 h-2.5 bg-border-dark hover:bg-text-muted"
              }`}
            />
          ))}
          <span className="text-xs font-mono text-text-muted ml-3">
            0{activeIdx + 1} / 0{reviews.length}
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`p-6 rounded bg-bg-card border cursor-pointer transition-all flex flex-col justify-between ${
                activeIdx === idx ? "border-accent shadow-lg" : "border-border-dark hover:border-text-muted"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {rev.name}
                    </h3>
                    <span className="text-xs text-text-muted font-mono">{rev.date}</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-accent">
                    5.0 / 5.0
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border-dark/60 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>{t("reviewsSection.cardMapNote")}</span>
                <span className="text-accent font-bold">{t("reviewsSection.cardConfirmed")}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps?cid=855889960538363367"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent border border-border-gold px-6 py-4 rounded hover:bg-accent/10 transition-colors font-display min-h-[44px]"
          >
            <span>{t("reviewsSection.readAllBtn")}</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}