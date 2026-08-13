"use client";

import { useLocale } from "@/lib/i18n";

interface Master {
  name: string;
  role: string;
  exp: string;
  spec: string;
}

export default function MasterTiers() {
  const { t, getObject } = useLocale();
  const team = getObject<Master[]>("mastersSection.team") || [];

  return (
    <section id="masters" className="py-24 bg-bg-dark relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
            {t("mastersSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            {t("mastersSection.title")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("mastersSection.subtitle")}
          </p>
        </div>

        {/* Oversized Statement / Pull-Quote */}
        <div className="max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded bg-bg-card border border-border-gold/40 text-center relative">
          <p className="text-lg sm:text-2xl font-serif italic text-white leading-relaxed">
            {t("mastersSection.quote")}
          </p>
          <span className="text-xs font-mono uppercase tracking-widest text-accent mt-3 block">
            {t("mastersSection.standardBrand")}
          </span>
        </div>

        {/* Stat Row of 4 Real Numerals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto text-center font-display border-y border-border-gold/30 py-6">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-accent tabular-nums">2019</div>
            <div className="text-xs font-mono text-text-muted mt-1 uppercase">{t("mastersSection.statYear")}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">15 000+</div>
            <div className="text-xs font-mono text-text-muted mt-1 uppercase">{t("mastersSection.statHaircuts")}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-accent tabular-nums">4.9</div>
            <div className="text-xs font-mono text-text-muted mt-1 uppercase">{t("mastersSection.statGoogle")}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">100%</div>
            <div className="text-xs font-mono text-text-muted mt-1 uppercase">{t("mastersSection.statSterile")}</div>
          </div>
        </div>

        {/* Typography & Color Composition Slot (Replaced speculative stock photos per strict guidelines) */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded overflow-hidden border-2 border-border-gold bg-gradient-to-br from-bg-card via-primary-light to-bg-dark p-8 sm:p-12 shadow-2xl z-10 text-center flex flex-col items-center justify-center min-h-[260px]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent mb-2">
                {t("mastersSection.compositionBadge")}
              </span>
              <div className="text-5xl sm:text-6xl font-extrabold text-gold-gradient font-display tracking-tight mb-3">
                BK-31A
              </div>
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                {t("mastersSection.compositionSub")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              {t("mastersSection.qualificationKicker")}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              {t("mastersSection.qualificationTitle")}
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {t("mastersSection.qualificationDesc")}
            </p>
            <div className="pt-2">
              <a
                href="#booking"
                className="text-xs font-bold uppercase tracking-widest text-accent hover:underline font-display inline-flex items-center gap-1 py-2 min-h-[44px]"
              >
                <span>{t("mastersSection.consultationCta")}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Real Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((master, idx) => (
            <div
              key={idx}
              className="bg-bg-card p-6 rounded border border-border-dark hover:border-accent transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-5 text-xl font-extrabold text-accent font-display group-hover:scale-105 transition-transform">
                  {master.name.slice(0, 2)}
                </div>

                <div className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest mb-1">
                  {master.role}
                </div>
                <h3 className="text-xl font-extrabold text-white font-display mb-1">
                  {master.name}
                </h3>
                <div className="text-xs text-text-muted font-mono mb-3">
                  {master.exp}
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {master.spec}
                </p>
              </div>

              <a
                href="#booking"
                className="mt-6 text-center py-3 px-3 rounded border border-border-gold text-xs font-bold uppercase tracking-wider text-accent hover:bg-gold-gradient hover:text-bg-dark transition-all font-display min-h-[44px] flex items-center justify-center"
              >
                {t("common.bookAction")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}