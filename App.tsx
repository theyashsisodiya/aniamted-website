import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VisualStory from './components/VisualStory';
import Oracle from './components/Oracle';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';
import Capabilities from './components/Capabilities';
import ParallaxShowcase from './components/ParallaxShowcase';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate longer loading for "heavy" assets experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-void text-white min-h-screen selection:bg-neon-purple selection:text-white cursor-none overflow-x-hidden">
       <Cursor />
       
       <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          >
            <div className="relative">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 className="w-24 h-24 rounded-full border-t-2 border-neon-purple border-r-2 border-r-transparent"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 w-24 h-24 rounded-full border-b-2 border-neon-blue border-l-2 border-l-transparent scale-75"
               />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="mt-8 text-xs font-mono uppercase tracking-[0.5em] text-white/50"
            >
              Loading Experience
            </motion.p>
            <div className="absolute bottom-12 left-0 right-0 text-center">
              <p className="text-[10px] text-gray-700 font-mono">AETHER v2.5.0 // INITIALIZING</p>
            </div>
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navigation />
            <Hero />
            <Marquee />
            <VisualStory />
            <ParallaxShowcase />
            <Capabilities />
            <Oracle />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;