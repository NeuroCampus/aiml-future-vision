import Navigation from '@/components/Navigation';
import SportsAchievementsSection from '@/components/SportsAchievementsSection';
import Footer from '@/components/Footer';

const SportsAchievementsPage = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-20">
        <SportsAchievementsSection />
        <Footer />
      </div>
    </div>
  );
};export default SportsAchievementsPage;