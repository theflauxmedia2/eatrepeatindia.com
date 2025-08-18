import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const brandsData = [
  {
    id: 'stories',
    name: 'STORIES',
    image: '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
    logo: '/brands/stbar.png',
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
    id: 'mohr',
    name: 'MOHR',
    image: '/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png',
    logo: '/brands/mohr.png',
    description: 'Bold flavors in an industrial-chic setting',
    category: 'Bar & Grill'
  },
  {
    id: 'mezera',
    name: 'MEZERA',
    image: '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png',
    logo: '/brands/mezera.png',
    description: 'Mediterranean soul food with contemporary flair',
    category: 'Mediterranean'
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
    id: 'the-black-perl',
    name: 'The Black Perl',
    image: '/lovable-uploads/tbp1.png',
    logo: '/brands/tbp.png',
    description: 'Mysterious and sophisticated cocktail experience',
    category: 'Cocktail Bar'
  }
];

const Brands = () => {
  const visibleBrands = brandsData.filter((b) => b.id !== 'mohr' && b.id !== 'mezera');
  const upcomingProjects = brandsData.filter((b) => b.id === 'mohr' || b.id === 'mezera');

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
                className="group hover-lift transition-elegant rounded-2xl shadow-elegant overflow-hidden group-hover:shadow-hover"
              >
                <div className="bg-white h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-body font-medium">
                        {brand.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    {/* Brand Logo */}
                    <div className="mb-4 sm:mb-6">
                      <img 
                        src={brand.logo}
                        alt={brand.name}
                        className="h-12 sm:h-16 w-auto object-contain"
                      />
                    </div>
                    <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
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
                  <div key={brand.id} className="rounded-2xl overflow-hidden shadow-elegant bg-white group">
                    <div className="relative">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-56 sm:h-64 lg:h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">Coming Soon</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="flex items-center gap-3">
                          <img src={brand.logo} alt={`${brand.name} logo`} className="h-10 sm:h-12 w-auto object-contain filter invert brightness-0" />
                          <div>
                            <h3 className="font-display text-white text-lg sm:text-xl font-semibold">{brand.name}</h3>
                            <p className="font-body text-white/80 text-xs sm:text-sm">{brand.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
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