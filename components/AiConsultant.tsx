
import React, { useState, useRef, useEffect } from 'react';

// Define the shape of a chat message
interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<ChatMessage[]>([
    { role: 'ai', text: "Hi! I'm the DogeMeow Assistant. I'm powered by Puter.js today! How can I help you with your pet care journey?" }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setChat(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // System instructions as requested
      const systemPrompt = `You are the DogeMeow AI Vet Assistant, a friendly and supportive companion for new pet owners. 
      Provide simple, practical, and helpful advice for dogs, cats, and small pets. 
      Focus on beginner-friendly explanations. 
      Always include a friendly disclaimer: "DogeMeow provides general information. Please consult a local veterinarian for specific medical concerns."
      Use bullet points to make information easy to read.`;

      // Combine system prompt and user message for the chat context
      // Note: Puter.js handles the prompt as a string or chat history.
      const fullPrompt = `Instruction: ${systemPrompt}\n\nUser Question: ${userMessage}`;

      // Call Puter.js AI Chat
      const puter = (window as any).puter;
      if (!puter) {
        throw new Error("Puter.js not loaded");
      }

      const response = await puter.ai.chat(fullPrompt, {
        model: 'gpt-5-nano',
      });

      // Puter returns the string response directly
      const text = typeof response === 'string' ? response : response.toString();
      
      setChat(prev => [...prev, { role: 'ai', text }]);
    } catch (error: any) {
      console.error("Puter AI Error:", error);
      setChat(prev => [...prev, { role: 'ai', text: "Oops! My connection to the pet-sphere was interrupted. Please try asking your question again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai" className="py-12 md:py-24 bg-blue-900 md:rounded-[4rem] text-white overflow-hidden relative shadow-2xl md:border-4 border-yellow-400/20 md:mx-4 sm:mx-8">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white font-inter">
              DogeMeow Assistant <span className="text-yellow-400">🤖</span>
            </h2>
            <p className="mt-2 md:mt-4 text-blue-200 text-base md:text-lg max-w-lg">
              Get instant, helpful answers powered by Puter AI.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/10">
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Online</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-4 md:p-8 flex flex-col h-[500px] md:h-[600px] shadow-inner">
          <div className="flex-1 overflow-y-auto space-y-4 md:space-y-6 mb-6 md:mb-8 pr-1 md:pr-2 custom-scrollbar text-blue-900">
            {chat.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] md:max-w-[85%] p-4 md:p-6 rounded-2xl md:rounded-3xl text-sm md:text-base leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-yellow-400 text-blue-950 font-semibold rounded-br-none shadow-md' 
                  : 'bg-blue-50 text-blue-900 rounded-bl-none border border-blue-100'
                }`}>
                  <div className="whitespace-pre-line">{msg.text}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-blue-50 px-4 py-2 md:px-6 md:py-4 rounded-2xl md:rounded-3xl flex gap-2 md:gap-3 border border-blue-100">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="relative flex flex-col md:block">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about puppies or kittens..."
              className="w-full bg-gray-50 border-2 border-transparent rounded-xl md:rounded-2xl px-4 md:px-6 py-4 md:py-5 md:pr-32 focus:outline-none focus:border-yellow-400 transition-all text-blue-900 placeholder:text-gray-400 shadow-sm text-sm md:text-base mb-2 md:mb-0"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="md:absolute md:right-3 md:top-2 md:bottom-2 bg-blue-900 hover:bg-black disabled:opacity-50 text-white font-black px-6 md:px-8 py-3 md:py-0 rounded-xl transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Ask Assistant
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;
