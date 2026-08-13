"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header({ onOpenBooking }: { onOpenBooking: () => void }) {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#services", label: String(t("nav.services")) },
    { href: "#calculator", label: String(t("nav.calculator")) },
    { href: "#advantages", label: String(t("nav.advantages")) },
    { href: "#tattoo", label: String(t("nav.tattoo")) },
    { href: "#team", label: String(t("nav.team")) },
    { href: "#reviews", label: String(t("nav.reviews")) },
    { href: "#contacts", label: String(t("nav.contacts")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-surface-border py-3 shadow-xl"
          : "bg-gradient-to-b from-primary/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary font-black text-xl tracking-tighter shadow-lg group-hover:bg-accent-hover transition-colors">
            BK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-wider text-text-main leading-none uppercase">
              BARBERKING
            </span>
            <span className="text-[10px] text-accent tracking-widest uppercase font-semibold mt-1">
              БАРБЕРШОП ЛЬВІВ
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+380662636339"
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-text-main hover:text-accent transition-colors py-2 px-3 rounded-lg border border-surface-border bg-surface/50"
          >
            <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+380 66 263 6339</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="bg-accent hover:bg-accent-hover text-primary font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-md active:scale-95"
          >
            {String(t("common.bookOnline"))}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-surface border border-surface-border text-text-main hover:text-accent"
          aria-label={String(t("common.openMenu"))}
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

      {/* Full-Screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary/98 backdrop-blur-xl flex flex-col justify-between p-6 lg:hidden">
          <div className="flex items-center justify-between border-b border-surface-border pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-accent flex items-center justify-center text-primary font-bold">
                BK
              </div>
              <span className="font-display font-bold text-lg text-text-main uppercase">
                BARBERKING ЛЬВІВ
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-text-muted hover:text-accent"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-semibold uppercase tracking-wider text-text-main hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-surface-border">
            <a
              href="tel:+380662636339"
              className="text-center py-3 rounded-lg bg-surface border border-surface-border text-sm font-semibold text-text-main"
            >
              +380 66 263 6339 (Львів, Шевченка 31А)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-accent text-primary font-bold uppercase text-sm rounded-lg shadow-lg"
            >
              {String(t("common.bookOnline"))}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
