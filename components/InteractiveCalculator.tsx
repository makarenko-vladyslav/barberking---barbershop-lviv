"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import { Reveal } from '@/components/motion';

interface InteractiveCalculatorProps {
  onOpenBooking: () => void;
}

export default function InteractiveCalculator({ onOpenBooking }: InteractiveCalculatorProps) {
  const { t } = useLocale();

  const [selectedService, setSelectedService] = useState<'haircut' | 'beard' | 'combo' | 'shave'>('combo');
  const [addons, setAddons] = useState<string[]>(['greyCamouflageHair']);
  const [selectedDrink, setSelectedDrink] = useState<string>(pricing.drinks[0]);

  const servicePrices = {
    combo: { name: String(t('calculator.srvCombo')), price: pricing.basePrices.combo, time: 75 },
    haircut: { name: String(t('calculator.srvHaircut')), price: pricing.basePrices.haircut, time: 50 },
    beard: { name: String(t('calculator.srvBeard')), price: pricing.basePrices.beard, time: 40 },
    shave: { name: String(t('calculator.srvShave')), price: pricing.basePrices.shave, time: 45 },
  };

  const addonOptions = [
    { key: 'greyCamouflageHair', name: String(t('calculator.addonHair')), price: pricing.addons.greyCamouflageHair, time: 20 },
    { key: 'waxing', name: String(t('calculator.addonWax')), price: pricing.addons.waxing, time: 10 },
    { key: 'blackMask', name: String(t('calculator.addonMask')), price: pricing.addons.blackMask, time: 15 },
  ];

  const toggleAddon = (key: string) => {
    setAddons((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const baseServiceCost = servicePrices[selectedService].price;
  const baseServiceTime = servicePrices[selectedService].time;

  const addonsCost = addons.reduce((sum, key) => {
    const item = addonOptions.find((a) => a.key === key);
    return sum + (item ? item.price : 0);
  }, 0);

  const addonsTime = addons.reduce((sum, key) => {
    const item = addonOptions.find((a) => a.key === key);
    return sum + (item ? item.time : 0);
  }, 0);

  const totalPrice = baseServiceCost + addonsCost;
  const totalTime = baseServiceTime + addonsTime;

  return (
    <section id="calculator" className="py-24 bg-[hsl(20,12%,12%)] relative overflow-hidden border-t border-white/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
              {String(t('calculator.kicker'))}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {String(t('calculator.h2'))}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-white/70">
              {String(t('calculator.subtitle'))}
            </p>
          </Reveal>
        </div>

        <div className="bg-[hsl(20,15%,8%)] border border-[hsl(38,90%,48%)]/30 rounded-2xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls - Left 2 Columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Main Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,90%,48%)] mb-3">
                01 · {String(t('calculator.selectService'))}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(servicePrices) as Array<keyof typeof servicePrices>).map((key) => {
                  const s = servicePrices[key];
                  const active = selectedService === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedService(key)}
                      className={`p-4 min-h-[44px] rounded-xl border text-left transition-all flex items-center justify-between ${
                        active
                          ? 'bg-[hsl(38,90%,48%)]/15 border-[hsl(38,90%,48%)] text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-white/70 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-display font-bold text-sm uppercase">{s.name}</div>
                        <div className="text-xs text-white/50">{s.time} {String(t('calculator.minutesLabel'))}</div>
                      </div>
                      <div className="font-mono font-bold text-sm text-[hsl(38,90%,48%)]">
                        {s.price} UAH
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,90%,48%)] mb-3">
                02 · {String(t('calculator.selectAddons'))}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {addonOptions.map((addon) => {
                  const active = addons.includes(addon.key);
                  return (
                    <button
                      key={addon.key}
                      onClick={() => toggleAddon(addon.key)}
                      className={`p-3.5 min-h-[44px] rounded-xl border text-left transition-all ${
                        active
                          ? 'bg-[hsl(38,90%,48%)]/20 border-[hsl(38,90%,48%)] text-white'
                          : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold uppercase">{addon.name}</span>
                        <span className="font-mono text-xs font-bold text-[hsl(38,90%,48%)]">+{addon.price} UAH</span>
                      </div>
                      <div className="text-[10px] text-white/40">+{addon.time} {String(t('calculator.minShort'))}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Complimentary Drink */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,90%,48%)] mb-3">
                03 · {String(t('calculator.selectDrink'))}
              </label>
              <div className="flex flex-wrap gap-2">
                {pricing.drinks.map((drink) => (
                  <button
                    key={drink}
                    onClick={() => setSelectedDrink(drink)}
                    className={`px-4 py-2.5 min-h-[44px] flex items-center justify-center rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedDrink === drink
                        ? 'bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)] border-[hsl(38,90%,48%)]'
                        : 'bg-white/5 text-white/70 border-white/10 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {drink}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card - Right 1 Column */}
          <div className="bg-[hsl(20,12%,12%)] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white border-b border-white/10 pb-3 mb-6">
                {String(t('calculator.summaryTitle'))}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-baseline text-xs text-white/80">
                  <span>{String(t('calculator.mainServiceLabel'))}</span>
                  <span className="font-bold text-white text-right">{servicePrices[selectedService].name}</span>
                </div>

                {addons.length > 0 && (
                  <div className="flex justify-between items-start text-xs text-white/80 border-t border-white/5 pt-2">
                    <span>{String(t('calculator.extraCareLabel'))}</span>
                    <span className="font-bold text-white text-right">
                      {addons.map((a) => addonOptions.find((opt) => opt.key === a)?.name).join(', ')}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-baseline text-xs text-white/80 border-t border-white/5 pt-2">
                  <span>{String(t('calculator.drinkLabel'))}</span>
                  <span className="font-bold text-[hsl(38,90%,48%)]">{selectedDrink} ({String(t('calculator.freeLabel'))})</span>
                </div>

                <div className="flex justify-between items-baseline text-xs text-white/80 border-t border-white/5 pt-2">
                  <span>{String(t('calculator.timeLabel'))}</span>
                  <span className="font-mono font-bold text-white">~{totalTime} {String(t('calculator.minutesLabel'))}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/15 pt-6 mt-4">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-xs uppercase tracking-wider text-white/60">
                  {String(t('calculator.totalLabel'))}
                </span>
                <span className="font-mono font-extrabold text-3xl text-[hsl(38,90%,48%)]">
                  {totalPrice} UAH
                </span>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-4 min-h-[44px] bg-[hsl(38,90%,48%)] hover:bg-[hsl(38,95%,58%)] text-[hsl(20,15%,10%)] font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg text-center active:scale-95"
              >
                {String(t('calculator.bookNow'))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
