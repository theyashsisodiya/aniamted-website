import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';
import HowItWorks from './components/HowItWorks';
import CandidateShowcase from './components/CandidateShowcase';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-50 text-brand-dark min-h-screen selection:bg-brand-teal selection:text-white cursor-none overflow-x-hidden">
       <Cursor />
       
       {/* Simple Loader */}
       {isLoading && (
          <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-out">
            <div className="relative animate-spin-slow">
               <div className="w-20 h-20 rounded-full border-t-4 border-brand-teal border-r-4 border-r-transparent animate-spin" />
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 animate-pulse">
              MingHwee
            </p>
          </div>
       )}

       {!isLoading && (
          <main className="opacity-100 transition-opacity duration-1000">
            <Navigation />
            <Hero />
            <Marquee />
            <CandidateShowcase />
            <HowItWorks />
            <Mission />
            <JoinCTA />
            <Footer />
          </main>
        )}
    </div>
  );
};

export default App;