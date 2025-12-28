
import React from 'react';

const Snapshots: React.FC = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=600', alt: 'Design Process' },
    { src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=600', alt: 'App Interface' },
    { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600', alt: 'Clean Code' }
  ];

  return (
    <section className="py-32 px-6 bg-white dot-bg">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">Process <span className="text-slate-400">Snapshots</span></h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">A glimpse into the daily grind of a vibe coder</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="group rounded-[3rem] overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-700 bg-gray-50 border-8 border-white">
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="group rounded-[3rem] overflow-hidden shadow-2xl translate-y-12 hover:-translate-y-4 transition-all duration-700 bg-gray-50 border-8 border-white">
          <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="group rounded-[3rem] overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-700 bg-gray-50 border-8 border-white">
          <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-700" />
        </div>
      </div>
    </section>
  );
};

export default Snapshots;
