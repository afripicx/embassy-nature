import React, { useRef, useEffect, useState } from 'react';
import { FileText, BookOpen, Video, Download } from 'lucide-react';

const Resources: React.FC = () => {
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
    <section id="resources" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Educational Resources</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Access valuable information and educational materials to deepen your understanding 
            of environmental issues and sustainable practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Cards */}
          <div 
            className={`bg-green-50 rounded-lg shadow-md overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="relative h-48 bg-green-600">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <FileText className="w-20 h-20 opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Research Papers</h3>
              <p className="text-gray-600 mb-4">
                Access our collection of scientific research papers on biodiversity, 
                climate change, and conservation strategies.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                <span>Browse Papers</span>
                <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div 
            className={`bg-green-50 rounded-lg shadow-md overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="relative h-48 bg-green-700">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <BookOpen className="w-20 h-20 opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Educational Guides</h3>
              <p className="text-gray-600 mb-4">
                Practical guides for sustainable living, conservation, and environmental 
                education for individuals and communities.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                <span>View Guides</span>
                <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div 
            className={`bg-green-50 rounded-lg shadow-md overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative h-48 bg-green-800">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <Video className="w-20 h-20 opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Video Library</h3>
              <p className="text-gray-600 mb-4">
                Documentaries, tutorials, and interviews with experts on environmental 
                conservation and sustainable practices.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                <span>Watch Videos</span>
                <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-green-100 rounded-lg p-8 shadow-md">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Join Our Upcoming Webinar</h3>
              <p className="text-gray-700 mb-4">
                "The Future of Biodiversity Conservation: Collaborative Approaches for a Sustainable Planet"
              </p>
              <p className="text-gray-600 mb-6">
                Learn from leading experts in the field about innovative conservation strategies and how 
                you can contribute to protecting biodiversity.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md 
                    transition-colors duration-300"
                >
                  Register Now
                </a>
                <p className="text-green-700 font-medium">
                  June 5, 2025 • 10:00 AM EST
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Webinar" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;