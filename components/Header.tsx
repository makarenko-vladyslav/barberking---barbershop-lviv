"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phone = String(t('brand.phone'));
  const hours = String(t('brand.hours'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { href: '#services', label: String(t('nav.services')) },
    { href: '#advantages', label: String(t('nav.advantages')) },
    { href: '#calculator', label: String(t('nav.calculator')) },
    { href: '#tattoo', label: String(t('nav.tattoo')) },
    { href: '#team', label: String(t('nav.team')) },
    { href: '#reviews', label: String(t('nav.reviews')) },
    { href: '#faq', label: String(t('nav.faq')) },
    { href: '#contact', label: String(t('nav.contact')) },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[hsl(20,15%,8%)]/95 backdrop-blur-md border-b border-[hsl(38,90%,48%)]/20 py-3 shadow-xl' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group py-2">
            <div className="w-10 h-10 rounded-lg bg-[hsl(38,90%,48%)] flex items-center justify-center font-display font-bold text-lg text-[hsl(20,15%,10%)] group-hover:scale-105 transition-transform">
              BK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-white">
                {String(t('header.brandName'))}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[hsl(38,90%,48%)] font-semibold">
                {String(t('header.subLocation'))}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-white/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[hsl(38,90%,48%)] transition-colors py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(38,90%,48%)] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="text-xs font-semibold text-white hover:text-[hsl(38,90%,48%)] transition-colors flex flex-col items-end py-1"
            >
              <span>{phone}</span>
              <span className="text-[10px] text-white/60 lowercase">{hours}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
              <button
                onClick={() => setLocale('uk')}
                className={`px-2.5 py-1.5 min-h-[44px] sm:min-h-0 flex items-center text-[11px] font-bold rounded-full transition-all ${
                  locale === 'uk' ? 'bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)]' : 'text-white/70 hover:text-white'
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1.5 min-h-[44px] sm:min-h-0 flex items-center text-[11px] font-bold rounded-full transition-all ${
                  locale === 'en' ? 'bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)]' : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 min-h-[44px] bg-[hsl(38,90%,48%)] hover:bg-[hsl(38,95%,58%)] text-[hsl(20,15%,10%)] text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md active:scale-95"
            >
              {String(t('nav.book'))}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:hidden">
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
              <button
                onClick={() => setLocale('uk')}
                className={`px-2 py-1.5 min-h-[44px] flex items-center text-[10px] font-bold rounded-full ${
                  locale === 'uk' ? 'bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)]' : 'text-white/70'
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1.5 min-h-[44px] flex items-center text-[10px] font-bold rounded-full ${
                  locale === 'en' ? 'bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)]' : 'text-white/70'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-white bg-white/10 rounded-lg border border-white/15 focus:outline-none"
              aria-label={String(t('header.toggleMenuLabel'))}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[hsl(20,15%,8%)] flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[hsl(38,90%,48%)] flex items-center justify-center font-display font-bold text-base text-[hsl(20,15%,10%)]">
                BK
              </div>
              <span className="font-display font-bold text-lg text-white">{String(t('header.brandName'))}</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 min-h-[44px] min-w-[44px] text-white bg-white/10 rounded-full flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-5 my-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-bold uppercase tracking-wider text-white hover:text-[hsl(38,90%,48%)] transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="text-center py-3.5 min-h-[44px] flex items-center justify-center bg-white/5 border border-white/15 rounded-lg text-white font-semibold text-sm"
            >
              📞 {phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 min-h-[44px] bg-[hsl(38,90%,48%)] text-[hsl(20,15%,10%)] font-bold uppercase tracking-wider rounded-lg text-sm shadow-lg text-center"
            >
              {String(t('nav.book'))}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
