import React, { useRef, useLayoutEffect } from 'react';
import { Briefcase, UserPlus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const JoinCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-up", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="join" ref={containerRef} className="relative min-h-[80vh] w-full bg-brand-dark py-24 flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/20 via-brand-dark to-brand-dark pointer-events-none" />
      
      <div className="max-w-5xl w-full z-10 text-center">
        <h2 className="reveal-up text-5xl md:text-7xl font-display font-bold mb-6 text-white">
          Ready to <span className="text-brand-teal">Join?</span>
        </h2>
        <p className="reveal-up text-slate-400 text-lg max-w-xl mx-auto mb-16">
          Whether you are looking for help or looking for work, MingHwee is your trusted partner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Employers */}
            <div className="reveal-up bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors cursor-pointer group hover-trigger text-left hover:scale-[1.02] duration-300">
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8 text-white group-hover:rotate-12 transition-transform">
                    <UserPlus size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">For Employers</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Post jobs, browse verified candidate profiles, and schedule interviews in a few clicks.
                </p>
                <button className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full w-full hover:bg-brand-soft transition-colors">
                    Hire Talent
                </button>
            </div>

             {/* For Candidates */}
             <div className="reveal-up bg-gradient-to-br from-brand-teal/20 to-transparent border border-brand-teal/20 rounded-3xl p-10 hover:border-brand-teal/50 transition-colors cursor-pointer group hover-trigger text-left hover:scale-[1.02] duration-300">
                <div className="w-16 h-16 bg-brand-teal rounded-2xl flex items-center justify-center mb-8 text-white group-hover:-rotate-12 transition-transform">
                    <Briefcase size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">For Candidates</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Create a professional profile, upload your video intro, and receive job offers from top families.
                </p>
                <button className="px-8 py-4 bg-brand-teal text-white font-bold rounded-full w-full hover:bg-brand-teal/80 transition-colors">
                    Find Jobs
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;