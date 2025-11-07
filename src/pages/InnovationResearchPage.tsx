import Navigation from '@/components/Navigation';
import InnovationResearchSection from '@/components/InnovationResearchSection';
import Footer from '@/components/Footer';

const InnovationResearchPage = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-20">
        <InnovationResearchSection />
        <Footer />
      </div>
    </div>
  );
};export default InnovationResearchPage;