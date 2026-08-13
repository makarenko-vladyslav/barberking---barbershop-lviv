"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface TeamMember {
  name: string;
  role: string;
  exp: string;
  desc: string;
}

interface TeamProps {
  onOpenBooking: () => void;
}

export default function Team({ onOpenBooking }: TeamProps) {
  const { t } = useLocale();

  const rawMembers = t('team.members') as TeamMember[];
  const membersList = Array.isArray(rawMembers) ? rawMembers : [];

  return (
    <section id="team" className="py-24 bg-[hsl(20,15%,8%)] relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layer 1 & 2 & 3: Kicker + Heading + Lede */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38,90%,48%)] mb-2">
              {String(t('team.kicker'))}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {String(t('team.h2'))}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-white/70">
              {String(t('team.subtitle'))}
            </p>
          </Reveal>
        </div>

        {/* Team Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membersList.map((member, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-[hsl(20,12%,12%)] border border-white/10 rounded-2xl p-6 text-center hover:border-[hsl(38,90%,48%)]/50 transition-all duration-300 group flex flex-col justify-between h-full relative">
                <div>
                  {/* Initials Avatar Box */}
                  <div className="w-24 h-24 rounded-full bg-[hsl(38,90%,48%)]/20 border-2 border-[hsl(38,90%,48%)] flex items-center justify-center text-2xl font-display font-extrabold text-[hsl(38,90%,48%)] mx-auto mb-6 group-hover:scale-105 transition-transform">
                    {member.name.slice(0, 2)}
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[hsl(38,90%,48%)] mb-3 border border-white/10">
                    {member.role}
                  </span>

                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-1">
                    {member.name}
                  </h3>

                  <p className="text-xs font-mono font-medium text-white/50 mb-4">{member.exp}</p>

                  <p className="text-xs text-white/70 leading-relaxed mb-6">
                    {member.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 bg-white/5 hover:bg-[hsl(38,90%,48%)] hover:text-[hsl(20,15%,10%)] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all border border-white/10"
                >
                  Записатися до {member.name}
                </button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
