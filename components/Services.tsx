"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryLabels: Record<string, string> = {
    all: t("services.category_all") as string,
    combo: t("services.category_combo") as string,
    haircut: t("services.category_hair") as string,
    beard: t("services.category_beard") as string,
  };

  const filteredServices = activeCategory === "all"
    ? pricingData.services
    : pricingData.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="scroll-mt-20 py-24 bg-[hsl(220,22%,8%)] relative overflow-hidden">
      {/* Background Watermark Layer */}
      <div
        className="absolute top-1/4 right-0 text-[14vw] font-black font-display text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        PRICING
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layer: Kicker, Heading, Lede */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("services.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("services.title") as string}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)] leading-relaxed max-w-2xl mx-auto">
            {t("services.subtitle") as string}
          </p>
        </div>

        {/* Layer: Category Labels / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-white/10 pb-4">
          {Object.keys(categoryLabels).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded ${
                activeCategory === cat
                  ? "bg-[hsl(38,88%,52%)] text-[hsl(220,20%,10%)] shadow-md"
                  : "bg-white/5 text-[hsl(38,15%,92%)]/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Layer: Rows with Dotted Leaders & Tabular Prices */}
        <div className="space-y-4 max-w-5xl mx-auto mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`p-5 sm:p-6 rounded-lg transition-all duration-300 border ${
                service.popular
                  ? "bg-[hsl(220,18%,14%)] border-[hsl(38,88%,52%)]/50 shadow-lg shadow-[hsl(38,88%,52%)]/5"
                  : "bg-[hsl(220,18%,12%)] border-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                {/* Title & Badge */}
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {service.name}
                  </h3>
                  {service.badge && (
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-[hsl(38,88%,52%)]/20 text-[hsl(38,88%,52%)] border border-[hsl(38,88%,52%)]/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Dotted Leader & Price */}
                <div className="hidden sm:block flex-1 mx-4 border-b border-dotted border-white/20" />

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <span className="text-xs text-[hsl(220,12%,60%)] font-mono">
                    {service.durationMinutes} {t("services.minutes_short") as string}
                  </span>
                  <span className="text-lg font-extrabold text-[hsl(38,88%,52%)] font-display tabular-nums">
                    {t("services.from") as string} {service.price} {pricingData.currency}
                  </span>
                </div>
              </div>

              {/* Description & Action Link */}
              <div className="mt-2 pt-2 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <p className="text-xs text-[hsl(220,12%,65%)] leading-relaxed">
                  {t("services.item_desc") as string}
                </p>
                <a
                  href="#booking"
                  className="text-[11px] font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] hover:underline shrink-0"
                >
                  {t("services.book_btn") as string}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Layer: Footnote Line & Secondary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded bg-[hsl(220,18%,12%)] border border-white/5 max-w-5xl mx-auto">
          <p className="text-xs text-[hsl(220,12%,65%)] text-center sm:text-left">
            {t("services.footnote") as string}
          </p>
          <a
            href="#booking"
            className="text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:border-[hsl(38,88%,52%)] px-4 py-2 rounded transition-colors whitespace-nowrap"
          >
            {t("services.cta_pdf") as string}
          </a>
        </div>
      </div>
    </section>
  );
}
