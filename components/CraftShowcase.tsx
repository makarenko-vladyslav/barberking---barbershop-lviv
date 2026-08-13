"use client";

import { useLocale } from "@/lib/i18n";

export default function CraftShowcase() {
  const { t } = useLocale();
  const steps = (t("craft.steps") as string[]) || [];

  return (
    <section className="py-24 bg-[hsl(220,22%,8%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layer 1: Kicker, Heading, Lede */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("craft.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("craft.title") as string}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)] leading-relaxed">
            {t("craft.desc") as string}
          </p>
        </div>

        {/* Layer 2: Pull-Quote in Display Type */}
        <div className="my-12 p-8 rounded-xl bg-[hsl(220,18%,13%)] border border-[hsl(38,88%,52%)]/30 text-center max-w-4xl mx-auto shadow-xl">
          <p className="text-lg sm:text-2xl font-bold font-display uppercase tracking-wide text-white leading-relaxed mb-4">
            {t("craft.quote") as string}
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] font-mono">
            {t("craft.quote_author") as string}
          </div>
        </div>

        {/* Layer 3: 4 Real Numerals Stat Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16 max-w-5xl mx-auto">
          <div className="p-6 rounded bg-[hsl(220,18%,12%)] border border-white/5 text-center">
            <div className="text-3xl font-extrabold text-[hsl(38,88%,52%)] font-display tabular-nums">
              {t("craft.stat_1_num") as string}
            </div>
            <div className="text-[11px] text-[hsl(220,12%,65%)] uppercase tracking-wider mt-1">
              {t("craft.stat_1_label") as string}
            </div>
          </div>
          <div className="p-6 rounded bg-[hsl(220,18%,12%)] border border-white/5 text-center">
            <div className="text-3xl font-extrabold text-[hsl(38,88%,52%)] font-display tabular-nums">
              {t("craft.stat_2_num") as string}
            </div>
            <div className="text-[11px] text-[hsl(220,12%,65%)] uppercase tracking-wider mt-1">
              {t("craft.stat_2_label") as string}
            </div>
          </div>
          <div className="p-6 rounded bg-[hsl(220,18%,12%)] border border-white/5 text-center">
            <div className="text-3xl font-extrabold text-[hsl(38,88%,52%)] font-display tabular-nums">
              {t("craft.stat_3_num") as string}
            </div>
            <div className="text-[11px] text-[hsl(220,12%,65%)] uppercase tracking-wider mt-1">
              {t("craft.stat_3_label") as string}
            </div>
          </div>
          <div className="p-6 rounded bg-[hsl(220,18%,12%)] border border-white/5 text-center">
            <div className="text-3xl font-extrabold text-[hsl(38,88%,52%)] font-display tabular-nums">
              {t("craft.stat_4_num") as string}
            </div>
            <div className="text-[11px] text-[hsl(220,12%,65%)] uppercase tracking-wider mt-1">
              {t("craft.stat_4_label") as string}
            </div>
          </div>
        </div>

        {/* Layer 4: 2-Photo Cluster + Steps Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 2-Photo Cluster (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7320169/pexels-photo-7320169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt={t("craft.img1_alt") as string}
                loading="lazy"
                className="w-full h-[360px] sm:h-[420px] object-cover filter brightness-90"
              />
            </div>
            {/* Overlapped / Tilted Photo */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-lg overflow-hidden border-2 border-[hsl(38,88%,52%)]/40 shadow-2xl transform rotate-2">
              <img
                src="https://images.pexels.com/photos/18301169/pexels-photo-18301169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt={t("craft.img2_alt") as string}
                loading="lazy"
                className="w-full h-[220px] object-cover"
              />
            </div>
          </div>

          {/* Ritual Steps (6 cols) */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded bg-[hsl(220,18%,13%)] border border-white/5 flex items-center justify-between"
                >
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {step}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-[hsl(38,88%,52%)] bg-[hsl(38,88%,52%)]/10 px-2 py-0.5 rounded shrink-0 ml-3">
                    {t("craft.step_prefix") as string} 0{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[hsl(220,12%,60%)]">
                {t("craft.signature") as string}
              </span>
              <a
                href="#booking"
                className="text-xs font-bold uppercase tracking-wider text-[hsl(38,88%,52%)] hover:underline"
              >
                {t("craft.book_ritual") as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
