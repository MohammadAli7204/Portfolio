
import React from 'react';
import { Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Product Design', 'UI/UX Design', 'Web Design'].map((tag) => (
            <span key={tag} className="px-5 py-2 rounded-full border border-gray-100 bg-white text-gray-500 text-xs font-medium uppercase tracking-wider shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
          Hello! <span className="text-indigo-600">Zayan Ali</span>, UI-UX Product Designer, Based in Dubai
        </h1>

        <p className="text-lg md:text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          8+ Years of Experience <span className="text-slate-900">Designing Stunning Products</span> and Transforming Ideas into Reality
        </p>

        {/* CTA */}
        <button className="inline-flex items-center gap-2 bg-white border border-gray-200 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-slate-800">
          <Linkedin className="w-5 h-5 text-indigo-600 fill-indigo-600" />
          <span>Contact Me</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
