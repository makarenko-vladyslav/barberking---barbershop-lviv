"use client";

import { useLocale } from "@/lib/i18n";

export default function ContactMap() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="py-24 bg-primary-light border-y border-border-gold/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
                {t("contactsSection.kicker")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                {t("contactsSection.title")}
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded bg-bg-card border border-border-dark">
                <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider block mb-1">
                  {t("contactsSection.addressTitle")}
                </span>
                <p className="text-white font-medium">
                  {t("contactsSection.addressVal")}
                </p>
                <p className="text-xs text-text-muted mt-1 font-mono">
                  {t("contactsSection.addressSub")}
                </p>
              </div>

              <div className="p-4 rounded bg-bg-card border border-border-dark">
                <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider block mb-1">
                  {t("contactsSection.phoneTitle")}
                </span>
                <a
                  href="tel:+380662636339"
                  className="text-lg font-bold text-white hover:text-accent font-display transition-colors tabular-nums py-2 inline-block"
                >
                  {t("contactsSection.phoneVal")}
                </a>
              </div>

              <div className="p-4 rounded bg-bg-card border border-border-dark">
                <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider block mb-1">
                  {t("contactsSection.hoursTitle")}
                </span>
                <p className="text-white font-medium">
                  {t("contactsSection.hoursVal")}
                </p>
              </div>
            </div>

            <div>
              <a
                href="https://www.google.com/maps?cid=855889960538363367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-gradient text-bg-dark font-display font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-lg hover:brightness-110 transition-all min-h-[44px]"
              >
                <span>{t("contactsSection.mapsBtn")}</span>
                <span className="ml-1">↗</span>
              </a>
            </div>
          </div>

          {/* Map Embed Side */}
          <div className="lg:col-span-7 rounded overflow-hidden border-2 border-border-gold shadow-2xl h-[450px]">
            <iframe
              src="https://www.google.com/maps?q=Shevchenka+St,+31,+Lviv,+Ukraine&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title={t("contactsSection.mapTitle")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}