import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'contact' | 'portfolio') => void;
}

const socials = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/saiyed-mohammad-ali-undefined-349ab43a0/ target="_blank"'
  },
  {
    name: 'Github',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/MohammadAli7204 target="_blank"'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://www.instagram.com/1m.zayan?igsh=cThidmhmeWkwbnZo target="_blank"'
  }
];

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-32 pb-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1.5 mb-10 group"
            >
              <span className="text-3xl font-black tracking-tighter text-slate-900">
                Zayan <span className="text-indigo-600">Ali</span>
              </span>
            </button>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Designing with vibe, <br /> building with precision.
            </h2>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-indigo-600/20 hover:scale-105 transition-all"
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
                Navigation
              </h4>
              <ul className="space-y-6">
                {['Home', 'Portfolio', 'About Me', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        onNavigate(item.toLowerCase().replace(' ', '') as any)
                      }
                      className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
                Connect
              </h4>
              <ul className="space-y-6">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xl font-bold text-slate-900 hover:text-indigo-600 transition-all"
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 font-bold text-sm">
            © 2025 Zayan Ali. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-slate-900 font-black text-xs uppercase tracking-widest">
              Surat, Gujarat
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
