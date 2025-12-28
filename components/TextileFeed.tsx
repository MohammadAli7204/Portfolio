
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const textileItems = [
  { id: 1, title: 'Linear Precision', category: 'Executive Weave', image: 'https://images.unsplash.com/photo-1544006659-f0b21884cb1d?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Branded Identity', category: 'Pattern Design', image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Sustainable Mesh', category: 'Eco Fibers', image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Luxury Silk', category: 'Premium Finish', image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Modern Tweed', category: 'Workplace Softs', image: 'https://images.unsplash.com/photo-158273109-6043744c5524?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Digital Gradient', category: 'Print Series', image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80&w=600' },
];

const TextileFeed: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              Industrial Niche
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Corporate <br/><span className="text-slate-400">Textile Feed.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Standardizing tactile materials for global digital ecosystems. A structured look into specialized pattern engineering.
            </p>
          </div>
          <button className="group flex items-center gap-3 px-10 py-5 rounded-[2rem] bg-slate-900 text-white font-black text-sm shadow-2xl shadow-indigo-900/10 hover:bg-slate-800 transition-all">
            <span>Browse Library</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Properly Aligned Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textileItems.map((item) => (
            <div key={item.id} className="group flex flex-col h-full">
              <div className="flex-1 rounded-[3.5rem] overflow-hidden bg-white border border-slate-100 shadow-xl group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 flex flex-col">
                {/* Fixed Aspect Ratio Image for Proper Alignment */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Floating ID for tech feel */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-slate-400 border border-white/20">
                    0{item.id}
                  </div>
                </div>
                
                {/* Content Area with Consistent Padding */}
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-4 h-[1px] bg-indigo-200"></span>
                      <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{item.category}</p>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  
                  {/* Hidden metadata revealed on hover for a interactive feel */}
                  <div className="mt-6 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Details</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics/Alignment bar */}
        <div className="mt-20 pt-10 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          <div className="flex flex-col">
            <span className="text-3xl font-black text-slate-900">500+</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Patterns Indexed</span>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
          <div className="flex flex-col">
            <span className="text-3xl font-black text-slate-900">12</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Industries Served</span>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
          <div className="flex flex-col">
            <span className="text-3xl font-black text-slate-900">4K</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Render Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextileFeed;
