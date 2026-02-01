
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ProofSection } from './components/ProofSection';
import { BookingCTA } from './components/BookingCTA';
import { Questionnaire } from './components/Questionnaire';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current && window.innerWidth > 1024) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuestionnaire = () => {
    const element = document.getElementById('questionnaire-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <div ref={glowRef} className="cursor-glow hidden lg:block" />
      <Header hasScrolled={hasScrolled} onCTAClick={scrollToBooking} />
      
      <main className="relative z-10">
        <Hero 
          onPrimaryClick={scrollToBooking} 
          onSecondaryClick={scrollToQuestionnaire} 
        />
        
        <div className="space-y-24 md:space-y-40 bg-white">
          <ValueProposition onCTAClick={scrollToBooking} />
          <ProofSection onCTAClick={scrollToBooking} />
          <div className="pb-24 md:pb-32 bg-slate-50">
            <BookingCTA id="booking-section" />
            <Questionnaire id="questionnaire-section" onComplete={scrollToBooking} />
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
