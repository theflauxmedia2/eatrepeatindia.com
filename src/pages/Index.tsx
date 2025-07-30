import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MessyGridSection from '@/components/MessyGridSection';
import BrandsCarousel from '@/components/BrandsCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MessyGridSection />
      <BrandsCarousel />
      <Footer />
    </div>
  );
};

export default Index;
