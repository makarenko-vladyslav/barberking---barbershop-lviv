"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#advantages", label: t("nav.advantages") as string },
    { href: "#tattoo", label: t("nav.tattoo") as string },
    { href: "#team", label: t("nav.team") as string },
    { href: "#reviews", label: t("nav.reviews") as string },
    { href: "#contacts", label: t("nav.contacts") as string },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(220,22%,8%)]/95 backdrop-blur-md border-b border-[hsl(38,88%,52%)]/20 py-3 shadow-xl"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex flex-col group">
          <span className="text-xl sm:text-2xl font-extrabold tracking-wider font-display text-white group-hover:text-[hsl(38,88%,52%)] transition-colors">
            BARBERKING
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[hsl(38,88%,52%)] font-semibold -mt-1">
            БАРБЕРШОП ЛЬВІВ
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-[hsl(38,15%,92%)]/80 hover:text-[hsl(38,88%,52%)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Phone Link */}
          <a
            href={`tel:${(t("nav.phone") as string).replace(/\s+/g, "")}`}
            className="hidden sm:inline-flex items-center text-xs font-semibold tracking-wider text-white hover:text-[hsl(38,88%,52%)] transition-colors px-3 py-1.5 rounded border border-white/20 hover:border-[hsl(38,88%,52%)]/50"
          >
            {t("nav.phone") as string}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center border border-white/20 rounded p-0.5 bg-black/40">
            <button
              onClick={() => setLocale("uk")}
              className={`px-2 py-0.5 text-[11px] font-bold tracking-wider rounded transition-colors ${
                locale === "uk"
                  ? "bg-[hsl(38,88%,52%)] text-[hsl(220,20%,10%)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-0.5 text-[11px] font-bold tracking-wider rounded transition-colors ${
                locale === "en"
                  ? "bg-[hsl(38,88%,52%)] text-[hsl(220,20%,10%)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="#booking"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase bg-[hsl(38,88%,52%)] hover:bg-[hsl(38,95%,45%)] text-[hsl(220,20%,10%)] rounded transition-all shadow-md shadow-[hsl(38,88%,52%)]/10"
          >
            {t("nav.book") as string}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden px-2.5 py-1.5 text-xs font-bold tracking-widest uppercase border border-white/20 text-white rounded hover:border-[hsl(38,88%,52%)] hover:text-[hsl(38,88%,52%)] transition-colors"
            aria-label={t("header.toggle_menu") as string}
          >
            {menuOpen ? (t("header.close") as string) : (t("header.menu") as string)}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[hsl(220,22%,8%)]/98 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-between p-6 border-t border-[hsl(38,88%,52%)]/20 overflow-y-auto">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-bold uppercase tracking-wider text-[hsl(38,15%,92%)] hover:text-[hsl(38,88%,52%)] transition-colors border-b border-white/5 pb-3 flex justify-between items-center"
              >
                <span>{link.label}</span>
                <span className="text-[hsl(38,88%,52%)] font-mono text-xs">·</span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
            <a
              href={`tel:${(t("nav.phone") as string).replace(/\s+/g, "")}`}
              className="text-center py-3 text-xs font-bold text-[hsl(38,88%,52%)] border border-[hsl(38,88%,52%)]/40 rounded tracking-wider"
            >
              {t("nav.phone") as string}
            </a>
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="text-center py-3 text-xs font-extrabold uppercase tracking-wider bg-[hsl(38,88%,52%)] text-[hsl(220,20%,10%)] rounded"
            >
              {t("nav.book") as string}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
