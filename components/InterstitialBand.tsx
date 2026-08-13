"use client";

interface InterstitialBandProps {
  label: string;
  statement: string;
  watermark: string;
}

export default function InterstitialBand({ label, statement, watermark }: InterstitialBandProps) {
  return (
    <section className="bg-primary-light border-y border-border-gold/30 py-12 relative overflow-hidden">
      {/* Giant Watermark Background Word */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-5 z-0"
      >
        <span className="font-display font-black text-[16vw] text-accent tracking-tighter whitespace-nowrap leading-none">
          {watermark}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-accent tracking-widest uppercase font-mono block mb-2">
          {label}
        </span>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight font-display max-w-4xl mx-auto leading-snug">
          {statement}
        </h3>
      </div>
    </section>
  );
}
