import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import AcademicExcellenceSection from '@/components/AcademicExcellenceSection';
import EventsSection from '@/components/EventsSection';
import FacultySection from '@/components/FacultySection';
import AlumniReflectionsSection from '@/components/AlumniReflectionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import VortexBackground from '@/components/animations/VortexBackground';

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if it's a page refresh/reload
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isReload = navigation?.type === 'reload' || performance.navigation?.type === 1;
    
    // Show loading on first visit or on refresh
    return !sessionStorage.getItem('loadingCompleted') || isReload;
  });
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling after navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('loadingCompleted', 'true');
  };

  return (
    <>
      {isLoading && (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      )}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <VortexBackground>
          <Navigation />
          {/* Added pt-20 to ensure content doesn't overlap with fixed navbar on small screens */}
                    <div className="pt-20">
            <HeroSection />
            <AboutSection />
            <LeadershipSection />
            <AcademicExcellenceSection />
            <EventsSection />
            <FacultySection />
            <AlumniReflectionsSection />
            <ContactSection />
            <Footer />
          </div>
        </VortexBackground>
      </div>
    </>
  );
};

export default Index;