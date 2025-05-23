import React, { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import { properties } from '../data/properties';

const Properties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that match various lifestyles and preferences
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'house', 'apartment', 'villa', 'land'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Property Image */}
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {property.status}
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full text-gray-600 hover:text-primary transition-colors duration-300">
                  <Heart size={18} />
                </button>
              </div>
              
              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors duration-300">
                    {property.title}
                  </h3>
                  <span className="text-xl font-bold text-primary">${property.price.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  {property.bedrooms && (
                    <div className="flex items-center text-gray-600">
                      <Bed size={16} className="mr-1" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                  )}
                  
                  {property.bathrooms && (
                    <div className="flex items-center text-gray-600">
                      <Bath size={16} className="mr-1" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-gray-600">
                    <Maximize size={16} className="mr-1" />
                    <span>{property.size} sqft</span>
                  </div>
                </div>
                
                <a 
                  href="#"
                  className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded transition-colors duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded transition-colors duration-300"
          >
            View All Properties
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;