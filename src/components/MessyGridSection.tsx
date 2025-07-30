import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import grid1 from '@/assets/grid-1.jpg';
import grid2 from '@/assets/grid-2.jpg';
import grid3 from '@/assets/grid-3.jpg';

const MessyGridSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Messy Grid Images */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Large image - top left */}
              <div className="relative col-span-1 row-span-2 hover-lift rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src="/lovable-uploads/e3f1d159-7e01-4ea2-8682-c2d50c66650b.png" 
                  alt="Modern restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Medium image - top right */}
              <div className="relative mt-8 sm:mt-12 lg:mt-16 hover-lift rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={grid2} 
                  alt="Artisanal food preparation"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              
              {/* Small image - bottom right */}
              <div className="relative -mt-4 sm:-mt-6 lg:-mt-8 hover-lift rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={grid3} 
                  alt="Elegant restaurant branding"
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Floating accent element */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-hero rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-accent/20 rounded-full opacity-30 blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 animate-slide-up order-1 lg:order-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Building brands with 
                <span className="font-display-italic text-primary"> stories, soul, </span>
                and community
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p className="font-body">
                  From warm local cafés to concept-driven cloud kitchens, we don't just open food places — we build brands with stories, soul, and community.
                </p>
                
                <p className="font-body">
                  Each venture under the Eat Repeat umbrella carries its own unique identity while sharing our commitment to exceptional experiences and memorable moments.
                </p>
                
                <p className="font-body">
                  We believe great food is just the beginning. It's about creating spaces where people gather, stories unfold, and memories are made.
                </p>
              </div>
            </div>

            <Link to="/about-us">
              <Button className="btn-elegant text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-body group">
                Read More
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessyGridSection;