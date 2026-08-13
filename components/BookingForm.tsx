"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function BookingForm() {
  const { t } = useLocale();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: pricingData.services[0].name,
    barber: "",
    date: "",
    time: "12:00",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="scroll-mt-20 py-24 bg-[hsl(220,18%,14%)] relative overflow-hidden">
      {/* Background Decorative Type Layer */}
      <div
        className="absolute top-10 left-10 text-[12vw] font-black font-display text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        BOOKING
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[hsl(220,22%,8%)] border border-[hsl(38,88%,52%)]/40 rounded-2xl p-6 sm:p-12 shadow-2xl">
          {/* Layer: Kicker, Invitation Heading, Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
              {t("booking.kicker") as string}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mb-3 font-display">
              {t("booking.invitation_title") as string}
            </h2>
            <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)]">
              {t("booking.subtitle") as string}
            </p>
          </div>

          {/* Layer: Structured Hours & Address Mini-Table */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 rounded bg-[hsl(220,18%,13%)] border border-white/5 text-center text-xs">
            <div>
              <span className="text-[hsl(38,88%,52%)] font-mono block mb-0.5">{t("booking.mini_hours_label") as string}</span>
              <span className="text-white font-medium">{t("booking.hours_mon_fri") as string}</span>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0">
              <span className="text-[hsl(38,88%,52%)] font-mono block mb-0.5">{t("booking.mini_location_label") as string}</span>
              <span className="text-white font-medium">{t("booking.address_line") as string}</span>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0">
              <span className="text-[hsl(38,88%,52%)] font-mono block mb-0.5">{t("booking.mini_warranty_label") as string}</span>
              <span className="text-white font-medium">{t("booking.mini_parking_value") as string}</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center p-8 rounded-lg bg-[hsl(38,88%,52%)]/15 border border-[hsl(38,88%,52%)]">
              <h3 className="text-2xl font-extrabold text-[hsl(38,88%,52%)] uppercase mb-2 font-display">
                {t("booking.success_title") as string}
              </h3>
              <p className="text-xs sm:text-sm text-white/90">
                {t("booking.success_desc") as string}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-2 font-mono">
                    {t("booking.form_name") as string} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Олександр"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[hsl(220,18%,13%)] border border-white/10 text-white text-sm focus:border-[hsl(38,88%,52%)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-2 font-mono">
                    {t("booking.form_phone") as string} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+380 67 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[hsl(220,18%,13%)] border border-white/10 text-white text-sm focus:border-[hsl(38,88%,52%)] focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-2 font-mono">
                    {t("booking.form_service") as string}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[hsl(220,18%,13%)] border border-white/10 text-white text-sm focus:border-[hsl(38,88%,52%)] focus:outline-none"
                  >
                    {pricingData.services.map((s) => (
                      <option key={s.id} value={s.name} className="bg-[hsl(220,22%,8%)]">
                        {s.name} ({s.price} грн)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-2 font-mono">
                    {t("booking.form_barber") as string}
                  </label>
                  <select
                    value={formData.barber}
                    onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[hsl(220,18%,13%)] border border-white/10 text-white text-sm focus:border-[hsl(38,88%,52%)] focus:outline-none"
                  >
                    <option value="">{t("booking.form_barber_any") as string}</option>
                    <option value="Матлаб">{t("booking.barber_matlab") as string}</option>
                    <option value="Кирило">{t("booking.barber_kyrylo") as string}</option>
                    <option value="Сергій">{t("booking.barber_serhiy") as string}</option>
                    <option value="Єгор">{t("booking.barber_yehor") as string}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-2 font-mono">
                    {t("booking.form_date") as string}
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[hsl(220,18%,13%)] border border-white/10 text-white text-sm focus:border-[hsl(38,88%,52%)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] mb-2 font-mono">
                    {t("booking.form_time") as string}
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[hsl(220,18%,13%)] border border-white/10 text-white text-sm focus:border-[hsl(38,88%,52%)] focus:outline-none font-mono"
                  >
                    {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map((time) => (
                      <option key={time} value={time} className="bg-[hsl(220,22%,8%)]">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Layer: Primary CTA + Tel Text-Link */}
              <div className="pt-2 flex flex-col gap-3 items-center">
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-extrabold uppercase tracking-wider bg-[hsl(38,88%,52%)] hover:bg-[hsl(38,95%,45%)] text-[hsl(220,20%,10%)] rounded shadow-lg transition-all"
                >
                  {t("booking.submit") as string}
                </button>
                <a
                  href="tel:+380662636339"
                  className="text-xs font-medium text-[hsl(38,88%,52%)] hover:underline font-mono"
                >
                  {t("booking.tel_link_text") as string}
                </a>
              </div>

              {/* Layer: Trust Micro-Line */}
              <div className="text-center pt-2">
                <p className="text-[11px] text-[hsl(220,12%,55%)]">
                  {t("booking.trust_line") as string}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
