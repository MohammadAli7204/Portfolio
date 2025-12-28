
import React from 'react';
import { Landmark, Briefcase, Rocket, Globe2, Cpu } from 'lucide-react';

const LogoWall: React.FC = () => {
  const partners = [
    { name: 'Emirates Tech', icon: <Landmark className="w-6 h-6" /> },
    { name: 'KASO YC', icon: <Rocket className="w-6 h-6" /> },
    { name: 'Dubai Global', icon: <Globe2 className="w-6 h-6" /> },
    { name: 'Aether Finance', icon: <Briefcase className="w-6 h-6" /> },
    { name: 'Nexus Core', icon: <Cpu className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 px-6 border-y border-slate-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-16">Selected Collaborations & Partners</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-3 group">
              <div className="text-slate-900 group-hover:text-indigo-600 transition-colors">
                {partner.icon}
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
