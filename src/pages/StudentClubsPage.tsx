import Navigation from '@/components/Navigation';
import StudentClubsSection from '@/components/StudentClubsSection';
import Footer from '@/components/Footer';

const StudentClubsPage = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-20">
        <StudentClubsSection />
        <Footer />
      </div>
    </div>
  );
};export default StudentClubsPage;