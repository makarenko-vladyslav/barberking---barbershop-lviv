import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Advantages from "@/components/Advantages";
import TattooRoom from "@/components/TattooRoom";
import CraftShowcase from "@/components/CraftShowcase";
import VideoSection from "@/components/VideoSection";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import LocationMap from "@/components/LocationMap";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Reveal><Hero /></Reveal>
        <Reveal><SocialProof /></Reveal>

        <Reveal>
          <div className="bg-[hsl(220,22%,8%)] border-y border-white/10 py-6 text-center">
            <div className="max-w-4xl mx-auto px-4 flex items-center justify-between gap-4">
              <span className="hidden sm:block h-[1px] flex-1 bg-white/10" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[hsl(38,88%,52%)] font-display">
                ЧОЛОВІЧИЙ КЛУБ З ВЛАСНОЮ ФІЛОСОФІЄЮ ТА РЕПУТАЦІЄЮ
              </span>
              <span className="hidden sm:block h-[1px] flex-1 bg-white/10" />
            </div>
          </div>
        </Reveal>

        <Reveal><Services /></Reveal>

        <Reveal>
          <div className="bg-[hsl(220,25%,6%)] py-4 overflow-hidden text-center border-y border-white/5">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[hsl(220,12%,50%)]">
              СМАЧНА КАВА ТА ВІСКІ · ПРИВАТНИЙ ПАРКІНГ · БЕЗКОШТОВНИЙ WI-FI
            </span>
          </div>
        </Reveal>

        <Reveal><Calculator /></Reveal>
        <Reveal><Advantages /></Reveal>
        <Reveal><TattooRoom /></Reveal>

        <Reveal>
          <div className="bg-[hsl(220,18%,12%)] py-5 border-y border-white/10 text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[hsl(38,88%,52%)]">
              ФІЛОСОФІЯ РЕМЕСЛА · 2018–2026 · ЛЬВІВ
            </span>
          </div>
        </Reveal>

        <Reveal><CraftShowcase /></Reveal>
        <Reveal><VideoSection /></Reveal>
        <Reveal><Team /></Reveal>

        <Reveal>
          <div className="bg-[hsl(38,88%,52%)] text-[hsl(220,20%,10%)] py-6 text-center">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] font-display">
              ПРАЦЮЄМО ЩОДНЯ З 10:00 ДО 21:00 БЕЗ ВИХІДНИХ ТА ЧЕРГ
            </span>
          </div>
        </Reveal>

        <Reveal><Testimonials /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><LocationMap /></Reveal>
        <Reveal><BookingForm /></Reveal>
      </main>
      <Footer />
    </>
  );
}
