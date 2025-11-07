import Navigation from '@/components/Navigation';
import StartupsSection from '@/components/StartupsSection';
import Footer from '@/components/Footer';

const StartupsPage = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-20">
        <StartupsSection />
        <Footer />
      </div>
    </div>
  );
};export default StartupsPage;