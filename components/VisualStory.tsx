import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from './TextReveal';

interface StoryCardProps {
  title: string;
  description: string;
  index: number;
  step: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, description, index, step }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-15%", once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex w-full mb-40 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    >
      <div className="w-full md:w-2/3 lg:w-1/2 relative">
        {/* Decorative Line */}
        <div className={`absolute top-8 w-[100vw] h-[1px] bg-gradient-to-r from-neon-purple/50 to-transparent ${index % 2 === 0 ? 'right-full mr-4' : 'left-full ml-4'}`} />
        
        <div className="group relative hover-trigger">
           {/* Optimized glow effect - removed heavy blur on animation */}
           <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/50 to-neon-blue/50 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 will-change-opacity" />
           <div className="relative glass-panel rounded-2xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-colors duration-300 bg-black/80">
              <span className="text-xs font-mono text-neon-purple mb-4 block">{step}</span>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">{description}</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const VisualStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="vision" ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-void">
      {/* Simplified Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-40">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-4"
          >
             <span className="text-sm font-bold tracking-[0.5em] text-gray-500 uppercase">The Manifesto</span>
          </motion.div>
          
          <div className="flex justify-center">
             <TextReveal className="text-5xl md:text-8xl font-display font-bold text-white justify-center leading-none">
               BEYOND_PIXELS
             </TextReveal>
          </div>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "200px" }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5 }}
             className="h-1 bg-neon-purple mx-auto mt-8" 
          />
        </div>

        <StoryCard 
          index={0}
          step="PHASE_01"
          title="Deep Immersion"
          description="We believe the web is a spatial environment. Flat design is dead. Depth, motion, and reaction are the new primitives of digital interaction. We build worlds, not pages."
        />
        <StoryCard 
          index={1}
          step="PHASE_02"
          title="Living Intelligence"
          description="Static content is a relic. We integrate generative models directly into the DOM, creating interfaces that dream, adapt, and converse with the user in real-time."
        />
        <StoryCard 
          index={2}
          step="PHASE_03"
          title="Digital Emotion"
          description="Data without feeling is noise. We craft visual symphonies that resonate with human biology, using color psychology, haptic feedback visuals, and fluid micro-interactions."
        />
      </div>
    </section>
  );
};

export default VisualStory;