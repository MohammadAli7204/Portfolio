
import React from 'react';

const projects = [
  {
    title: 'TexCorp - B2B Digital',
    description: 'A specialized platform for corporate textile procurement, featuring real-time pattern visualization and fabric inventory management for luxury brands.',
    tags: ['WordPress', 'React', 'B2B'],
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800',
    color: 'bg-slate-100'
  },
  {
    title: 'KASO - Supply Chain',
    description: 'Kaso YC (formerly ElKaso) is an online B2B platform that facilitates order processing and communication between restaurants and suppliers.',
    tags: ['SaaS', 'Foodtech', 'YC Combinator'],
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800',
    color: 'bg-orange-50'
  },
  {
    title: 'KASO - Inventory Hub',
    description: 'Developed high-performance inventory management interfaces for large-scale hospitality groups, streamlining kitchen operations globally.',
    tags: ['UI/UX', 'Dashboard', 'Admin'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'bg-indigo-50'
  },
  {
    title: 'Vibe Code Studio',
    description: 'A personal creative hub showcasing the intersection of high-end design systems and modern frontend architecture using React and Tailwind.',
    tags: ['Frontend', 'Vibe Coder', 'Portfolio'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    color: 'bg-emerald-50'
  }
];

const PortfolioGallery: React.FC = () => {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group">
            <div className="rounded-[3rem] bg-white p-6 border border-gray-100 transition-all duration-700 group-hover:shadow-2xl group-hover:border-transparent group-hover:-translate-y-2">
              <div className={`rounded-[2.5rem] overflow-hidden mb-10 transition-transform duration-700 flex items-center justify-center p-8 ${project.color}`}>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700 border-4 border-white">
                  <img src={project.image} alt={project.title} className="w-full aspect-[3/4] object-cover" />
                </div>
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-black text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-slate-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                      {tag === 'YC Combinator' && <span className="w-2 h-2 rounded-full bg-orange-500"></span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <button className="px-12 py-5 rounded-2xl border-2 border-slate-900 text-slate-900 font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-900/5">
          Load More Projects
        </button>
      </div>
    </section>
  );
};

export default PortfolioGallery;
