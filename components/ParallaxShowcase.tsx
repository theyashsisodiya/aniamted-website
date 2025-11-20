import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={ref} className="relative min-h-[120vh] bg-void py-32 overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(38,103,255,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 h-[1200px]">
        
        {/* Column 1 - Moving Up */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-8 mt-20">
           <div className="h-[400px] w-full rounded-2xl bg-gradient-to-b from-gray-800 to-black border border-white/10 p-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-mono text-neon-purple mb-2 block">PROJECT 01</span>
                <h4 className="text-2xl font-display font-bold">Neon Genesis</h4>
              </div>
           </div>
           <div className="h-[300px] w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8">
             <p className="font-mono text-xs text-gray-500 mb-4">DATA_STREAM_01</p>
             <div className="space-y-2">
               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                   className="h-full w-1/2 bg-neon-purple" 
                 />
               </div>
               <div className="w-3/4 h-1 bg-white/10 rounded-full" />
               <div className="w-1/2 h-1 bg-white/10 rounded-full" />
             </div>
           </div>
        </motion.div>

        {/* Column 2 - Moving Down */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-8 -mt-20">
           <div className="h-[250px] w-full rounded-2xl bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 to-transparent animate-pulse-glow" />
              <h3 className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">2025</h3>
           </div>
           <div className="h-[500px] w-full rounded-2xl bg-gray-900 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-mono text-neon-blue mb-2 block">PROJECT 02</span>
                <h4 className="text-2xl font-display font-bold">Void Walker</h4>
              </div>
           </div>
        </motion.div>

        {/* Column 3 - Moving Up */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-8 mt-32">
           <div className="h-[450px] w-full rounded-2xl bg-gray-900 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute bottom-6 left-6">
                <span className="text-xs font-mono text-white mb-2 block">PROJECT 03</span>
                <h4 className="text-2xl font-display font-bold">Cyber Flesh</h4>
              </div>
           </div>
           <div className="h-[250px] w-full rounded-2xl bg-gradient-to-br from-neon-blue/10 to-transparent border border-neon-blue/20 p-6 flex flex-col justify-end">
              <p className="text-2xl font-display font-bold leading-tight">
                "The interface is the architecture of the mind."
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;