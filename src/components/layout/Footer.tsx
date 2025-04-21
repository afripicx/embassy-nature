import React from 'react';
import { Leaf, Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import NewsletterSubscribe from '../sections/NewsletterSubscribe';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-green-300" />
              <span className="font-serif text-xl font-semibold">Nature of Embassy</span>
            </div>
            <p className="text-green-200 mb-6">
              Dedicated to fostering global environmental stewardship by promoting biodiversity
              conservation, sustainable living, and ecological balance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-green-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#initiatives" className="text-green-200 hover:text-white transition-colors">Our Initiatives</a></li>
              <li><a href="#resources" className="text-green-200 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-green-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-green-700 pb-2">Our Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Biodiversity Conservation</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Sustainable Living</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Climate Action</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Environmental Education</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Community Engagement</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-green-700 pb-2">Stay Connected</h3>
            <p className="text-green-200 mb-4">
              Subscribe to our newsletter for updates on our initiatives and ways to get involved.
            </p>
            <NewsletterSubscribe />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-800 text-center text-green-300 text-sm">
          <p>© {new Date().getFullYear()} Nature of Embassy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;