import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  // Outlet images using existing images from public folder
  const outletImages = [
    {
      id: 1,
      src: "/lovable-uploads/e3f1d159-7e01-4ea2-8682-c2d50c66650b.png",
      alt: "MOAI Outlet Interior",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 2,
      src: "/lovable-uploads/0c76eb70-683b-4d78-9bb3-6337100b1fe6.png",
      alt: "MOAI Dining Area",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 3,
      src: "/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png",
      alt: "MOAI Kitchen",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 4,
      src: "/lovable-uploads/1a870a73-de94-4bfe-8493-9d3702b1ede3.png",
      alt: "MOAI Bar Area",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 5,
      src: "/lovable-uploads/1e3842c9-cdaa-4eaf-b8c9-9e32600b74cc.png",
      alt: "MOAI Exterior",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 6,
      src: "/lovable-uploads/tbp1.png",
      alt: "The Black Perl Interior",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 7,
      src: "/lovable-uploads/1f5863bf-3195-4bb4-99ce-17aaee5ad34d.png",
      alt: "STORIES Outlet",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 8,
      src: "/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png",
      alt: "MACAW Outlet",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 9,
      src: "/lovable-uploads/361129d3-46c0-4f9a-96ca-8bb5f84214bc.png",
      alt: "Dr Sheesha Outlet",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 10,
      src: "/lovable-uploads/4b78cb93-25be-4b1b-b989-6634c4671cc7.png",
      alt: "Outlet Interior",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 11,
      src: "/lovable-uploads/5304796f-4545-49f9-92b3-8dfd449af76f.png",
      alt: "Dining Experience",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 12,
      src: "/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png",
      alt: "Kitchen Setup",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 13,
      src: "/lovable-uploads/7677ca2e-56e6-4e60-bd4b-1d758cede96c.png",
      alt: "Bar Setup",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 14,
      src: "/lovable-uploads/78696dea-e51d-4cb4-af93-efb68403effa.png",
      alt: "Outdoor Seating",
      width: "col-span-1",
      height: "row-span-1"
    },
    {
      id: 15,
      src: "/lovable-uploads/89bd4ce6-f80b-4ed8-b47d-c4ca9ff1371c.png",
      alt: "VIP Area",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 16,
      src: "/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png",
      alt: "Event Space",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 17,
      src: "/lovable-uploads/b3464ca3-72eb-4c89-943c-6f40887c6b97.png",
      alt: "Private Dining",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 18,
      src: "/lovable-uploads/bd6f9435-7e35-4795-98a5-7fba8f974c20.png",
      alt: "Lounge Area",
      width: "col-span-1",
      height: "row-span-2"
    },
    {
      id: 19,
      src: "/lovable-uploads/d922890b-5a60-4130-a9cc-85a43046bbbf.png",
      alt: "Dining Hall",
      width: "col-span-1",
      height: "row-span-3"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="font-display-italic text-primary">Outlets</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the unique ambiance and design of our diverse restaurant outlets across the city.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-2 sm:gap-3">
            {outletImages.map((image, index) => (
              <div 
                key={image.id}
                className={`relative group overflow-hidden rounded-xl sm:rounded-2xl mb-2 sm:mb-3 break-inside-avoid ${
                  image.height === 'row-span-3' ? 'h-80 sm:h-96' : 
                  image.height === 'row-span-2' ? 'h-80 sm:h-96' : 'h-64 sm:h-69'
                }`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ease-out z-10 rounded-xl sm:rounded-2xl"></div>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-xl sm:rounded-2xl"
                />
                {/** Caption overlay temporarily disabled */}
                {false && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-20 rounded-b-xl sm:rounded-b-2xl">
                    <h3 className="text-white font-display font-semibold text-sm sm:text-base">
                      {image.alt}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-elegant border border-white/20">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Experience Our Outlets
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Visit any of our outlets to experience the unique atmosphere and exceptional dining that makes EatRepeat special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/brands" className="btn-elegant text-base px-8 py-4 font-body group inline-flex items-center justify-center">
                  Explore Our Brands
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/contact" className="text-base px-8 py-4 font-body border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-lg inline-flex items-center justify-center">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
