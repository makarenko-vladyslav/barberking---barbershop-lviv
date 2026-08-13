"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t, getObject } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const items = getObject<FAQItem[]>("faqSection.items") || [];

  return (
    <section id="faq" className="py-24 bg-primary-light border-y border-border-gold/30 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
            {t("faqSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {t("faqSection.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded bg-bg-card border border-border-dark overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-white font-display">
                    {item.q}
                  </span>
                  <span className="text-accent text-lg font-bold font-mono shrink-0">
                    {isOpen ? "[ − ]" : "[ + ]"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-border-dark/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
