import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<string[]>([]);

  // Build, preload, and filter valid slide sources
  useEffect(() => {
    const allSlides = Array.from({ length: 9 }, (_, index) => `/hero_slider/${index + 1}.png`);
    let isCancelled = false;

    const preload = (src: string) =>
      new Promise<string | null>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
        img.src = src;
      });

    Promise.all(allSlides.map(preload)).then((results) => {
      if (isCancelled) return;
      const valid = results.filter(Boolean) as string[];
      setSlides(valid);
      setCurrentSlide(0);
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // Words to display on the bottom-left for each slide (customize as needed)
  const slideWords = [
  ];

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((imageSrc, index) => (
          <div
            key={imageSrc}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={imageSrc}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-overlay"></div> */}
          </div>
        ))}
      </div>

      {/* Minimal Word Overlay - Bottom Left */}
      {slideWords[currentSlide] && (
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 left-4 sm:left-8 md:left-12 lg:left-16 z-20">
          <div className="animate-fade-in">
            <h1 className="font-display-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              {slideWords[currentSlide]}
            </h1>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-elegant"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-elegant"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1.5 sm:space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;