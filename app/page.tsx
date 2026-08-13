import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import InterstitialBand from "@/components/InterstitialBand";
import MasterTiers from "@/components/MasterTiers";
import TattooRoom from "@/components/TattooRoom";
import Amenities from "@/components/Amenities";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Reveal><Hero /></Reveal>
        <Reveal><SocialProof /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Calculator /></Reveal>
        
        <Reveal>
          <InterstitialBand
            label="РЕГЛАМЕНТ ТА ДИСЦИПЛІНА"
            statement="Чоловічий простір на вул. Шевченка 31А — поєднання точності стрижки, поваги до вашого часу та приватного паркінгу."
            watermark="ТРАДИЦІЇ"
          />
        </Reveal>

        <Reveal><MasterTiers /></Reveal>
        <Reveal><TattooRoom /></Reveal>
        <Reveal><Amenities /></Reveal>

        <Reveal>
          <div className="bg-bg-dark border-y border-border-gold/40 py-4 text-center">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              БАРБЕРІНГ ТА ТАТУ-МИСТЕЦТВО У ЛЬВОВІ · ВУЛ. ШЕВЧЕНКА 31А
            </span>
          </div>
        </Reveal>

        <Reveal><Portfolio /></Reveal>
        <Reveal><Reviews /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><BookingForm /></Reveal>
        <Reveal><ContactMap /></Reveal>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}