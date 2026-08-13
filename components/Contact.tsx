"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Contact() {
  const { t } = useLocale();

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: String(t('contact.optCombo')),
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
  };

  const address = String(t('brand.address'));
  const phone = String(t('brand.phone'));
  const mapUrl = String(t('brand.googleMapsUrl'));

  return (
    <section id="contact" className="py-24 bg-[hsl(20,12%,12%)] relative overflow-hidden scroll-mt-16 border-t border-white/10">
      
      {/* Background Decorative Watermark */}
      <div 
        className="absolute bottom-0 left-0 font-display font-black text-[15vw] text-white/[0.02] uppercase tracking-tighter pointer-events-none select-none"
        aria-hidden="true"
      >
        {String(t('contact.watermark'))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info & Map */}
          <div>
            {/* Layer 1: Kicker */}
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
                {String(t('contact.kicker'))}
              </p>
            </Reveal>

            {/* Layer 2: INVITATION Heading (Never brand name) */}
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
                {String(t('contact.h2'))}
              </h2>
            </Reveal>

            {/* Layer 3: Lede */}
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-white/70 mb-8">
                {String(t('contact.subtitle'))}
              </p>
            </Reveal>

            {/* Structured Contacts Box */}
            <Reveal delay={0.3}>
              <div className="space-y-6 mb-8 bg-[hsl(20,15%,8%)] border border-white/10 rounded-2xl p-6">
                <div className="border-b border-white/5 pb-4">
                  <h3 className="font-display font-bold text-xs uppercase text-[hsl(38,90%,48%)] tracking-wider">
                    {String(t('contact.addressHeader'))}
                  </h3>
                  <p className="text-sm font-semibold text-white mt-1">{address}</p>
                  <p className="text-xs text-white/60 font-medium mt-0.5">{String(t('contact.parkingSub'))}</p>
                </div>

                <div className="border-b border-white/5 pb-4">
                  <h3 className="font-display font-bold text-xs uppercase text-[hsl(38,90%,48%)] tracking-wider">
                    {String(t('contact.phoneHeader'))}
                  </h3>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-base font-bold text-white hover:text-[hsl(38,90%,48%)] transition-colors mt-1 block py-1">
                    {phone}
                  </a>
                </div>

                {/* Layer 5: Structured Hours Mini-Table */}
                <div>
                  <h3 className="font-display font-bold text-xs uppercase text-[hsl(38,90%,48%)] tracking-wider mb-2">
                    {String(t('contact.hoursHeader'))}
                  </h3>
                  <div className="space-y-1 text-xs text-white/80 font-mono">
                    <div className="flex justify-between">
                      <span>{String(t('contact.daysWeekday'))}</span>
                      <span className="text-white font-bold">{String(t('contact.timeWeekday'))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{String(t('contact.daysWeekend'))}</span>
                      <span className="text-white font-bold">{String(t('contact.timeWeekend'))}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Map Embed */}
            <Reveal delay={0.4}>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative shadow-lg">
                <iframe
                  title={String(t('contact.mapTitle'))}
                  src="https://www.google.com/maps?q=Shevchenka+St,+31,+Lviv,+Lviv+Oblast,+Ukraine,+79000&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: String(t('contact.mapFilter')) }}
                  allowFullScreen={false}
                  loading="lazy"
                />
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-2 min-h-[44px] flex items-center bg-[hsl(20,15%,8%)]/90 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wider hover:bg-[hsl(38,90%,48%)] hover:text-[hsl(20,15%,10%)] transition-all border border-white/20"
                >
                  {String(t('contact.mapLink'))} ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Booking Form */}
          <Reveal delay={0.2} className="bg-[hsl(20,15%,8%)] border border-[hsl(38,90%,48%)]/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="font-display font-extrabold text-2xl uppercase tracking-wider text-white mb-2">
              {String(t('contact.formTitle'))}
            </h3>
            <p className="text-xs text-white/60 mb-6">
              {String(t('contact.formSub'))}
            </p>

            {submitted ? (
              <div className="p-6 bg-[hsl(38,90%,48%)]/15 border border-[hsl(38,90%,48%)] rounded-xl text-center my-8">
                <h4 className="font-display font-bold text-lg text-white uppercase mb-2">
                  {String(t('contact.successTitle'))}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {String(t('contact.successMessage'))}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                    {String(t('contact.nameLabel'))} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={String(t('contact.namePlaceholder'))}
                    className="w-full px-4 py-3 min-h-[44px] bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 text-sm focus:border-[hsl(38,90%,48%)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                    {String(t('contact.phoneLabel'))} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder={String(t('contact.phonePlaceholder'))}
                    className="w-full px-4 py-3 min-h-[44px] bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 text-sm focus:border-[hsl(38,90%,48%)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                    {String(t('contact.serviceLabel'))}
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] bg-[hsl(20,12%,12%)] border border-white/15 rounded-lg text-white text-sm focus:border-[hsl(38,90%,48%)] focus:outline-none"
                  >
                    <option value={String(t('contact.optCombo'))}>{String(t('contact.optCombo'))} (950 UAH)</option>
                    <option value={String(t('contact.optHaircut'))}>{String(t('contact.optHaircut'))} (600 UAH)</option>
                    <option value={String(t('contact.optBeard'))}>{String(t('contact.optBeard'))} (450 UAH)</option>
                    <option value={String(t('contact.optShave'))}>{String(t('contact.optShave'))} (400 UAH)</option>
                    <option value={String(t('contact.optTattoo'))}>{String(t('contact.optTattoo'))}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                    {String(t('contact.dateLabel'))}
                  </label>
                  <input
                    type="datetime-local"
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] bg-white/5 border border-white/15 rounded-lg text-white text-sm focus:border-[hsl(38,90%,48%)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 min-h-[44px] bg-[hsl(38,90%,48%)] hover:bg-[hsl(38,95%,58%)] text-[hsl(20,15%,10%)] font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg mt-4 active:scale-95"
                >
                  {String(t('contact.submit'))}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
