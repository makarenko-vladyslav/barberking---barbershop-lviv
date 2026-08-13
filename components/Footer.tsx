"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark border-t border-border-gold text-text-muted py-16 relative overflow-hidden">
      {/* Giant Full-Width Brand Wordmark Bleeding Off Edge (7 & 8-Layer Compliance) */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden select-none pointer-events-none border-b border-border-dark/60 pb-4 mb-12"
      >
        <span className="font-display font-black text-[13vw] text-accent/10 leading-none whitespace-nowrap block tracking-tighter">
          BARBERKING LVIV
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-dark">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="font-display font-extrabold text-2xl tracking-wider text-white block">
              BARBERKING
            </span>
            <p className="text-xs leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="text-xs text-accent font-bold font-mono">
              {t("common.address")}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-xs font-display">
              <li><a href="#services" className="hover:text-accent transition-colors py-1 inline-block">{t("footer.navServices")}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors py-1 inline-block">{t("footer.navCalculator")}</a></li>
              <li><a href="#masters" className="hover:text-accent transition-colors py-1 inline-block">{t("footer.navMasters")}</a></li>
              <li><a href="#tattoo" className="hover:text-accent transition-colors py-1 inline-block">{t("footer.navTattoo")}</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors py-1 inline-block">{t("footer.navReviews")}</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Phone */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display mb-4">
              {t("footer.hoursTitle")}
            </h4>
            <div className="text-xs space-y-2">
              <p className="text-white font-medium">{t("footer.hoursVal")}</p>
              <a href="tel:+380662636339" className="block text-accent font-bold font-display text-sm tabular-nums py-1">
                +380 66 263 6339
              </a>
              <p className="text-[11px] text-text-muted font-mono">{t("footer.emailVal")}</p>
            </div>
          </div>

          {/* Col 4: Social Text Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display mb-4">
              {t("footer.socialTitle")}
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono font-bold">
              <a
                href="https://www.instagram.com/barberking_kh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors py-2 min-h-[44px] flex items-center"
              >
                [ INSTAGRAM ↗ ]
              </a>
              <a
                href="https://www.facebook.com/BarberKingkh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors py-2 min-h-[44px] flex items-center"
              >
                [ FACEBOOK ↗ ]
              </a>
            </div>
          </div>
        </div>

        {/* Legal, Developer & Brand Voice Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted gap-4 font-mono">
          <div>
            © 2026 Barberking Lviv. {t("footer.rights")}
          </div>
          <div className="text-text-muted text-center md:text-right">
            {t("footer.voice")}{" "}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-bold ml-1 py-2 inline-block"
            >
              {t("footer.developer")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}