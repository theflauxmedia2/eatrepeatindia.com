import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<string[]>([]);

  // Build, preload, and filter valid slide sources
  useEffect(() => {
    const allSlides = Array.from({ length: 9 }, (_, index) => `/hero_slider/${index + 1}.webp`);
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
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            0 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/1.webp"
            alt="Hero 1"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            1 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/2.webp"
            alt="Hero 2"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            2 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/3.webp"
            alt="Hero 3"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            3 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/4.webp"
            alt="Hero 4"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            4 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/5.webp"
            alt="Hero 5"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            5 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/6.webp"
            alt="Hero 6"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            6 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/7.webp"
            alt="Hero 7"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            7 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/8.webp"
            alt="Hero 8"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            8 === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/hero_slider/9.webp"
            alt="Hero 9"
            className="w-full h-full object-cover"
          />
        </div>
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
        <button
          onClick={() => setCurrentSlide(0)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            0 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 1"
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            1 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 2"
        />
        <button
          onClick={() => setCurrentSlide(2)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            2 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 3"
        />
        <button
          onClick={() => setCurrentSlide(3)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            3 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 4"
        />
        <button
          onClick={() => setCurrentSlide(4)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            4 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 5"
        />
        <button
          onClick={() => setCurrentSlide(5)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            5 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 6"
        />
        <button
          onClick={() => setCurrentSlide(6)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            6 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 7"
        />
        <button
          onClick={() => setCurrentSlide(7)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            7 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 8"
        />
        <button
          onClick={() => setCurrentSlide(8)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-elegant ${
            8 === currentSlide ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Go to slide 9"
        />
      </div>
    </section>
  );
};

export default HeroSection;