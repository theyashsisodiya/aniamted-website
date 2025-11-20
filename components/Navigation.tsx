import React, { useState, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const items = [
  { label: 'For Employers', href: '#employers' },
  { label: 'For Candidates', href: '#candidates' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Find Jobs', href: '#join' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.progress > 0.01) {
             gsap.to(navRef.current, {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                borderBottomColor: 'rgba(0,0,0,0.05)',
                duration: 0.3
             });
          } else {
             gsap.to(navRef.current, {
                backgroundColor: 'rgba(248, 250, 252, 0)',
                backdropFilter: 'blur(0px)',
                borderBottomColor: 'rgba(0,0,0,0)',
                duration: 0.3
             });
          }
        }
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Mobile Menu Animation
  useLayoutEffect(() => {
    if (!mobileMenuRef.current) return;
    
    if (isOpen) {
        gsap.to(mobileMenuRef.current, { x: '0%', duration: 0.4, ease: 'power3.out', opacity: 1 });
    } else {
        gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.4, ease: 'power3.in', opacity: 0 });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-5 border-b border-transparent transition-all duration-300"
      >
        <div className="flex items-center z-50">
           {/* Replaced Text with Logo Image */}
           <img 
             src="logo.png" 
             alt="MingHwee" 
             className="h-10 md:h-14 w-auto object-contain"
             onError={(e) => {
               // Fallback if image fails to load, though user should provide the file
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-display font-bold tracking-tight text-brand-dark">MingHwee<span class="text-brand-teal">.</span></span>';
             }}
           />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-teal transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800 z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 md:hidden opacity-0 translate-x-full pointer-events-auto"
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-display font-bold text-slate-800 hover:text-brand-teal transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navigation;