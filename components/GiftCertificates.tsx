"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function GiftCertificates({ onBuyCert }: { onBuyCert: (amount: string) => void }) {
  const { t } = useLocale();
  const [selectedAmount, setSelectedAmount] = useState("1000 грн");

  const amounts = ["500 грн", "1000 грн", "1500 грн", "2000 грн"];

  return (
    <section className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl mx-auto bg-surface rounded-3xl p-8 sm:p-12 border border-surface-border text-center relative overflow-hidden">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
            {String(t("certificates.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("certificates.title"))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {String(t("certificates.subtitle"))}
          </p>

          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-4">
              {String(t("certificates.amountTitle"))}
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`px-6 py-3 rounded-xl font-display font-bold text-sm tracking-wider border transition-all ${
                    selectedAmount === amt
                      ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20"
                      : "bg-bg-dark text-text-main border-surface-border hover:border-accent"
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => onBuyCert(selectedAmount)}
            className="px-10 py-4 bg-accent hover:bg-accent-hover text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl active:scale-95"
          >
            {String(t("certificates.buyButton"))}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
