import React from 'react';
import { ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-yellow-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Brand Identity */}
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <ICONS.Logo className="w-14 h-14 md:w-20 md:h-20 transform group-hover:scale-105 transition-transform duration-300" />
            <span className="text-3xl md:text-5xl font-brand text-yellow-400 mt-2">
              DogeMeow
            </span>
          </div>
          
          <div className="text-blue-500 text-sm font-medium text-center md:text-right">
            &copy; {new Date().getFullYear()} DogeMeow. <br className="md:hidden" /> Made for pet parents.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;