"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

interface ServiceItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  tag?: string;
  category: string;
  isSignature?: boolean;
  description: string;
}

export default function Services({ onBookService }: { onBookService: (serviceName: string) => void }) {
  const { t } = useLocale();
  const items = (t("services.items") as ServiceItem[]) || [];
  const [activeCategory, setActiveCategory] = useState<string>("Всі");

  const categories = ["Всі", "Стрижки", "Борода", "Комплекси", "Догляд"];

  const filteredItems = activeCategory === "Всі"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 pointer-events-none select-none aria-hidden overflow-hidden">
        <span className="text-9xl font-display font-black uppercase text-white/[0.02] whitespace-nowrap">
          SERVICES & PRICING
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
            {String(t("services.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("services.title"))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {String(t("services.subtitle"))}
          </p>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={0.2} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${
                activeCategory === cat
                  ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20"
                  : "bg-surface text-text-muted border-surface-border hover:border-text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Editorial Price List Rows */}
        <Stagger className="space-y-4">
          {filteredItems.map((item) => (
            <StaggerItem key={item.id}>
              <div
                className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  item.isSignature
                    ? "bg-surface/90 border-accent/50 shadow-xl shadow-accent/5"
                    : "bg-surface border-surface-border hover:border-accent/40"
                }`}
              >
                <div className="space-y-2 max-w-2xl flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-display font-extrabold uppercase tracking-wide text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                        {item.tag}
                      </span>
                    )}
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-surface-border text-text-muted">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-surface-border/60 pt-4 md:pt-0 shrink-0">
                  <div className="text-right">
                    <span className="text-2xl font-display font-black text-accent tracking-tight tabular-nums">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onBookService(item.title)}
                    className="px-5 py-2.5 bg-accent/10 hover:bg-accent hover:text-primary text-accent border border-accent/30 font-bold text-xs uppercase tracking-wider rounded-lg transition-all active:scale-95 shrink-0 flex items-center gap-1"
                  >
                    <span>Записатися</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footnote Line & Secondary CTA */}
        <Reveal delay={0.4} className="mt-12 pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>{String(t("services.footnote"))}</p>
          <a
            href="#calculator"
            className="text-accent font-bold uppercase tracking-wider hover:underline shrink-0"
          >
            Розрахувати свій комплекс у калькуляторі →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
