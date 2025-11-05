import Navigation from '@/components/Navigation';
import SportsAchievementsSection from '@/components/SportsAchievementsSection';
import Footer from '@/components/Footer';
import VortexBackground from '@/components/animations/VortexBackground';

const SportsAchievementsPage = () => {
  return (
    <VortexBackground>
      <Navigation />
      <div className="pt-20">
        <SportsAchievementsSection />
        <Footer />
      </div>
    </VortexBackground>
  );
};export default SportsAchievementsPage;