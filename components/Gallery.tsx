"use client";

import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLocale();

  const galleryImages = [
    "https://images.pexels.com/photos/32351044/pexels-photo-32351044.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/18301169/pexels-photo-18301169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/32351044/pexels-photo-32351044.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/38167599/pexels-photo-38167599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8552629/pexels-photo-8552629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/videos/6113144/artisan-barber-barber-shop-barbershop-6113144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  ];

  return (
    <section id="gallery" className="scroll-mt-20 py-24 bg-[hsl(220,22%,8%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("gallery.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("gallery.title") as string}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)]">
            {t("gallery.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-white/10 group aspect-[4/3] relative"
            >
              <img
                src={src}
                alt={`${t("gallery.photo_alt_prefix") as string} ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[hsl(38,88%,52%)] uppercase tracking-wider">
                  BARBERKING LVIV
                </span>
                <span className="text-xs font-bold text-white">
                  Вул. Шевченка 31А
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
