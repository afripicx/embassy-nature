import React, { useRef, useEffect, useState } from 'react';
import { Globe, Users, Lightbulb, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Nature of Embassy</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We are dedicated to fostering global environmental stewardship through 
            diplomatic initiatives that bridge the gap between humanity and nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div 
            className={`rounded-lg overflow-hidden shadow-xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img 
              src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Nature conservation" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To serve as a diplomatic bridge between humanity and nature, advocating for policies
              that protect ecosystems, mitigate climate change, and ensure responsible resource use.
              We envision a world where humans coexist with nature in mutual respect.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex space-x-4 items-start">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Global Reach</h4>
                  <p className="text-gray-600 text-sm">Operating across continents to drive change</p>
                </div>
              </div>
              
              <div className="flex space-x-4 items-start">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Community Focus</h4>
                  <p className="text-gray-600 text-sm">Empowering local communities</p>
                </div>
              </div>
              
              <div className="flex space-x-4 items-start">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Innovation</h4>
                  <p className="text-gray-600 text-sm">Developing nature-positive solutions</p>
                </div>
              </div>
              
              <div className="flex space-x-4 items-start">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Sustainable Impact</h4>
                  <p className="text-gray-600 text-sm">Creating lasting environmental change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;