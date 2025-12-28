import React, { useEffect } from 'react';
import { Linkedin, CheckCircle2 } from 'lucide-react';
import Toolbox from '../components/Toolbox';
import profileImg from '../components/Images/Picsart_25-04-22_19-23-15-736-2048x2048.jpg';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = [
    {
      company: 'Freelance / Agency',
      role: 'Full Stack Frontend Developer',
      date: '2025 - Present',
      desc: 'Specializing in custom WordPress themes and high-performance React applications for luxury brands in Surat.'
    },
    {
      company: 'Creative Studio',
      role: 'UI/UX & WordPress Lead',
      date: '2025',
      desc: 'Led the design and development of over 10+ WordPress sites, ensuring pixel-perfect responsiveness and SEO optimization.'
    }
  ];

  const skills = {
    development: [
      'React.js',
      'Tailwind CSS',
      'Next.js',
      'WordPress CMS',
      'Elementor Pro',
      'PHP (Basics)',
      'Webflow'
    ],
    design: [
      'UI/UX Design',
      'Visual Identity',
      'Typography',
      'Prototyping',
      'Figma',
      'Responsive Design'
    ]
  };

  return (
    <div className="pt-48 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Profile Header */}
        <div className="text-center mb-24 grid-bg py-20 rounded-[4rem]">
          <div className="relative inline-block mb-10">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={profileImg}
                alt="Zayan Ali"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-12 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                V
              </div>
            </div>

            <div className="absolute bottom-10 -right-20 bg-slate-900 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
              <span className="text-xs font-bold whitespace-nowrap px-2">
                Vibe Coder
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['UI/UX Design', 'WordPress Development', 'Frontend Engineering'].map(tag => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-400 text-xs font-bold uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter">
            Zayan <span className="text-slate-400">Ali</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            I am a <span className="text-slate-900">Frontend Developer</span> who breathes life into designs.
            I specialize in WordPress and custom web apps that feel as good as they look.
          </p>

          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full shadow-lg font-bold">
            <Linkedin className="w-5 h-5" />
            <span><a href="https://www.linkedin.com/in/saiyed-mohammad-ali-undefined-349ab43a0/" target="_blank">Connect on LinkedIn</a></span>
          </button>
        </div>

        {/* Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-start">
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Vibe <span className="text-slate-400">Coding</span>
          </h2>
          <div className="space-y-8 text-slate-500 text-lg font-medium leading-relaxed">
            <p>
              As a "Vibe Coder," I focus on the rhythm and flow of the user experience.
              It's not just about clean code; it's about the feeling of a transition.
            </p>
            <p>
              Bridging high-level design with scalable frontend architecture using
              WordPress and React-based solutions.
            </p>
          </div>
        </div>

        {/* Work History */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
          <h2 className="text-5xl font-black text-slate-900">
            Project <br />
            <span className="text-slate-400">History</span>
          </h2>

          <div className="md:col-span-2 space-y-6">
            {history.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">{item.company}</h3>
                <p className="text-indigo-600 font-bold">{item.role}</p>
                <p className="text-slate-400 text-sm">{item.date}</p>
                <p className="mt-4 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
          <h2 className="text-5xl font-black text-slate-900">
            Skill <span className="text-slate-400">Set</span>
          </h2>

          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="font-black mb-4">Frontend Dev</h3>
              <div className="flex flex-wrap gap-3">
                {skills.development.map(skill => (
                  <span
                    key={skill}
                    className="px-5 py-2 rounded-xl border border-indigo-50 bg-white text-indigo-600 text-xs font-bold flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-black mb-4">UI/UX Design</h3>
              <div className="flex flex-wrap gap-3">
                {skills.design.map(skill => (
                  <span
                    key={skill}
                    className="px-5 py-2 rounded-xl border border-gray-100 bg-white text-slate-500 text-xs font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Toolbox />
      </div>
    </div>
  );
};

export default About;
