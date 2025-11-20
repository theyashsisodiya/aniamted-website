import React, { useRef, useLayoutEffect } from 'react';
import { Star, MapPin, Award } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import gsap from 'gsap';

const ProfileCard = ({ image, name, role, rating, location, skills }: any) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative will-change-transform">
    <div className="relative h-72 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
         <h3 className="text-2xl font-bold font-display mb-1">{name}</h3>
         <p className="text-sm opacity-90 font-medium text-brand-teal">{role}</p>
      </div>
    </div>
    <div className="p-6 bg-white relative z-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-1 text-amber-400 font-bold text-sm bg-amber-50 px-2 py-1 rounded-full">
          <Star fill="currentColor" size={14} />
          <span>{rating}</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-xs uppercase tracking-wide font-semibold">
          <MapPin size={12} />
          <span>{location}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
            {skill}
          </span>
        ))}
      </div>
      <button className="mt-6 w-full py-3 rounded-xl border border-brand-teal/30 text-brand-teal font-bold text-sm hover:bg-brand-teal hover:text-white transition-all duration-300">
        View Profile
      </button>
    </div>
  </div>
);

const CandidateShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Parallax columns effect
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5 
         }
      });

      tl.to(col1Ref.current, { y: -80 }, 0)
        .to(col2Ref.current, { y: 40 }, 0)
        .to(col3Ref.current, { y: -40 }, 0);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <ParallaxSection id="candidates" className="py-32 bg-slate-50">
       <div className="max-w-7xl mx-auto px-6 mb-20 relative z-20 text-center">
         <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-3 block">Our Talent Pool</span>
         <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">
           Verified Candidates
         </h2>
         <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Browse thousands of pre-screened profiles. We check experience, language skills, and background history so you don't have to.
         </p>
       </div>
      
      <div ref={containerRef} className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* Column 1 */}
        <div ref={col1Ref} className="flex flex-col gap-8 md:pt-20">
           <ProfileCard 
             image="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop"
             name="Maria Santos"
             role="Elderly Care Specialist"
             rating="4.9"
             location="Philippines"
             skills={['Nursing Aid', 'Cooking', 'English']}
           />
            <ProfileCard 
             image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
             name="Joy Bautista"
             role="Childcare Expert"
             rating="5.0"
             location="Singapore"
             skills={['Infant Care', 'Tutoring', 'First Aid']}
           />
        </div>

        {/* Column 2 */}
        <div ref={col2Ref} className="flex flex-col gap-8 md:-mt-10">
          <div className="bg-brand-dark text-white p-10 rounded-2xl flex flex-col justify-center items-center text-center h-[320px] shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <Award size={48} className="text-brand-teal mb-6 relative z-10" />
             <h3 className="text-2xl font-bold mb-3 relative z-10">Top Rated Talent</h3>
             <p className="text-slate-400 text-sm relative z-10">Our candidates maintain an average 4.8/5 rating from employer reviews based on reliability and skills.</p>
          </div>
           <ProfileCard 
             image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
             name="Elena Cruz"
             role="General Housekeeping"
             rating="4.8"
             location="Philippines"
             skills={['Cleaning', 'Cooking', 'Pet Care']}
           />
        </div>

        {/* Column 3 */}
        <div ref={col3Ref} className="flex flex-col gap-8 md:pt-10">
           <ProfileCard 
             image="https://images.unsplash.com/photo-1595152452543-e5cca283f58c?q=80&w=800&auto=format&fit=crop"
             name="Sarah Lim"
             role="Newborn Specialist"
             rating="4.9"
             location="Singapore"
             skills={['Night Care', 'Meal Prep', 'Laundry']}
           />
           <div className="p-8 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center h-[200px] hover:border-brand-teal hover:bg-brand-teal/5 transition-all cursor-pointer group">
              <p className="text-slate-400 font-display font-bold text-xl group-hover:text-brand-teal transition-colors">View 500+ More</p>
              <span className="text-xs text-slate-400 mt-2 uppercase tracking-wider">Updated Daily</span>
           </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default CandidateShowcase;