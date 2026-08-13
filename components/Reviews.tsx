"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Carousel } from "@/components/motion";

interface ReviewItem {
  name: string;
  date: string;
  rating: number;
  text: string;
}

export default function Reviews() {
  const { t } = useLocale();
  const list = (t("reviews.list") as ReviewItem[]) || [];

  return (
    <section id="reviews" className="py-24 bg-surface border-y border-surface-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
            {String(t("reviews.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("reviews.title"))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
            {String(t("reviews.subtitle"))}
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-bg-dark border border-surface-border text-xs text-text-muted font-semibold">
            <span className="text-accent">4.9 / 5</span>
            <span>·</span>
            <span>{String(t("reviews.googleProof"))}</span>
          </div>
        </Reveal>

        {/* Featured Quote Block */}
        <Reveal delay={0.2} className="max-w-4xl mx-auto p-8 rounded-3xl bg-bg-dark border border-surface-border text-center mb-12 relative">
          <div className="text-6xl text-accent/20 font-serif leading-none absolute top-4 left-6 select-none">
            “
          </div>
          <p className="text-lg sm:text-2xl font-display font-bold text-white uppercase italic leading-relaxed mb-6 relative z-10">
            {String(t("reviews.featuredQuote"))}
          </p>
          <div className="text-xs font-bold uppercase tracking-wider text-accent">
            {String(t("reviews.featuredAuthor"))}
          </div>
        </Reveal>

        {/* Carousel Reviews */}
        <Carousel className="max-w-4xl mx-auto">
          {list.map((rev, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-bg-dark border border-surface-border text-center">
              <div className="text-accent font-extrabold text-sm tracking-widest mb-4">
                РЕТИНГ {rev.rating}.0 / 5.0
              </div>
              <p className="text-base sm:text-lg text-text-main font-medium italic leading-relaxed mb-6">
                "{rev.text}"
              </p>
              <div className="font-display font-bold text-white uppercase tracking-wider text-base">
                {rev.name}
              </div>
              <div className="text-xs text-text-muted mt-1">{rev.date}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
