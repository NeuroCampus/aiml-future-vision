import Navigation from '@/components/Navigation';
import InnovationResearchSection from '@/components/InnovationResearchSection';
import Footer from '@/components/Footer';
import VortexBackground from '@/components/animations/VortexBackground';

const InnovationResearchPage = () => {
  return (
    <VortexBackground>
      <Navigation />
      <div className="pt-20">
        <InnovationResearchSection />
        <Footer />
      </div>
    </VortexBackground>
  );
};export default InnovationResearchPage;