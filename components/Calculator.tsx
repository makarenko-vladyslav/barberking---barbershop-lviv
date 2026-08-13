"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedServiceId, setSelectedServiceId] = useState(pricingData.services[0].id);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const currentService = pricingData.services.find((s) => s.id === selectedServiceId) || pricingData.services[0];

  const extrasCost = selectedExtras.reduce((sum, extraId) => {
    const item = pricingData.extras.find((e) => e.id === extraId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = currentService.price + extrasCost;
  const totalMinutes = currentService.durationMinutes + selectedExtras.length * 15;

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  return (
    <section id="calculator" className="scroll-mt-20 py-24 bg-[hsl(220,18%,14%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("calculator.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("calculator.title") as string}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)] max-w-xl mx-auto">
            {t("calculator.subtitle") as string}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[hsl(220,22%,8%)] border border-[hsl(38,88%,52%)]/30 rounded-xl p-6 sm:p-10 shadow-2xl">
          {/* Core Service Selection */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-4 font-mono">
              {t("calculator.select_service") as string}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pricingData.services.map((srv) => {
                const active = srv.id === selectedServiceId;
                return (
                  <button
                    type="button"
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3.5 text-left rounded border transition-all text-xs font-medium flex flex-col justify-between ${
                      active
                        ? "bg-[hsl(38,88%,52%)]/15 border-[hsl(38,88%,52%)] text-white font-bold"
                        : "bg-[hsl(220,18%,13%)] border-white/5 text-[hsl(220,12%,70%)] hover:border-white/20"
                    }`}
                  >
                    <span>{srv.name}</span>
                    <span className="mt-2 text-[hsl(38,88%,52%)] font-extrabold text-sm tabular-nums">
                      від {srv.price} {pricingData.currency}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Extras Selection */}
          <div className="mb-10">
            <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-4 font-mono">
              {t("calculator.select_extras") as string}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pricingData.extras.map((extra) => {
                const checked = selectedExtras.includes(extra.id);
                return (
                  <button
                    type="button"
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`p-3.5 text-left rounded border transition-all text-xs flex items-center justify-between ${
                      checked
                        ? "bg-[hsl(38,88%,52%)]/20 border-[hsl(38,88%,52%)] text-white font-bold"
                        : "bg-[hsl(220,18%,13%)] border-white/5 text-[hsl(220,12%,70%)] hover:border-white/20"
                    }`}
                  >
                    <span>{extra.name}</span>
                    <span className="text-[hsl(38,88%,52%)] font-extrabold tabular-nums">
                      +{extra.price} {pricingData.currency}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculator Results Summary */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[hsl(220,18%,13%)] p-6 rounded-lg">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[hsl(220,12%,60%)] mb-1 font-mono">
                {t("calculator.total_price") as string}
              </div>
              <div className="text-3xl font-extrabold text-[hsl(38,88%,52%)] font-display tabular-nums">
                {totalPrice} {pricingData.currency}
              </div>
              <div className="text-xs text-[hsl(220,12%,65%)] mt-1 font-mono">
                {t("calculator.total_time") as string} ~{totalMinutes} {t("calculator.minutes") as string}
              </div>
            </div>

            <a
              href="#booking"
              className="w-full sm:w-auto text-center px-8 py-4 text-xs font-extrabold uppercase tracking-wider bg-[hsl(38,88%,52%)] hover:bg-[hsl(38,95%,45%)] text-[hsl(220,20%,10%)] rounded shadow-lg transition-all"
            >
              {t("calculator.book_this") as string}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}