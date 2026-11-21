import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { brandLinks, type Outlet } from '@/lib/brands';

// area: shown instead of the outlet list when a brand has no bookable outlets here.
const brandsData: Array<{ id: string; name: string; image: string; logo: string; description: string; category: string; area?: string }> = [
  {
    id: 'stories-bar-kitchen',
    name: 'Stories Bar & Kitchen',
    image: '/hero_slider/3.webp',
    logo: '/brands/stbar.png',
    description: 'Vibrant bar culture with a kitchen that celebrates global flavors.',
    category: 'Bar & Kitchen'
  },
  {
    id: 'stories-brewery-kitchen',
    name: 'Stories Brewery & Kitchen',
    image: '/hero_slider/6.webp',
    logo: '/brands/stbr-trim.png',
    description: 'Craft brews paired with hearty, modern kitchen favorites.',
    category: 'Brewery & Kitchen'
  },
  {
    id: 'macaw',
    name: 'MACAW',
    image: '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.webp',
    logo: '/brands/macaw.png',
    description: 'Vibrant flavors inspired by exotic cuisines',
    category: 'Bar and Kitchen'
  },
  {
    id: 'moai',
    name: 'MOAI',
    image: '/lovable-uploads/361129d3-46c0-4f9a-96ca-8bb5f84214bc.webp',
    logo: '/brands/moai-trim.png',
    description: 'Ancient wisdom meets modern culinary artistry',
    category: 'Casual Dining'
  },
  {
    id: 'fernway',
    name: 'Fernway by Stories',
    image: '/oth/fernway.webp',
    logo: '/brands/fernway.png',
    description: 'An open-air lounge made for long, easy evenings.',
    category: 'Open-Air Lounge'
  },
  {
    id: 'dr-sheesha',
    name: 'Dr Sheesha',
    image: '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.webp',
    logo: '/brands/drsheesha.png',
    description: 'Premium sheesha lounge with global influences',
    category: 'Lounge'
  },
  {
    id: 'the-black-pearl',
    name: 'The Black Pearl',
    image: '/lovable-uploads/tbp1.webp',
    logo: '/brands/tbp.png',
    description: 'Premier pirate-themed barbecue restaurant offering a Caribbean-style dining experience with immersive decor & authentic pirate vibes.',
    category: 'Cocktail Bar'
  },
  {
    id: 'stories-dubai',
    name: 'Stories Lounge Dubai',
    image: '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.webp',
    logo: '/brands/stdb.avif',
    description: 'Rooftop dining and drinks with a view over Bur Dubai.',
    category: 'Rooftop Lounge',
    area: 'Bur Dubai, UAE'
  }
];

const brandImages: Record<string, string[]> = {
  'stories-dubai': [
    '/lovable-uploads/5304796f-4545-49f9-92b3-8dfd449af76f.webp',
    '/lovable-uploads/d922890b-5a60-4130-a9cc-85a43046bbbf.webp',
    '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.webp'
  ],
  macaw: [
    '/hero_slider/4.webp',
    '/hero_slider/5.webp',
    '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.webp'
  ],
  moai: [
    '/moai/1.jpg',
    '/moai/2.jpg',
    '/lovable-uploads/1e3842c9-cdaa-4eaf-b8c9-9e32600b74cc.webp',
    '/moai/3.jpg',
    '/hero_slider/7.webp'
  ],
  'dr-sheesha': [
    '/drs/1.jpg',
    '/drs/2.jpg',
    '/drs/3.webp',
    '/drs/4.webp'
  ],
  'the-black-pearl': [
    '/tbc/1.jpg',
    '/tbc/2.jpg',
    '/tbc/3.jpg'
  ],
  'stories-brewery-kitchen': [
    '/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.webp',
    '/hero_slider/3.webp'
  ],
  'stories-bar-kitchen': [
    '/lovable-uploads/0c76eb70-683b-4d78-9bb3-6337100b1fe6.webp',
    '/oth/stbr.webp'
  ]
};

const upcomingProjects = [
  { id: 'phi-kanakpura', name: 'PHI - KANAKPURA' },
  { id: 'stories-bar-kitchen-whitefield', name: 'STORIES BAR & KITCHEN - WHITEFIELD' },
];

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E07646]';

// Defined outside the page so its slide index survives page re-renders.
const BrandImageSlider: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultiple = images.length > 1;
  const goPrev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const goNext = () => setIdx((p) => (p + 1) % images.length);

  useEffect(() => {
    // Auto-advance only when the visitor hasn't asked for reduced motion and isn't interacting with the card.
    if (!hasMultiple || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIdx((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length, hasMultiple, paused]);

  const arrow = `absolute top-1/2 -translate-y-1/2 z-10 grid place-items-center h-9 w-9 rounded-full bg-white/90 text-primary shadow-elegant transition-[opacity,background-color] duration-300 hover:bg-white lg:opacity-0 lg:group-hover:opacity-100 focus-visible:opacity-100 ${focusRing}`;

  return (
    <div
      className="relative overflow-hidden h-56 sm:h-64 lg:h-72"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === idx ? alt : ''}
          loading={i === 0 ? undefined : 'lazy'}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* Soft fade so the photo melts into the card colour */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px h-20 bg-gradient-to-t from-[#E07646] to-transparent" />
      {hasMultiple && (
        <>
          <button onClick={goPrev} className={`${arrow} left-3`} aria-label={`Previous ${alt} photo`}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button onClick={goNext} className={`${arrow} right-3`} aria-label={`Next ${alt} photo`}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
          <div aria-hidden="true" className="absolute bottom-4 inset-x-0 z-10 flex justify-center gap-1.5">
            {images.map((src, i) => (
              <span key={src} className={`h-1.5 rounded-full bg-white transition-[width,opacity] duration-300 ${i === idx ? 'w-5 opacity-100' : 'w-1.5 opacity-60'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// One box size for all logos; Dr Sheesha's is a wide wordmark that looks oversized in the full box.
const getLogoContainerClasses = (id: string) =>
  id === 'dr-sheesha' ? 'w-44 sm:w-52 h-14 sm:h-16' : 'w-48 sm:w-56 h-16 sm:h-20';

type Action = 'menu' | 'reserve';
const actionLabel: Record<Action, string> = { menu: 'Menu', reserve: 'Book a Table' };

const Brands = () => {
  // Multi-outlet brands open a location picker; single-outlet ones link straight out.
  const [picker, setPicker] = useState<{ brand: string; action: Action; outlets: Outlet[] } | null>(null);

  const renderAction = (brandName: string, outlets: Outlet[], action: Action, className: string) => {
    const withLink = outlets.filter((o) => o[action]);
    if (withLink.length === 0) return null;
    const content = (
      <>
        {actionLabel[action]}
        {withLink.length === 1 && <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />}
      </>
    );
    return withLink.length === 1 ? (
      <a key={action} href={withLink[0][action]} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    ) : (
      <button key={action} type="button" onClick={() => setPicker({ brand: brandName, action, outlets: withLink })} className={className}>
        {content}
      </button>
    );
  };

  const btnBase = `group/btn inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-lg px-3 py-2.5 font-body text-sm font-medium uppercase tracking-wide transition-[background-color,color,border-color] duration-300 ${focusRing}`;
  const btnOutline = `${btnBase} border border-white/70 text-white hover:bg-white hover:text-[#E07646] hover:border-white`;
  const btnSolid = `${btnBase} bg-white text-[#E07646] hover:bg-white/85`;

  return (
    <div className="min-h-screen">
      <Seo
        title="Our Brands"
        description="Explore Eat Repeat's brands: Stories Bar & Kitchen, Stories Brewery, Macaw, Moai, Fernway, Dr Sheesha, The Black Pearl and Stories Lounge Dubai."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Eat Repeat Brands',
            itemListElement: brandsData.map((brand, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Restaurant',
                name: brand.name,
                servesCuisine: brand.category,
                ...(brandLinks[brand.id]?.website ? { url: brandLinks[brand.id].website } : {}),
                parentOrganization: { '@type': 'Organization', name: 'Eat Repeat' },
              },
            })),
          },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow justify-center mb-5 animate-fade-in">The Portfolio</p>
          <h1 className="font-display-italic text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in">
            Our Brands
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Discover our diverse portfolio of dining experiences, each crafted with its own unique story and character.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex-wrap instead of grid so an incomplete last row sits centred. Widths = (100% - gaps) / columns with gap-8 (2rem). */}
          <div className="flex flex-wrap justify-center gap-8">
            {brandsData.map((brand, brandIndex) => {
              const links = brandLinks[brand.id] ?? { outlets: [] };
              const outletNames = links.outlets.map((o) => o.name).join(' · ') || brand.area;
              const actions = [
                renderAction(brand.name, links.outlets, 'menu', btnOutline),
                renderAction(brand.name, links.outlets, 'reserve', btnSolid),
              ].filter(Boolean);

              return (
                <Reveal
                  key={brand.id}
                  delay={(brandIndex % 3) * 100}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] flex"
                >
                  <article className="group relative w-full flex flex-col rounded-2xl overflow-hidden bg-[#E07646] shadow-elegant transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="relative">
                      <BrandImageSlider images={brandImages[brand.id] || [brand.image]} alt={brand.name} />

                      <span className="absolute top-3 left-3 z-10 rounded-full bg-black/35 backdrop-blur-sm px-3 py-1 font-body text-xs font-medium tracking-wide text-white">
                        {brand.category}
                      </span>

                      {links.website && (
                        <a
                          href={links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit the ${brand.name} website`}
                          className={`group/btn absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 font-body text-xs font-medium uppercase tracking-wider text-[#E07646] shadow-sm transition-colors duration-300 hover:bg-white ${focusRing}`}
                        >
                          Website
                          <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      )}
                    </div>

                    <div className="px-5 sm:px-6 pb-6 pt-2 flex-1 flex flex-col text-white">
                      <div className={`${getLogoContainerClasses(brand.id)} mb-4 flex items-center justify-start`}>
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain object-left brightness-0 invert"
                        />
                      </div>

                      <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed text-pretty">
                        {brand.description}
                      </p>

                      {outletNames && (
                        <p className="mt-3 flex items-start gap-1.5 font-body text-sm text-white/80">
                          <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
                          <span>{outletNames}</span>
                        </p>
                      )}

                      {/* mt-auto pins the buttons to the bottom so every card in a row lines up */}
                      <div className={`mt-auto pt-6 grid gap-3 ${actions.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {actions.length > 0
                          ? actions
                          : links.website && (
                              <a href={links.website} target="_blank" rel="noopener noreferrer" className={btnSolid}>
                                Visit Website
                                <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                              </a>
                            )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Upcoming Projects */}
          {upcomingProjects.length > 0 && (
            <div className="mt-16 sm:mt-20 lg:mt-24">
              <Reveal className="text-center mb-8 sm:mb-12">
                <p className="eyebrow justify-center mb-4">On The Horizon</p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Upcoming <span className="font-display-italic text-primary">Projects</span>
                </h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-3">
                  A glimpse into what we’re building next. Stay tuned.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {upcomingProjects.map((brand, i) => (
                  <Reveal
                    key={brand.id}
                    delay={(i % 3) * 100}
                    className="group rounded-2xl shadow-elegant bg-white p-6 sm:p-8 text-center border border-transparent hover:border-primary/20 hover:shadow-luxury transition-all duration-500"
                  >
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E07646]/10 text-[#E07646] inline-block mb-3 transition-colors duration-300 group-hover:bg-[#E07646] group-hover:text-white">
                      Coming Soon
                    </span>
                    <h3 className="font-display text-foreground text-xl sm:text-2xl font-semibold">
                      {brand.name}
                    </h3>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Interested in Partnership?
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional concepts and passionate teams to join our growing family of brands.
            </p>
            <Link to="/contact">
              <button className="btn-luxury text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 font-body">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location picker for brands with more than one outlet */}
      <Dialog open={picker !== null} onOpenChange={(open) => !open && setPicker(null)}>
        <DialogContent className="max-w-md">
          <DialogTitle className="font-display text-xl">{picker?.brand}</DialogTitle>
          <DialogDescription className="font-body">
            Choose a location to {picker?.action === 'menu' ? 'see the menu' : 'book a table'}.
          </DialogDescription>
          <ul className="mt-2 space-y-2">
            {picker?.outlets.map((o) => (
              <li key={o.name}>
                <a
                  href={picker.action === 'menu' ? o.menu : o.reserve}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setPicker(null)}
                  className="group/loc flex items-center justify-between rounded-lg border border-border px-4 py-3 font-body text-foreground transition-colors duration-200 hover:border-[#E07646] hover:bg-[#E07646]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07646]"
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={16} aria-hidden="true" className="text-[#E07646]" />
                    {o.name}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#E07646]">
                    {actionLabel[picker.action]}
                    <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-200 group-hover/loc:translate-x-0.5 group-hover/loc:-translate-y-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Brands;
