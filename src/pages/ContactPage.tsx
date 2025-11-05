import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import VortexBackground from '@/components/animations/VortexBackground';

const ContactPage = () => {
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
            <ContactSection />
            <Footer />
          </div>
        </VortexBackground>
      </div>
    </>
  );
};

export default ContactPage;