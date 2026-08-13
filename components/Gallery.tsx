"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Gallery() {
  const { t } = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.pexels.com/photos/18301169/pexels-photo-18301169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: String(t('gallery.caption1'))
    },
    {
      url: "https://images.pexels.com/photos/3998404/pexels-photo-3998404.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: String(t('gallery.caption2'))
    },
    {
      url: "https://images.pexels.com/photos/9315046/pexels-photo-9315046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: String(t('gallery.caption3'))
    },
    {
      url: "https://images.pexels.com/photos/37764947/pexels-photo-37764947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: String(t('gallery.caption4'))
    },
    {
      url: "https://images.pexels.com/photos/5584459/pexels-photo-5584459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: String(t('gallery.caption5'))
    },
    {
      url: "https://images.pexels.com/photos/2174113/pexels-photo-2174113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: String(t('gallery.caption6'))
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[hsl(20,12%,12%)] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
              {String(t('gallery.kicker'))}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {String(t('gallery.h2'))}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-white/70">
              {String(t('gallery.subtitle'))}
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div
                onClick={() => setSelectedImage(img.url)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[hsl(38,90%,48%)]/60 transition-all duration-300"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs font-display font-bold uppercase tracking-wider text-white group-hover:text-[hsl(38,90%,48%)] transition-colors">
                    {img.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
            <img src={selectedImage} alt={String(t('gallery.enlargedAlt'))} className="max-w-full max-h-[85vh] object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
