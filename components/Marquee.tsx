import React from 'react';
import InfiniteLoop from './InfiniteLoop';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full py-8 bg-white border-y border-slate-100 overflow-hidden flex items-center">
      <InfiniteLoop duration={40} direction="left">
        <div className="flex items-center gap-16 px-8">
          {['Trust', 'Care', 'Security', 'Efficiency', 'Support', 'Fairness', 'Verification', 'Community'].map((text, i) => (
            <React.Fragment key={i}>
              <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-100 uppercase tracking-tight whitespace-nowrap">
                {text}
              </span>
              <div className="w-3 h-3 rounded-full bg-brand-teal/30" />
            </React.Fragment>
          ))}
        </div>
      </InfiniteLoop>
    </div>
  );
};

export default Marquee;