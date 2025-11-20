import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className = "", delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = children.split(" ");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const spans = containerRef.current?.querySelectorAll('span');
      if (spans) {
        gsap.from(spans, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.05,
          delay: delay
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={containerRef}
      className={`${className} flex flex-wrap overflow-hidden`}
    >
      {words.map((word, index) => (
        <span key={index} className="mr-[0.25em] inline-block will-change-transform">
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextReveal;