import React from 'react';
import Reveal from '@/components/Reveal';

const MessyGridSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Single Clean Image */}
          <Reveal className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative group">
              <div className="img-frame relative rounded-xl sm:rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="/oth/main.jpg" 
                  alt="Eat Repeat restaurant interior in Bengaluru"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
              
              {/* Subtle accent elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-hero rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-accent/20 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120} className="lg:col-span-5 space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <p className="eyebrow mb-4">Our Story</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight">
                Building brands with 
                <span className="font-display-italic text-primary"> stories, soul, </span>
                and community
              </h2>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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

          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MessyGridSection;