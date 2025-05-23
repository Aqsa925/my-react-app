import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Building, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Building className="h-8 w-8 text-primary" />
          <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Abbasi Realtor
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: 'Home', icon: <Home size={16} />, href: '#' },
            { name: 'About', icon: <Info size={16} />, href: '#about' },
            { name: 'Properties', icon: <Building size={16} />, href: '#properties' },
            { name: 'Contact', icon: <Phone size={16} />, href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.icon}
              <span className="ml-1">{item.name}</span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300"
          >
            Get In Touch
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto px-4 py-3">
            {[
              { name: 'Home', icon: <Home size={16} />, href: '#' },
              { name: 'About', icon: <Info size={16} />, href: '#about' },
              { name: 'Properties', icon: <Building size={16} />, href: '#properties' },
              { name: 'Contact', icon: <Phone size={16} />, href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center py-3 text-gray-800 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="block text-center bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300 mt-3"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;