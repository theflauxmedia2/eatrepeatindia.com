import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import Reveal from '@/components/Reveal';

// website: the brand's own site (domains from Flaux HQ). Omit it when the brand has no site for its Indian outlet.
const brandsData: Array<{ id: string; name: string; image: string; logo: string; address: string; description: string; website?: string }> = [
  {
    id: 'stories',
    name: 'STORIES',
    image: '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.webp',
    logo: '/brands/stbar.png',
    address: 'Rajajinagar · RR Nagar · Nagarbhavi · HSR',
    description: 'Narrative dining where every dish tells a story',
    website: 'https://storiesbarandkitchen.com'
  },
  {
    id: 'macaw',
    name: 'MACAW',
    image: '/hero_slider/5.webp',
    logo: '/brands/macaw.png',
    address: 'Bengaluru · Chennai · Hyderabad',
    description: 'Vibrant flavors inspired by exotic cuisines',
    website: 'https://macawbystoriesindia.com'
  },
  {
    id: 'moai',
    name: 'MOAI',
    image: '/oth/main.jpg',
    logo: '/brands/moai.png',
    address: 'Jayanagar · Koramangala, Bengaluru',
    description: 'Ancient wisdom meets modern culinary artistry',
    website: 'https://moaiveg.com'
  },
  {
    id: 'stories-brewery',
    name: 'STORIES BREWERY & KITCHEN',
    image: '/oth/stbr.webp',
    logo: '/brands/stbr.png',
    address: 'BTM Layout, Bengaluru',
    description: 'Fresh brews and hearty plates under one roof',
    website: 'https://storiesbrewery.com'
  },
  {
    id: 'fernway',
    name: 'FERNWAY BY STORIES',
    image: '/oth/fernway.webp',
    logo: '/brands/fernway.png',
    address: 'Bengaluru',
    description: 'An open-air lounge made for long evenings',
    website: 'https://fernwaybystories.com'
  },
  {
    // WHY no website: drsheesha.com is the Dubai lounge; the outlet listed here is Chennai.
    id: 'dr-sheesha',
    name: 'DR SHEESHA',
    image: '/oth/drsheesha.webp',
    logo: '/brands/drsheesha.png',
    address: 'Sholinganallur, Chennai',
    description: 'Signature sheesha, good food and a laid-back lounge'
  }
];

// Source=9 tags bookings as coming from the website channel in ReserveGo.
const reserveGo = (outletId: string) => `https://widget.reservego.co/reserveOutlets/${outletId}?source=9`;

// Small pill in the card corner; the only link to the brand site (the card itself is not clickable, per client).
const WebsiteLink = ({ brand }: { brand: (typeof brandsData)[number] }) =>
  brand.website ? (
    <a
      href={brand.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit the ${brand.name} website`}
      className="group/web absolute top-3 right-3 lg:top-4 lg:right-4 z-30 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 font-body text-[11px] lg:text-xs font-medium uppercase tracking-wider text-primary shadow-sm transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
    >
      Visit website <span aria-hidden="true" className="transition-transform duration-300 group-hover/web:translate-x-0.5 group-hover/web:-translate-y-0.5">↗</span>
    </a>
  ) : null;

const BrandsCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<'menu' | 'reserve' | null>(null);

  const brandLinks: Record<string, { locations: Array<{ name: string; menu: string; reserve: string }> }> = {
    stories: {
      locations: [
        { name: 'Rajajinagar', reserve: reserveGo('653e6e8316d6a247600428d4'), menu: 'https://www.zomato.com/bangalore/stories-bar-kitchen-rajajinagar-bangalore/order' },
        { name: 'RR Nagar', reserve: reserveGo('653e6e8416d6a2476004292a'), menu: 'https://www.zomato.com/bangalore/stories-bar-kitchen-rajarajeshwari-nagar-bangalore/menu' },
        { name: 'Nagarbhavi', reserve: reserveGo('653e6e8416d6a2476004295f'), menu: 'https://www.zomato.com/bangalore/stories-bar-kitchen-nagarbhavi-bangalore/menu' },
        { name: 'HSR Layout', reserve: reserveGo('69bcd9150f2197fb3951dcb3'), menu: 'https://www.zomato.com/bangalore/stories-bar-kitchen-hsr-bangalore/menu' },
      ],
    },
    macaw: {
      locations: [
        { name: 'Bengaluru', reserve: reserveGo('64aa45b4c0fd5976db46b060'), menu: 'https://www.zomato.com/bangalore/macaw-by-stories-bommanahalli-bangalore/menu' },
        { name: 'Chennai', reserve: reserveGo('66adf33263849f246eb22c00'), menu: 'https://www.zomato.com/chennai/macaw-by-stories-sholinganallur/menu' },
        { name: 'Hyderabad', reserve: reserveGo('6a48ab6db543525d8d8a533d'), menu: 'https://www.zomato.com/hyderabad/macaw-by-stories-jubilee-hills/menu' },
      ],
    },
    moai: {
      locations: [
        { name: 'Jayanagar, Bengaluru', reserve: reserveGo('69afcde798e88d0e87a4e9a2'), menu: 'https://www.zomato.com/bangalore/moai-1-jayanagar-bangalore/menu' },
        { name: 'Koramangala, Bengaluru', reserve: reserveGo('6a32359314024824fad52f97'), menu: 'https://www.zomato.com/bangalore/moai-koramangala-5th-block-bangalore/menu' },
      ],
    },
    'stories-brewery': {
      locations: [
        { name: 'BTM Layout', reserve: reserveGo('653e6e8316d6a2476004286e'), menu: 'https://www.zomato.com/bangalore/stories-brewery-kitchen-btm-bangalore/menu' },
      ],
    },
    fernway: {
      // WHY own-site menu: Fernway has no Zomato listing.
      locations: [
        { name: 'Bengaluru', reserve: reserveGo('69f84d68d1e0f45432ca2e77'), menu: 'https://fernwaybystories.com/menu' },
      ],
    },
    'dr-sheesha': {
      locations: [
        { name: 'Chennai', reserve: reserveGo('69bcd9150f2197fb3951dcb6'), menu: 'https://www.zomato.com/chennai/dr-sheesha-sholinganallur/menu' },
      ],
    },
  };

  const openAction = (brandId: string, action: 'menu' | 'reserve') => {
    const info = brandLinks[brandId];
    if (!info || info.locations.length === 0) return;
    if (info.locations.length === 1) {
      const url = info.locations[0][action];
      window.open(url, '_blank');
      return;
    }
    setSelectedBrandId(brandId);
    setSelectedAction(action);
    setIsDialogOpen(true);
  };

  // Phones/tablets: a native horizontal scroller with snap points (swipe works for free).
  // Desktop (lg+): the same cards laid out as a 3-column grid; arrows and dots are hidden there.
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const i = (index + brandsData.length) % brandsData.length; // wrap around at both ends
    const card = el.children[i] as HTMLElement | undefined;
    const first = el.children[0] as HTMLElement | undefined;
    if (!card || !first) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
  };

  // Keep the dots in sync with whatever card the visitor swiped to.
  const handleScroll = () => {
    const el = scrollerRef.current;
    const first = el?.children[0] as HTMLElement | undefined;
    const second = el?.children[1] as HTMLElement | undefined;
    if (!el || !first || !second) return;
    const step = second.offsetLeft - first.offsetLeft;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setCurrentIndex(atEnd ? brandsData.length - 1 : Math.round(el.scrollLeft / step));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="eyebrow justify-center mb-4">The Portfolio</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Our <span className="font-display-italic text-primary">Brands</span>
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our diverse portfolio of dining experiences, each with its own unique character and culinary story.
          </p>
        </Reveal>

        {/* Carousel Container */}
        <div className="relative">
          {/* Negative margin + matching padding lets cards scroll edge-to-edge while the first card still lines up with the page gutter. */}
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory overscroll-x-contain -mx-4 px-4 sm:-mx-6 sm:px-6 scroll-px-4 sm:scroll-px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0"
          >
            {brandsData.map((brand) => (
              <div
                key={brand.id}
                className="relative shrink-0 snap-start w-[66%] sm:w-[48%] md:w-[42%] lg:w-auto h-[420px] sm:h-[480px] lg:h-[500px] rounded-2xl overflow-hidden shadow-luxury group"
              >
                {/* Background Image */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover color overlay */}
                <div className="absolute inset-0 bg-[#E07646] opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-out z-10" />
                {/* Hover content (logo + text) */}
                <div className="absolute inset-0 z-20 p-4 pt-14 lg:p-6 lg:pt-16 flex flex-col justify-between">
                  <div>
                    <div className="mb-3 lg:mb-4 inline-flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <div className="w-36 lg:w-48 h-14 lg:h-20 flex items-center justify-start">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain object-left brightness-0 invert"
                        />
                      </div>
                    </div>
                    <p className="font-body text-sm sm:text-base lg:text-lg text-white mb-1 lg:mb-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                      {brand.description}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-white/90 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out delay-200">
                      {brand.address}
                    </p>
                  </div>
                </div>
                <WebsiteLink brand={brand} />
                {/* Always-visible action buttons */}
                <div className="absolute inset-x-0 bottom-0 z-30 p-4 lg:p-6">
                  <div className="flex flex-col gap-2 lg:gap-3">
                    <Button
                      onClick={() => openAction(brand.id, 'menu')}
                      className="bg-white text-primary px-4 lg:px-6 py-2 font-body text-xs sm:text-sm transition-none hover:!bg-white hover:!text-primary"
                    >
                      MENU
                    </Button>
                    <Button
                      onClick={() => openAction(brand.id, 'reserve')}
                      className="bg-primary text-white px-4 lg:px-6 py-2 font-body text-xs sm:text-sm transition-none hover:!bg-primary hover:!text-white"
                    >
                      BOOK A TABLE
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - phones/tablets only. z-40 keeps them above every card layer. */}
          <button
            onClick={() => scrollToIndex(currentIndex - 1)}
            className="lg:hidden absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-elegant hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous brand"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <button
            onClick={() => scrollToIndex(currentIndex + 1)}
            className="lg:hidden absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-elegant hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next brand"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>

          {/* Brand Indicators - phones/tablets only */}
          <div className="lg:hidden flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
            {brandsData.map((brand, index) => (
              <button
                key={brand.id}
                onClick={() => scrollToIndex(index)}
                className={`w-6 h-1 sm:w-8 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to ${brand.name}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>

        {/* All Brands Link */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <Button 
            className="btn-elegant px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-body transition-none"
            onClick={() => navigate('/brands')}
          >
            View All Brands
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
      {/* Location Selector Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogTitle className="font-display text-xl">Choose Location</DialogTitle>
          <div className="mt-2 space-y-3">
            {(selectedBrandId && selectedAction && brandLinks[selectedBrandId]?.locations || []).map((loc, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  window.open(loc[selectedAction], '_blank');
                  setIsDialogOpen(false);
                }}
                className="w-full justify-between"
              >
                <span>{loc.name}</span>
                <span className="text-primary font-medium uppercase text-xs">{selectedAction === 'menu' ? 'Menu' : 'Reserve'}</span>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrandsCarousel;