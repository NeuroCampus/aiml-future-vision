import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import ResearchSection from '@/components/ResearchSection';
import StudentsSection from '@/components/StudentsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ResearchSection />
      <StudentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
