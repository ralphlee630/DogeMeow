
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PetTips from './components/PetTips';
import Tools from './components/Tools';
import Solutions from './components/Solutions';
import SmallAnimals from './components/SmallAnimals';
import AiConsultant from './components/AiConsultant';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <Stats />
        
        <PetTips />
        
        <Tools />
        
        <Newsletter />
        
        <Solutions />

        <SmallAnimals />
        
        <AiConsultant />
      </main>

      <Footer />
      
      {/* Decorative background paw prints (Subtle) */}
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-[0.015]">
        <div className="absolute top-40 left-10 text-8xl">🐾</div>
        <div className="absolute top-2/3 right-20 text-8xl rotate-12">🐾</div>
        <div className="absolute bottom-10 left-1/3 text-8xl -rotate-12">🐾</div>
        <div className="absolute top-1/4 left-1/2 text-8xl opacity-50">🐾</div>
      </div>
    </div>
  );
};

export default App;
