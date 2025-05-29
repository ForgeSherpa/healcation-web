import {
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons"
import { Link } from '@tanstack/react-router';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
    {
      title: 'Features',
      links: [
        { name: 'AI Recommendations', href: '#' },
        { name: 'Destination Search', href: '#' },
        { name: 'Hotel Bookings', href: '#' },
        { name: 'Attraction Tickets', href: '#' },
        { name: 'Travel Itineraries', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Support Center', href: '#' },
        { name: 'FAQs', href: '#faq' },
        { name: 'Community', href: '#' },
        { name: 'Partners', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                <img src="/logo.png" alt='Healcation Logo' className="w-9 h-9" />
              </div>
              <span className="text-xl font-bold">Healcation</span>
            </Link>
            <p className="mb-4 text-white/80">
              Your AI-powered vacation companion that helps you find the perfect
              getaway tailored to your preferences and needs.
            </p>
            <div className="flex flex-col gap-2 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Vacation Blvd, Paradise City</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@healcation.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white hover:text-background transition-colors" aria-label="Facebook">
                <SiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-background transition-colors" aria-label="Twitter">
                <SiX size={20} />
              </a>
              <a href="#" className="text-white hover:text-background transition-colors" aria-label="Instagram">
                <SiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-lg font-bold text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-white/80 hover:text-background transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-background transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-white/20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-white/80">
              © {currentYear} Healcation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/80 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;