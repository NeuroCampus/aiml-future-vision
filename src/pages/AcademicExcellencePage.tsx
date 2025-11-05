import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AcademicExcellenceSection from '@/components/AcademicExcellenceSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import VortexBackground from '@/components/animations/VortexBackground';

const AcademicExcellencePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      )}

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <VortexBackground>
          <Navigation />
          <div className="pt-20">
            <AcademicExcellenceSection />
            <Footer />
          </div>
        </VortexBackground>
      </div>
    </>
  );
};

export default AcademicExcellencePage;