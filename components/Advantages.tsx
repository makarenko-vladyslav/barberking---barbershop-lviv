"use client";

import { useLocale } from "@/lib/i18n";

interface AdvantageItem {
  num: string;
  title: string;
  desc: string;
}

export default function Advantages() {
  const { t } = useLocale();
  const items = (t("advantages.items") as AdvantageItem[]) || [];

  return (
    <section id="advantages" className="scroll-mt-20 py-24 bg-[hsl(220,22%,8%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("advantages.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("advantages.title") as string}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-[hsl(220,18%,13%)] border border-white/5 relative overflow-hidden group hover:border-[hsl(38,88%,52%)]/50 transition-all duration-300"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] mb-3 font-mono">
                СТАНДАРТ 0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}