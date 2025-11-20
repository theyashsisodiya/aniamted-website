import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, x: -20, duration: 0.8, delay: 0.2 })
        .from(".hero-title span", { y: 100, opacity: 0, stagger: 0.1, duration: 1 }, "-=0.4")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".hero-buttons", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".hero-stats", { opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".hero-visual", { opacity: 0, scale: 0.95, y: 50, duration: 1.2 }, "-=1")
        .from(".floating-card", { x: 50, opacity: 0, duration: 0.8 }, "-=0.5")
        .to(".progress-bar-fill", { width: "96%", duration: 1.5, ease: "power2.inOut" }, "-=0.2");

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-24 md:pt-20 pb-12">
      {/* Soft Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.3] z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="text-left">
          <div className="hero-badge flex items-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-brand-teal" />
            <span className="text-brand-teal tracking-widest text-xs font-bold uppercase">
              Trusted by 10,000+ Families
            </span>
          </div>

          {/* Typography */}
          {/* Added pb-4 to prevent descenders (like 'y' in Opportunity) from being cut off by overflow-hidden */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-brand-dark leading-tight md:leading-[1.1] mb-6 overflow-hidden pb-4">
            <span className="inline-block">Find Your</span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
              Perfect Helper.
            </span> <br />
            <span className="inline-block">Fast.</span>
          </h1>

          <p className="hero-desc mb-10 text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg font-light">
            AI matches you. You decide. Done. We simplify hiring skilled Foreign Domestic Workers (FDWs) in Singapore and the Philippines.
          </p>

          <div className="hero-buttons flex flex-wrap gap-4">
            <a
              href="#join"
              className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 border border-slate-200 bg-white text-slate-800 rounded-full font-semibold hover:border-brand-teal/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              How it Works
            </a>
          </div>

          <div className="hero-stats mt-8 flex gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-teal" /> Verified Profiles</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-teal" /> No Hidden Fees</span>
          </div>
        </div>

        {/* Right: Visual Hero Composition */}
        <div className="hero-visual relative h-[400px] md:h-[600px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl group mt-8 lg:mt-0">
           <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/30 to-transparent z-10 mix-blend-multiply pointer-events-none" />
           
           <img 
             src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop" 
             alt="Helper assisting elderly" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
           />

           {/* Floating Glass Card */}
           <div className="floating-card absolute bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-80 glass-panel p-6 rounded-2xl z-20 bg-white/90 backdrop-blur-lg shadow-xl border-0">
             <div className="flex items-center gap-4 mb-3">
               <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold">AI</div>
               <div>
                 <h4 className="font-bold text-slate-800">Smart Match</h4>
                 <p className="text-xs text-slate-500">Finding the perfect fit</p>
               </div>
             </div>
             <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
               <div className="progress-bar-fill h-full bg-brand-teal w-0" />
             </div>
             <div className="flex justify-between text-xs font-bold mt-2 text-brand-teal">
               <span>Match Score</span>
               <span>96%</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;