import Navigation from '@/components/Navigation';
import StudentClubsSection from '@/components/StudentClubsSection';
import Footer from '@/components/Footer';
import VortexBackground from '@/components/animations/VortexBackground';

const StudentClubsPage = () => {
  return (
    <VortexBackground>
      <Navigation />
      <div className="pt-20">
        <StudentClubsSection />
        <Footer />
      </div>
    </VortexBackground>
  );
};export default StudentClubsPage;