import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = Array.from({ length: 8 }, (_, index) => `/hero_slider/${index + 1}.webp`);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Only the first slide is rendered immediately; the rest are loaded
  // one-by-one in the background so the initial page load stays light.
  const [loadedCount, setLoadedCount] = useState(1);

  useEffect(() => {
    let cancelled = false;

    const loadNext = (index: number) => {
      if (cancelled || index >= SLIDES.length) return;
      const img = new Image();
      const advance = () => {
        if (cancelled) return;
        setLoadedCount(index + 1);
        loadNext(index + 1);
      };
      img.onload = advance;
      img.onerror = advance;
      img.src = SLIDES[index];
    };

    loadNext(1);
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (loadedCount < 2) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % loadedCount);
    }, 6000);
    return () => clearInterval(interval);
  }, [loadedCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % loadedCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + loadedCount) % loadedCount);
  };

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] overflow-hidden bg-black"
      aria-label="Eat Repeat highlights"
    >
      {/* Image Slider */}
      <div className="absolute inset-0">
        {SLIDES.slice(0, loadedCount).map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 overflow-hidden transition-opacity transition-duration-[1200ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Eat Repeat restaurant ambience ${index + 1}`}
              className={`w-full h-full object-cover ${
                index === currentSlide ? 'animate-kenburns' : ''
              }`}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />

      {/* Tagline */}
      <div className="absolute inset-x-0 bottom-16 sm:bottom-20 md:bottom-24 z-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto animate-hero-tagline">
          <p className="font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-white/80 mb-3 sm:mb-4">
            Hospitality Group &middot; Bengaluru
          </p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl">
            Crafting memorable
            <span className="font-display-italic text-[#F2A67E]"> food experiences</span>
          </h1>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex items-center justify-center absolute left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-foreground transition-elegant"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-foreground transition-elegant"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-2.5">
        {SLIDES.slice(0, loadedCount).map((src, index) => (
          <button
            key={src}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ease-out ${
              index === currentSlide
                ? 'w-7 sm:w-9 bg-white'
                : 'w-2.5 sm:w-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
