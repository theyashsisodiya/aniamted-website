import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    // Set initial position off-screen
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    // quickTo is optimized for frequent updates like mouse movement
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
    
    const xToFollower = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3" });
    const yToFollower = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    // Hover detection using event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, textarea, input, .hover-trigger')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, textarea, input, .hover-trigger')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  // Animate Hover State
  useEffect(() => {
    if (!followerRef.current) return;
    
    gsap.to(followerRef.current, {
      scale: isHovering ? 2 : 1,
      opacity: isHovering ? 1 : 0.5,
      backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'transparent',
      borderWidth: isHovering ? 0 : 1,
      duration: 0.3
    });
  }, [isHovering]);

  return (
    <>
      {/* Primary Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference will-change-transform"
      />
      
      {/* Trailing Circle */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/80 rounded-full pointer-events-none z-[99] mix-blend-difference will-change-transform"
      />
    </>
  );
};

export default Cursor;