"use client";

import { useLocale } from "@/lib/i18n";

export default function Portfolio() {
  const { t } = useLocale();

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/7518739/pexels-photo-7518739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      title: t("portfolioSection.items.0"),
    },
    {
      src: "https://images.pexels.com/photos/7518689/pexels-photo-7518689.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      title: t("portfolioSection.items.1"),
    },
    {
      src: "https://images.pexels.com/photos/18186517/pexels-photo-18186517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      title: t("portfolioSection.items.2"),
    },
    {
      src: "https://images.pexels.com/photos/38769685/pexels-photo-38769685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      title: t("portfolioSection.items.3"),
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-primary-light border-y border-border-gold/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
            {t("portfolioSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            {t("portfolioSection.title")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("portfolioSection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded border border-border-dark overflow-hidden bg-bg-card group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 text-[10px] font-mono bg-bg-dark/80 text-accent px-2 py-0.5 rounded">
                  #0{idx + 1}
                </div>
              </div>
              <div className="p-4 bg-bg-card border-t border-border-dark">
                <h3 className="text-sm font-bold text-white font-display">
                  {img.title}
                </h3>
                <span className="text-[10px] font-mono text-text-muted block mt-1">
                  {t("portfolioSection.locationBadge")}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="text-xs font-bold uppercase tracking-widest text-accent hover:underline font-display inline-flex items-center gap-1 py-2 min-h-[44px]"
          >
            <span>{t("portfolioSection.ctaBook")}</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}