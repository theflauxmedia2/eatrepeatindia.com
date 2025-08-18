import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const Awards = () => {
  const awardImages = [
    '/awards/award1.png',
    '/awards/award2.png'
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="font-display-italic text-primary">Awards</span> & Recognitions
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-body max-w-3xl mx-auto">
              A testament to our commitment to hospitality, innovation, and guest experience across our brands.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {awardImages.map((src, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button
                    className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-elegant hover-lift transition-all duration-300 animate-slide-up focus:outline-none"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    aria-label={`View Award ${index + 1}`}
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={src}
                        alt={`Award ${index + 1}`}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03] cursor-zoom-in"
                      />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
                  <img
                    src={src}
                    alt={`Award ${index + 1} enlarged`}
                    className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Closing Blurb */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-elegant border border-white/20 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Driven by Craft, Community, and Care
              </h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                These honors inspire us to keep elevating experiences—across cuisine, ambience, and hospitality—while staying true to our roots and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;


