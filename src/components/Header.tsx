
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { DISCOVERY_CALL_URL } from '@/config/constants';
import PromoBanner from './PromoBanner';
import PrefetchLink from './PrefetchLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <PromoBanner />
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            FLY MEDIA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <PrefetchLink
              to="/pricing"
              prefetch="pricing"
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/pricing' ? 'text-red-500' : ''}`}
            >
              Pricing
            </PrefetchLink>
            <PrefetchLink
              to="/clients"
              prefetch="clients"
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/clients' ? 'text-red-500' : ''}`}
            >
              Clients
            </PrefetchLink>
            <PrefetchLink
              to="/contact"
              prefetch="contact"
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/contact' ? 'text-red-500' : ''}`}
            >
              Contact
            </PrefetchLink>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white animate-pulse-glow shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] transition-all duration-300">
              <a href={DISCOVERY_CALL_URL} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-900/30">
            <div className="flex flex-col space-y-4 pt-4">
              <PrefetchLink to="/pricing" prefetch="pricing" className="text-gray-300 hover:text-red-500 transition-colors">Pricing</PrefetchLink>
              <PrefetchLink to="/clients" prefetch="clients" className="text-gray-300 hover:text-red-500 transition-colors">Clients</PrefetchLink>
              <PrefetchLink to="/contact" prefetch="contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</PrefetchLink>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full animate-pulse-glow">
                <a href={DISCOVERY_CALL_URL} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
