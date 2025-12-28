
import React from 'react';
import { Linkedin, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'contact' | 'portfolio') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About Me', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ] as const;

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <div className="w-full max-w-7xl flex items-center justify-between glass py-4 px-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 group"
        >
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            Zayan <span className="text-indigo-600 transition-colors">Ali</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center bg-slate-100/50 backdrop-blur-sm rounded-2xl px-1.5 py-1.5 border border-white/20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-6 py-2 text-sm font-bold transition-all rounded-xl ${
                currentPage === item.id 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-xl hover:bg-slate-800 transition-all font-bold text-sm"
          >
            <Linkedin className="w-4 h-4 fill-white" />
            <span><a href="https://www.linkedin.com/in/saiyed-mohammad-ali-undefined-349ab43a0">Hire Me</a></span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden bg-slate-900 text-white p-3 rounded-2xl shadow-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 p-10 animate-in fade-in zoom-in-95 duration-300">
          <button className="absolute top-10 right-10 p-3 bg-slate-100 rounded-full" onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8 text-slate-900" />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setIsOpen(false); }}
              className={`text-5xl font-black tracking-tighter transition-all ${
                currentPage === item.id ? 'text-indigo-600' : 'text-slate-300 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate('contact'); setIsOpen(false); }}
            className="mt-8 flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl"
          >
            <Linkedin className="w-6 h-6" />
            <span>Connect</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
