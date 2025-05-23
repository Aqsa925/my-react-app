import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Properties from './components/Properties';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatedElement } from './components/Animations';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Abbasi Realtor | Find Your Dream Home';
    
    // Add Font Awesome for social icons
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/a076d05399.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      
      <AnimatedElement>
        <AboutUs />
      </AnimatedElement>
      
      <AnimatedElement delay={200}>
        <Properties />
      </AnimatedElement>
      
      <AnimatedElement delay={300}>
        <Testimonials />
      </AnimatedElement>
      
      <AnimatedElement delay={400}>
        <Contact />
      </AnimatedElement>
      
      <Footer />
    </div>
  );
}

export default App;