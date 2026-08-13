"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="relative py-28 overflow-hidden bg-[hsl(20,15%,8%)] border-y border-white/10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/7686511/pexels-photo-7686511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/7686511/7686511-hd_1280_720_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,15%,8%)] via-transparent to-[hsl(20,15%,8%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <Reveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(38,90%,48%)]/20 border border-[hsl(38,90%,48%)] text-[hsl(38,90%,58%)] font-display font-bold text-xs uppercase tracking-widest mb-6">
            ТОЧНІСТЬ КОЖНОЇ ДЕТАЛІ
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
            ЧОЛОВІЧИЙ КЛУБ ТА КУЛЬТУРА ДОГЛЯДУ У ЛЬВОВІ
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
            Неквапливе гоління, якісна кава або келих віскі під час вашого візиту. Забудьте про черги та поспіх на вул. Шевченка 31А.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
