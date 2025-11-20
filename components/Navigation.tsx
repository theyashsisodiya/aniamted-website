import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const items: NavItem[] = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Vision', href: '#vision' },
  { label: 'Oracle', href: '#oracle' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.8)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBackground, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 transition-colors duration-300 border-b border-white/5"
      >
        <div className="text-2xl font-display font-bold tracking-tighter text-white z-50">
          AETHER<span className="text-neon-purple">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-8 md:hidden"
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-display font-bold text-white hover:text-neon-purple transition-colors"
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default Navigation;
