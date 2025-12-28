
import React from 'react';
import { Globe, Layout, Code2, Database, Layers, Monitor, Cpu } from 'lucide-react';

const Toolbox: React.FC = () => {
  const tools = [
    { name: 'React', icon: <Code2 className="w-8 h-8" /> },
    { name: 'TypeScript', icon: <Cpu className="w-8 h-8" /> },
    { name: 'Tailwind', icon: <Layers className="w-8 h-8" /> },
    { name: 'WordPress', icon: <Globe className="w-8 h-8" /> },
    { name: 'Elementor', icon: <Layout className="w-8 h-8" /> },
    { name: 'Shopify', icon: <Database className="w-8 h-8" /> },
    { name: 'Figma', icon: <Monitor className="w-8 h-8" /> },
  ];

  const adobeTools = [
     { name: 'Ae', color: 'bg-[#00005b] text-white' },
     { name: 'Ai', color: 'bg-[#330000] text-white' },
     { name: 'Ps', color: 'bg-[#001e36] text-white' },
     { name: 'Xd', color: 'bg-[#470137] text-white' },
  ];

  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-5xl font-black text-slate-900 mb-4">The <span className="text-indigo-600">Frontend</span> Stack</h2>
      <p className="text-slate-500 font-medium mb-20">Tools I use to build pixel-perfect interfaces and robust WordPress ecosystems.</p>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {tools.map((tool) => (
            <div key={tool.name} className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
               <div className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                {tool.icon}
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {adobeTools.map((tool) => (
            <div key={tool.name} className={`w-20 h-20 md:w-28 md:h-28 ${tool.color} rounded-3xl flex items-center justify-center shadow-xl font-bold text-2xl border-4 border-white`}>
               {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
