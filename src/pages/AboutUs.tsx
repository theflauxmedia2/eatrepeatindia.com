import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="font-display-italic text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              Our Story
            </h1>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Building the future of dining, one brand at a time
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12 sm:mb-16 animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8">
              The Beginning
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p className="font-body">
                Eat Repeat was born from a simple belief: that great food experiences should stay with you long after the last bite. Our journey began when we realized that the hospitality industry needed more than just another restaurant group — it needed a curator of experiences, a builder of communities, and a storyteller of flavors.
              </p>
              <p className="font-body">
                From our first concept to our growing portfolio, we've remained committed to one core principle: every brand we nurture must have a soul, a story, and a reason to exist beyond just serving food.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* 2019 */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 animate-slide-up">
              <div className="lg:w-1/3">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display-italic text-primary font-bold mb-3 sm:mb-4">2019</div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  The Foundation
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We launched our first concept, STORIES, in the heart of the heritage district. More than just a restaurant, it was our manifesto — a place where every dish tells a story, every ingredient has a journey, and every guest becomes part of our narrative.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 animate-slide-up">
              <div className="lg:w-1/3">
                <div className="text-6xl font-display-italic text-primary font-bold mb-4">2020</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Adaptation & Growth
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  The pandemic taught us resilience and innovation. We expanded into cloud kitchens with MACAW and MOAI, proving that great brands can thrive in any format. Our focus shifted to delivery experiences that maintained the soul of our dine-in concepts.
                </p>
              </div>
            </div>

            {/* 2021-2022 */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 animate-slide-up">
              <div className="lg:w-1/3">
                <div className="text-6xl font-display-italic text-primary font-bold mb-4">2022</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Portfolio Expansion
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  We welcomed MOHR, MEZERA, Dr Sheesha, and The Black Perl into our family. Each brand brought its own unique voice while contributing to our collective vision of creating memorable dining experiences that matter.
                </p>
              </div>
            </div>

            {/* Present */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 animate-slide-up">
              <div className="lg:w-1/3">
                <div className="text-6xl font-display-italic text-primary font-bold mb-4">Today</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Building Tomorrow
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  With multiple successful brands under our umbrella, we continue to scout for new concepts, nurture emerging talent, and invest in experiences that push the boundaries of what dining can be. Our story is far from over — it's just beginning.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-display-italic text-white font-bold">S</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Soul</h3>
                <p className="font-body text-muted-foreground">Every brand must have a reason to exist beyond profit</p>
              </div>
              
              <div className="text-center hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-display-italic text-white font-bold">S</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Story</h3>
                <p className="font-body text-muted-foreground">Authentic narratives that connect with hearts and minds</p>
              </div>
              
              <div className="text-center hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-display-italic text-white font-bold">C</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Community</h3>
                <p className="font-body text-muted-foreground">Building spaces where people gather and memories are made</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button className="btn-luxury text-lg px-10 py-4 font-body">
              Explore Our Vision
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;