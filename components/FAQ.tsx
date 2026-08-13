"use client";

import { useLocale } from "@/lib/i18n";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();
  const items = (t("faq.items") as FAQItem[]) || [];

  return (
    <section id="faq" className="scroll-mt-20 py-24 bg-[hsl(220,18%,14%)] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("faq.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight font-display">
            {t("faq.title") as string}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group p-6 rounded-lg bg-[hsl(220,22%,8%)] border border-white/5 [&_summary::-webkit-details-marker]:none"
            >
              <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-white hover:text-[hsl(38,88%,52%)] transition-colors font-display">
                <span>{item.q}</span>
                <span className="ml-4 text-[hsl(38,88%,52%)] font-mono text-sm group-open:hidden">
                  [+]
                </span>
                <span className="ml-4 text-[hsl(38,88%,52%)] font-mono text-sm hidden group-open:inline">
                  [-]
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-sm text-[hsl(220,12%,65%)] leading-relaxed border-t border-white/5 pt-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}