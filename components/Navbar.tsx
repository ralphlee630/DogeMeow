import React, { useState } from 'react';
import { ICONS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center gap-4 md:gap-10">
          {/* Logo & Brand Identity */}
          <div 
            className="flex items-center gap-2 cursor-pointer shrink-0 group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <ICONS.Logo className="w-10 h-10 md:w-14 md:h-14 transform group-hover:scale-105 transition-transform duration-300" />
            <span className="text-2xl md:text-3xl font-brand text-yellow-400 select-none mt-1">
              DogeMeow
            </span>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a 
              href="#tips" 
              onClick={(e) => scrollToSection(e, 'tips')}
              className="text-gray-600 font-bold hover:text-blue-600 transition-colors text-[10px] lg:text-xs uppercase tracking-widest"
            >
              Health Tips
            </a>
            <a 
              href="#solutions" 
              onClick={(e) => scrollToSection(e, 'solutions')}
              className="text-gray-600 font-bold hover:text-blue-600 transition-colors text-[10px] lg:text-xs uppercase tracking-widest"
            >
              Behavior
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-gray-600 font-bold hover:text-blue-600 transition-colors text-[10px] lg:text-xs uppercase tracking-widest"
            >
              About Us
            </a>
            <a 
              href="#ai" 
              onClick={(e) => scrollToSection(e, 'ai')}
              className="bg-[#a35d3f] text-white px-5 lg:px-6 py-3 rounded-full font-bold text-xs lg:text-sm flex items-center gap-2.5 hover:bg-[#8e5036] transition-all shadow-lg active:scale-95 group whitespace-nowrap"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </div>
              Chat with AI Vet
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 text-blue-950 bg-gray-50 rounded-xl border border-gray-100 active:scale-90 transition-transform"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 space-y-6 flex flex-col items-center">
          <a 
            href="#tips" 
            onClick={(e) => scrollToSection(e, 'tips')} 
            className="text-lg font-bold text-gray-700 hover:text-blue-600"
          >
            Health Tips
          </a>
          <a 
            href="#solutions" 
            onClick={(e) => scrollToSection(e, 'solutions')} 
            className="text-lg font-bold text-gray-700 hover:text-blue-600"
          >
            Behavior
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')} 
            className="text-lg font-bold text-gray-700 hover:text-blue-600"
          >
            About Us
          </a>
          <a 
            href="#ai" 
            onClick={(e) => scrollToSection(e, 'ai')}
            className="w-full text-center bg-[#a35d3f] text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
          >
            Chat with AI Vet
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;