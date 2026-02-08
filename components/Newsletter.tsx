
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    
    // Simulate a successful subscription process
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {status === 'success' ? (
            <div className="animate-in fade-in zoom-in duration-700">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm">
                ✓
              </div>
              <h2 className="text-4xl font-black text-blue-950 mb-4 font-inter">You're on the list!</h2>
              <p className="text-lg text-gray-500 font-medium mb-10 max-w-lg mx-auto">
                Check your inbox! We've sent a confirmation message. Welcome to the DogeMeow community of happy pet parents.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-blue-600 font-black uppercase tracking-widest text-xs border-b-2 border-yellow-400 pb-1 hover:text-blue-800 transition-colors"
              >
                Back to Subscription
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-black text-blue-950 mb-4 font-inter">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-500 font-medium mb-10">Sign up for weekly pet health tips.</p>
              
              <div className="max-w-2xl mx-auto">
                <form 
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-[2rem] shadow-xl border border-gray-100 transition-all focus-within:ring-4 focus-within:ring-blue-100"
                >
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address" 
                    className="flex-1 px-8 py-5 rounded-[1.5rem] bg-[#334155] text-white placeholder:text-slate-400 focus:outline-none transition-all"
                  />
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className={`bg-[#1e3a8a] text-white px-10 py-5 rounded-[1.5rem] font-black hover:bg-black transition-all shadow-md active:scale-95 shrink-0 flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
