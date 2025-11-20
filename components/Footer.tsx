import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-void py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
           <h3 className="text-2xl font-display font-bold tracking-tighter">AETHER.</h3>
           <p className="text-gray-600 text-sm mt-2">© 2025 Digital Entities Inc.</p>
        </div>
        
        <div className="flex space-x-8">
          {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
            <a 
              key={social}
              href="#" 
              className="text-gray-500 hover:text-white transition-colors uppercase text-xs tracking-widest"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
