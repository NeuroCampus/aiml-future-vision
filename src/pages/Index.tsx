import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import StudentClubsSection from '@/components/StudentClubsSection';
import StudentsSection from '@/components/StudentsSection';
import EventsSection from '@/components/EventsSection';
import FacultySection from '@/components/FacultySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import VortexBackground from '@/components/animations/VortexBackground';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      )}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <VortexBackground>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <EventsSection />
          <StudentClubsSection />
          <FacultySection />
          <StudentsSection />
          <ContactSection />
          <Footer />
        </VortexBackground>
      </div>
    </>
  );
};

export default Index;
