"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import { Reveal } from "@/components/motion";

export default function Calculator({ onBookCalculated }: { onBookCalculated: (summary: string) => void }) {
  const { t } = useLocale();

  const [tier, setTier] = useState<"barber" | "grand">("barber");
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["haircut"]);
  const [loyalty, setLoyalty] = useState(false);

  const optionRates: Record<string, { label: string; price: number; time: number }> = {
    haircut: { label: "Чоловіча стрижка", price: 600, time: 45 },
    beard: { label: "Стрижка та окантовка бороди", price: 450, time: 30 },
    black_mask: { label: "Маска для обличчя Black Mask", price: 300, time: 20 },
    camouflage: { label: "Камуфляж сивини", price: 350, time: 20 },
    royal_shave: { label: "Королівське гоління", price: 400, time: 40 },
  };

  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      if (selectedOptions.length > 1) {
        setSelectedOptions(selectedOptions.filter((item) => item !== id));
      }
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  let baseSum = selectedOptions.reduce((acc, curr) => acc + (optionRates[curr]?.price || 0), 0);
  let totalMinutes = selectedOptions.reduce((acc, curr) => acc + (optionRates[curr]?.time || 0), 0);

  if (tier === "grand") {
    baseSum += 100;
  }

  if (loyalty) {
    baseSum = Math.round(baseSum * 0.9);
  }

  const handleBook = () => {
    const list = selectedOptions.map((o) => optionRates[o]?.label).join(", ");
    const summary = `${list} (${tier === "grand" ? "Grand Barber" : "Барбер"}), ${baseSum} грн`;
    onBookCalculated(summary);
  };

  return (
    <section id="calculator" className="py-24 bg-surface border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {String(t("calculator.subtitle"))}
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto bg-bg-dark rounded-3xl p-6 sm:p-10 border border-surface-border shadow-2xl">
          {/* Barber Tier Selection */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
              {String(t("calculator.barberTier"))}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setTier("barber")}
                className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${
                  tier === "barber"
                    ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20"
                    : "bg-surface text-text-muted border-surface-border hover:border-text-muted"
                }`}
              >
                {String(t("calculator.tierBarber"))}
              </button>

              <button
                type="button"
                onClick={() => setTier("grand")}
                className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${
                  tier === "grand"
                    ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20"
                    : "bg-surface text-text-muted border-surface-border hover:border-text-muted"
                }`}
              >
                {String(t("calculator.tierGrand"))}
              </button>
            </div>
          </div>

          {/* Options Checklist */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
              {String(t("calculator.optionsTitle"))}
            </label>
            <div className="space-y-3">
              {Object.entries(optionRates).map(([id, opt]) => {
                const isSelected = selectedOptions.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggleOption(id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                      isSelected
                        ? "bg-accent/10 border-accent text-white"
                        : "bg-surface border-surface-border text-text-muted hover:border-text-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                          isSelected ? "bg-accent border-accent text-primary" : "border-surface-border"
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium text-sm">{opt.label}</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold">
                      <span className="text-text-muted">{opt.time} хв</span>
                      <span className="text-accent">{opt.price} грн</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Loyalty Checkbox */}
          <div className="mb-8 p-4 rounded-xl bg-surface border border-surface-border flex items-center gap-3">
            <input
              type="checkbox"
              id="loyalty"
              checked={loyalty}
              onChange={(e) => setLoyalty(e.target.checked)}
              className="w-4 h-4 accent-accent rounded cursor-pointer"
            />
            <label htmlFor="loyalty" className="text-xs font-medium text-text-main cursor-pointer">
              {String(t("calculator.loyaltyCheck"))}
            </label>
          </div>

          {/* Summary Box */}
          <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                {String(t("calculator.estimatedTime"))} <strong className="text-white">{totalMinutes} хв</strong>
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {String(t("calculator.totalPrice"))}
                </span>
                <span className="text-3xl font-display font-black text-accent tracking-tight">
                  {baseSum} грн
                </span>
              </div>
            </div>

            <button
              onClick={handleBook}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-accent/20 active:scale-95"
            >
              {String(t("calculator.bookCalculated"))}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
