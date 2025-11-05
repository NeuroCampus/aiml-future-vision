import Navigation from '@/components/Navigation';
import StartupsSection from '@/components/StartupsSection';
import Footer from '@/components/Footer';
import VortexBackground from '@/components/animations/VortexBackground';

const StartupsPage = () => {
  return (
    <VortexBackground>
      <Navigation />
      <div className="pt-20">
        <StartupsSection />
        <Footer />
      </div>
    </VortexBackground>
  );
};export default StartupsPage;