import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from '@tanstack/react-router';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 text-white rounded-lg bg-primary">
            <img src="/logo.png" alt='Healcation Logo' className="w-9 h-9" />
          </div>
          <span className="text-xl font-bold text-primary">Healcation</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary/80 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/privacy-policy"
            className="text-primary/80 hover:text-primary font-medium transition-colors"
          >
            Privacy
          </Link>
          <a href="#download" className="btn btn-primary">
            Download App
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute w-full bg-white shadow-md md:hidden animate-fade-in">
          <nav className="container flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-primary/80 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/privacy-policy"
              className="py-3 text-primary/80 hover:text-primary font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <a href="#download" className="btn btn-primary mt-3 text-center">
              Download App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;