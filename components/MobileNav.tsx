"use client";

import { useLocale } from "@/lib/i18n";

export default function MobileNav() {
  const { t } = useLocale();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-bg-dark/95 border-t border-border-gold backdrop-blur-md p-3 md:hidden flex items-center justify-between gap-2 shadow-2xl">
      <a
        href="tel:+380662636339"
        className="flex-1 text-center py-2.5 px-3 rounded bg-bg-card border border-border-dark text-xs font-bold text-white font-display"
      >
        {t("common.quickCall")}
      </a>
      <a
        href="#booking"
        className="flex-1 text-center py-2.5 px-3 rounded bg-gold-gradient text-bg-dark text-xs font-extrabold uppercase tracking-wider font-display shadow"
      >
        {t("common.bookOnline")}
      </a>
    </div>
  );
}
