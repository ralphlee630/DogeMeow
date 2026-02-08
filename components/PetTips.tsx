
import React, { useState, useEffect } from 'react';
import { DOG_TIPS, CAT_TIPS, AUTHORS } from '../constants';
import { Tip } from '../types';

const PetTips: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dog' | 'cat'>('dog');
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);
  const [isLibraryExpanded, setIsLibraryExpanded] = useState(false);

  const tips = activeTab === 'dog' ? DOG_TIPS : CAT_TIPS;
  const visibleTips = isLibraryExpanded ? tips : tips.slice(0, 3);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedTip(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedTip) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTip]);

  // Reset expansion when switching categories
  useEffect(() => {
    setIsLibraryExpanded(false);
  }, [activeTab]);

  return (
    <section id="tips" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 relative">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] font-inter leading-tight mb-3">
              Puppy & Kitchen <br className="hidden sm:block"/>
              <span className="text-yellow-400 italic font-brand text-5xl md:text-6xl not-italic">Academy</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-medium max-w-lg">
              Practical guides and health essentials simplified for everyday pet parents.
            </p>
          </div>
          
          <div className="flex p-1 bg-gray-100 rounded-2xl shadow-sm self-start md:self-end">
            <button
              onClick={() => setActiveTab('dog')}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'dog' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              🐕 Dogs
            </button>
            <button
              onClick={() => setActiveTab('cat')}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'cat' ? 'bg-[#a35d3f] text-white shadow-lg' : 'text-gray-500 hover:text-[#a35d3f]'
              }`}
            >
              🐈 Cats
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleTips.map((tip, idx) => {
            const author = activeTab === 'dog' ? AUTHORS[0] : AUTHORS[1];
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedTip(tip)}
                className="group flex flex-col h-full bg-[#f8fafc] rounded-3xl md:rounded-[2.5rem] p-5 md:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] aspect-[1.4/1] mb-6 md:mb-8 shadow-sm">
                  <img 
                    src={tip.icon} 
                    alt={tip.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
                </div>
                
                <div className="px-1 flex flex-col flex-grow">
                   <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors leading-tight">
                     {tip.title}
                   </h3>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6 md:mb-10 flex-grow">
                     {tip.description}
                   </p>
                   
                   <div className="flex items-center gap-3 md:gap-4 pt-5 md:pt-6 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-sm mt-auto">
                     <div className="relative">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                           <img src={author.avatar} alt={author.name} className="w-full h-full object-cover grayscale opacity-80" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-yellow-400 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white flex items-center justify-center text-[6px] md:text-[8px] shadow-sm">
                          🐾
                        </div>
                     </div>
                     <div>
                       <p className="font-bold text-[#1e293b] leading-none mb-1 text-xs md:text-sm">{author.name}</p>
                       <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">GUIDE AUTHOR</p>
                     </div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 md:mt-20 text-center">
          {!isLibraryExpanded ? (
            <button 
              onClick={() => setIsLibraryExpanded(true)}
              className="text-blue-600 font-black uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-yellow-400 pb-1 hover:text-blue-800 transition-all hover:gap-4 flex items-center gap-2 mx-auto"
            >
              BROWSE FULL PET LIBRARY <span className="text-sm md:text-base">→</span>
            </button>
          ) : (
            <button 
              onClick={() => {
                setIsLibraryExpanded(false);
                document.getElementById('tips')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 font-black uppercase tracking-widest text-[10px] md:text-xs hover:text-blue-600 transition-all flex items-center gap-2 mx-auto"
            >
              SHOW LESS <span className="text-sm md:text-base">↑</span>
            </button>
          )}
        </div>
      </div>

      {/* Article Modal (Shared styles across app) */}
      {selectedTip && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          <div 
            className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedTip(null)}
          />
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedTip(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur rounded-full text-white transition-all shadow-lg hover:scale-110"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="relative h-48 sm:h-64 md:h-96 w-full">
                <img 
                  src={selectedTip.icon} 
                  alt={selectedTip.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              
              <div className="p-6 md:p-12 -mt-10 md:-mt-16 relative bg-white rounded-t-[2rem] md:rounded-t-[3rem]">
                <div className={`inline-block px-3 py-1 md:px-4 md:py-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-full mb-4 md:mb-6 ${activeTab === 'dog' ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-[#a35d3f]'}`}>
                  {activeTab === 'dog' ? 'Dog Guide' : 'Cat Guide'}
                </div>
                <h2 className="text-2xl md:text-4xl sm:text-5xl font-black text-blue-950 mb-4 md:mb-6 leading-tight font-inter">
                  {selectedTip.title}
                </h2>
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg md:text-xl font-bold text-blue-900/60 mb-6 md:mb-8 leading-relaxed italic">
                    {selectedTip.description}
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {selectedTip.fullContent || "Article content is coming soon to the academy library. Check back for full details!"}
                  </p>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
                    {/* Consistent Author attribution in Modal */}
                    <img src={activeTab === 'dog' ? AUTHORS[0].avatar : AUTHORS[1].avatar} className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl shadow-md border-2 border-white" />
                    <div>
                      <p className="font-black text-blue-950 text-sm md:text-base">{activeTab === 'dog' ? AUTHORS[0].name : AUTHORS[1].name}</p>
                      <p className="text-[8px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Guide Contributor</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedTip(null)}
                    className={`w-full sm:w-auto text-white px-8 py-3 rounded-xl md:rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 ${activeTab === 'dog' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#a35d3f] hover:bg-[#8e5036]'}`}
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PetTips;
