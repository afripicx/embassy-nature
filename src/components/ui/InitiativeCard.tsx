import React from 'react';
import { Flower, Recycle, CloudSun, GraduationCap, ArrowRight } from 'lucide-react';

interface InitiativeProps {
  initiative: {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
  };
}

const InitiativeCard: React.FC<InitiativeProps> = ({ initiative }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flower':
        return <Flower className="w-6 h-6" />;
      case 'Recycle':
        return <Recycle className="w-6 h-6" />;
      case 'CloudSun':
        return <CloudSun className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <Flower className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={initiative.image}
          alt={initiative.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 bg-green-600 text-white p-2 rounded-full">
          {getIcon(initiative.icon)}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-green-800 mb-2">{initiative.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{initiative.description}</p>
        <a 
          href="#"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm group"
        >
          <span>Learn more</span>
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default InitiativeCard;