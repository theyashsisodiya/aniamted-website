import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import TextReveal from './TextReveal';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-void perspective-1000">
      {/* Performance Optimized Background: Replaced heavy blur-divs with radial gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-purple/20 via-void to-void opacity-70"></div>
      <div className="absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neon-blue/20 via-void to-void opacity-70"></div>

      {/* Grid & Noise */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-overlay" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-purple" />
          <span className="text-neon-purple tracking-[0.5em] text-xs md:text-sm uppercase font-bold">
            Established 2025
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-purple" />
        </motion.div>

        <div className="mb-2 flex justify-center overflow-hidden">
            <TextReveal className="text-6xl md:text-9xl font-display font-extrabold tracking-tighter text-white justify-center drop-shadow-2xl">
                DESIGN
            </TextReveal>
        </div>
        
        <div className="mb-8 flex justify-center overflow-hidden">
           <TextReveal 
             delay={0.4}
             className="text-6xl md:text-9xl font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-700 justify-center"
           >
             THE_UNSEEN
           </TextReveal>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light"
        >
          Architecting digital realities where <span className="text-white font-medium">motion</span> is language and <span className="text-white font-medium">interaction</span> is intuitive. Welcome to the post-screen era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#vision"
            className="relative overflow-hidden px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:scale-105 transition-transform duration-300 flex items-center gap-2 group hover-trigger"
          >
            <span className="relative z-10 uppercase text-sm">Enter The Void</span>
            <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-neon-purple opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>

          <button className="flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors group hover-trigger">
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-black transition-colors">
               <Play size={12} fill="currentColor" />
             </div>
             <span className="text-sm font-medium tracking-widest uppercase text-gray-300 group-hover:text-white">Showreel</span>
          </button>
        </motion.div>
      </div>
      
      {/* Abstract Rotating Rings - Optimized with will-change */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[120vh] h-[120vh] border border-white/5 rounded-full border-dashed opacity-20 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
       <motion.div 
        style={{ y: y2 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute w-[90vh] h-[90vh] border border-white/10 rounded-full opacity-20 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
    </section>
  );
};

export default Hero;