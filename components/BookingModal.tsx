"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingModal({
  isOpen,
  onClose,
  prefilledSummary,
}: {
  isOpen: boolean;
  onClose: () => void;
  prefilledSummary?: string;
}) {
  const { t } = useLocale();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(prefilledSummary || "Професійна чоловіча стрижка");
  const [barber, setBarber] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-surface border border-surface-border rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-text-muted hover:text-accent text-2xl font-bold"
        >
          ×
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-display font-bold uppercase text-white">
              Запис прийнято!
            </h3>
            <p className="text-sm text-text-muted">
              {String(t("bookingModal.successMsg"))}
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-display font-extrabold uppercase text-white mb-2">
              {String(t("bookingModal.title"))}
            </h3>
            <p className="text-xs text-text-muted mb-6">
              {String(t("bookingModal.subtitle"))}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder={String(t("bookingModal.namePlaceholder"))}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-bg-dark border border-surface-border text-white text-sm focus:border-accent outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder={String(t("bookingModal.phonePlaceholder"))}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-bg-dark border border-surface-border text-white text-sm focus:border-accent outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder={String(t("bookingModal.serviceSelect"))}
                  className="w-full p-3.5 rounded-xl bg-bg-dark border border-surface-border text-white text-sm focus:border-accent outline-none"
                />
              </div>

              <div>
                <select
                  value={barber}
                  onChange={(e) => setBarber(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-bg-dark border border-surface-border text-white text-sm focus:border-accent outline-none"
                >
                  <option value="">{String(t("bookingModal.barberSelect"))}</option>
                  <option value="МАТЛАБ">МАТЛАБ (Grand Barber)</option>
                  <option value="КИРИЛО">КИРИЛО (Ambassador)</option>
                  <option value="СЕРГІЙ">СЕРГІЙ (Grand Barber)</option>
                  <option value="ЄГОР">ЄГОР (Barber)</option>
                </select>
              </div>

              <div>
                <input
                  type="datetime-local"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-bg-dark border border-surface-border text-white text-sm focus:border-accent outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl"
              >
                {String(t("bookingModal.submit"))}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
