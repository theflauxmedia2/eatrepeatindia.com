import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Users, Star, Lightbulb } from 'lucide-react';

const OurVision = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display-italic text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
            Our Vision
          </h1>
          <p className="font-body text-xl text-muted-foreground leading-relaxed animate-slide-up">
            We envision a future where every meal becomes a memory, every venue tells a story, 
            and every brand in our portfolio contributes to a richer, more connected culinary landscape.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* What We Believe */}
          <div className="mb-20 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What We <span className="font-display-italic text-primary">Believe</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="font-body">
                    Food is more than sustenance — it's culture, it's connection, it's the thread that weaves through our most precious moments. We believe that great brands aren't built on recipes alone, but on the stories they tell and the communities they create.
                  </p>
                  <p className="font-body">
                    In an industry often driven by trends and quick profits, we choose to build for longevity. We invest in concepts that have substance, teams that have passion, and experiences that leave lasting impressions.
                  </p>
                  <p className="font-body">
                    Every brand under the Eat Repeat umbrella exists to enrich lives, not just serve meals. We curate experiences that stay with you — that make you want to come back, to bring others, to be part of something bigger than yourself.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png"
                  alt="Our vision of dining"
                  className="w-full h-96 object-cover rounded-2xl shadow-luxury"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-hero rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* The Eat Repeat Standard */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Eat Repeat <span className="font-display-italic text-primary">Standard</span>
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Every brand we nurture, every experience we create, every investment we make is measured against these core principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center hover-lift p-8 bg-white rounded-2xl shadow-elegant">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Passion-Driven</h3>
                <p className="font-body text-muted-foreground">Every concept must come from genuine passion and authentic purpose</p>
              </div>
              
              <div className="text-center hover-lift p-8 bg-white rounded-2xl shadow-elegant">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Community-Focused</h3>
                <p className="font-body text-muted-foreground">Building spaces where connections flourish and memories are made</p>
              </div>
              
              <div className="text-center hover-lift p-8 bg-white rounded-2xl shadow-elegant">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Excellence-Oriented</h3>
                <p className="font-body text-muted-foreground">Uncompromising commitment to quality in every detail</p>
              </div>
              
              <div className="text-center hover-lift p-8 bg-white rounded-2xl shadow-elegant">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Innovation-Led</h3>
                <p className="font-body text-muted-foreground">Constantly evolving while staying true to our core values</p>
              </div>
            </div>
          </div>

          {/* Building with Passion */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl shadow-luxury p-12 lg:p-16">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Building with <span className="font-display-italic text-primary">Passion</span>
                </h2>
              </div>
              
              <div className="space-y-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-4">For Entrepreneurs</h3>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      We partner with visionary entrepreneurs who have more than just a great recipe — they have a story to tell, a community to serve, and the passion to see it through. We provide the resources, expertise, and support to turn culinary dreams into thriving realities.
                    </p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-4">For Communities</h3>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      Our brands become gathering places — third spaces where relationships are built, celebrations happen, and everyday moments become special. We design experiences that bring people together and strengthen the fabric of local communities.
                    </p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-4">For the Future</h3>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      We're not just building restaurants — we're crafting the future of hospitality. Through sustainable practices, innovative technology, and timeless values, we create brands that will thrive for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center mb-16">
            <blockquote className="font-display-italic text-3xl lg:text-4xl text-primary leading-relaxed max-w-4xl mx-auto">
              "We don't just create restaurants. We cultivate experiences that become part of people's stories, 
              building brands that guests don't just visit — they belong to."
            </blockquote>
            <div className="mt-8">
              <cite className="font-body text-lg text-muted-foreground">— The Eat Repeat Team</cite>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Ready to Build Something Extraordinary?
              </h3>
              <p className="font-body text-lg text-muted-foreground">
                Whether you're an entrepreneur with a vision or an investor looking for meaningful opportunities, 
                we'd love to hear from you.
              </p>
            </div>
            <Button className="btn-luxury text-lg px-10 py-4 font-body">
              Start the Conversation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurVision;