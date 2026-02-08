
import React, { useState, useEffect } from 'react';
import { EXOTIC_CARE, ExoticCareItem, AUTHORS } from '../constants';

const SmallAnimals: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ExoticCareItem | null>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedArticle]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-blue-900 mb-10">Small Animals, Big Hearts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXOTIC_CARE.map((item, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer"
              onClick={() => setSelectedArticle(item)}
            >
              <div className="overflow-hidden rounded-3xl mb-4 relative shadow-lg aspect-[4/3]">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-lg">{item.title}</div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Article Collection</span>
                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unique Exotic Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          <div 
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedArticle(null)}
          />
          <div className="relative bg-[#faf9f6] w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-500">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 z-20 p-3 bg-stone-800 hover:bg-black rounded-full text-white transition-all shadow-xl hover:rotate-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Sidebar - Visuals & Stats */}
                <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-stone-200">
                  <img 
                    src={selectedArticle.img} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt={selectedArticle.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest mb-4">
                      Care Level: {selectedArticle.careLevel}
                    </div>
                    <h2 className="text-4xl font-black text-white leading-tight mb-2">{selectedArticle.title}</h2>
                    <p className="text-stone-300 font-medium italic">Environmental Focus</p>
                  </div>
                </div>

                {/* Right Content Area - Detailed Info */}
                <div className="lg:w-3/5 p-8 lg:p-14">
                   <div className="flex items-center gap-2 mb-8 text-emerald-700 font-black text-xs uppercase tracking-tighter">
                      <span className="w-8 h-px bg-emerald-700/30"></span>
                      Nature & Exotic Companion Guide
                   </div>

                   <p className="text-xl font-bold text-stone-800 mb-10 leading-relaxed">
                     {selectedArticle.description}
                   </p>

                   {/* Quick Facts Grid */}
                   <div className="grid grid-cols-2 gap-4 mb-12">
                      <div className="bg-stone-100 p-5 rounded-2xl border border-stone-200">
                         <span className="block text-[10px] font-black uppercase text-stone-400 tracking-widest mb-1">Diet</span>
                         <span className="text-sm font-bold text-stone-700">{selectedArticle.diet}</span>
                      </div>
                      <div className="bg-stone-100 p-5 rounded-2xl border border-stone-200">
                         <span className="block text-[10px] font-black uppercase text-stone-400 tracking-widest mb-1">Lifespan</span>
                         <span className="text-sm font-bold text-stone-700">{selectedArticle.lifespan}</span>
                      </div>
                      <div className="bg-stone-100 p-5 rounded-2xl border border-stone-200 col-span-2">
                         <span className="block text-[10px] font-black uppercase text-stone-400 tracking-widest mb-1">Habitat Needs</span>
                         <span className="text-sm font-bold text-stone-700">{selectedArticle.habitat}</span>
                      </div>
                   </div>

                   {/* Deep Dive Content */}
                   <div className="prose prose-stone max-w-none">
                      <h4 className="text-lg font-black text-stone-900 mb-4 uppercase tracking-tight">Understanding Their Needs</h4>
                      <p className="text-stone-600 leading-loose text-lg mb-10">
                        {selectedArticle.fullContent}
                      </p>
                   </div>

                   {/* Exotic Expert Attribution */}
                   <div className="flex items-center justify-between pt-10 border-t border-stone-200">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img src={AUTHORS[1].avatar} className="w-14 h-14 rounded-full border-4 border-white shadow-lg" />
                          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] border-2 border-white">
                            🌿
                          </div>
                        </div>
                        <div>
                           <p className="font-black text-stone-900 text-sm leading-none mb-1">{AUTHORS[1].name}</p>
                           <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Cat Explorer</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedArticle(null)}
                        className="bg-stone-900 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg active:scale-95"
                      >
                        Return to Library
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SmallAnimals;
