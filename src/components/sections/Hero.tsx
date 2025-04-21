import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    setOpacity(1);
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600)', 
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ease-out"
        style={{ opacity, transform: `translateY(${opacity ? '0' : '20px'})` }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          A Diplomatic Bridge Between <span className="text-green-400">Humanity and Nature</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Fostering global environmental stewardship by promoting biodiversity conservation, 
          sustainable living, and ecological balance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#initiatives" 
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full 
              transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Our Initiatives
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white 
              hover:bg-white hover:text-green-800 rounded-full transition-all duration-300 
              transform hover:-translate-y-1 shadow-lg"
          >
            Join Us
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white 
          cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown className="w-10 h-10" />
      </div>
    </section>
  );
};

export default Hero;