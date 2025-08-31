import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import AcademicExcellenceSection from '@/components/AcademicExcellenceSection';
import ProgramsSection from '@/components/ProgramsSection';
import InnovationResearchSection from '@/components/InnovationResearchSection';
import StartupsSection from '@/components/StartupsSection';
import EventsSection from '@/components/EventsSection';
import StudentClubsSection from '@/components/StudentClubsSection';
import FacultySection from '@/components/FacultySection';
import StudentsSection from '@/components/StudentsSection';
import SportsAchievementsSection from '@/components/SportsAchievementsSection';
import AlumniReflectionsSection from '@/components/AlumniReflectionsSection';
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
          <LeadershipSection />
          <AcademicExcellenceSection />
          <ProgramsSection />
          <InnovationResearchSection />
          <StartupsSection />
          <EventsSection />
          <StudentClubsSection />
          <FacultySection />
          <StudentsSection />
          <SportsAchievementsSection />
          <AlumniReflectionsSection />
          <ContactSection />
          <Footer />
        </VortexBackground>
      </div>
    </>
  );
};

export default Index;
