import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const brandsData = {
  'stories': {
    name: 'STORIES',
    subtitle: 'Narrative dining where every dish tells a story',
    location: 'Downtown District',
    category: 'Fine Dining',
    heroImage: '/lovable-uploads/78696dea-e51d-4cb4-af93-efb68403effa.png',
    images: [
      '/lovable-uploads/1a870a73-de94-4bfe-8493-9d3702b1ede3.png',
      '/lovable-uploads/0c76eb70-683b-4d78-9bb3-6337100b1fe6.png',
      '/lovable-uploads/5304796f-4545-49f9-92b3-8dfd449af76f.png',
      '/lovable-uploads/d922890b-5a60-4130-a9cc-85a43046bbbf.png',
      '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
      '/lovable-uploads/bd6f9435-7e35-4795-98a5-7fba8f974c20.png'
    ],
    description: `Step into Stories, where every dish is a chapter in our culinary narrative. Our chefs craft extraordinary experiences that blend storytelling with exceptional cuisine.

    From locally sourced ingredients to innovative techniques, each plate tells the story of passion, creativity, and dedication to the art of fine dining.

    Whether you're celebrating a special occasion or simply seeking an unforgettable evening, Stories creates memories that last a lifetime.`,
    address: '123 Culinary Avenue, Downtown District',
    phone: '+1 (555) 123-4567',
    email: 'reservations@storiesrestaurant.com',
    hours: {
      'Monday': '12:00 - 01:00',
      'Tuesday': '12:00 - 01:00',
      'Wednesday': '12:00 - 01:00',
      'Thursday': '12:00 - 01:00',
      'Friday': '12:00 - 01:00',
      'Saturday': '12:00 - 01:00',
      'Sunday': '12:00 - 01:00'
    }
  },
  'macaw': {
    name: 'MACAW',
    subtitle: 'Vibrant flavors inspired by exotic cuisines',
    location: 'City Center',
    category: 'Cloud Kitchen',
    heroImage: '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png',
    images: [
      '/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png',
      '/lovable-uploads/e3f1d159-7e01-4ea2-8682-c2d50c66650b.png',
      '/lovable-uploads/361129d3-46c0-4f9a-96ca-8bb5f84214bc.png',
      '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png',
      '/lovable-uploads/4b78cb93-25be-4b1b-b989-6634c4671cc7.png',
      '/lovable-uploads/de7cfe03-2ef3-44a3-8e24-c2563e855bd9.png'
    ],
    description: `Experience the vibrant world of Macaw, where exotic flavors take flight. Our cloud kitchen delivers bold, colorful cuisine inspired by tropical destinations around the globe.

    From spicy street food to refined dishes with international flair, Macaw brings the excitement of global cuisine directly to your door.

    Every order is a journey to distant lands, crafted with authentic ingredients and modern culinary techniques.`,
    address: 'Delivery Only - City Center',
    phone: '+1 (555) 234-5678',
    email: 'orders@macawkitchen.com',
    hours: {
      'Monday': '12:00 - 01:00',
      'Tuesday': '12:00 - 01:00',
      'Wednesday': '12:00 - 01:00',
      'Thursday': '12:00 - 01:00',
      'Friday': '12:00 - 01:00',
      'Saturday': '12:00 - 01:00',
      'Sunday': '12:00 - 01:00'
    }
  },
  'moai': {
    name: 'Moai',
    subtitle: 'Redefined • Vegetarian • Dining',
    location: 'J. P. Nagar, Bengaluru',
    category: 'Vegetarian Dining',
    heroImage: '/lovable-uploads/moai-001.avif',
    images: [
      '/lovable-uploads/1e3842c9-cdaa-4eaf-b8c9-9e32600b74cc.png',
      '/lovable-uploads/b3464ca3-72eb-4c89-943c-6f40887c6b97.png',
      '/lovable-uploads/1f5863bf-3195-4bb4-99ce-17aaee5ad34d.png',
      '/lovable-uploads/7677ca2e-56e6-4e60-bd4b-1d758cede96c.png',
      '/lovable-uploads/89bd4ce6-f80b-4ed8-b47d-c4ca9ff1371c.png'
    ],
    description: `MOAI brings you redefined vegetarian dining in the heart of J.P. Nagar, Bengaluru. Our contemporary green building houses a culinary experience that celebrates the art of vegetarian cuisine.

    With our tagline "Redefined • Vegetarian • Dining", we're committed to changing perceptions about vegetarian food, creating dishes that are both innovative and deeply satisfying.

    Step into our modern space where traditional Indian vegetarian cuisine meets contemporary presentation and flavors, creating an unforgettable dining experience that proves vegetarian food can be extraordinary.`,
    address: 'LIC Colony, 17/17, 24th Main Rd, TMC Layout, 1st Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
    phone: '+91 8951472076',
    email: 'marketingeatrepeatindia@gmail.com',
    hours: {
      'Monday': '12:00 - 01:00',
      'Tuesday': '12:00 - 01:00',
      'Wednesday': '12:00 - 01:00',
      'Thursday': '12:00 - 01:00',
      'Friday': '12:00 - 01:00',
      'Saturday': '12:00 - 01:00',
      'Sunday': '12:00 - 01:00'
    }
  },
  'dr-sheesha': {
    name: 'Dr Sheesha',
    subtitle: 'Premium sheesha lounge with global influences',
    location: 'Entertainment District',
    category: 'Lounge',
    heroImage: '/lovable-uploads/de7cfe03-2ef3-44a3-8e24-c2563e855bd9.png',
    images: [
      '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png',
      '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
      '/lovable-uploads/361129d3-46c0-4f9a-96ca-8bb5f84214bc.png',
      '/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png',
      '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png',
      '/lovable-uploads/4b78cb93-25be-4b1b-b989-6634c4671cc7.png'
    ],
    description: `Dr Sheesha offers a premium lounge experience with expertly crafted sheesha and globally inspired cuisine. Our sophisticated atmosphere provides the perfect setting for relaxation and socializing.

    With premium tobacco blends, artisanal cocktails, and a menu that spans continents, we create an oasis of luxury in the Entertainment District.

    Whether you're unwinding after a long day or celebrating with friends, Dr Sheesha delivers an unparalleled lounge experience.`,
    address: '654 Entertainment Avenue, Entertainment District',
    phone: '+1 (555) 678-9012',
    email: 'bookings@drsheesha.com',
    hours: {
      'Monday': '12:00 - 01:00',
      'Tuesday': '12:00 - 01:00',
      'Wednesday': '12:00 - 01:00',
      'Thursday': '12:00 - 01:00',
      'Friday': '12:00 - 01:00',
      'Saturday': '12:00 - 01:00',
      'Sunday': '12:00 - 01:00'
    }
  },
  'the-black-perl': {
    name: 'The Black Pearl',
    subtitle: 'Mysterious and sophisticated cocktail experience',
    location: 'Historic Quarter',
    category: 'Cocktail Bar',
    heroImage: '/lovable-uploads/4b78cb93-25be-4b1b-b989-6634c4671cc7.png',
    images: [
      '/lovable-uploads/160747a9-f9b5-4810-bbd3-bb3fefe35b3a.png',
      '/lovable-uploads/224c4170-965c-416a-af28-1592e623c3af.png',
      '/lovable-uploads/361129d3-46c0-4f9a-96ca-8bb5f84214bc.png',
      '/lovable-uploads/75de3188-a5b4-4a9c-a48e-1d039e16b05a.png',
      '/lovable-uploads/8b3ee734-2320-4b21-adfe-da2d82ec54ed.png',
      '/lovable-uploads/de7cfe03-2ef3-44a3-8e24-c2563e855bd9.png'
    ],
    description: `The Black Perl is shrouded in mystery and steeped in sophistication. Our speakeasy-style cocktail bar in the Historic Quarter offers an intimate escape from the ordinary.

    Our master mixologists craft bespoke cocktails using rare spirits and house-made bitters, creating drinks that are as mysterious as they are delicious.

    Step into our dimly lit sanctuary and discover why The Black Perl has become the city's most coveted cocktail destination.`,
    address: '987 Historic Lane, Historic Quarter',
    phone: '+1 (555) 789-0123',
    email: 'reservations@blackperl.com',
    hours: {
      'Monday': '12:00 - 01:00',
      'Tuesday': '12:00 - 01:00',
      'Wednesday': '12:00 - 01:00',
      'Thursday': '12:00 - 01:00',
      'Friday': '12:00 - 01:00',
      'Saturday': '12:00 - 01:00',
      'Sunday': '12:00 - 01:00'
    }
  }
};

const BrandPage = () => {
  const { brandId } = useParams();
  const brand = brandId ? brandsData[brandId as keyof typeof brandsData] : null;

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Brand not found</h1>
          <Link to="/brands" className="text-primary hover:underline">
            Back to Brands
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={brand.heroImage}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Back Button */}
          <div className="absolute top-20 sm:top-24 left-4 sm:left-6 lg:left-8 z-20">
            <Link to="/brands">
              <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full p-2 sm:p-3">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center text-center text-white px-4 sm:px-6">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4">
                {brand.name}
              </h1>
              <p className="font-body text-lg sm:text-xl md:text-2xl mb-2 opacity-90">
                {brand.subtitle}
              </p>
              <p className="font-body text-base sm:text-lg opacity-75">
                {brand.category} • {brand.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Improved Gallery Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {brand.images.map((image, index) => (
              <div 
                key={index}
                className="relative hover-lift rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant group"
              >
                <img 
                  src={image}
                  alt={`${brand.name} interior ${index + 1}`}
                  className="w-full h-60 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                {brand.name}, {brand.subtitle.toLowerCase()}
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {brand.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="font-body">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button className="btn-luxury text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-body">
                  Reserve a Table
                </Button>
                <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-body">
                  View Menu
                </Button>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-elegant p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Location & Contact
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="font-body text-sm sm:text-base text-muted-foreground">{brand.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <p className="font-body text-sm sm:text-base text-muted-foreground">{brand.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <p className="font-body text-sm sm:text-base text-muted-foreground">{brand.email}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-elegant p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Opening Hours
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  {Object.entries(brand.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-body font-medium text-foreground text-sm sm:text-base">{day}</span>
                      <span className="font-body text-muted-foreground text-sm sm:text-base">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;