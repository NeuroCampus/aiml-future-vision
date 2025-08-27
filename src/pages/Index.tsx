import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen"
        >
          <ScrollProgress />
          <VortexBackground>
            <Navigation />
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.main>
            <Footer />
          </VortexBackground>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
