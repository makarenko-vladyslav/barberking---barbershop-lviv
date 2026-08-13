"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleLocale = () => {
    setLocale(locale === "uk" ? "en" : "uk");
  };

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#masters", label: t("nav.masters") },
    { href: "#tattoo", label: t("nav.tattoo") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#contacts", label: t("nav.contacts") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-gold shadow-2xl py-3"
          : "bg-gradient-to-b from-bg-dark/95 via-bg-dark/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark Logo */}
        <a href="#" className="flex flex-col group py-1">
          <span className="font-display font-extrabold text-2xl tracking-wider text-white group-hover:text-accent transition-colors flex items-center gap-2">
            BARBERKING
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </span>
          <span className="text-[9px] tracking-widest uppercase text-accent font-semibold -mt-1 font-mono">
            {t("header.brandSub")}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-wider font-bold text-text-muted font-display">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Phone */}
        <div className="hidden md:flex items-center space-x-5">
          <button
            onClick={toggleLocale}
            className="text-[11px] font-mono font-bold uppercase tracking-widest px-3.5 py-2.5 rounded border border-border-dark hover:border-accent text-text-muted hover:text-accent transition-colors min-h-[44px]"
            aria-label={t("header.switchLangAria")}
          >
            {locale === "uk" ? "EN" : "UA"}
          </button>

          <a
            href="tel:+380662636339"
            className="flex flex-col text-right hover:text-accent transition-colors py-1"
          >
            <span className="text-[10px] text-text-muted uppercase tracking-wider font-mono">
              {t("common.address")}
            </span>
            <span className="text-sm font-extrabold text-white tracking-tight font-display tabular-nums">
              +380 66 263 6339
            </span>
          </a>

          <a
            href="#booking"
            className="bg-gold-gradient text-bg-dark text-xs font-extrabold uppercase tracking-wider px-5 py-3 rounded-sm hover:brightness-110 shadow-md transition-all active:scale-95 font-display min-h-[44px] flex items-center"
          >
            {t("common.bookOnline")}
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleLocale}
            className="text-[11px] font-mono font-bold uppercase px-3.5 py-2.5 rounded border border-border-dark text-accent min-h-[44px]"
            aria-label={t("header.switchLangAria")}
          >
            {locale === "uk" ? "EN" : "UA"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3.5 py-2.5 text-xs font-bold font-mono tracking-widest uppercase border border-border-gold text-accent bg-bg-card rounded min-h-[44px] flex items-center"
            aria-label={t("header.toggleMenuAria")}
          >
            {mobileMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-bg-dark/98 flex flex-col justify-between p-6 md:hidden backdrop-blur-xl">
          <div className="flex justify-between items-center pb-6 border-b border-border-dark">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl text-white tracking-wider">
                BARBERKING
              </span>
              <span className="text-[10px] text-accent font-mono">{t("common.address")}</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-bold text-accent uppercase border border-border-gold px-3.5 py-2.5 rounded min-h-[44px] flex items-center"
            >
              {t("header.closeMenu")}
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-extrabold text-white hover:text-accent tracking-wide uppercase py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col space-y-4 pt-6 border-t border-border-dark">
            <div className="text-center text-xs text-text-muted font-mono">
              {t("header.mobileFooterNote")}
            </div>
            <a
              href="tel:+380662636339"
              className="text-center font-display text-xl font-extrabold text-accent tabular-nums py-2"
            >
              +380 66 263 6339
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-gold-gradient text-bg-dark font-display font-extrabold uppercase tracking-wider py-4 rounded-sm text-sm min-h-[44px] flex items-center justify-center"
            >
              {t("common.bookOnline")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}