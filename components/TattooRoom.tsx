"use client";

import { useLocale } from "@/lib/i18n";

export default function TattooRoom() {
  const { t } = useLocale();

  return (
    <section id="tattoo" className="py-24 bg-primary-light relative border-y border-border-gold/30 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block">
              {t("tattooSection.kicker")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display leading-tight">
              {t("tattooSection.title")}
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              {t("tattooSection.subtitle")}
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded bg-bg-card border border-border-dark flex gap-4 items-start">
                <span className="text-accent font-mono font-bold text-sm">01</span>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t("tattooSection.feature1Title")}
                  </h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {t("tattooSection.feature1Desc")}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded bg-bg-card border border-border-dark flex gap-4 items-start">
                <span className="text-accent font-mono font-bold text-sm">02</span>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t("tattooSection.feature2Title")}
                  </h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {t("tattooSection.feature2Desc")}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded bg-bg-card border border-border-dark flex gap-4 items-start">
                <span className="text-accent font-mono font-bold text-sm">03</span>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t("tattooSection.feature3Title")}
                  </h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {t("tattooSection.feature3Desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="#booking"
                className="bg-gold-gradient text-bg-dark font-display font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-lg hover:brightness-110 transition-all min-h-[44px] flex items-center justify-center"
              >
                {t("tattooSection.ctaTattoo")}
              </a>
              <a
                href="tel:+380662636339"
                className="text-xs font-mono text-accent hover:underline py-2 min-h-[44px] flex items-center"
              >
                {t("tattooSection.consultPrefix")} +380 66 263 6339
              </a>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6 relative">
            <div className="rounded border-2 border-border-gold overflow-hidden shadow-2xl relative group">
              <img
                src="https://images.pexels.com/photos/36641345/pexels-photo-36641345.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt={t("tattooSection.imageAlt")}
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-bg-dark/95 backdrop-blur-md border border-border-gold">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                  {t("tattooSection.imageKicker")}
                </span>
                <p className="text-xs text-text-main font-medium mt-1">
                  {t("tattooSection.imageSub")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}