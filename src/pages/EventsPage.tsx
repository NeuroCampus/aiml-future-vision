import { useState } from 'react';
import Navigation from '@/components/Navigation';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import VortexBackground from '@/components/animations/VortexBackground';

const EventsPage = () => {
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
            <EventsSection />
            <Footer />
          </div>
        </VortexBackground>
      </div>
    </>
  );
};

export default EventsPage;