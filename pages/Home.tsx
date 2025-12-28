
import React, { useEffect } from 'react';
import { ArrowRight, Code, Layout, Globe, Sparkles } from 'lucide-react';
import ProjectGrid from '../components/ProjectGrid';
import LogoWall from '../components/LogoWall';
import TextileFeed from '../components/TextileFeed';
import Snapshots from '../components/Snapshots';
import PortfolioGallery from '../components/PortfolioGallery';

interface HomeProps {
  onNavigate: (page: 'home' | 'about' | 'contact' | 'portfolio') => void;
  scrollTarget?: string;
}

const Home: React.FC<HomeProps> = ({ onNavigate, scrollTarget }) => {
  useEffect(() => {
    if (scrollTarget === 'portfolio') {
      const element = document.getElementById('portfolio');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [scrollTarget]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 grid-bg min-h-screen flex items-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="flex flex-col items-center text-center">
            {/* Animated Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 bg-white/80 backdrop-blur shadow-sm mb-12 animate-in slide-in-from-top duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Available for Luxury Projects</span>
            </div>

            <h1 className="text-6xl md:text-[10rem] font-black text-slate-900 leading-[0.85] mb-12 tracking-tighter animate-in fade-in slide-in-from-bottom duration-1000">
              Designer & <br />
              <span className="text-indigo-600">Vibe Coder.</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in duration-1000 delay-300">
              {[
                { icon: <Layout className="w-4 h-4" />, label: "UI/UX Designer" },
                { icon: <Globe className="w-4 h-4" />, label: "WordPress Expert" },
                { icon: <Code className="w-4 h-4" />, label: "Vibe Coder / Frontend" }
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-indigo-600">{role.icon}</span>
                  <span className="font-bold text-slate-700 text-sm">{role.label}</span>
                </div>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-500">
              I blend pixel-perfect design with high-performance code. Based in Surat, crafting digital experiences for the world's most innovative brands.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-in fade-in duration-1000 delay-700">
              <button 
                onClick={() => onNavigate('contact')}
                className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Start a Project</span>
                <Sparkles className="relative z-10 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-900 px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all"
              >
                Explore Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaic Grid */}
      <ProjectGrid />

      {/* Corporate Textile Feed */}
      <TextileFeed />

      {/* Portfolio Highlight */}
      <div id="portfolio" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest block mb-4">Featured Excellence</span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-tight">
                Crafting <span className="text-slate-400">Products</span> with Soul.
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-medium max-w-sm mb-4">
              A selection of digital platforms that prioritize user vibe and technical precision.
            </p>
          </div>
        </div>
        <PortfolioGallery />
      </div>

      {/* Social Proof */}
      <LogoWall />

      {/* Lifestyle Snapshots */}
      <Snapshots />

      {/* CTA Section */}
      <section className="py-48 px-6 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
            Let's build <br /> the <span className="text-indigo-500">future</span> together.
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-4 bg-white text-slate-900 px-14 py-6 rounded-[2.5rem] font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-indigo-600/20"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
