
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
            <Link 
              to="/pricing" 
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/pricing' ? 'text-red-500' : ''}`}
            >
              Pricing
            </Link>
            <Link 
              to="/clients" 
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/clients' ? 'text-red-500' : ''}`}
            >
              Clients
            </Link>
            <Link 
              to="/learn" 
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/learn' ? 'text-red-500' : ''}`}
            >
              Learn
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-300 hover:text-red-500 transition-colors ${location.pathname === '/contact' ? 'text-red-500' : ''}`}
            >
              Contact
            </Link>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white animate-pulse-glow">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32QwBX2-e2uyJofbJQGp4QqlIs5OaBPw9jdxGsjXfUhnpvSFlA9QqQ3YJZ00ts1p5JfGGWsmDG" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
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
              <Link to="/pricing" className="text-gray-300 hover:text-red-500 transition-colors">Pricing</Link>
              <Link to="/clients" className="text-gray-300 hover:text-red-500 transition-colors">Clients</Link>
              <Link to="/learn" className="text-gray-300 hover:text-red-500 transition-colors">Learn</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</Link>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full animate-pulse-glow">
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32QwBX2-e2uyJofbJQGp4QqlIs5OaBPw9jdxGsjXfUhnpvSFlA9QqQ3YJZ00ts1p5JfGGWsmDG" target="_blank" rel="noopener noreferrer">
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
