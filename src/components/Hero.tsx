import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchType, setSearchType] = useState('buy');

  return (
    <section className="relative h-[90vh] min-h-[600px] bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Dream Home With Abbasi Realtor
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We help you find the perfect property that matches your lifestyle and investment goals
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-xl p-1 md:p-2">
            {/* Search Type Tabs */}
            <div className="flex mb-4 bg-gray-100 rounded-md p-1">
              {['buy', 'rent', 'sell'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSearchType(type)}
                  className={`flex-1 py-2 px-4 text-sm md:text-base capitalize rounded-md transition ${
                    searchType === type 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full pl-10 pr-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select className="w-full pl-10 pr-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select className="w-full pl-10 pr-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white">
                  <option value="">Price Range</option>
                  <option value="100k-300k">$100k - $300k</option>
                  <option value="300k-500k">$300k - $500k</option>
                  <option value="500k-1m">$500k - $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </div>
            </div>
            
            {/* Search Button */}
            <button className="w-full md:w-auto mt-4 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md flex items-center justify-center transition-colors duration-300">
              <Search size={18} className="mr-2" />
              <span>Search Properties</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-4 shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '500+', label: 'Properties Sold' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;