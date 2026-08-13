"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  const brandName = String(t('brand.name'));
  const address = String(t('brand.address'));
  const phone = String(t('brand.phone'));
  const email = String(t('brand.email'));
  const hours = String(t('brand.hours'));
  const currentYear = 2026;

  return (
    <footer className="bg-[hsl(20,15%,5%)] border-t border-white/10 pt-16 pb-8 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[hsl(38,90%,48%)] flex items-center justify-center font-display font-bold text-lg text-[hsl(20,15%,10%)]">
                BK
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                {brandName}
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              {String(t('brand.tagline'))}. Традиційний чоловічий догляд та стиль у Львові.
            </p>
            <div className="text-xs text-[hsl(38,90%,48%)] font-semibold uppercase tracking-wider">
              {String(t('footer.estBanner'))}
            </div>
          </div>

          {/* Nav Column */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white/50 mb-4">
              {String(t('footer.navHeader'))}
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80 uppercase font-display tracking-wider">
              <li><a href="#services" className="hover:text-[hsl(38,90%,48%)] transition-colors py-1 inline-block">{String(t('footer.linkServices'))}</a></li>
              <li><a href="#advantages" className="hover:text-[hsl(38,90%,48%)] transition-colors py-1 inline-block">{String(t('footer.linkAdvantages'))}</a></li>
              <li><a href="#calculator" className="hover:text-[hsl(38,90%,48%)] transition-colors py-1 inline-block">{String(t('footer.linkCalculator'))}</a></li>
              <li><a href="#tattoo" className="hover:text-[hsl(38,90%,48%)] transition-colors py-1 inline-block">{String(t('footer.linkTattoo'))}</a></li>
              <li><a href="#team" className="hover:text-[hsl(38,90%,48%)] transition-colors py-1 inline-block">{String(t('footer.linkTeam'))}</a></li>
              <li><a href="#reviews" className="hover:text-[hsl(38,90%,48%)] transition-colors py-1 inline-block">{String(t('footer.linkReviews'))}</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white/50 mb-4">
              {String(t('footer.contactHeader'))}
            </h3>
            <ul className="space-y-3 text-xs text-white/80">
              <li><strong className="text-white">{String(t('footer.addrLabel'))}:</strong> {address}</li>
              <li><strong className="text-white">{String(t('footer.phoneLabel'))}:</strong> <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-[hsl(38,90%,48%)] font-mono py-1 inline-block">{phone}</a></li>
              <li><strong className="text-white">{String(t('footer.emailLabel'))}:</strong> <a href={`mailto:${email}`} className="hover:text-[hsl(38,90%,48%)] py-1 inline-block">{email}</a></li>
              <li><strong className="text-white">{String(t('footer.hoursLabel'))}:</strong> {hours}</li>
            </ul>
          </div>

          {/* Social Text Links */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white/50 mb-4">
              {String(t('footer.socialHeader'))}
            </h3>
            <div className="flex flex-col gap-2 mb-6 text-xs font-bold uppercase tracking-wider">
              <a
                href="https://www.instagram.com/barberking_kh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(38,90%,48%)] transition-colors inline-flex items-center gap-1 py-1"
              >
                <span>{String(t('footer.socInstagram'))}</span>
                <span>↗</span>
              </a>
              <a
                href="https://www.facebook.com/BarberKingkh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(38,90%,48%)] transition-colors inline-flex items-center gap-1 py-1"
              >
                <span>{String(t('footer.socFacebook'))}</span>
                <span>↗</span>
              </a>
              <a
                href={String(t('brand.googleMapsUrl'))}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(38,90%,48%)] transition-colors inline-flex items-center gap-1 py-1"
              >
                <span>{String(t('footer.socMaps'))}</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Developer Credit Row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4 mb-8">
          <div>
            © {currentYear} {brandName}. {String(t('footer.rights'))}
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(38,90%,48%)] transition-colors underline underline-offset-4 py-1 inline-block"
            >
              {String(t('footer.credit'))}
            </a>
          </div>
        </div>
      </div>

      {/* Layer 1: Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
      <div 
        className="w-full text-center font-display font-extrabold text-[13vw] text-white/[0.04] uppercase tracking-tighter leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden border-t border-white/5 pt-4"
        aria-hidden="true"
      >
        BARBERKING
      </div>
    </footer>
  );
}
