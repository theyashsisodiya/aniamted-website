import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface InfiniteLoopProps {
  children: React.ReactNode;
  duration?: number; 
  direction?: "left" | "right";
  className?: string;
}

const InfiniteLoop: React.FC<InfiniteLoopProps> = ({ 
  children, 
  duration = 30, 
  direction = "left",
  className = ""
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // We assume the content is duplicated. 
      // If moving left: animate from 0% to -50%.
      // If moving right: animate from -50% to 0%.
      const from = direction === "left" ? 0 : -50;
      const to = direction === "left" ? -50 : 0;

      gsap.fromTo(contentRef.current, 
        { xPercent: from }, 
        {
          xPercent: to,
          duration: duration,
          ease: "none",
          repeat: -1
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [duration, direction]);

  return (
    <div ref={wrapperRef} className={`relative flex w-full overflow-hidden ${className}`}>
      <div ref={contentRef} className="flex flex-shrink-0 items-center w-fit will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteLoop;