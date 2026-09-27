import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandsMarquee from '@/components/BrandsMarquee';
import MessyGridSection from '@/components/MessyGridSection';
import MissionPreview from '@/components/MissionPreview';
import CoreTeamPreview from '@/components/CoreTeamPreview';
import GalleryPreview from '@/components/GalleryPreview';
import BrandsCarousel from '@/components/BrandsCarousel';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Eat Repeat – Crafting Memorable Food Experiences in Bengaluru"
        description="Eat Repeat is a Bengaluru hospitality group. Its food brands — Stories, Macaw, Moai, Dr Sheesha and The Black Pearl — include restaurants, breweries and lounges."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Eat Repeat',
            url: 'https://www.eatrepeatindia.com/',
          },
        ]}
      />
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
