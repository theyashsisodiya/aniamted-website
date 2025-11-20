import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    id: 'step-1',
    title: "Fair Treatment",
    description: "We believe in transparency for both sides. No hidden costs for employers, and zero placement fees for helpers. We ensure contracts are fair and legally binding.",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'step-2',
    title: "Secure Process",
    description: "From initial interview to final onboarding, our platform uses industry-standard security protocols to protect your data and privacy. Your safety is paramount.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'step-3',
    title: "Comprehensive Support",
    description: "We don't just match you and leave. We provide ongoing consultation, conflict resolution mediation, and home integration guides for the entire contract duration.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
  }
];

const Mission: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the right column
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightColRef.current,
      });

      // Animate images based on scroll position of left steps
      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: stepsRef.current[index],
          start: "top center",
          end: "bottom center",
          onEnter: () => {
             // Fade in current image, Fade out others
             imagesRef.current.forEach((img, i) => {
                gsap.to(img, { opacity: i === index ? 1 : 0, duration: 0.5 });
             });
          },
          onEnterBack: () => {
             imagesRef.current.forEach((img, i) => {
                gsap.to(img, { opacity: i === index ? 1 : 0, duration: 0.5 });
             });
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={containerRef} className="relative bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Left Column: Scrolling Text */}
        <div className="w-full lg:w-1/2 px-6 py-20 lg:py-0">
          {/* Header Section */}
          <div className="min-h-[50vh] flex flex-col justify-center mb-20 pt-20">
             <span className="text-sm font-bold tracking-[0.3em] text-slate-500 uppercase mb-4 block">
                Why Choose Us
             </span>
             <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-dark leading-none mb-8">
               Our Mission <br/>
               <span className="text-brand-teal">& Promise</span>
             </h2>
             <p className="text-xl text-slate-600 max-w-md font-light">
                We are redefining the standard of care and trust in the domestic employment industry.
             </p>
          </div>

          {/* Steps Content */}
          <div className="relative pb-40">
            {steps.map((step, index) => (
              <div 
                key={index} 
                ref={(el) => { stepsRef.current[index] = el; }}
                className="min-h-[80vh] flex items-center"
              >
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-lg w-full max-w-lg">
                   <span className="text-6xl font-display font-bold text-brand-teal/20 mb-6 block">0{index + 1}</span>
                   <h3 className="text-3xl font-bold text-brand-dark mb-4">{step.title}</h3>
                   <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Image */}
        <div ref={rightColRef} className="hidden lg:block w-1/2 relative h-screen">
           <div className="absolute inset-0 flex items-center justify-center p-12">
             <div className="relative w-full h-full max-h-[80vh] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100">
                {steps.map((step, index) => (
                   <img 
                     key={index}
                     ref={(el) => { imagesRef.current[index] = el; }}
                     src={step.image} 
                     alt={step.title}
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
                   />
                ))}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent pointer-events-none" />
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;