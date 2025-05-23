import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in every transaction and client interaction.'
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: 'Excellence',
      description: 'We strive for excellence in our service, market knowledge, and client satisfaction.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Trust',
      description: 'We build lasting relationships based on trust and delivering on our promises.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Client-Focused',
      description: 'Your goals and needs are our priority throughout the entire real estate process.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Abbasi Realtor</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're more than just a real estate agency – we're your trusted partner in finding the perfect home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Your Trusted Real Estate Partner</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2008, Abbasi Realtor has established itself as a premier real estate agency dedicated to providing exceptional service to clients in the residential and commercial property markets.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced professionals brings extensive market knowledge, negotiation skills, and personalized service to every client interaction. We understand that real estate decisions are among the most significant financial and personal choices you'll make.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're buying your first home, selling a property, or making a real estate investment, we're committed to guiding you through every step of the process with expertise and care.
            </p>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition-colors duration-300 inline-flex items-center"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Real Estate Team" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg z-0"></div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;