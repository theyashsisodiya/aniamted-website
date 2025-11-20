import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll value to reduce jitter
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Parallax transforms
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]); // Reduced range for less aggressive movement
  const y2 = useTransform(smoothProgress, [0, 1], [0, 100]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative min-h-[100vh] bg-void py-32 overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(38,103,255,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 h-full">
        
        {/* Column 1 - Moving Up */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-8 md:mt-20 will-change-transform">
           <div className="h-[400px] w-full rounded-2xl bg-gray-900 border border-white/10 p-1 relative overflow-hidden group hover-trigger">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700 will-change-transform" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs font-mono text-neon-purple mb-2 block">PROJECT 01</span>
                <h4 className="text-2xl font-display font-bold">Neon Genesis</h4>
              </div>
           </div>
           <div className="h-[200px] w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 flex flex-col justify-center">
             <p className="font-mono text-xs text-gray-500 mb-4">DATA_STREAM_01</p>
             <div className="space-y-2">
               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                   className="h-full w-1/2 bg-neon-purple" 
                 />
               </div>
             </div>
           </div>
        </motion.div>

        {/* Column 2 - Moving Down */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:-mt-20 will-change-transform">
           <div className="h-[250px] w-full rounded-2xl bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 to-transparent animate-pulse-glow" />
              <h3 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">2025</h3>
           </div>
           <div className="h-[450px] w-full rounded-2xl bg-gray-900 border border-white/10 relative overflow-hidden group hover-trigger">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 will-change-transform" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs font-mono text-neon-blue mb-2 block">PROJECT 02</span>
                <h4 className="text-2xl font-display font-bold">Void Walker</h4>
              </div>
           </div>
        </motion.div>

        {/* Column 3 - Moving Up */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-8 md:mt-10 will-change-transform">
           <div className="h-[400px] w-full rounded-2xl bg-gray-900 border border-white/10 relative overflow-hidden group hover-trigger">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 will-change-transform" />
               <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs font-mono text-white mb-2 block">PROJECT 03</span>
                <h4 className="text-2xl font-display font-bold">Cyber Flesh</h4>
              </div>
           </div>
           <div className="h-[200px] w-full rounded-2xl bg-gradient-to-br from-neon-blue/10 to-transparent border border-neon-blue/20 p-6 flex flex-col justify-center">
              <p className="text-xl font-display font-bold leading-tight text-gray-200">
                "The interface is the architecture of the mind."
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;