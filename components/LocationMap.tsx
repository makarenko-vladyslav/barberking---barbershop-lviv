"use client";

import { useLocale } from "@/lib/i18n";

export default function LocationMap() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="scroll-mt-20 py-24 bg-[hsl(220,22%,8%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("location.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("location.title") as string}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="p-8 rounded-xl bg-[hsl(220,18%,13%)] border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] block mb-1 font-mono">
                  {t("location.address_label") as string}
                </span>
                <p className="text-sm font-semibold text-white font-display">
                  {t("location.address") as string}
                </p>
                <span className="text-xs text-[hsl(38,88%,52%)] mt-1 block">
                  ● {t("location.parking_info") as string}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] block mb-1 font-mono">
                  {t("location.hours_title") as string}
                </span>
                <p className="text-sm font-semibold text-white font-display">
                  {t("location.hours_value") as string}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] block mb-1 font-mono">
                  {t("location.phone_title") as string}
                </span>
                <a
                  href="tel:+380662636339"
                  className="text-lg font-extrabold text-[hsl(38,88%,52%)] hover:underline font-mono"
                >
                  +380 66 263 6339
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <a
                href="https://www.google.com/maps?cid=855889960538363367"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-wider border border-[hsl(38,88%,52%)]/50 text-[hsl(38,88%,52%)] hover:bg-[hsl(38,88%,52%)] hover:text-[hsl(220,20%,10%)] rounded transition-all"
              >
                {t("location.open_maps") as string}
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-white/10 min-h-[350px]">
            <iframe
              src="https://www.google.com/maps?q=Shevchenka+St,+31,+Lviv,+Lviv+Oblast,+Ukraine,+79000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              title={t("location.map_title") as string}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
