"use client";

import { useLocale } from "@/lib/i18n";

interface TeamMember {
  name: string;
  role: string;
  exp: string;
  spec: string;
}

export default function Team() {
  const { t } = useLocale();
  const members = (t("team.members") as TeamMember[]) || [];

  return (
    <section id="team" className="scroll-mt-20 py-24 bg-[hsl(220,22%,8%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] mb-3 font-mono">
            {t("team.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            {t("team.title") as string}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(220,12%,65%)]">
            {t("team.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="bg-[hsl(220,18%,13%)] border border-white/5 rounded-xl overflow-hidden p-6 flex flex-col justify-between group hover:border-[hsl(38,88%,52%)]/40 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-[hsl(38,88%,52%)]/20 text-[hsl(38,88%,52%)] font-extrabold text-lg flex items-center justify-center font-display mb-4 border border-[hsl(38,88%,52%)]/40">
                  {m.name.charAt(0)}
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-[hsl(38,88%,52%)] mb-1 font-mono">
                  {m.role}
                </div>
                <h3 className="text-xl font-extrabold uppercase text-white mb-2 font-display">
                  {m.name}
                </h3>
                <div className="text-[11px] font-semibold text-white/60 bg-white/5 inline-block px-2 py-0.5 rounded mb-4 font-mono">
                  {m.exp}
                </div>
                <p className="text-xs text-[hsl(220,12%,65%)] leading-relaxed mb-6">
                  {m.spec}
                </p>
              </div>

              <a
                href="#booking"
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[hsl(38,88%,52%)] hover:text-[hsl(220,20%,10%)] text-white rounded transition-colors"
              >
                Записатися до майстра
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}