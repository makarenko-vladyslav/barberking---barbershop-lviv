"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

interface Member {
  name: string;
  role: string;
  exp: string;
  spec: string;
}

export default function Team({ onBookBarber }: { onBookBarber: (barberName: string) => void }) {
  const { t } = useLocale();
  const members = (t("team.members") as Member[]) || [];

  return (
    <section id="team" className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3 block">
            {String(t("team.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("team.title"))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {String(t("team.subtitle"))}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 rounded-3xl bg-surface border border-surface-border flex flex-col justify-between h-full hover:border-accent/40 transition-all group">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-surface-border flex items-center justify-center font-display font-extrabold text-2xl text-accent mb-6 group-hover:scale-105 transition-transform">
                    {m.name.substring(0, 2)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-2 inline-block">
                    {m.role}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-white uppercase mb-1">
                    {m.name}
                  </h3>
                  <span className="text-xs text-text-muted block mb-4">{m.exp}</span>
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    {m.spec}
                  </p>
                </div>

                <button
                  onClick={() => onBookBarber(m.name)}
                  className="w-full py-2.5 bg-surface-border hover:bg-accent hover:text-primary text-text-main font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Записатися до майстра
                </button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
