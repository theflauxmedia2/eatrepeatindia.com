import React from 'react';
 

const GalleryPreview = () => {
  const previewImages = [
    {
      id: 1,
      src: "/oth/stbr.webp",
      alt: "Fine Dining"
    },
    {
      id: 2,
      src: "/lovable-uploads/0c76eb70-683b-4d78-9bb3-6337100b1fe6.png",
      alt: "Dining Experience"
    },
    {
      id: 3,
      src: "/lovable-uploads/vision.JPG",
      alt: "Vibe"
    },
    {
      id: 4,
      src: "/hero_slider/4.webp",
      alt: "Ambiance"
    },
    {
      id: 5,
      src: "/moai/2.jpg",
      alt: "Moai"
    },
    {
      id: 6,
      src: "/hero_slider/9.webp",
      alt: "Macaw"
    },
    {
      id: 7,
      src: "/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png",
      alt: "Dine with a View"
    },
    {
      id: 8,
      src: "/tbc/3.jpg",
      alt: "The Black Pearl"
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            <span className="font-display-italic text-primary">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the unique ambiance and design of our diverse restaurant outlets.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {previewImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl aspect-square"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ease-out z-10 rounded-xl sm:rounded-2xl"></div>
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-xl sm:rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-20 rounded-b-xl sm:rounded-b-2xl">
                <h3 className="text-white font-display font-semibold text-xs sm:text-sm">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default GalleryPreview;
