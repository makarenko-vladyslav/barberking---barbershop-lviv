"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Carousel } from '@/components/motion';

interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  date: string;
  text: string;
}

export default function Testimonials() {
  const { t } = useLocale();

  const rawReviews = t('testimonials.items') as ReviewItem[];
  const reviewsList = Array.isArray(rawReviews) ? rawReviews : [];

  return (
    <section id="reviews" className="py-24 bg-[hsl(20,12%,12%)] relative overflow-hidden scroll-mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layer 1 & 2 & 3: Kicker + Heading + Lede */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
              {String(t('testimonials.kicker'))}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {String(t('testimonials.h2'))}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-white/70">
              {String(t('testimonials.subtitle'))}
            </p>
          </Reveal>
        </div>

        {/* Testimonials Carousel (With Oversized Quote Mark & Plain Text Rating Source, NO arrows) */}
        <Reveal delay={0.3}>
          <Carousel autoplay={true}>
            {reviewsList.map((review, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-[hsl(20,15%,8%)] border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl text-left relative overflow-hidden">
                  
                  {/* Oversized Decorative Quote Mark */}
                  <div 
                    className="absolute -top-4 -right-2 font-serif text-[120px] leading-none text-white/[0.04] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    “
                  </div>

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[hsl(38,90%,48%)]/20 border border-[hsl(38,90%,48%)] flex items-center justify-center font-display font-bold text-lg text-[hsl(38,90%,48%)]">
                        {review.name.slice(0, 1)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-white uppercase">
                          {review.name}
                        </h3>
                        <p className="text-xs text-white/50">{review.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="font-mono text-xs font-bold text-[hsl(38,90%,48%)]">
                        4.9 / 5.0
                      </div>
                      <span className="text-[10px] text-white/40">{review.date}</span>
                    </div>
                  </div>

                  {/* Quote Body in Display Font */}
                  <p className="font-display text-base sm:text-xl font-medium text-white/90 leading-relaxed italic mb-6 relative z-10">
                    "{review.text}"
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-[hsl(38,90%,48%)] font-semibold">
                    <span>{String(t('testimonials.verifiedBadge'))}</span>
                    <span className="text-white/40 font-mono">0{idx + 1} / 0{reviewsList.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
