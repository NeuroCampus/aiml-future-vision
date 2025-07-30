import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import ResearchSection from '@/components/ResearchSection';
import StudentsSection from '@/components/StudentsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      )}
      
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ResearchSection />
        <StudentsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
