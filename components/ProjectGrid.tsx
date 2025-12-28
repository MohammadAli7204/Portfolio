
import React, { useState } from 'react';
// Added Globe and Sparkles to the imports from lucide-react
import { X, ExternalLink, ArrowRight, Layers, Smartphone, Laptop, Globe, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  typeIcon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Nexus Enterprise',
    category: 'High-End Dashboard',
    description: 'A revolutionary data-driven dashboard for enterprise resource planning. Built with a focus on high-density information architecture and seamless React performance.',
    tags: ['React', 'D3.js', 'Enterprise UI'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5462f7b?auto=format&fit=crop&q=80&w=1200',
    typeIcon: <Laptop className="w-5 h-5" />
  },
  {
    id: '2',
    title: 'Desert Luxury Estate',
    category: 'WordPress Development',
    description: 'A bespoke WordPress platform for elite real estate in Dubai. Optimized for ultra-fast loading speeds and cinematic property showcases using custom-coded themes.',
    tags: ['WordPress', 'PHP', 'Dubai Real Estate'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    typeIcon: <Globe className="w-5 h-5" />
  },
  {
    id: '3',
    title: 'Vibe Beats',
    category: 'Mobile UX Concept',
    description: 'A "Vibe Coded" music streaming application. Every interaction is synced with haptic feedback and rhythmic transitions to create a visceral user experience.',
    tags: ['UI/UX', 'Motion Design', 'Vibe Coding'],
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200',
    typeIcon: <Smartphone className="w-5 h-5" />
  },
  {
    id: '4',
    title: 'EcoSphere Global',
    category: 'SaaS Platform',
    description: 'A sustainability tracking platform designed to help global corporations monitor their carbon footprint through intuitive, high-performance web interfaces.',
    tags: ['Frontend', 'SaaS', 'Impact Design'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    typeIcon: <Layers className="w-5 h-5" />
  }
];

const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="px-6 pb-48 pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Large Vertical - Featured WP */}
          <div className="md:col-span-1 h-[650px]">
            <button 
              onClick={() => openModal(projects[1])}
              className="w-full h-full text-left group perspective-1000"
            >
              <div className="relative h-full rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100 group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-700 bg-slate-50">
                <img src={projects[1].image} alt={projects[1].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2 block">Custom WordPress</span>
                     <h3 className="text-3xl font-black text-white leading-tight">{projects[1].title}</h3>
                   </div>
                </div>
              </div>
            </button>
          </div>
          
          {/* Center Stack */}
          <div className="md:col-span-2 flex flex-col gap-8">
             <button 
               onClick={() => openModal(projects[0])}
               className="w-full group h-[350px]"
             >
               <div className="relative h-full rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100 bg-indigo-50 group-hover:scale-[1.02] transition-all duration-700">
                 <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur px-8 py-3 rounded-full font-black text-slate-900 shadow-xl tracking-tighter transform scale-90 group-hover:scale-100 transition-transform">
                      Explore Architecture
                    </div>
                 </div>
               </div>
             </button>
             
             <div className="grid grid-cols-2 gap-8 h-[270px]">
                <button onClick={() => openModal(projects[3])} className="group">
                  <div className="relative h-full rounded-[3rem] overflow-hidden shadow-xl border-8 border-white ring-1 ring-slate-100 bg-emerald-50 group-hover:scale-[1.05] transition-all duration-500">
                    <img src={projects[3].image} className="w-full h-full object-cover" alt={projects[3].title} />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </button>
                <div className="rounded-[3rem] bg-slate-900 p-8 flex flex-col justify-center items-center text-center shadow-xl border-8 border-white ring-1 ring-slate-100 group hover:bg-indigo-600 transition-colors duration-500">
                   <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6" />
                   </div>
                   <h4 className="text-white font-black text-xl leading-tight">Your Next Vision <br/> Here?</h4>
                   <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-indigo-400 group-hover:text-white transition-colors underline decoration-2 underline-offset-4">Get a Quote</button>
                </div>
             </div>
          </div>

          {/* Large Vertical - Mobile Experience */}
          <div className="md:col-span-1 h-[650px]">
            <button 
              onClick={() => openModal(projects[2])}
              className="w-full h-full text-left group perspective-1000"
            >
              <div className="relative h-full rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100 group-hover:scale-[1.03] group-hover:rotate-1 transition-all duration-700 bg-slate-50">
                <img src={projects[2].image} alt={projects[2].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2 block">Vibe Coded Experience</span>
                     <h3 className="text-3xl font-black text-white leading-tight">{projects[2].title}</h3>
                   </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* React Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-2xl animate-in fade-in duration-500"
            onClick={closeModal}
          />
          
          <div className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 fade-in duration-500">
            {/* Modal Image Area */}
            <div className="md:w-3/5 bg-slate-100 h-64 md:h-auto relative overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover animate-in zoom-in-110 duration-[1500ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
              <button 
                onClick={closeModal}
                className="absolute top-8 left-8 md:hidden bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl active:scale-95"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>
            </div>

            {/* Modal Content Area */}
            <div className="md:w-2/5 p-12 md:p-20 overflow-y-auto bg-white flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <div className="px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 flex items-center gap-2">
                  <span className="text-indigo-600">{selectedProject.typeIcon}</span>
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-widest">{selectedProject.category}</span>
                </div>
                <button 
                  onClick={closeModal}
                  className="hidden md:flex p-4 hover:bg-slate-50 rounded-full transition-colors active:scale-90"
                >
                  <X className="w-8 h-8 text-slate-900" />
                </button>
              </div>

              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                  {selectedProject.title}
                </h2>

                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                  {selectedProject.description}
                </p>

                <div className="mb-12">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Technologies Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-5 py-2.5 rounded-2xl bg-slate-50 text-slate-700 font-bold text-sm border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-100 space-y-4">
                <button className="w-full group relative bg-slate-900 text-white py-6 rounded-[2rem] font-black text-lg shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">Launch Project</span>
                  <ExternalLink className="relative z-10 w-5 h-5" />
                </button>
                <button className="w-full py-6 rounded-[2rem] border-2 border-slate-100 text-slate-900 font-black text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                  <span>Deep Dive Case Study</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGrid;
