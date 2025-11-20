import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full py-12 bg-neon-purple/5 border-y border-neon-purple/10 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        <motion.div
          className="flex items-center space-x-12 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Rendering 4 sets to ensure coverage on large screens */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-tighter">
                Future Ready
              </span>
              <span className="text-4xl text-neon-purple">★</span>
              <span className="text-6xl md:text-8xl font-display font-black text-white/80 uppercase tracking-tighter">
                Digital Kinetic
              </span>
              <span className="text-4xl text-neon-blue">★</span>
              <span className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-tighter">
                Hyper Real
              </span>
              <span className="text-4xl text-white">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;