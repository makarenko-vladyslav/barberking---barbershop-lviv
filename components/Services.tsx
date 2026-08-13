"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  price: string;
  time: string;
  tag?: string;
  desc: string;
  photo: string;
}

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<string>('all');

  const rawServices = t('services.items') as ServiceItem[];
  const servicesList = Array.isArray(rawServices) ? rawServices : [];

  const filteredServices = activeTab === 'all'
    ? servicesList
    : servicesList.filter((s) => s.category === activeTab);

  const tabs = [
    { key: 'all', label: String(t('services.tabs.all')) },
    { key: 'hair', label: String(t('services.tabs.hair')) },
    { key: 'beard', label: String(t('services.tabs.beard')) },
    { key: 'care', label: String(t('services.tabs.care')) },
    { key: 'tattoo', label: String(t('services.tabs.tattoo')) },
  ];

  return (
    <section id="services" className="py-24 bg-[hsl(20,15%,8%)] relative overflow-hidden scroll-mt-16 border-t border-white/10">
      {/* Background Watermark */}
      <div 
        className="absolute top-1/3 -right-20 font-display font-black text-[15vw] text-white/[0.02] uppercase tracking-tighter pointer-events-none select-none"
        aria-hidden="true"
      >
        {String(t('services.watermark'))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layer 1 & 2 & 3: Kicker + Heading + Lede */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
              {String(t('services.kicker'))}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {String(t('services.h2'))}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-white/70">
              {String(t('services.subtitle'))}
            </p>
          </Reveal>
        </div>

        {/* Layer 4: Category Tabs */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 min-h-[44px] flex items-center justify-center rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all border ${
                  activeTab === tab.key
                    ? 'bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)] border-[hsl(38,90%,48%)] shadow-md'
                    : 'bg-white/5 text-white/80 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Layer 5: Price Rows with Photos + Dotted Leader + Tabular Price */}
        <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const isSignature = service.id === 'combo';
            return (
              <StaggerItem key={service.id}>
                <div 
                  className={`border rounded-xl overflow-hidden transition-all duration-300 flex flex-col sm:flex-row group h-full relative ${
                    isSignature 
                      ? 'bg-[hsl(20,12%,14%)] border-[hsl(38,90%,48%)]/60 shadow-xl' 
                      : 'bg-[hsl(20,12%,12%)] border-white/10 hover:border-[hsl(38,90%,48%)]/40'
                  }`}
                >
                  {/* Distinct Photo Media */}
                  <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden shrink-0">
                    <img
                      src={service.photo}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[hsl(20,15%,8%)]/90 backdrop-blur-sm rounded text-[10px] font-bold uppercase tracking-wider text-[hsl(38,90%,48%)] border border-[hsl(38,90%,48%)]/30">
                      {service.time}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      {/* Micro-tag */}
                      {service.tag && (
                        <span className="inline-block px-2.5 py-0.5 rounded bg-[hsl(38,90%,48%)]/15 border border-[hsl(38,90%,48%)]/30 text-[9px] font-bold uppercase tracking-widest text-[hsl(38,90%,58%)] mb-2">
                          {service.tag}
                        </span>
                      )}

                      {/* Header + Leader Line + Tabular Price */}
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-[hsl(38,90%,48%)] transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex-grow border-b border-dotted border-white/20 mx-2 hidden sm:block" />
                        <span className="font-mono font-extrabold text-base text-[hsl(38,90%,48%)] shrink-0">
                          {service.price}
                        </span>
                      </div>

                      <p className="text-xs text-white/70 leading-relaxed mb-4">
                        {service.desc}
                      </p>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-bold uppercase tracking-wider text-[hsl(38,90%,48%)] hover:text-white transition-colors pt-3 border-t border-white/10 mt-auto"
                    >
                      <span>{String(t('services.bookCta'))}</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Layer 8 & 9: Footnote Line + Secondary CTA */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center sm:text-left">
            {String(t('services.footnote'))}
          </p>
          <a
            href="#calculator"
            className="text-[hsl(38,90%,48%)] hover:underline font-bold uppercase tracking-wider shrink-0 py-2"
          >
            {String(t('services.calcLink'))} ↓
          </a>
        </div>
      </div>
    </section>
  );
}
