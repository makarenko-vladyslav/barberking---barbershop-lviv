"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { t } = useLocale();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: String(t('booking.optCombo')),
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[hsl(20,15%,8%)] border border-[hsl(38,90%,48%)]/30 rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-lg"
          aria-label={String(t('booking.closeLabel'))}
        >
          ✕
        </button>

        <h3 className="font-display font-extrabold text-2xl uppercase text-white mb-2">
          {String(t('booking.title'))}
        </h3>
        <p className="text-xs text-white/60 mb-6">
          {String(t('booking.subtitle'))}
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)] font-bold text-2xl flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h4 className="font-display font-bold text-lg text-white uppercase mb-2">
              {String(t('booking.successTitle'))}
            </h4>
            <p className="text-xs text-white/80">
              {String(t('booking.successDesc'))}
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-3 min-h-[44px] bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)] font-bold text-xs uppercase tracking-wider rounded-lg"
            >
              {String(t('booking.closeBtn'))}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                {String(t('booking.nameLabel'))} *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={String(t('booking.namePlaceholder'))}
                className="w-full px-4 py-3 min-h-[44px] bg-white/5 border border-white/15 rounded-lg text-white text-sm focus:border-[hsl(38,90%,48%)] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                {String(t('booking.phoneLabel'))} *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={String(t('booking.phonePlaceholder'))}
                className="w-full px-4 py-3 min-h-[44px] bg-white/5 border border-white/15 rounded-lg text-white text-sm focus:border-[hsl(38,90%,48%)] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                {String(t('booking.serviceLabel'))}
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 min-h-[44px] bg-[hsl(20,12%,12%)] border border-white/15 rounded-lg text-white text-sm focus:border-[hsl(38,90%,48%)] focus:outline-none"
              >
                <option value={String(t('booking.optCombo'))}>{String(t('booking.optCombo'))} (від 950 грн)</option>
                <option value={String(t('booking.optHaircut'))}>{String(t('booking.optHaircut'))} (від 600 грн)</option>
                <option value={String(t('booking.optBeard'))}>{String(t('booking.optBeard'))} (від 450 грн)</option>
                <option value={String(t('booking.optShave'))}>{String(t('booking.optShave'))} (від 400 грн)</option>
                <option value={String(t('booking.optTattoo'))}>{String(t('booking.optTattoo'))}</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 min-h-[44px] bg-[hsl(38,90%,48%)] hover:bg-[hsl(38,95%,58%)] text-[hsl(20,15%,10%)] font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg mt-2"
            >
              {String(t('booking.submitBtn'))}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
