"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(220,25%,5%)] border-t border-white/10 pt-16 pb-8 text-[hsl(220,12%,65%)] text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Wordmark & Tagline */}
          <div className="md:col-span-1">
            <a href="#" className="flex flex-col mb-4">
              <span className="text-2xl font-extrabold tracking-wider font-display text-white">
                BARBERKING
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[hsl(38,88%,52%)] font-semibold -mt-1 font-mono">
                БАРБЕРШОП ЛЬВІВ
              </span>
            </a>
            <p className="text-xs text-[hsl(220,12%,60%)] leading-relaxed mb-4">
              {t("footer.tagline") as string}
            </p>
            <div className="text-[11px] text-[hsl(38,88%,52%)] font-mono">
              Est. 2018 · Львів, вул. Шевченка 31А
            </div>
          </div>

          {/* Col 2: Navigation Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 font-mono">
              {t("footer.nav_title") as string}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[hsl(38,88%,52%)] transition-colors">
                  {t("nav.services") as string}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[hsl(38,88%,52%)] transition-colors">
                  {t("nav.calculator") as string}
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-[hsl(38,88%,52%)] transition-colors">
                  {t("nav.advantages") as string}
                </a>
              </li>
              <li>
                <a href="#tattoo" className="hover:text-[hsl(38,88%,52%)] transition-colors">
                  {t("nav.tattoo") as string}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[hsl(38,88%,52%)] transition-colors">
                  {t("nav.team") as string}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[hsl(38,88%,52%)] transition-colors">
                  {t("nav.reviews") as string}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 font-mono">
              {t("footer.contacts_title") as string}
            </h4>
            <ul className="space-y-2.5">
              <li className="text-white font-medium">
                м. Львів, вул. Шевченка 31А
              </li>
              <li>
                <a href="tel:+380662636339" className="text-[hsl(38,88%,52%)] font-bold hover:underline font-mono">
                  +380 66 263 6339
                </a>
              </li>
              <li>
                <a href="mailto:barberking.lv@gmail.com" className="hover:text-white transition-colors font-mono">
                  barberking.lv@gmail.com
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[hsl(220,12%,55%)]">
                Власний безкоштовний паркінг
              </li>
            </ul>
          </div>

          {/* Col 4: Hours & Socials Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 font-mono">
              {t("footer.hours_title") as string}
            </h4>
            <p className="text-white font-medium mb-3 font-mono">
              Пн–Нд: 10:00 – 21:00
            </p>

            {/* Social Text Links */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-[hsl(38,88%,52%)] uppercase mb-2">
                СОЦІАЛЬНІ МЕРЕЖІ:
              </div>
              <div className="flex flex-wrap gap-3 font-mono text-[11px]">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-[hsl(38,88%,52%)]">
                  INSTAGRAM
                </a>
                <span className="text-white/20">·</span>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-[hsl(38,88%,52%)]">
                  FACEBOOK
                </a>
                <span className="text-white/20">·</span>
                <a href="https://telegram.org" target="_blank" rel="noreferrer" className="text-white hover:text-[hsl(38,88%,52%)]">
                  TELEGRAM
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Footprint Wordmark Bleeding off Bottom Edge */}
        <div className="pt-8 pb-4 text-center overflow-hidden border-t border-white/5">
          <span className="text-6xl sm:text-8xl lg:text-[11vw] font-black font-display uppercase tracking-widest text-white/[0.04] select-none leading-none block -mb-6">
            BARBERKING
          </span>
        </div>

        {/* Legal Row & Developer Credit */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[hsl(220,12%,50%)] font-mono">
          <div>
            © 2026 Barberking — Барбершоп Львів. {t("footer.rights") as string}
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(38,88%,52%)] hover:underline font-semibold"
            >
              {t("footer.dev_credit") as string}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}