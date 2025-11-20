import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = "", id = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background Layer */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none -top-[10%]"
        style={{ height: '120%' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(241,245,249,0.5)_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_50%,_rgba(20,184,166,0.1),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;