import React from 'react';

const Stats: React.FC = () => {
  return (
    <div id="about" className="bg-white py-16 md:py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-3">About DogeMeow</p>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 leading-[1.1] font-inter mb-6">
            Pet Care.
          </h2>
          <p className="text-base md:text-xl text-blue-900/60 max-w-2xl mx-auto font-medium leading-relaxed">
            DogeMeow is your friendly companion in the rewarding journey of pet ownership,
            based in Sablan, Benguet, Philippines. We simplify complex care routines into actionable 
            steps, ensuring your new best friend thrives from day one with expert-vetted advice and a 
            touch of warmth, DogeMeow makes pet care approachable, supportive, and fun!
          </p>
          <div className="mt-10 w-12 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;