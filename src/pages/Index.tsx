import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandsMarquee from '@/components/BrandsMarquee';
import MessyGridSection from '@/components/MessyGridSection';
import MissionPreview from '@/components/MissionPreview';
import CoreTeamPreview from '@/components/CoreTeamPreview';
import GalleryPreview from '@/components/GalleryPreview';
import BrandsCarousel from '@/components/BrandsCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandsMarquee />
      <MessyGridSection />
      <MissionPreview />
      <CoreTeamPreview />
      <BrandsCarousel />
      <GalleryPreview />
      <Footer />
    </div>
  );
};

export default Index;
