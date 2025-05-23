import React from 'react';
import { Building, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold">Abbasi Realtor</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property that matches your lifestyle and investment goals.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <Phone size={16} className="mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail size={16} className="mr-2" />
              <span>info@abbasirealtor.com</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#' },
                { name: 'About Us', href: '#about' },
                { name: 'Properties', href: '#properties' },
                { name: 'Services', href: '#' },
                { name: 'Contact Us', href: '#contact' },
                { name: 'Privacy Policy', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary">
              Property Types
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Residential', href: '#' },
                { name: 'Commercial', href: '#' },
                { name: 'Luxury Homes', href: '#' },
                { name: 'Land', href: '#' },
                { name: 'Vacation Properties', href: '#' },
                { name: 'Investment Properties', href: '#' },
              ].map((type) => (
                <li key={type.name}>
                  <a 
                    href={type.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary">
              Subscribe
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest property listings and real estate news.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="bg-gray-800 hover:bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Abbasi Realtor. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;