"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();
  const [selectedServices, setSelectedServices] = useState<string[]>(["haircut"]);
  const [selectedMaster, setSelectedMaster] = useState<string>("barber");

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const masterObj = pricingData.masters.find((m) => m.id === selectedMaster) || pricingData.masters[0];

  const totalBase = selectedServices.reduce((acc, serviceId) => {
    const s = pricingData.services.find((item) => item.id === serviceId);
    return acc + (s ? s.basePrice : 0);
  }, 0);

  const calculatedTotal = Math.round(totalBase * masterObj.multiplier);

  const formatMoney = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");

  return (
    <section id="calculator" className="py-24 bg-primary-light border-y border-border-gold/30 scroll-mt-16 relative overflow-hidden">
      {/* Watermark type */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-5 z-0"
      >
        <span className="font-display font-black text-[20vw] text-accent tracking-tighter whitespace-nowrap leading-none">
          РОЗРАХУНОК
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
            {t("calculatorSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            {t("calculatorSection.title")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("calculatorSection.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Step 1: Select Services */}
          <div className="lg:col-span-7 bg-bg-card p-6 sm:p-8 rounded border border-border-dark space-y-6">
            <div className="flex items-center justify-between border-b border-border-dark pb-3">
              <h3 className="text-base font-bold text-white font-display uppercase tracking-wider">
                {t("calculatorSection.selectServices")}
              </h3>
              <span className="text-[10px] font-mono text-accent">{t("calculatorSection.selectMin1")}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pricingData.services.map((srv) => {
                const isSelected = selectedServices.includes(srv.id);
                return (
                  <button
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`p-3.5 rounded text-left border transition-all flex flex-col justify-between min-h-[44px] ${
                      isSelected
                        ? "bg-accent/15 border-accent text-white"
                        : "bg-bg-dark/70 border-border-dark text-text-muted hover:border-text-muted"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-bold font-display">{srv.title}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isSelected ? "bg-accent text-bg-dark font-bold" : "bg-bg-dark text-text-muted"
                        }`}
                      >
                        {isSelected ? t("calculatorSection.tagYes") : "+"}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs font-mono">
                      <span className="text-text-muted">{srv.duration}</span>
                      <span className="font-bold text-accent font-display tabular-nums">
                        {formatMoney(srv.basePrice)} {t("common.currency")}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step 2: Master Level */}
            <div className="pt-4 border-t border-border-dark">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  {t("calculatorSection.selectMaster")}
                </h3>
                <span className="text-[10px] font-mono text-text-muted">{t("calculatorSection.expCoefficient")}</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {pricingData.masters.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMaster(m.id)}
                    className={`py-3 px-2 rounded text-center border text-xs font-bold font-display transition-all min-h-[44px] ${
                      selectedMaster === m.id
                        ? "bg-gold-gradient text-bg-dark border-accent"
                        : "bg-bg-dark border-border-dark text-text-muted hover:text-white"
                    }`}
                  >
                    <div className="uppercase">{m.name}</div>
                    <div className="text-[10px] font-mono font-normal opacity-80 mt-0.5">{m.experience}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-bg-dark p-6 sm:p-8 rounded border-2 border-accent sticky top-24 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-border-dark pb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                {t("calculatorSection.summaryBadge")}
              </span>
              <span className="text-[10px] font-mono text-text-muted">{t("common.addressShort")}</span>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-text-muted uppercase tracking-wider font-mono">
                {t("calculatorSection.totalEstimate")}
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-gold-gradient font-display tabular-nums">
                {formatMoney(calculatedTotal)} {t("common.currency")}
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {t("calculatorSection.masterLabel")} <strong className="text-white">{masterObj.name}</strong> ({masterObj.description})
              </p>
            </div>

            <div className="pt-4 border-t border-border-dark space-y-2">
              <div className="text-xs text-text-muted font-mono">{t("calculatorSection.selectedList")}</div>
              <ul className="text-xs space-y-1.5 text-text-main font-medium">
                {selectedServices.map((id) => {
                  const s = pricingData.services.find((item) => item.id === id);
                  return s ? (
                    <li key={id} className="flex justify-between">
                      <span>• {s.title}</span>
                      <span className="font-mono text-accent">{s.duration}</span>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="block w-full text-center bg-gold-gradient text-bg-dark font-display font-extrabold text-xs uppercase tracking-wider py-4 rounded shadow-lg hover:brightness-110 transition-all mb-3 min-h-[44px] flex items-center justify-center"
              >
                {t("calculatorSection.btnLockPrice")}
              </a>
              <div className="text-center text-[10px] font-mono text-text-muted">
                {t("calculatorSection.parkingNote")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}