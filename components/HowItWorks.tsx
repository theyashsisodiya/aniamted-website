import React, { useRef, useLayoutEffect } from 'react';
import { Search, ShieldCheck, UserCheck, Video, FileCheck, HeartHandshake } from 'lucide-react';
import InfiniteLoop from './InfiniteLoop';
import ParallaxSection from './ParallaxSection';
import gsap from 'gsap';

const features = [
  { 
    title: "AI Matching", 
    icon: <Search size={32} />, 
    desc: "Our algorithms find the perfect personality fit for your family.",
    img: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=500&auto=format&fit=crop"
  },
  { 
    title: "Identity Verified", 
    icon: <ShieldCheck size={32} />, 
    desc: "Every passport and document is manually verified by our team.",
    img: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=500&auto=format&fit=crop"
  },
  { 
    title: "Video Interviews", 
    icon: <Video size={32} />, 
    desc: "Watch one-way video intros or schedule live calls instantly.",
    img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=500&auto=format&fit=crop"
  },
  { 
    title: "Contract Handling", 
    icon: <FileCheck size={32} />, 
    desc: "We manage the MOM paperwork and insurance for you.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=500&auto=format&fit=crop"
  },
  { 
    title: "Fair Pay", 
    icon: <HeartHandshake size={32} />, 
    desc: "We ensure industry standard wages and ethical treatment.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=500&auto=format&fit=crop"
  },
  { 
    title: "Post-Hire Support", 
    icon: <UserCheck size={32} />, 
    desc: "6-month guarantee and counseling support included.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop"
  },
];

const FeatureCard: React.FC<{ title: string; icon: React.ReactNode; desc: string; img: string }> = ({ title, icon, desc, img }) => (
  <div className="relative group w-[320px] h-[400px] flex-shrink-0 mx-4 hover-trigger perspective-1000">
    <div className="relative h-full bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-teal hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-500">
      
      {/* Image Background on Hover (subtle) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-8 relative z-10">
        <div className="w-16 h-16 bg-slate-700/50 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-brand-teal group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 shadow-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold mb-4 text-white">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{desc}</p>
      </div>
      
      <div className="w-full h-1.5 bg-slate-700/50 mt-auto">
        <div className="w-0 h-full bg-brand-teal group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hiw-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <ParallaxSection id="employers" className="py-32 bg-brand-dark">
       {/* Decorative Background */}
       <div ref={sectionRef} className="relative z-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-teal/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
            <h2 className="hiw-reveal text-sm font-bold tracking-[0.3em] text-brand-teal uppercase mb-4">
            Simple & Secure
            </h2>
            <h3 className="hiw-reveal text-4xl md:text-6xl font-display font-bold text-white max-w-2xl">
            How MingHwee Works
            </h3>
            <p className="hiw-reveal mt-4 text-slate-400 max-w-xl">
            We've redesigned the hiring process to be fully digital, transparent, and incredibly fast.
            </p>
        </div>

        {/* Auto Scrolling Carousel */}
        <div className="mask-gradient py-8">
            <InfiniteLoop duration={55} direction="left">
                <div className="flex gap-4 px-4">
                {features.map((feat, idx) => (
                    <FeatureCard key={`${feat.title}-${idx}`} {...feat} />
                ))}
                </div>
            </InfiniteLoop>
        </div>
       </div>
       
       <style>{`
         .mask-gradient {
           mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
         }
       `}</style>
    </ParallaxSection>
  );
};

export default HowItWorks;