import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const brandsData = [
  {
    id: 'stories',
    name: 'STORIES',
    image: '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
    logo: '/brands/stdb.avif',
    description: 'Narrative dining where every dish tells a story',
    category: 'Fine Dining'
  },
  {
    id: 'macaw',
    name: 'MACAW',
    image: '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png',
    logo: '/brands/macaw.png',
    description: 'Vibrant flavors inspired by exotic cuisines',
    category: 'Bar and Kitchen'
  },
  {
    id: 'moai',
    name: 'MOAI',
    image: '/lovable-uploads/361129d3-46c0-4f9a-96ca-8bb5f84214bc.png',
    logo: '/brands/moai.png',
    description: 'Ancient wisdom meets modern culinary artistry',
    category: 'Casual Dining'
  },
  // New current brand
  {
    id: 'stories-2-0',
    name: 'Stories 2.0',
    image: '/hero_slider/5.png',
    logo: '/brands/st2lg.png',
    description: 'Next chapter in experiential dining with elevated storytelling',
    category: 'Experiential Dining'
  },
  {
    id: 'dr-sheesha',
    name: 'Dr Sheesha',
    image: '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png',
    logo: '/brands/drsheesha.png',
    description: 'Premium sheesha lounge with global influences',
    category: 'Lounge'
  },
  {
    id: 'stories-brewery-kitchen',
    name: 'Stories Brewery & Kitchen',
    image: '/hero_slider/6.png',
    logo: '/brands/stbr.png',
    description: 'Craft brews paired with hearty, modern kitchen favorites.',
    category: 'Brewery & Kitchen'
  },
  {
    id: 'stories-bar-kitchen',
    name: 'Stories Bar & Kitchen',
    image: '/hero_slider/3.png',
    logo: '/brands/stbar.png',
    description: 'Vibrant bar culture with a kitchen that celebrates global flavors.',
    category: 'Bar & Kitchen'
  },
  {
    id: 'the-black-pearl',
    name: 'The Black Pearl',
    image: '/lovable-uploads/tbp1.png',
    logo: '/brands/tbp.png',
    description: 'Mysterious and sophisticated cocktail experience',
    category: 'Cocktail Bar'
  }
];

const Brands = () => {
  const visibleBrands = brandsData.filter((b) => b.id !== 'mohr' && b.id !== 'mezera');
  const upcomingProjects = [
    { id: 'phi-kanakpura', name: 'PHI - KANAKPURA' },
    { id: 'stories-lounge-mysore-road', name: 'STORIES LOUNGE - MYSORE ROAD' },
    { id: 'macaw-by-stories-hyderabad', name: 'MACAW BY STORIES - HYDERABAD' },
    { id: 'stories-bar-kitchen-whitefield', name: 'STORIES BAR & KITCHEN - WHITEFIELD' },
    { id: 'drs-chennai', name: 'DRS - CHENNAI' },
  ];

  const brandImages: Record<string, string[]> = {
    stories: [
      // '/lovable-uploads/1a870a73-de94-4bfe-8493-9d3702b1ede3.png',
      // '/lovable-uploads/0c76eb70-683b-4d78-9bb3-6337100b1fe6.png',
      '/lovable-uploads/5304796f-4545-49f9-92b3-8dfd449af76f.png',
      '/lovable-uploads/d922890b-5a60-4130-a9cc-85a43046bbbf.png',
      '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png'
    ],
    macaw: [
      '/hero_slider/4.png',
      '/hero_slider/5.png',
      '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png'
    ],
    moai: [
      '/moai/1.jpg',
      '/moai/2.jpg',
      '/lovable-uploads/1e3842c9-cdaa-4eaf-b8c9-9e32600b74cc.png',
      'moai/3.jpg',
      'hero_slider/7.png'
    ],
    'stories-2-0': [
      '/2.0/1.webp',
      '/2.0/2.webp',
      '/2.0/3.webp',
      '/2.0/4.webp',
      '/2.0/5.webp'
    ],
    'dr-sheesha': [
      '/drs/1.jpg',
      '/drs/2.jpg',
      '/drs/3.webp',
      '/drs/4.webp'
    ],
    'the-black-pearl': [
      '/tbc/1.jpg',
      '/tbc/2.jpg',
      '/tbc/3.jpg'
    ],
    'stories-brewery-kitchen': [
      '/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png',
      '/hero_slider/3.png'
    ],
    'stories-bar-kitchen': [
      '/lovable-uploads/0c76eb70-683b-4d78-9bb3-6337100b1fe6.png',
      '/oth/stbr.webp'
    ]
  };

  const BrandImageSlider: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
    const [idx, setIdx] = useState(0);
    const hasMultiple = images.length > 1;
    const goPrev = () => setIdx((p) => (p - 1 + images.length) % images.length);
    const goNext = () => setIdx((p) => (p + 1) % images.length);

    useEffect(() => {
      if (!hasMultiple) return;
      const id = setInterval(() => {
        setIdx((p) => (p + 1) % images.length);
      }, 5000); // slower auto-advance
      return () => clearInterval(id);
    }, [images.length, hasMultiple]);

    return (
      <div className="relative overflow-hidden h-56 sm:h-64 lg:h-72">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${i === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-primary shadow-elegant hover:bg-white"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-primary shadow-elegant hover:bg-white"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
    );
  };

  const getLogoContainerClasses = (id: string) => {
    switch (id) {
      case 'dr-sheesha':
        return 'w-40 sm:w-48 md:w-56 h-12 sm:h-16 md:h-20'; // smaller
      case 'mohr':
        return 'w-40 sm:w-48 md:w-56 h-12 sm:h-16 md:h-20'; // smaller
      case 'stories-2-0':
        return 'w-48 sm:w-56 md:w-64 h-20 sm:h-24 md:h-28'; // larger
      case 'moai':
        return 'w-48 sm:w-56 md:w-64 h-20 sm:h-24 md:h-28'; // larger
      case 'the-black-pearl':
        return 'w-48 sm:w-56 md:w-64 h-20 sm:h-24 md:h-28'; // larger
      default:
        return 'w-40 sm:w-48 md:w-56 h-16 sm:h-20 md:h-24';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display-italic text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6">
            Our Brands
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our diverse portfolio of dining experiences, each crafted with its own unique story and character.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Improved Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {visibleBrands.map((brand) => (
              <div
                key={brand.id}
                className="group hover-lift transition-elegant rounded-2xl shadow-elegant overflow-hidden group-hover:shadow-hover bg-[#E07646]"
              >
                <div className="h-full flex flex-col">
                  {/* Image */}
                  <BrandImageSlider images={brandImages[brand.id] || [brand.image]} alt={brand.name} />
                  {/* Category Badge */}
                  <div className="-mt-10 ml-3 sm:ml-4">
                    <span className="bg-white/25 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-body font-medium">
                      {brand.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col text-white">
                    {/* Brand Logo (brand-specific sizing) */}
                    <div className="mb-4 sm:mb-6">
                      <div className={`${getLogoContainerClasses(brand.id)} flex items-center justify-start`}>
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain brightness-0 invert"
                        />
                      </div>
                    </div>
                    <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed flex-1">
                      {brand.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Projects */}
          {upcomingProjects.length > 0 && (
            <div className="mt-16 sm:mt-20 lg:mt-24">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Upcoming <span className="font-display-italic text-primary">Projects</span>
                </h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-3">
                  A glimpse into what we’re building next. Stay tuned.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {upcomingProjects.map((brand) => (
                  <div key={brand.id} className="rounded-2xl shadow-elegant bg-white p-6 sm:p-8 text-center">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E07646]/10 text-[#E07646] inline-block mb-3">
                      Coming Soon
                    </span>
                    <h3 className="font-display text-foreground text-xl sm:text-2xl font-semibold">
                      {brand.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Interested in Partnership?
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional concepts and passionate teams to join our growing family of brands.
            </p>
            <Link to="/contact">
              <button className="btn-luxury text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 font-body">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;