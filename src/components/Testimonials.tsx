import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with Abbasi Realtor
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={24} 
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>
            
            <blockquote className="text-center mb-8">
              <p className="text-xl italic text-gray-600 mb-4">
                "{testimonials[currentIndex].quote}"
              </p>
            </blockquote>
            
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary mb-3"
              />
              <div className="text-center">
                <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        
        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                currentIndex === index ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;