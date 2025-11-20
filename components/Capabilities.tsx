import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Layers, Box, Network } from 'lucide-react';
import InfiniteLoop from './InfiniteLoop';

const capabilities = [
  { title: "Neural Interfaces", icon: <Cpu size={32} />, desc: "Direct brain-to-digital communication bridges." },
  { title: "Zero-Latency", icon: <Zap size={32} />, desc: "Real-time transmission across global nodes." },
  { title: "Spatial Web", icon: <Globe size={32} />, desc: "3D experiences mapped to physical reality." },
  { title: "Holographic UI", icon: <Layers size={32} />, desc: "Touchless interfaces projected in mid-air." },
  { title: "Quantum Enc", icon: <Box size={32} />, desc: "Unbreakable security for the post-silicon era." },
  { title: "Swarm AI", icon: <Network size={32} />, desc: "Distributed systems for complex solving." },
];

const Card: React.FC<{ title: string; icon: React.ReactNode; desc: string }> = ({ title, icon, desc }) => (
  <div className="relative group w-[280px] h-[350px] flex-shrink-0 mx-4 hover-trigger">
    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
      <div>
        <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center mb-6 text-neon-purple border border-white/5 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold mb-3 text-white">{title}</h3>
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
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.5em] text-neon-blue uppercase mb-4"
         >
           System Core
         </motion.h2>
         <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white max-w-2xl"
         >
           CAPABILITIES
         </motion.h3>
       </div>

       {/* Auto Scrolling Carousel using new Smoother Component */}
       <div className="mask-gradient py-8">
         <InfiniteLoop duration={40} direction="left">
            <div className="flex gap-4 px-4">
              {capabilities.map((cap, idx) => (
                <Card key={`${cap.title}-${idx}`} {...cap} />
              ))}
            </div>
         </InfiniteLoop>
       </div>
       
       <style>{`
         .mask-gradient {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
         }
       `}</style>
    </section>
  );
};

export default Capabilities;