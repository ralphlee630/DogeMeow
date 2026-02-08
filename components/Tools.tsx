
import React, { useState, useMemo, useEffect } from 'react';
import { CHOCOLATE_TYPES } from '../constants';

const Tools: React.FC = () => {
  const [weight, setWeight] = useState<number>(10);
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [chocolateType, setChocolateType] = useState(CHOCOLATE_TYPES[1]);
  const [amount, setAmount] = useState<number>(1);
  const [isSymptomModalOpen, setIsSymptomModalOpen] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSymptomModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isSymptomModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSymptomModalOpen]);

  const toxicityInfo = useMemo(() => {
    const weightInKg = unit === 'lbs' ? weight * 0.453592 : weight;
    const totalTheobromine = amount * 28.35 * chocolateType.theobromine / 1000; // mg
    const dosePerKg = totalTheobromine / weightInKg;

    let level = 'None';
    let riskClass = 'text-green-600';
    let action = 'Observe your dog.';

    if (dosePerKg >= 20) {
      level = 'Mild';
      riskClass = 'text-yellow-600';
      action = 'Mild symptoms like tummy upset expected.';
    }
    if (dosePerKg >= 40) {
      level = 'Moderate';
      riskClass = 'text-orange-600';
      action = 'Monitor your dog and call your local vet clinic.';
    }
    if (dosePerKg >= 60) {
      level = 'Severe';
      riskClass = 'text-red-600 font-black';
      action = 'URGENT: Take your dog to the emergency vet immediately!';
    }

    return { level, action, riskClass };
  }, [weight, unit, chocolateType, amount]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24">
        
        {/* Symptom Checker Card */}
        <div className="relative bg-blue-50/50 rounded-3xl md:rounded-[4rem] p-8 md:p-12 lg:p-20 flex flex-col md:flex-row items-center gap-8 md:gap-16 overflow-hidden border border-blue-100 shadow-xl group">
          <div className="flex-1 space-y-6 md:space-y-8 z-10 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-black text-blue-950 leading-tight font-inter">
              Simple Symptom <br/><span className="text-yellow-500">Checklist</span>
            </h2>
            <p className="text-base md:text-xl text-blue-800/80 leading-relaxed max-w-lg mx-auto md:mx-0">
              Not sure if something is normal? Our interactive checklist helps new owners identify common behaviors and when to seek advice.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => setIsSymptomModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95 group flex items-center gap-3 text-sm md:text-base"
              >
                Check Guide
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-lg relative order-1 md:order-2">
            <div className="absolute inset-0 bg-blue-200 rounded-2xl md:rounded-[3rem] blur-3xl opacity-20 -z-10 animate-pulse-slow"></div>
            <img 
              src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&q=80&w=800" 
              className="rounded-2xl md:rounded-[3rem] shadow-2xl relative z-10 transform md:group-hover:-rotate-1 transition-transform duration-700 border-2 md:border-4 border-white aspect-square md:aspect-auto object-cover" 
              alt="Care Assistant"
            />
          </div>
        </div>

        {/* Toxicity Meter Tool */}
        <div id="toxicity" className="relative bg-yellow-50/30 rounded-3xl md:rounded-[4rem] p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-16 overflow-hidden border border-yellow-100 shadow-xl">
          <div className="flex-1 space-y-6 md:space-y-8 z-10 w-full">
            <h2 className="text-3xl md:text-5xl font-black text-blue-950 font-inter leading-tight">
              Chocolate <br/><span className="text-yellow-500">Info Tool</span>
            </h2>
            
            <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-yellow-200 shadow-inner space-y-5 md:space-y-6 text-blue-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-2">Dog Weight</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      value={weight} 
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full bg-gray-50 border border-gray-200 rounded-l-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                    />
                    <select 
                      value={unit} 
                      onChange={(e) => setUnit(e.target.value as any)}
                      className="bg-yellow-100 border border-gray-200 rounded-r-xl px-4 py-3 text-xs font-bold shrink-0"
                    >
                      <option value="lbs">lbs</option>
                      <option value="kg">kg</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-2">Chocolate Type</label>
                  <select 
                    value={chocolateType.name} 
                    onChange={(e) => setChocolateType(CHOCOLATE_TYPES.find(t => t.name === e.target.value)!)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    {CHOCOLATE_TYPES.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-2">Amount (oz)</label>
                  <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  />
                </div>
                <div className="flex flex-col justify-end">
                   <div className="bg-yellow-50 rounded-xl p-3 md:p-4 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-yellow-700">Estimated Risk:</span>
                      <span className={`text-lg md:text-xl font-black ${toxicityInfo.riskClass}`}>{toxicityInfo.level}</span>
                   </div>
                </div>
              </div>
              <div className="p-4 bg-blue-900 rounded-xl text-white">
                <p className="text-xs md:text-sm font-bold flex items-center gap-3">
                  <span className="text-xl md:text-2xl">💡</span>
                  {toxicityInfo.action}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg relative mx-auto lg:mx-0">
            <img 
              src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800" 
              className="rounded-2xl md:rounded-[3rem] shadow-2xl relative z-10 border-2 md:border-4 border-white aspect-square md:aspect-auto object-cover" 
              alt="Health Info"
            />
          </div>
        </div>

      </div>

      {/* Symptom Checker Modal */}
      {isSymptomModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          <div 
            className="absolute inset-0 bg-blue-950/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsSymptomModalOpen(false)}
          />
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsSymptomModalOpen(false)}
              className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-blue-950 transition-all shadow-md active:scale-95"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🩺</div>
                <h3 className="text-3xl md:text-4xl font-black text-blue-950 font-inter">Symptom Quick-Guide</h3>
                <p className="mt-2 text-gray-500 font-medium">Identify normal behaviors vs. warning signs.</p>
              </div>

              <div className="space-y-8">
                {/* Green Flags */}
                <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">✅</span>
                    <h4 className="font-black text-emerald-800 uppercase tracking-widest text-xs">Green Flags (All Good)</h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Bright, clear eyes", "Cool, wet nose (Dogs)", "Consistent appetite", "Playful & inquisitive", "Clean, shiny coat", "Regular sleep cycles"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-emerald-900/70 font-bold">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Yellow Flags */}
                <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">⚠️</span>
                    <h4 className="font-black text-amber-800 uppercase tracking-widest text-xs">Yellow Flags (Monitor Closely)</h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Skipping one meal", "Mild lethargy (one day)", "Occasional scratching", "Slight change in thirst", "Hiding more than usual"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-amber-900/70 font-bold">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[10px] font-black text-amber-600 uppercase italic">If these persist for more than 24h, call your vet.</p>
                </div>

                {/* Red Flags */}
                <div className="bg-rose-50 rounded-3xl p-6 border border-rose-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">🚨</span>
                    <h4 className="font-black text-rose-800 uppercase tracking-widest text-xs">Red Flags (Urgent Action)</h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Vomiting or Diarrhea", "Difficulty breathing", "Pale or blue gums", "Refusal to drink", "Seizures or tremors", "Sudden aggression"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-rose-900/70 font-bold">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setIsSymptomModalOpen(false);
                    document.getElementById('ai')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                  Still Unsure? Chat with AI
                </button>
                <button 
                  onClick={() => setIsSymptomModalOpen(false)}
                  className="flex-1 bg-gray-100 text-blue-900 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all active:scale-95"
                >
                  Got it, thanks!
                </button>
              </div>
              
              <p className="mt-6 text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                Disclaimer: This checklist is for educational purposes and does not replace professional veterinary advice. Always contact a vet in emergencies.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tools;
