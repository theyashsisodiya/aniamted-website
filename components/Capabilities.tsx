import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Layers, Box, Network } from 'lucide-react';

const capabilities = [
  { title: "Neural Interfaces", icon: <Cpu size={32} />, desc: "Direct brain-to-digital communication bridges." },
  { title: "Zero-Latency Networks", icon: <Zap size={32} />, desc: "Real-time data transmission across global nodes." },
  { title: "Spatial Web", icon: <Globe size={32} />, desc: "3D internet experiences mapped to physical reality." },
  { title: "Holographic UI", icon: <Layers size={32} />, desc: "Touchless interfaces projected in mid-air." },
  { title: "Quantum Encryption", icon: <Box size={32} />, desc: "Unbreakable security for the post-silicon era." },
  { title: "Swarm Intelligence", icon: <Network size={32} />, desc: "Distributed AI systems for complex problem solving." },
];

const Card: React.FC<{ title: string; icon: React.ReactNode; desc: string }> = ({ title, icon, desc }) => (
  <div className="relative group w-[300px] h-[400px] flex-shrink-0 mx-4">
    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
    <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
      <div>
        <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center mb-6 text-neon-purple border border-white/5">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-neon-purple to-transparent opacity-50" />
    </div>
  </div>
);

const Capabilities: React.FC = () => {
  return (
    <section className="py-32 bg-void relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 mb-16">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-[0.5em] text-neon-blue uppercase mb-4"
         >
           System Core
         </motion.h2>
         <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold text-white max-w-2xl"
         >
           CAPABILITIES
         </motion.h3>
       </div>

       <div className="flex overflow-hidden">
         <motion.div 
           className="flex"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ 
             repeat: Infinity, 
             ease: "linear", 
             duration: 30 
           }}
         >
           {[...capabilities, ...capabilities].map((cap, idx) => (
             <Card key={`${cap.title}-${idx}`} {...cap} />
           ))}
         </motion.div>
       </div>
    </section>
  );
};

export default Capabilities;