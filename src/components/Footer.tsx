import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Brands', path: '/brands' },
    { name: 'Leadership', path: '/core-team' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact', path: '/contact' },
  ];

  const brandLinks = [
    'Stories',
    'Macaw', 
    'Moai',
    'Mohr',
    'Mezera',
    'Dr Sheesha',
    'The Black Pearl'
  ];


  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4 md:space-y-6">
              <Link to="/" className="inline-block">
                <img 
                  src="/lovable-uploads/bd9a7918-b91d-45a2-a95c-cb3547248741.png" 
                  alt="Eat Repeat Logo" 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                />
              </Link>
              <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Crafting experiences that stay with your taste buds — and your heart. 
                Building food brands with stories, soul, and community.
              </p>
              
              {/* Social Links */}
              {/* <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-1.5 sm:p-2 md:p-3 rounded-full bg-white shadow-elegant hover:shadow-hover hover:bg-primary hover:text-white transition-elegant group"
                    aria-label={social.label}
                  >
                    <social.icon size={14} className="sm:hidden" />
                    <social.icon size={16} className="hidden sm:block md:hidden" />
                    <social.icon size={20} className="hidden md:block" />
                  </a>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-body text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth inline-block hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Brands */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground">
                Our Brands
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {brandLinks.map((brand) => (
                  <li key={brand}>
                    <Link
                      to="/brands"
                      className="font-body text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth inline-block hover:translate-x-1"
                    >
                      {brand}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground">
                Get In Touch
              </h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground">
                      LIC Colony, 17/17, 24th Main Rd<br />
                      TMC Layout, 1st Phase, J. P. Nagar<br />
                      Bengaluru, Karnataka 560078
                    </p>
                  </div>
                </div>
                
                {/* Phone removed as per email-only policy */}
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:marketing@eatrepeatindia.com"
                    className="font-body text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth"
                  >
                    marketing@eatrepeatindia.com
                  </a>
                </div>
              </div>

              {/* Partnership Message */}
              <div className="p-2 sm:p-3 md:p-4 bg-white rounded-xl shadow-elegant">
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We're open to partnerships, collaborations, and conversations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 sm:py-6 md:py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 sm:space-y-3 md:space-y-0">
            <p className="font-body text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Eat Repeat. All rights reserved. Crafted with passion for exceptional dining experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
              <Link 
                to="/privacy" 
                className="font-body text-muted-foreground hover:text-primary transition-smooth text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="font-body text-muted-foreground hover:text-primary transition-smooth text-xs sm:text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Credits Bar */}
      <div className="bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/brands/flauxmedia.png"
              alt="TheFlauxMedia Logo"
              className="h-6 sm:h-7 w-auto invert"
            />
            <p className="font-body text-xs sm:text-sm text-white">
              Website designed and developed by{' '}
              <a
                href="https://theflauxmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white"
              >
                TheFlauxMedia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;