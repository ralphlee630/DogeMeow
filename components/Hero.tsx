
import React from 'react';

const Hero: React.FC = () => {
  const scrollToAcademy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('tips');
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
    }
  };

  const scrollToSolutions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('solutions');
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
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-center">
          <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:col-span-7 xl:col-span-6 space-y-6 md:space-y-10">
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-8xl tracking-tight font-black text-blue-950 leading-[1.05] lg:leading-[0.95] font-inter">
              <span className="text-yellow-400">Pawsitively</span> <br className="hidden sm:block" />
              <span className="text-yellow-400">Pet</span> Care
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 justify-center lg:justify-start">
              <a
                href="#tips"
                onClick={scrollToAcademy}
                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-black rounded-2xl md:rounded-[1.5rem] text-blue-950 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Explore Guides
              </a>
              <a
                href="#solutions"
                onClick={scrollToSolutions}
                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-black rounded-2xl md:rounded-[1.5rem] text-blue-900 border-2 border-blue-900/10 hover:bg-blue-50 transition-all hover:-translate-y-1 active:scale-95"
              >
                Find Solutions
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-6 relative">
            {/* Main Image Card */}
            <div className="relative rounded-3xl md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(30,58,138,0.2)] lg:shadow-[0_50px_100px_-20px_rgba(30,58,138,0.2)] transform hover:scale-[1.01] transition-transform duration-1000 border-4 md:border-8 border-white">
              <img
                className="w-full object-cover aspect-[4/3] lg:aspect-[5/4]"
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop&q=80&w=1200"
                alt="Happy Pets Cuddling"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Flourishes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-10 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
