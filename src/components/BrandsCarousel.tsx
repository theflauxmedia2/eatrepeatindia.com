import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for brands - in a real app, this would come from an API
const brandsData = [
  {
    id: 'stories',
    name: 'STORIES',
    image: '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
    address: 'Downtown Heritage District',
    description: 'Narrative dining where every dish tells a story'
  },
  {
    id: 'macaw',
    name: 'MACAW',
    image: '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png',
    address: 'Tropical Gardens Plaza',
    description: 'Vibrant flavors inspired by exotic cuisines'
  },
  {
    id: 'moai',
    name: 'MOAI',
    image: '/lovable-uploads/361129d3-46c0-4f9a-96ca-8bb5f84214bc.png',
    address: 'Coastal Marina District',
    description: 'Ancient wisdom meets modern culinary artistry'
  },
  {
    id: 'mohr',
    name: 'MOHR',
    image: '/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png',
    address: 'Industrial Arts Quarter',
    description: 'Bold flavors in an industrial-chic setting'
  },
  {
    id: 'mezera',
    name: 'MEZERA',
    image: '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png',
    address: 'Garden Terrace Level',
    description: 'Mediterranean soul food with contemporary flair'
  }
];

const BrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % brandsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + brandsData.length) % brandsData.length);
  };

  const currentBrand = brandsData[currentIndex];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="font-display-italic text-primary">Brands</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse portfolio of dining experiences, each with its own unique character and culinary story.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Mobile: Single card carousel */}
          <div className="block lg:hidden">
            <div className="relative h-[500px] sm:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-luxury group">
              {/* Background Image */}
              <img 
                src={currentBrand.image}
                alt={currentBrand.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-overlay"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                {/* Brand Name */}
                <div className="animate-fade-in">
                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
                    {currentBrand.name}
                  </h3>
                  <p className="font-body text-lg sm:text-xl text-white/90 mb-2">
                    {currentBrand.description}
                  </p>
                  <p className="font-body text-base sm:text-lg text-white/70">
                    {currentBrand.address}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary transition-elegant px-6 sm:px-8 py-2 sm:py-3 font-body text-sm sm:text-base">
                    MENU
                  </Button>
                  <Button className="btn-luxury px-6 sm:px-8 py-2 sm:py-3 font-body text-sm sm:text-base">
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
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-overlay"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Brand Name */}
                  <div className="animate-fade-in">
                    <h3 className="font-display text-3xl font-bold text-white mb-3">
                      {brand.name}
                    </h3>
                    <p className="font-body text-lg text-white/90 mb-2">
                      {brand.description}
                    </p>
                    <p className="font-body text-sm text-white/70">
                      {brand.address}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary transition-elegant px-6 py-2 font-body text-sm">
                      MENU
                    </Button>
                    <Button className="btn-luxury px-6 py-2 font-body text-sm">
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
            className="lg:hidden absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-sm text-primary hover:bg-white hover:shadow-elegant transition-elegant"
            aria-label="Previous brand"
          >
            <ChevronLeft size={20} className="sm:hidden" />
            <ChevronLeft size={24} className="hidden sm:block" />
          </button>
          
          <button
            onClick={nextSlide}
            className="lg:hidden absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-sm text-primary hover:bg-white hover:shadow-elegant transition-elegant"
            aria-label="Next brand"
          >
            <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </button>

          {/* Brand Indicators - Mobile Only */}
          <div className="lg:hidden flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {brandsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-1 sm:w-12 sm:h-1 rounded-full transition-elegant ${
                  index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to brand ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Brands Link */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            className="btn-elegant px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-body group"
            onClick={() => window.location.href = '/brands'}
          >
            View All Brands
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;