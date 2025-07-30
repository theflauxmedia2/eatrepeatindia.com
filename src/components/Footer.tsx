import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Brands', path: '/brands' },
    { name: 'Our Vision', path: '/our-vision' },
    { name: 'Contact', path: '/contact' },
  ];

  const brandLinks = [
    'STORIES',
    'MACAW', 
    'MOAI',
    'MOHR',
    'MEZERA',
    'Dr Sheesha',
    'The Black Perl'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
              <Link to="/" className="inline-block">
                <img 
                  src="/lovable-uploads/bd9a7918-b91d-45a2-a95c-cb3547248741.png" 
                  alt="Eat Repeat Logo" 
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                />
              </Link>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                Crafting experiences that stay with your taste buds — and your heart. 
                Building food brands with stories, soul, and community.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 sm:p-3 rounded-full bg-white shadow-elegant hover:shadow-hover hover:bg-primary hover:text-white transition-elegant group"
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="sm:hidden" />
                    <social.icon size={20} className="hidden sm:block" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-body text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth inline-block hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Brands */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                Our Brands
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {brandLinks.map((brand) => (
                  <li key={brand}>
                    <Link
                      to={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                      className="font-body text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth inline-block hover:translate-x-1"
                    >
                      {brand}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                Get In Touch
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm sm:text-base text-muted-foreground">
                      LIC Colony, 17/17, 24th Main Rd<br />
                      TMC Layout, 1st Phase, J. P. Nagar<br />
                      Bengaluru, Karnataka 560078
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+918951472076"
                    className="font-body text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth"
                  >
                    +91 8951472076
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:marketingeatrepeatindia@gmail.com"
                    className="font-body text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth"
                  >
                    marketingeatrepeatindia@gmail.com
                  </a>
                </div>
              </div>

              {/* Partnership Message */}
              <div className="p-3 sm:p-4 bg-white rounded-xl shadow-elegant">
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We're open to partnerships, collaborations, and conversations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 sm:py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="font-body text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Eat Repeat. All rights reserved. Crafted with passion for exceptional dining experiences.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
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
    </footer>
  );
};

export default Footer;