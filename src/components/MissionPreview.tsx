import React from 'react';
import Reveal from '@/components/Reveal';

const MissionPreview = () => {
  const strengths = [
    {
      title: "Best Industry Policies",
      description: "We follow the most robust and transparent policies, ensuring sustainable growth and operational excellence."
    },
    {
      title: "Rigorous Training",
      description: "We believe in empowering our workforce through continuous learning and skill-building programs."
    },
    {
      title: "Employee Engagement",
      description: "A happy team makes for a great workplace. Our initiatives foster collaboration and creativity."
    },
    {
      title: "Employee-Focused Culture",
      description: "Our culture places employees at the heart of everything we do, building trust and inclusivity."
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow justify-center mb-4">What Drives Us</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="font-display-italic text-primary">Mission</span> & 
            <span className="font-display-italic text-primary"> Strengths</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering best-in-class casual dining experiences through innovation, seamless ambience, and affordable pricing.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
          {/* Mission Statement */}
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/20 h-full transition-shadow duration-500 hover:shadow-luxury">
              <div className="text-center">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-body text-sm sm:text-base">
                  <p>
                    At EatRepeat, our mission is to deliver a best-in-class casual dining experience by combining food and beverage innovation, a seamless indoor–outdoor ambience, and accessible pricing for our guests.
                  </p>
                  <p>
                    We build brands with stories and soul—designing welcoming spaces, crafting memorable plates and pours, and nurturing a service culture rooted in warmth and consistency.
                  </p>
                  <p>
                    Our commitment extends beyond the table: we invest in our teams, operate with transparent processes, and grow alongside the communities we serve.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Strengths Preview */}
          <Reveal delay={120} className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-elegant border border-white/20 h-full transition-shadow duration-500 hover:shadow-luxury">
              <div className="mb-4 sm:mb-6 text-center">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Our <span className="font-display-italic text-primary">Strengths</span>
                </h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 rounded-xl p-3 -m-1 transition-colors duration-300 hover:bg-primary/5"
                  >
                    <span className="font-display-italic text-primary/40 text-lg sm:text-xl leading-none pt-0.5 transition-colors duration-300 group-hover:text-primary">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-foreground mb-1.5">
                        {strength.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-body">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MissionPreview;
