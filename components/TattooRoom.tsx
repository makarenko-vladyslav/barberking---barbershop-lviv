"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function TattooRoom({ onBookTattoo }: { onBookTattoo: () => void }) {
  const { t } = useLocale();

  return (
    <section id="tattoo" className="py-24 bg-surface border-y border-surface-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
              {String(t("tattoo.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
              {String(t("tattoo.title"))}
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              {String(t("tattoo.subtitle"))}
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-text-main">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span>{String(t("tattoo.feature1"))}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-main">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span>{String(t("tattoo.feature2"))}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-main">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span>{String(t("tattoo.feature3"))}</span>
              </li>
            </ul>

            <button
              onClick={onBookTattoo}
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-accent/20 active:scale-95"
            >
              {String(t("tattoo.cta"))}
            </button>
          </Reveal>

          <Reveal delay={0.2} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-surface-border shadow-2xl aspect-[4/3]">
              <img
                src="https://lviv.bking.com.ua/wp-content/themes/bking/images/price-banner.jpg"
                alt="Tattoo Room Barberking Lviv"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/90 backdrop-blur-md border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                  TATTOO ROOM STUDIO
                </span>
                <span className="text-xs text-text-muted">
                  вул. Шевченка 31А, Львів
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
