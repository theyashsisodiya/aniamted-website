import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { generateOracleProphecy } from '../services/geminiService';
import { InteractionState } from '../types';

const Oracle: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [state, setState] = useState<InteractionState>(InteractionState.IDLE);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAskOracle = async () => {
    if (!input.trim()) return;

    setState(InteractionState.THINKING);
    setResponse(null);

    const prophecy = await generateOracleProphecy(input);

    setState(InteractionState.RESPONDING);
    
    // Typewriter effect logic could go here, but let's just set it for now with animation
    setTimeout(() => {
        setResponse(prophecy);
        setState(InteractionState.IDLE);
    }, 800); // Artificial delay for "thinking" effect
  };

  return (
    <section id="oracle" className="relative min-h-screen w-full bg-black py-24 flex flex-col items-center justify-center px-6 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-black to-black pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs tracking-widest uppercase mb-4">
            <Sparkles size={12} />
            <span>AI Powered Intelligence</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            CONSULT THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-500">ORACLE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Input a concept, a fear, or a dream. Our AI will gaze into the digital ether and return a prophecy for 2025.
          </p>
        </div>

        <div className="relative glass-panel rounded-2xl p-1 overflow-hidden max-w-2xl mx-auto">
          <div className="relative bg-black/60 rounded-xl p-6 md:p-8">
            <div className="flex flex-col space-y-4">
               <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. The future of art..."
                className="w-full bg-transparent text-white text-xl md:text-2xl outline-none placeholder-gray-700 resize-none font-display min-h-[80px]"
                disabled={state === InteractionState.THINKING}
              />
              
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {state === InteractionState.THINKING ? 'Connecting to Node...' : 'Ready to transmit'}
                </span>
                <button
                  onClick={handleAskOracle}
                  disabled={!input.trim() || state === InteractionState.THINKING}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300"
                >
                  {state === InteractionState.THINKING ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Glowing Border Effect on Focus/Active */}
          <div className={`absolute inset-0 rounded-2xl border border-neon-purple/30 pointer-events-none transition-opacity duration-500 ${state === InteractionState.THINKING ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
        </div>

        <div className="mt-12 min-h-[150px] flex justify-center items-center text-center">
          <AnimatePresence mode="wait">
            {response && (
              <motion.div
                key="response"
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                className="relative p-8"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-white/5 font-serif">"</span>
                <p className="text-2xl md:text-3xl text-white font-display leading-relaxed">
                  {response}
                </p>
                <div className="mt-6 flex justify-center gap-2">
                    <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse delay-75" />
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Oracle;
