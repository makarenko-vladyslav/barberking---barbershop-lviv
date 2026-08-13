"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function CtaBanner({ onOpenBooking }: { onOpenBooking: () => void }) {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-accent text-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
        <span className="text-[20vw] font-display font-black uppercase text-primary whitespace-nowrap">
          BOOK NOW
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <span className="text-xs font-black uppercase tracking-widest text-primary/80 mb-3 block">
            {String(t("ctaBanner.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-4">
            {String(t("ctaBanner.title"))}
          </h2>
          <p className="text-primary/90 font-medium text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {String(t("ctaBanner.subtitle"))}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-10 py-5 bg-primary text-text-main hover:bg-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{String(t("ctaBanner.button"))}</span>
              <span>→</span>
            </button>

            <a
              href="tel:+380662636339"
              className="w-full sm:w-auto px-8 py-5 border-2 border-primary/30 hover:border-primary text-primary font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              +380 66 263 6339
            </a>
          </div>

          {/* Structured Hours & Address Mini-Table */}
          <div className="max-w-xl mx-auto pt-6 border-t border-primary/20 text-xs font-medium text-primary/80 flex flex-col sm:flex-row justify-between gap-2">
            <span>Графік: Пн–Нд 10:00 – 21:00</span>
            <span>·</span>
            <span>м. Львів, вул. Шевченка 31А</span>
            <span>·</span>
            <span>Безкоштовний паркінг</span>
          </div>

          <div className="mt-4 text-[11px] text-primary/70 font-semibold tracking-wider uppercase">
            {String(t("ctaBanner.trustLine"))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
