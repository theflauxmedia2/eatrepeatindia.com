import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: hero1,
      title: "Crafting experiences that stay with your taste buds",
      subtitle: "and your heart."
    },
    {
      image: '/lovable-uploads/b3464ca3-72eb-4c89-943c-6f40887c6b97.png',
      title: "MOAI - Redefined Vegetarian Dining",
      subtitle: "Where tradition meets innovation in J.P. Nagar"
    },
    {
      image: '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
      title: "STORIES - Narrative Dining Experience",
      subtitle: "Where every dish tells a story"
    },
    {
      image: '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png',
      title: "MACAW - Vibrant Exotic Flavors",
      subtitle: "Where tropical cuisines take flight"
    },
    {
      image: hero2,
      title: "Eat Repeat nurtures vibrant food brands",
      subtitle: "built to be loved and remembered."
    },
    {
      image: hero3,
      title: "From concept to community",
      subtitle: "we create dining destinations that matter."
    }
  ];

  useEffect(() => {
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
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          <div className="animate-fade-in">
            <h1 className="font-display-italic text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="font-display-italic text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-white/90">
              {slides[currentSlide].subtitle}
            </p>
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Eat Repeat nurtures vibrant food brands built to be loved and remembered.
            </p>
            <Link to="/our-vision">
              <Button className="btn-luxury text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 font-body">
                Explore Our Vision
              </Button>
            </Link>
          </div>
        </div>
      </div>

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
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-elegant ${
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