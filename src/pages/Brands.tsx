import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const brandsData = [
  {
    id: 'stories',
    name: 'STORIES',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    description: 'Narrative dining where every dish tells a story',
    category: 'Fine Dining'
  },
  {
    id: 'macaw',
    name: 'MACAW',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80',
    description: 'Vibrant flavors inspired by exotic cuisines',
    category: 'Bar and Kitchen'
  },
  {
    id: 'moai',
    name: 'MOAI',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    description: 'Ancient wisdom meets modern culinary artistry',
    category: 'Casual Dining'
  },
  // {
  //   id: 'mohr',
  //   name: 'MOHR',
  //   image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80',
  //   description: 'Bold flavors in an industrial-chic setting',
  //   category: 'Bar & Grill'
  // },
  // {
  //   id: 'mezera',
  //   name: 'MEZERA',
  //   image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
  //   description: 'Mediterranean soul food with contemporary flair',
  //   category: 'Mediterranean'
  // },
  {
    id: 'dr-sheesha',
    name: 'Dr Sheesha',
    image: '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png',
    description: 'Premium sheesha lounge with global influences',
    category: 'Lounge'
  },
  {
    id: 'the-black-perl',
    name: 'The Black Perl',
    image: '/lovable-uploads/tbp1.png',
    description: 'Mysterious and sophisticated cocktail experience',
    category: 'Cocktail Bar'
  }
];

const Brands = () => {
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
            {brandsData.map((brand, index) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.id}`}
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
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed flex-1 mb-3 sm:mb-4">
                      {brand.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center text-primary font-body font-medium mt-auto text-sm sm:text-base">
                      <span className="group-hover:mr-2 transition-all">Learn More</span>
                      <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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