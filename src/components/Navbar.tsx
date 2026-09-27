import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Brands', path: '/brands' },
    { name: 'Leadership', path: '/core-team' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-elegant ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-border/60' 
        : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-[1.03]" aria-label="Eat Repeat home">
            <img 
              src="/lovable-uploads/bd9a7918-b91d-45a2-a95c-cb3547248741.png" 
              alt="Eat Repeat Logo" 
              width={480}
              height={301}
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  data-active={location.pathname === item.path}
                  className={`link-sweep font-body text-sm font-medium tracking-wide uppercase transition-smooth py-2 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={20} className="sm:hidden" /> : <Menu size={20} className="sm:hidden" />}
            {isMobileMenuOpen ? <X size={24} className="hidden sm:block" /> : <Menu size={24} className="hidden sm:block" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border animate-slide-up shadow-elegant">
            <div className="px-4 sm:px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-2 font-body font-medium transition-smooth ${
                      location.pathname === item.path
                        ? 'text-primary font-display-italic'
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;