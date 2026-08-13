"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Професійна чоловіча стрижка",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-bg-dark relative scroll-mt-16 overflow-hidden">
      {/* Decorative background overlay pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-5 z-0"
      >
        <span className="font-display font-black text-[22vw] text-accent tracking-tighter whitespace-nowrap leading-none">
          ЗАПИС
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-bg-card p-8 sm:p-12 rounded border-2 border-border-gold shadow-2xl relative">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
              {t("bookingForm.kicker")}
            </span>
            {/* INVITATION Heading (10-Layer Law compliance) */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
              {t("bookingForm.title")}
            </h2>
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
              {t("bookingForm.subtitle")}
            </p>
          </div>

          {/* Structured Hours Mini-Table & Map Line */}
          <div className="mb-8 p-4 rounded bg-bg-dark/80 border border-border-dark grid sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-accent font-bold block mb-1">{t("bookingForm.hoursBoxTitle")}</span>
              <div className="text-text-muted">{t("bookingForm.hoursBoxVal")}</div>
            </div>
            <div>
              <span className="text-accent font-bold block mb-1">{t("bookingForm.locationBoxTitle")}</span>
              <div className="text-text-muted">{t("bookingForm.locationBoxVal")}</div>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-accent/10 border border-accent rounded space-y-4">
              <div className="text-2xl font-mono font-bold text-accent">
                [ ТАК ]
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                {t("bookingForm.successTitle")}
              </h3>
              <p className="text-sm text-text-muted">
                {t("bookingForm.successDesc")}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-accent uppercase tracking-wider underline pt-2 font-mono min-h-[44px]"
              >
                {t("bookingForm.newBookingBtn")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-display">
                    {t("bookingForm.nameLabel")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("bookingForm.namePlaceholder")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-dark border border-border-dark rounded text-text-main text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-display">
                    {t("bookingForm.phoneLabel")} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t("bookingForm.phonePlaceholder")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-dark border border-border-dark rounded text-text-main text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-display">
                    {t("bookingForm.serviceLabel")}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-dark border border-border-dark rounded text-text-main text-sm focus:border-accent focus:outline-none"
                  >
                    <option>{t("bookingForm.servicesOpt.0")}</option>
                    <option>{t("bookingForm.servicesOpt.1")}</option>
                    <option>{t("bookingForm.servicesOpt.2")}</option>
                    <option>{t("bookingForm.servicesOpt.3")}</option>
                    <option>{t("bookingForm.servicesOpt.4")}</option>
                    <option>{t("bookingForm.servicesOpt.5")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-display">
                    {t("bookingForm.dateLabel")}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-dark border border-border-dark rounded text-text-main text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-display">
                  {t("bookingForm.notesLabel")}
                </label>
                <textarea
                  rows={3}
                  placeholder={t("bookingForm.notesPlaceholder")}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark border border-border-dark rounded text-text-main text-sm focus:border-accent focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-bg-dark font-display font-extrabold text-xs uppercase tracking-wider py-4 rounded shadow-lg hover:brightness-110 transition-all min-h-[44px]"
                >
                  {t("bookingForm.submitBtn")}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-muted gap-2 pt-1">
                  <a href="tel:+380662636339" className="text-accent hover:underline py-2 min-h-[44px] flex items-center">
                    {t("bookingForm.quickCallPrefix")} +380 66 263 6339
                  </a>
                  <span>{t("bookingForm.cancelNote")}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}