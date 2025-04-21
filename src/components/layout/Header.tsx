import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf 
              className={`w-8 h-8 ${isScrolled ? 'text-green-700' : 'text-white'}`} 
              strokeWidth={1.5} 
            />
            <span 
              className={`font-serif text-xl md:text-2xl font-semibold ${
                isScrolled ? 'text-green-800' : 'text-white'
              }`}
            >
              Nature of Embassy
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#" label="Home" isScrolled={isScrolled} />
            <NavLink href="#about" label="About" isScrolled={isScrolled} />
            <NavLink href="#initiatives" label="Initiatives" isScrolled={isScrolled} />
            <NavLink href="#resources" label="Resources" isScrolled={isScrolled} />
            <NavLink href="#contact" label="Contact" isScrolled={isScrolled} />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-full ${
              isScrolled ? 'text-green-700 hover:bg-green-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100" onClick={toggleMenu}>About</a>
            <a href="#initiatives" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100" onClick={toggleMenu}>Initiatives</a>
            <a href="#resources" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100" onClick={toggleMenu}>Resources</a>
            <a href="#contact" className="text-green-800 hover:text-green-600 py-2" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;