"use client";

import { useLocale } from '@/lib/i18n';
import { Marquee } from '@/components/motion';

export default function SocialProof() {
  const { t } = useLocale();

  const rawFeatures = t('socialProof.items') as string[];
  const features = Array.isArray(rawFeatures) ? rawFeatures : [];

  return (
    <section className="bg-[hsl(20,12%,12%)] border-y border-[hsl(38,90%,48%)]/20 py-4 overflow-hidden relative">
      <Marquee speed={25}>
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-8 mx-4">
            <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-widest text-[hsl(35,15%,92%)]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38,90%,48%)]" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
