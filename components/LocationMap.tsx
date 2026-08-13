"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function LocationMap() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
            {String(t("location.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("location.title"))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {String(t("location.subtitle"))}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Reveal className="bg-surface rounded-3xl p-8 border border-surface-border flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  {String(t("location.addressLabel"))}
                </span>
                <p className="text-white font-medium text-base">
                  {String(t("location.addressValue"))}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  {String(t("location.phoneLabel"))}
                </span>
                <a
                  href="tel:+380662636339"
                  className="text-white font-bold text-lg hover:text-accent transition-colors block"
                >
                  {String(t("location.phoneValue"))}
                </a>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  {String(t("location.hoursLabel"))}
                </span>
                <p className="text-white font-medium text-base">
                  {String(t("location.hoursValue"))}
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?cid=855889960538363367"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-accent hover:bg-accent-hover text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all text-center block"
            >
              {String(t("location.openMaps"))}
            </a>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2 rounded-3xl overflow-hidden border border-surface-border shadow-2xl min-h-[350px]">
            <iframe
              src="https://www.google.com/maps?q=Shevchenka+St,+31,+Lviv,+Lviv+Oblast,+Ukraine,+79000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Barberking Lviv Map"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
