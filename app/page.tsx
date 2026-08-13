import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import InteractiveCalculator from '@/components/InteractiveCalculator';
import Advantages from '@/components/Advantages';
import TattooRoom from '@/components/TattooRoom';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import VideoShowcase from '@/components/VideoShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { WatermarkStatement, LabeledHairline } from '@/components/Interstitials';
import { useLocale } from '@/lib/i18n';

export default function HomeWrapper() {
  return <HomeContent />;
}

function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-[hsl(20,15%,8%)] text-[hsl(35,15%,92%)] flex flex-col font-body">
      <Header onOpenBooking={() => setBookingOpen(true)} />
      
      <main className="flex-grow">
        <Hero onOpenBooking={() => setBookingOpen(true)} />
        <SocialProof />
        
        <Services onOpenBooking={() => setBookingOpen(true)} />
        
        {/* Interstitial 1 */}
        <WatermarkStatement 
          word="LVIV" 
          statement={String(t('interstitial.statement1'))} 
        />

        <InteractiveCalculator onOpenBooking={() => setBookingOpen(true)} />
        
        {/* Interstitial 2 */}
        <LabeledHairline label={String(t('interstitial.hairline1'))} />

        <Advantages />
        
        <TattooRoom onOpenBooking={() => setBookingOpen(true)} />
        
        <Team onOpenBooking={() => setBookingOpen(true)} />
        
        {/* Interstitial 3 */}
        <WatermarkStatement 
          word="REMESLO" 
          statement={String(t('interstitial.statement2'))} 
        />

        <Gallery />
        <VideoShowcase />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

function HomeContent() {
  return <Home />;
}
