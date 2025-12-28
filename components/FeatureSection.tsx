
import React from 'react';
import { Linkedin } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Turning Data into <br />
            <span className="text-slate-400">Design</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            My approach to product design revolves around data-driven insights, ensuring every decision is backed by real user needs and behavior.
          </p>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-slate-800">
            <Linkedin className="w-5 h-5 text-indigo-600 fill-indigo-600" />
            <span>Contact Me</span>
          </button>
        </div>
        
        <div className="flex-1 relative">
           <div className="bg-indigo-50 absolute -inset-10 rounded-full blur-3xl opacity-30 -z-10"></div>
           <div className="rounded-[3rem] border-8 border-slate-900 overflow-hidden shadow-2xl w-full max-w-sm mx-auto transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
              <img src="https://picsum.photos/seed/analytics/400/800" alt="Analytics App" className="w-full" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
