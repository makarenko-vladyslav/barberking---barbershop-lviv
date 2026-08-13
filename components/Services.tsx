"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  desc: string;
  popular?: boolean;
  tag?: string;
}

export default function Services() {
  const { t, getObject } = useLocale();
  const [activeTab, setActiveTab] = useState<string>("all");

  const items = getObject<ServiceItem[]>("servicesSection.items") || [];
  const tabKeys = ["all", "hair", "shave", "combo", "care"] as const;

  const filteredItems = items.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "hair") return item.id === "1" || item.id === "5" || item.id === "8";
    if (activeTab === "shave") return item.id === "3" || item.id === "4";
    if (activeTab === "combo") return item.id === "2" || item.id === "6";
    if (activeTab === "care") return item.id === "7";
    return true;
  });

  return (
    <section id="services" className="py-24 bg-bg-dark relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
            {t("servicesSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            {t("servicesSection.title")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("servicesSection.subtitle")}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-3 rounded-sm text-xs uppercase tracking-wider font-bold transition-all font-display min-h-[44px] ${
                activeTab === key
                  ? "bg-gold-gradient text-bg-dark shadow-md"
                  : "bg-bg-card border border-border-dark text-text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t(`servicesSection.tabs.${key}`)}
            </button>
          ))}
        </div>

        {/* Price Row List Layout (Award-winning style with leader lines) */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredItems.map((service) => (
            <div
              key={service.id}
              className={`p-5 sm:p-6 rounded bg-bg-card/90 border transition-all hover:border-accent group ${
                service.popular
                  ? "border-accent bg-gradient-to-r from-bg-card via-primary-light/40 to-bg-card shadow-lg"
                  : "border-border-dark"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  {service.tag && (
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-accent/20 text-accent border border-accent/40">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Dotted leader effect for desktop */}
                <div className="hidden sm:block flex-1 mx-4 border-b border-dashed border-border-dark opacity-40" />

                <div className="flex items-baseline gap-3 shrink-0">
                  <span className="text-xs font-mono text-text-muted">{service.duration}</span>
                  <span className="text-xl font-extrabold text-accent font-display tabular-nums">
                    {service.price}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-2xl mb-4">
                {service.desc}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-border-dark/40">
                <span className="text-[10px] font-mono text-text-muted">
                  {t("servicesSection.includeWash")}
                </span>
                <a
                  href="#booking"
                  className="text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors inline-flex items-center gap-1 font-display py-2 min-h-[44px]"
                >
                  <span>{t("common.bookAction")}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Line */}
        <div className="mt-8 text-center text-xs font-mono text-text-muted max-w-3xl mx-auto">
          {t("servicesSection.footnote")}
        </div>

        {/* Media Banner Container */}
        <div className="mt-14 max-w-4xl mx-auto overflow-hidden rounded border border-border-gold/40 relative group">
          <img
            src="https://images.pexels.com/photos/7518739/pexels-photo-7518739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt={t("servicesSection.bannerAlt")}
            className="w-full h-52 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-85"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent flex flex-col justify-end p-6">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-1">
              {t("servicesSection.bannerKicker")}
            </span>
            <p className="text-sm sm:text-base text-white font-bold font-display">
              {t("servicesSection.bannerText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}