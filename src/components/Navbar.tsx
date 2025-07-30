import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
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
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Brands', path: '/brands', hasDropdown: true },
    { name: 'Our Vision', path: '/our-vision' },
    { name: 'Contact', path: '/contact' },
  ];

  const brandItems = [
    'STORIES',
    'MACAW', 
    'MOAI',
    'Dr Sheesha',
    'The Black Perl',
    'More...'
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsBrandsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsBrandsDropdownOpen(false);
    }, 150); // 150ms delay
    setDropdownTimeout(timeout);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-elegant ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-elegant' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/bd9a7918-b91d-45a2-a95c-cb3547248741.png" 
              alt="Eat Repeat Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className="flex items-center space-x-1 font-body font-medium text-foreground hover:text-primary transition-smooth py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isBrandsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-luxury border border-border overflow-hidden animate-fade-in">
                        <div className="py-2">
                          {brandItems.map((brand, index) => (
                            <Link
                              key={brand}
                              to={brand === 'More...' ? '/brands' : `/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                              className={`block px-6 py-3 text-sm font-body transition-smooth hover:bg-secondary hover:text-primary ${
                                brand === 'More...' 
                                  ? 'font-display-italic text-primary border-t border-border mt-1' 
                                  : 'text-foreground'
                              }`}
                            >
                              {brand}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-body font-medium transition-smooth py-2 relative ${
                      location.pathname === item.path
                        ? 'text-primary font-display-italic'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                    )}
                  </Link>
                )}
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
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-2 font-body font-medium text-foreground"
                        onClick={() => setIsBrandsDropdownOpen(!isBrandsDropdownOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isBrandsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isBrandsDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {brandItems.map((brand) => (
                            <Link
                              key={brand}
                              to={brand === 'More...' ? '/brands' : `/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                              className={`block py-2 text-sm transition-smooth ${
                                brand === 'More...'
                                  ? 'font-display-italic text-primary'
                                  : 'text-muted-foreground hover:text-primary'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {brand}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
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
                  )}
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