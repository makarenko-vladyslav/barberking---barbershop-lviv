"use client";

import { useLocale } from "@/lib/i18n";

export default function TattooRoom() {
  const { t } = useLocale();

  return (
    <section id="tattoo" className="scroll-mt-20 py-24 bg-[hsl(220,18%,14%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Side (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
              {t("tattoo.kicker") as string}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-6 font-display">
              {t("tattoo.title") as string}
            </h2>
            <p className="text-xs sm:text-sm text-[hsl(220,12%,70%)] leading-relaxed mb-8">
              {t("tattoo.desc") as string}
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded bg-[hsl(220,22%,8%)] border border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">
                  {t("tattoo.feature_1") as string}
                </span>
                <span className="text-xs font-mono text-[hsl(38,88%,52%)]">{t("tattoo.badge_sterile") as string}</span>
              </div>
              <div className="p-4 rounded bg-[hsl(220,22%,8%)] border border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">
                  {t("tattoo.feature_2") as string}
                </span>
                <span className="text-xs font-mono text-[hsl(38,88%,52%)]">{t("tattoo.badge_custom") as string}</span>
              </div>
              <div className="p-4 rounded bg-[hsl(220,22%,8%)] border border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">
                  {t("tattoo.feature_3") as string}
                </span>
                <span className="text-xs font-mono text-[hsl(38,88%,52%)]">{t("tattoo.badge_coverup") as string}</span>
              </div>
            </div>

            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-extrabold uppercase tracking-wider bg-[hsl(38,88%,52%)] hover:bg-[hsl(38,95%,45%)] text-[hsl(220,20%,10%)] rounded shadow-lg transition-all"
            >
              {t("tattoo.cta") as string}
            </a>
          </div>

          {/* Right Image Container (5 cols) */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.pexels.com/photos/9258291/pexels-photo-9258291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt={t("tattoo.img_alt") as string}
              loading="lazy"
              className="w-full h-[400px] sm:h-[480px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-black/70 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] block mb-1 font-mono">
                {t("tattoo.img_kicker") as string}
              </span>
              <span className="text-xs text-white/80">
                {t("tattoo.img_desc") as string}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
