"use client";

import { useLocale } from "@/lib/i18n";

interface Amenity {
  title: string;
  desc: string;
}

export default function Amenities() {
  const { t, getObject } = useLocale();
  const items = getObject<Amenity[]>("amenitiesSection.items") || [];

  return (
    <section id="amenities" className="py-24 bg-bg-dark relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
            {t("amenitiesSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            {t("amenitiesSection.title")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("amenitiesSection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-bg-card border border-border-dark hover:border-accent transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-mono font-extrabold text-accent mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-dark/40 text-[10px] font-mono text-text-muted">
                Вул. Шевченка 31А
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
