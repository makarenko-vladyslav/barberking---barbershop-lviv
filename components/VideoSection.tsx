"use client";

import { useLocale } from "@/lib/i18n";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-[hsl(220,18%,14%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("video_section.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("video_section.title") as string}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)]">
            {t("video_section.subtitle") as string}
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-5xl mx-auto aspect-video">
          <video
            controls
            playsInline
            poster="https://images.pexels.com/photos/13138476/pexels-photo-13138476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/7686511/7686511-hd_1280_720_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}