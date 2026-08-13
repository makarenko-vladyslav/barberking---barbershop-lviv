"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const rawFaq = t('faq.items') as FAQItem[];
  const faqList = Array.isArray(rawFaq) ? rawFaq : [];

  return (
    <section id="faq" className="py-24 bg-[hsl(20,15%,8%)] relative overflow-hidden scroll-mt-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
              {String(t('faq.kicker'))}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              {String(t('faq.h2'))}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-[hsl(20,12%,12%)] border border-white/10 rounded-xl overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                      {item.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-base text-[hsl(38,90%,48%)] shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/5">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-white/60">
          Залишилися питання? Зателефонуйте адміністратору: {' '}
          <a href={`tel:${String(t('brand.phone')).replace(/\s+/g, '')}`} className="text-[hsl(38,90%,48%)] font-bold hover:underline">
            {String(t('brand.phone'))}
          </a>
        </div>
      </div>
    </section>
  );
}
