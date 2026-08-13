"use client";

import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { getObject } = useLocale();
  const tickerItems = getObject<string[]>("socialProof.tickerItems") || [
    "БАРБЕРШОП НА ШЕВЧЕНКА 31А",
    "674 ВІДГУКИ В GOOGLE MAPS",
    "ПРИВАТНИЙ ПАРКІНГ ДЛЯ ГОСТЕЙ",
    "ЧАСТУВАННЯ ВІСКІ ТА КАВОЮ",
    "ВЛАСНА TATTOO ROOM У БАРБЕРШОПІ",
    "3-ЕТАПНА СТЕРИЛІЗАЦІЯ ІНСТРУМЕНТІВ"
  ];

  return (
    <section className="bg-primary-light border-y border-border-gold/40 py-3.5 overflow-hidden relative z-20">
      <Marquee speed={35}>
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-5 shrink-0">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase font-display">
              {item}
            </span>
            <span className="text-accent text-[10px] font-mono">◆</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}