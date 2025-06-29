import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            FLY MEDIA
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</Link>
            <Link to="/#process" className="text-gray-300 hover:text-red-500 transition-colors">Process</Link>
            <Link to="/#performers" className="text-gray-300 hover:text-red-500 transition-colors">For Performers</Link>
            <Link 
              to="/pricing" 
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/pricing' ? 'text-red-500' : ''}`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/contact' ? 'text-red-500' : ''}`}
            >
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white animate-pulse-glow">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-900/30">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</Link>
              <Link to="/#process" className="text-gray-300 hover:text-red-500 transition-colors">Process</Link>
              <Link to="/#performers" className="text-gray-300 hover:text-red-500 transition-colors">For Performers</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-red-500 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</Link>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full animate-pulse-glow">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
