import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
           <img 
             src="logo.png" 
             alt="MingHwee" 
             className="h-10 w-auto object-contain mx-auto md:mx-0 mb-4"
           />
           <p className="text-slate-500 text-sm">© 2025 MingHwee Employment Agency.</p>
           <p className="text-slate-400 text-xs mt-1">Connecting Talent with Opportunity.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {['Facebook', 'LinkedIn', 'Instagram', 'Contact Support'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="text-slate-500 hover:text-brand-teal transition-colors uppercase text-xs font-bold tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;