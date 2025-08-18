import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CoreTeam = () => {
  const teamMembers = [
    {
      name: "Nerall Bakhai",
      designation: "Chairman & CEO",
      image: "/team/neral.png",
      isCEO: true,
      objectPosition: 'center 20%'
    },
    {
      name: "Akash Agarwal",
      designation: "Director, Operations",
      image: "/team/akash.png",
      isCEO: false,
      objectPosition: 'center 25%',
      scale: 1.2,
      offsetY: 20,
      offsetX: 1
    },
    {
      name: "Vinay CR",
      designation: "Director, Purchase",
      image: "/team/vinay.png",
      isCEO: false,
      objectPosition: 'center 22%'
    },
    {
      name: "Bharath Satish",
      designation: "Director, Finance",
      image: "/team/bharat.png",
      isCEO: false,
      objectPosition: 'center 18%'
    },
    {
      name: "Manish Naidu",
      designation: "Director, Infrastructure",
      image: "/team/manish.png",
      isCEO: false,
      objectPosition: 'center 30%',
      scale: 2.5,
      offsetY: 75
    },
    {
      name: "Dhiraj Kumar",
      designation: "Director, Strategy",
      image: "/team/dhiraj.png",
      isCEO: false,
      objectPosition: 'center 20%'
    }
  ];

  const ceo = teamMembers.find(member => member.isCEO);
  const directors = teamMembers.filter(member => !member.isCEO);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Meet The <span className="font-display-italic text-primary">Team</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-body mb-6">
                At EatRepeat, our strength lies in the people who lead us. Behind every successful brand and every delighted customer is a team of visionaries who bring strategy, innovation, and execution together.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-body">
                Our leadership team is a blend of industry expertise, operational excellence, and a forward-looking approach to growth. With diverse skills and a shared vision, they guide EatRepeat to be a trusted name in the F&B industry.
              </p>
            </div>
          </div>

          {/* CEO Section */}
          {ceo && (
            <div className="text-center mb-20">
              <div className="inline-block group">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full border-4 border-gradient-to-r from-amber-400 to-orange-500 p-1 bg-gradient-to-r from-amber-400 to-orange-500 shadow-elegant hover-lift transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.6)] ring-4 ring-amber-300/50">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white ring-2 ring-amber-200">
                      <img 
                        src={ceo.image} 
                        alt={ceo.name}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: (ceo as any).objectPosition || 'center',
                          transform: `translateY(${(ceo as any).offsetY || 0}%) scale(${(ceo as any).scale || 1})`,
                          transformOrigin: 'center'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {ceo.name}
                  </h2>
                  <p className="text-lg sm:text-xl text-primary font-medium tracking-wide uppercase">
                    {ceo.designation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Directors Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our <span className="font-display-italic text-primary">Directors</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The strategic minds driving our operational excellence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {directors.map((director, index) => (
                <div 
                  key={index}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-block">
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full border-3 border-gradient-to-r from-amber-400 to-orange-500 p-1 bg-gradient-to-r from-amber-400 to-orange-500 shadow-elegant hover-lift transition-all duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img 
                            src={director.image} 
                            alt={director.name}
                            className="w-full h-full object-cover"
                            style={{
                              objectPosition: (director as any).objectPosition || 'center',
                              transform: `translateY(${(director as any).offsetY || 0}%) scale(${(director as any).scale || 1})`,
                              transformOrigin: 'center'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1">
                        {director.name}
                      </h4>
                      <p className="text-sm sm:text-base text-primary font-medium tracking-wide uppercase">
                        {director.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-elegant border border-white/20">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Work With Our Team?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with our leadership team and explore opportunities to collaborate with EatRepeat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="btn-elegant text-base px-8 py-4 font-body group">
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/brands">
                  <Button variant="outline" className="text-base px-8 py-4 font-body border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    Explore Our Brands
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CoreTeam;
