
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            FLY MEDIA
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</a>
            <a href="#process" className="text-gray-300 hover:text-red-500 transition-colors">Process</a>
            <a href="#performers" className="text-gray-300 hover:text-red-500 transition-colors">For Performers</a>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
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
          <nav className="md:hidden mt-4 pb-4 border-t border-red-900/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</a>
              <a href="#process" className="text-gray-300 hover:text-red-500 transition-colors">Process</a>
              <a href="#performers" className="text-gray-300 hover:text-red-500 transition-colors">For Performers</a>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
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
