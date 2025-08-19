import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Brand data with logos - using the available images from the brands folder
const brands = [
  {
    id: 'stories_bar&kitchen',
    name: 'STORIES',
    logo: '/brands/stbar.png',
    alt: 'STORIES Bar and Kitchen Brand Logo',
    path: '/brands'
  },
  {
    id: 'macaw',
    name: 'MACAW',
    logo: '/brands/macaw.png',
    alt: 'MACAW Brand Logo',
    path: '/brands'
  },
  {
    id: 'stories_brewery&kitchen',
    name: 'STORIES',
    logo: '/brands/stbr.png',
    alt: 'STORIES Brewery and Kitchen Brand Logo',
    path: '/brands'
  },
  {
    id: 'stories_dubai',
    name: 'STORIES Dubai',
    logo: '/brands/stdb.avif',
    alt: 'STORIES Dubai Brand Logo',
    path: '/brands'
  },
  {
    id: 'moai',
    name: 'MOAI',
    logo: '/brands/moai.png',
    alt: 'MOAI Brand Logo',
    path: '/brands'
  },
  {
    id: 'mohr',
    name: 'MOHR',
    logo: '/brands/mohr.png',
    alt: 'MOHR Brand Logo',
    path: '/brands'
  },
  {
    id: 'mezera',
    name: 'MEZERA',
    logo: '/brands/mezera.png',
    alt: 'MEZERA Brand Logo',
    path: '/brands'
  },
  {
    id: 'dr-sheesha',
    name: 'Dr Sheesha',
    logo: '/brands/drsheesha.png',
    alt: 'Dr Sheesha Brand Logo',
    path: '/brands'
  },
  {
    id: 'black-perl',
    name: 'The Black Perl',
    logo: '/brands/tbp.png',
    alt: 'The Black Perl Brand Logo',
    path: '/brands'
  },
  {
    id: 'Stories2.0',
    name: 'Stories2.0',
    logo: '/brands/st2lg.png',
    alt: 'Stories2.0 Brand Logo',
    path: '/brands'
  }
];

const BrandsMarquee = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getBrandPadding = (id: string) => {
    switch (id) {
      case 'mohr':
      case 'dr-sheesha':
        // Decrease perceived size with more padding
        return 'p-4 sm:p-5 md:p-6 lg:p-6';
      case 'Stories2.0':
      case 'moai':
      case 'black-perl':
        // Increase perceived size with less padding
        return 'p-1 sm:p-2 md:p-3 lg:p-4';
      default:
        return '';
    }
  };

  // Create a seamless loop by duplicating the brands array
  const loopedBrands = [...brands, ...brands];

  // Step-wise movement with pauses - increased speed
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when we reach the end of the original array
        // This creates the seamless loop effect
        return nextIndex >= brands.length ? 0 : nextIndex;
      });
    }, 1800); // Increased speed: 1.8 seconds (1.3s pause + 0.5s transition)

    return () => clearInterval(interval);
  }, []);

  const handleBrandClick = () => {
    navigate('/brands');
  };

  // Calculate the transform based on current index and screen size
  const getTransform = () => {
    if (!containerRef.current) return 0;
    
    const container = containerRef.current;
    const logoElements = container.querySelectorAll('[data-logo]');
    
    if (logoElements.length === 0) return 0;
    
    const firstLogo = logoElements[0] as HTMLElement;
    const logoWidth = firstLogo.offsetWidth;
    const logoMargin = parseInt(window.getComputedStyle(firstLogo).marginLeft) * 2; // Both left and right margins
    const totalWidth = logoWidth + logoMargin;
    
    return -currentIndex * totalWidth;
  };

  return (
    <section className="py-2 sm:py-4 md:py-6 lg:py-8 relative overflow-hidden bg-[#E07646]">
      {/* Marquee Container */}
      <div className="relative">
        {/* Marquee Track */}
        <div className="flex overflow-hidden" ref={containerRef}>
          <div 
            className="flex whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${getTransform()}px)` }}
          >
            {loopedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                data-logo
                className="flex-shrink-0 mx-4 sm:mx-8 md:mx-12 lg:mx-16 group cursor-pointer"
                onClick={handleBrandClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleBrandClick();
                  }
                }}
              >
                <div className="relative">
                  {/* Logo Container - Fixed size for consistency */}
                  <div className={`w-28 sm:w-36 md:w-48 lg:w-56 h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center transition-elegant ${getBrandPadding(brand.id) || 'p-2 sm:p-3 md:p-4 lg:p-5'}`}>
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      className="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
