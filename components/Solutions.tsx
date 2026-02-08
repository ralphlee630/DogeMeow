
import React, { useState } from 'react';
import { COMMON_PROBLEMS } from '../constants';

const Solutions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const displayedProblems = showAll ? COMMON_PROBLEMS : COMMON_PROBLEMS.slice(0, 4);

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 font-inter mb-4">
            Common Problems & Solutions
          </h2>
          <p className="text-lg text-blue-700/60 font-medium">
            Don't panic! Most new pet owners face these challenges. Here is how to handle them calmly.
          </p>
        </div>

        <div className="space-y-4">
          {displayedProblems.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
                openIndex === idx 
                  ? 'border-blue-200 shadow-xl shadow-blue-900/5 ring-1 ring-blue-50' 
                  : 'border-gray-100 hover:border-blue-100'
              }`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-bold text-lg md:text-xl transition-colors ${openIndex === idx ? 'text-blue-600' : 'text-blue-950'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-50 text-blue-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-2 text-blue-900/70 text-lg leading-relaxed border-t border-gray-50">
                  <div className="flex gap-4">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-black uppercase tracking-widest text-xs border-b-2 border-yellow-500 pb-1 hover:text-blue-800 transition-all flex items-center gap-2 mx-auto"
          >
            {showAll ? 'SHOW LESS SOLUTIONS' : 'VIEW MORE SOLUTIONS'} 
            <span>{showAll ? '↑' : '→'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
