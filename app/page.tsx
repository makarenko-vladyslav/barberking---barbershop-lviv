"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Advantages from "@/components/Advantages";
import TattooRoom from "@/components/TattooRoom";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import GiftCertificates from "@/components/GiftCertificates";
import FAQ from "@/components/FAQ";
import LocationMap from "@/components/LocationMap";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { TickerInterstitial, LabeledHairline, WatermarkStatement } from "@/components/Interstitials";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledSummary, setPrefilledSummary] = useState("");

  const handleOpenBooking = (summary?: string) => {
    if (summary) setPrefilledSummary(summary);
    else setPrefilledSummary("");
    setIsModalOpen(true);
  };

  const tickerItems = [
    "4.9 / 5 GOOGLE MAPS",
    "БЕЗКОШТОВНИЙ ПАРКІНГ",
    "FREE WHISKEY BAR & COFFEE",
    "TATTOO ROOM STUDIO",
    "ШЕВЧЕНКА 31А ЛЬВІВ",
    "674+ ВІДГУКІВ"
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-text-main">
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <SocialProof />
        
        <Services onBookService={(s) => handleOpenBooking(s)} />
        
        <LabeledHairline label="КАЛЬКУЛЯТОР ВІЗИТУ" />
        <Calculator onBookCalculated={(s) => handleOpenBooking(s)} />
        
        <WatermarkStatement
          word="BARBERKING"
          statement="Чоловічий простір у Львові з власною парковкою, затишним баром та професійними майстрами"
        />
        
        <Advantages />
        
        <TickerInterstitial items={tickerItems} />
        
        <TattooRoom onBookTattoo={() => handleOpenBooking("Консультація Tattoo Room")} />
        
        <Team onBookBarber={(b) => handleOpenBooking(`Запис до барбера: ${b}`)} />
        
        <LabeledHairline label="ВІДГУКИ ГОСТЕЙ" />
        <Reviews />
        
        <GiftCertificates onBuyCert={(amt) => handleOpenBooking(`Подарунковий сертифікат ${amt}`)} />
        
        <FAQ />
        
        <LocationMap />
        
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledSummary={prefilledSummary}
      />
    </div>
  );
}
