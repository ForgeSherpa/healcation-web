import {
  Mail,
  MapPin,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container py-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl transition-transform group-hover:scale-105">
              <img src="/logo.png" alt='Healcation Logo' className="w-10 h-10" />
            </div>
            <span className="text-2xl font-bold">Healcation</span>
          </Link>

          {/* Description */}
          <p className="mb-8 text-lg text-white/80 leading-relaxed">
            Your AI-powered vacation companion that helps you find the perfect
            getaway tailored to your preferences and needs.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-8">
            <div className="flex items-center gap-3 text-white/90">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <MapPin size={18} />
              </div>
              <span>Kota Batam, Kepulauan Riau, Indonesia</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <Mail size={18} />
              </div>
              <a href="mailto:healcation@gmail.com" className="hover:text-background transition-colors">
                healcation@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70">
            © {currentYear} Healcation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;