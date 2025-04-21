import React, { useRef, useEffect, useState } from 'react';
import InitiativeCard from '../ui/InitiativeCard';

const initiatives = [
  {
    id: 1,
    title: 'Biodiversity Conservation',
    description: 'Protecting and preserving endangered species and their habitats through comprehensive conservation programs.',
    image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-imfolozi-park-rhino.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'Flower',
  },
  {
    id: 2,
    title: 'Sustainable Living',
    description: 'Promoting eco-friendly practices in daily life to reduce environmental impact and create a more sustainable future.',
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'Recycle',
  },
  {
    id: 3,
    title: 'Climate Action',
    description: 'Implementing initiatives to combat climate change through policy advocacy, carbon reduction, and renewable energy.',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'CloudSun',
  },
  {
    id: 4,
    title: 'Environmental Education',
    description: 'Educating communities about environmental issues and empowering them with knowledge to make informed decisions.',
    image: 'https://images.pexels.com/photos/2646531/pexels-photo-2646531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'GraduationCap',
  },
];

const Initiatives: React.FC = () => {
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
    <section id="initiatives" ref={sectionRef} className="py-20 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Initiatives</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We lead impactful programs that address the most pressing environmental challenges 
            of our time through collaborative and innovative approaches.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.id}
              className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <InitiativeCard initiative={initiative} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 
              text-white rounded-md transition-colors duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;