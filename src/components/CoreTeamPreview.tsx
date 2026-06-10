import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const CoreTeamPreview = () => {
  const featuredMembers = [
    {
      name: "Nerall Bakhai",
      designation: "Chairman & CEO",
      image: "/team/neral.png", // Replace with actual image
      isCEO: true,
      objectPosition: 'center 20%'
    },
    {
      name: "Akash Agarwal",
      designation: "Director, Operations",
      image: "/team/akash.png", // Replace with actual image
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
      image: "/team/manish.png", // Replace with actual image
      isCEO: false,
    },
    {
      name: "Dhiraj Kumar",
      designation: "Director, Strategy",
      image: "/team/dhiraj.webp",
      isCEO: false
    }
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const baseMembers = featuredMembers;
  const tripledMembers = [...baseMembers, ...baseMembers, ...baseMembers];
  const baseIndex = baseMembers.length; // start in middle copy
  const [currentIndex, setCurrentIndex] = useState(baseIndex);
  const [stepPx, setStepPx] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  const measureStep = () => {
    const container = trackRef.current;
    if (!container) return 0;
    const firstChild = container.children[0] as HTMLElement | null;
    if (!firstChild) return 0;
    const rect = firstChild.getBoundingClientRect();
    const styles = window.getComputedStyle(container);
    const gap = parseInt(styles.gap || '0', 10) || 0;
    return rect.width + gap;
  };

  useEffect(() => {
    const update = () => setStepPx(measureStep());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= baseIndex + baseMembers.length) {
      setEnableTransition(false);
      setCurrentIndex(baseIndex);
      requestAnimationFrame(() => setEnableTransition(true));
    } else if (currentIndex < baseIndex) {
      setEnableTransition(false);
      setCurrentIndex(baseIndex + baseMembers.length - 1);
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [currentIndex, baseIndex, baseMembers.length]);

  const handlePrev = () => setCurrentIndex((prev) => prev - 1);
  const handleNext = () => setCurrentIndex((prev) => prev + 1);

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow justify-center mb-4">The People</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="font-display-italic text-primary">Leadership</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the minds behind EatRepeat's growth and innovation.
          </p>
        </Reveal>

        <div className="relative mb-12">
          <div className="overflow-x-hidden overflow-y-visible px-2 pt-3 sm:pt-5">
            <div
              ref={trackRef}
              className="flex gap-4"
              style={{
                transform: `translateX(-${currentIndex * stepPx}px)`,
                transition: enableTransition ? 'transform 700ms ease' : 'none',
                willChange: 'transform',
              }}
            >
              {tripledMembers.map((member, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 basis-5/6 sm:basis-2/3 md:basis-1/3 lg:basis-1/4 text-center group"
                >
                  <div className="inline-block">
                    <div className="relative">
                      <div className={`mx-auto rounded-full border-3 border-gradient-to-r from-amber-400 to-orange-500 p-1 bg-gradient-to-r from-amber-400 to-orange-500 shadow-elegant hover-lift transition-all duration-300 ${
                        member.isCEO
                          ? 'w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48'
                          : 'w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40'
                      }`}>
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: (member as any).objectPosition || 'center' }}
                          />
                        </div>
                      </div>
                      {/* CEO badge removed as requested */}
                    </div>
                    <div className="mt-4">
                      <h3 className={`font-display font-bold text-foreground mb-1 ${
                        member.isCEO
                          ? 'text-lg sm:text-xl lg:text-2xl'
                          : 'text-base sm:text-lg lg:text-xl'
                      }`}>
                        {member.name}
                      </h3>
                      <p className={`text-primary font-medium tracking-wide uppercase ${
                        member.isCEO
                          ? 'text-sm sm:text-base'
                          : 'text-xs sm:text-sm'
                      }`}>
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - outside container */}
          <button
            onClick={handlePrev}
            className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white text-primary shadow-elegant ring-1 ring-primary/20 hover:bg-white/90 absolute left-2 md:-left-3 top-1/2 -translate-y-1/2"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white text-primary shadow-elegant ring-1 ring-primary/20 hover:bg-white/90 absolute right-2 md:-right-3 top-1/2 -translate-y-1/2"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="text-center">
          <Link to="/core-team">
            <Button className="btn-elegant text-base px-8 py-4 font-body group">
              Know More
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreTeamPreview;
