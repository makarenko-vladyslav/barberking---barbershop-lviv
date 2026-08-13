"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary border-t border-surface-border text-text-muted pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary font-black text-xl">
                BK
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-white uppercase">
                BARBERKING
              </span>
            </div>
            <p className="text-xs leading-relaxed text-text-muted">
              {String(t("footer.desc"))}
            </p>
            <div className="text-xs text-accent font-bold uppercase tracking-wider pt-2">
              {String(t("footer.brandVoice"))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-wider mb-4">
              {String(t("footer.quickLinks"))}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-accent transition-colors">{String(t("nav.services"))}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">{String(t("nav.calculator"))}</a></li>
              <li><a href="#advantages" className="hover:text-accent transition-colors">{String(t("nav.advantages"))}</a></li>
              <li><a href="#tattoo" className="hover:text-accent transition-colors">{String(t("nav.tattoo"))}</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">{String(t("nav.team"))}</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">{String(t("nav.reviews"))}</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-wider mb-4">
              {String(t("footer.contacts"))}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-white font-medium">м. Львів, вул. Шевченка 31А</li>
              <li><a href="tel:+380662636339" className="hover:text-accent transition-colors">+380 66 263 6339</a></li>
              <li>barberking.lv@gmail.com</li>
              <li className="text-accent font-bold pt-2">10:00 – 21:00 Без вихідних</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-wider mb-4">
              Соціальні мережі
            </h4>
            <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider">
              <a
                href="https://www.instagram.com/barberking_kh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-2"
              >
                <span>INSTAGRAM</span>
                <span>→</span>
              </a>
              <a
                href="https://www.facebook.com/BarberKingkh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-2"
              >
                <span>FACEBOOK</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 mb-8">
          <div>{String(t("footer.legal"))}</div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors underline underline-offset-4"
            >
              {String(t("footer.developer"))}
            </a>
          </div>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
        <div className="pt-4 text-center select-none pointer-events-none aria-hidden overflow-hidden -mb-10">
          <span className="text-[14vw] font-display font-black uppercase leading-none tracking-widest text-white/[0.04] whitespace-nowrap block">
            {String(t("footer.wordmark"))}
          </span>
        </div>
      </div>
    </footer>
  );
}
