
import React from 'react';

const PassionSection: React.FC = () => {
  return (
    <section className="bg-slate-950 py-32 px-6 rounded-[3rem] mx-6 mb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 p-2 glass">
               <img src="https://picsum.photos/seed/zayan/400/400" alt="Zayan Ali" className="w-full h-full rounded-full object-cover" />
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur rotate-12 flex items-center justify-center rounded-lg border border-white/20">
               <span className="text-white text-xl">✨</span>
            </div>
            <div className="absolute bottom-4 -right-4 bg-indigo-600 p-2 rounded-xl shadow-lg border-2 border-slate-950">
               <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2 text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            A Passion for Design <br /> and Innovation
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
            With over 8 years of experience, I've had the opportunity to lead and scale multiple platforms, transforming innovative ideas into fully operational products. From working with a YC-backed startup to developing platforms that have generated $20 million in revenue and attracted over 10,000 users.
          </p>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl shadow-white/5">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PassionSection;
