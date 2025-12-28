
import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="pt-48 pb-24 px-6 grid-bg min-h-screen">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-block px-6 py-2 rounded-full border border-gray-100 bg-white text-gray-500 text-xs font-bold uppercase tracking-widest shadow-sm mb-10">
          Crafting Experiences That Matter
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter">Get in <span className="text-slate-400">Touch</span></h1>
        
        <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
          Whether you're looking to discuss a new project, seek advice, or collaborate, I'm always excited to connect and explore new possibilities.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <button className="inline-flex items-center gap-2 bg-white border border-gray-200 px-10 py-5 rounded-full shadow-lg font-bold">
            <Linkedin className="w-5 h-5 text-[#0077B5] fill-[#0077B5]" />
            <span><a href="https://www.linkedin.com/in/saiyed-mohammad-ali-undefined-349ab43a0" target="_blank">Contact Me</a></span>
          </button>
        </div>

        <div className="relative py-12">
           <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 -z-10"></div>
           <span className="bg-white px-6 py-2 rounded-full border border-gray-100 text-slate-400 font-black uppercase text-xs tracking-widest">Or</span>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white border border-gray-100 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-indigo-100/20 text-left max-w-2xl mx-auto">
           <form className="space-y-8">
              <div>
                <label className="block text-slate-900 font-bold mb-3">Full Name</label>
                <input type="text" placeholder="Zayan Ali" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3">Email</label>
                <input type="email" placeholder="zayan.ali@email.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3">Subject</label>
                <input type="text" placeholder="Design discussion" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3">Description</label>
                <textarea rows={4} placeholder="Enter a description..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium resize-none"></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-indigo-900/10">
                Send Message
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
