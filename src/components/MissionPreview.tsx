import React from 'react';

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
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="font-display-italic text-primary">Mission</span> & 
            <span className="font-display-italic text-primary"> Strengths</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering best-in-class casual dining experiences through innovation, seamless ambience, and affordable pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
          {/* Mission Statement */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/20">
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
          </div>

          {/* Strengths Preview */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-elegant border border-white/20 h-full">
              <div className="mb-4 sm:mb-6 text-center">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Our <span className="font-display-italic text-primary">Strengths</span>
                </h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPreview;
