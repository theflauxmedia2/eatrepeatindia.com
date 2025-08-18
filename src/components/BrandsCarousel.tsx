import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

// Mock data for brands - in a real app, this would come from an API
const brandsData = [
  {
    id: 'stories',
    name: 'STORIES',
    image: '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
    logo: '/brands/stbar.png',
    address: 'Downtown Heritage District',
    description: 'Narrative dining where every dish tells a story'
  },
  {
    id: 'macaw',
    name: 'MACAW',
    image: '/hero_slider/5.png',
    logo: '/brands/macaw.png',
    address: 'Tropical Gardens Plaza',
    description: 'Vibrant flavors inspired by exotic cuisines'
  },
  {
    id: 'moai',
    name: 'MOAI',
    image: '/oth/main.jpg',
    logo: '/brands/moai.png',
    address: 'Coastal Marina District',
    description: 'Ancient wisdom meets modern culinary artistry'
  }
];

const BrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<'menu' | 'reserve' | null>(null);

  const brandLinks: Record<string, { locations: Array<{ name: string; menu: string; reserve: string }> }> = {
    stories: {
      locations: [
        {
          name: 'Rajajinagar',
          reserve: 'https://webbook.wegsoft.com/T6S5R4Q3P2O1N0M9L8',
          menu: 'https://www.zomato.com/bangalore/stories-bar-kitchen-rajajinagar-bangalore/order',
        },
      ],
    },
    macaw: {
      locations: [
        {
          name: 'Bengaluru',
          reserve: 'https://webbook.wegsoft.com/H7G6F5E4D3C2B1A0Z9Y8',
          menu: 'https://www.zomato.com/bangalore/macaw-by-stories-bommanahalli-bangalore/menu',
        },
      ],
    },
    moai: {
      locations: [
        {
          name: 'Jayanagar, Bengaluru',
          reserve: 'https://webbook.wegsoft.com/B34LKJHG76V',
          menu: 'https://www.zomato.com/bangalore/moai-1-jayanagar-bangalore/menu',
        },
      ],
    },
  };

  const openAction = (brandId: string, action: 'menu' | 'reserve') => {
    const info = brandLinks[brandId];
    if (!info || info.locations.length === 0) return;
    if (info.locations.length === 1) {
      const url = info.locations[0][action];
      window.open(url, '_blank');
      return;
    }
    setSelectedBrandId(brandId);
    setSelectedAction(action);
    setIsDialogOpen(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % brandsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + brandsData.length) % brandsData.length);
  };

  const currentBrand = brandsData[currentIndex];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-fade-in">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Our <span className="font-display-italic text-primary">Brands</span>
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our diverse portfolio of dining experiences, each with its own unique character and culinary story.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Mobile: Single card carousel */}
          <div className="block lg:hidden">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-luxury group">
              {/* Background Image */}
              <img 
                src={currentBrand.image}
                alt={currentBrand.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover color overlay */}
              <div className="absolute inset-0 bg-[#E07646] opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-out z-10" />
              {/* Hover content (logo + text) */}
              <div className="absolute inset-0 z-20 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-3 sm:mb-4 md:mb-6 inline-flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <img 
                      src={currentBrand.logo}
                      alt={currentBrand.name}
                      className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <p className="font-body text-sm sm:text-lg md:text-xl text-white mb-1 sm:mb-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                    {currentBrand.description}
                  </p>
                  <p className="font-body text-xs sm:text-base md:text-lg text-white/90 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out delay-200">
                    {currentBrand.address}
                  </p>
                </div>
              </div>
              {/* Always-visible action buttons */}
              <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                  <Button 
                    onClick={() => openAction(currentBrand.id, 'menu')}
                    className="bg-white text-primary px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-body text-xs sm:text-sm md:text-base transition-none hover:!bg-white hover:!text-primary"
                  >
                    MENU
                  </Button>
                  <Button 
                    onClick={() => openAction(currentBrand.id, 'reserve')}
                    className="bg-primary text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-body text-xs sm:text-sm md:text-base transition-none hover:!bg-primary hover:!text-white"
                  >
                    BOOK A TABLE
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Three cards grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
            {brandsData.slice(0, 3).map((brand, index) => (
              <div key={brand.id} className="relative h-[500px] rounded-2xl overflow-hidden shadow-luxury group">
                {/* Background Image */}
                <img 
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover color overlay */}
                <div className="absolute inset-0 bg-[#E07646] opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-out z-10" />
                {/* Hover content (logo + text) */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <img 
                        src={brand.logo}
                        alt={brand.name}
                        className="h-20 w-auto object-contain brightness-0 invert"
                      />
                    </div>
                    <p className="font-body text-lg text-white mb-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                      {brand.description}
                    </p>
                    <p className="font-body text-sm text-white/90 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out delay-200">
                      {brand.address}
                    </p>
                  </div>
                </div>
                {/* Always-visible action buttons */}
                <div className="absolute inset-x-0 bottom-0 z-30 p-6">
                  <div className="flex flex-col gap-3">
                    <Button 
                      onClick={() => openAction(brand.id, 'menu')}
                      className="bg-white text-primary px-6 py-2 font-body text-sm transition-none hover:!bg-white hover:!text-primary"
                    >
                      MENU
                    </Button>
                    <Button 
                      onClick={() => openAction(brand.id, 'reserve')}
                      className="bg-primary text-white px-6 py-2 font-body text-sm transition-none hover:!bg-primary hover:!text-white"
                    >
                      BOOK A TABLE
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Mobile Only */}
          <button
            onClick={prevSlide}
            className="lg:hidden absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4 rounded-full bg-white/90 backdrop-blur-sm text-primary hover:bg-white hover:shadow-elegant transition-elegant"
            aria-label="Previous brand"
          >
            <ChevronLeft size={16} className="sm:hidden" />
            <ChevronLeft size={20} className="hidden sm:block md:hidden" />
            <ChevronLeft size={24} className="hidden md:block" />
          </button>
          
          <button
            onClick={nextSlide}
            className="lg:hidden absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4 rounded-full bg-white/90 backdrop-blur-sm text-primary hover:bg-white hover:shadow-elegant transition-elegant"
            aria-label="Next brand"
          >
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={20} className="hidden sm:block md:hidden" />
            <ChevronRight size={24} className="hidden md:block" />
          </button>

          {/* Brand Indicators - Mobile Only */}
          <div className="lg:hidden flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1.5 sm:space-x-2 md:space-x-3">
            {brandsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-6 h-1 sm:w-8 md:w-12 sm:h-1 rounded-full transition-elegant ${
                  index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to brand ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Brands Link */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <Button 
            className="btn-elegant px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-body transition-none"
            onClick={() => window.location.href = '/brands'}
          >
            View All Brands
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
      {/* Location Selector Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogTitle className="font-display text-xl">Choose Location</DialogTitle>
          <div className="mt-2 space-y-3">
            {(selectedBrandId && selectedAction && brandLinks[selectedBrandId]?.locations || []).map((loc, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  window.open(loc[selectedAction], '_blank');
                  setIsDialogOpen(false);
                }}
                className="w-full justify-between"
              >
                <span>{loc.name}</span>
                <span className="text-primary font-medium uppercase text-xs">{selectedAction === 'menu' ? 'Menu' : 'Reserve'}</span>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrandsCarousel;