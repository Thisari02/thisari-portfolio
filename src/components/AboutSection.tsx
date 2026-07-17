import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, BookOpen, Briefcase, Sparkles, Compass, MapPin, Award, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const profilePic = 'https://res.cloudinary.com/fv9dk5wa/image/upload/v1784189926/WhatsApp_Image_2026-03-12_at_1.01.05_PM_kgutdk.jpg';

type TabType = 'journey' | 'teaching' | 'business' | 'goals';

type AboutTab = {
  id: TabType;
  label: string;
  icon: LucideIcon;
  color: string;
  title: string;
  content: string;
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabType>('journey');

  const tabs: AboutTab[] = [
    {
      id: 'journey',
      label: 'Software Journey',
      icon: Code,
      color: 'from-sky-400 to-blue-500',
      title: 'Crafting Logical Realities',
      content:
        'My love for computer science sparked from a fascination with building systems from pure logic. As an IT Graduate with First Class Honors from the University of West London, UK, I translate complex structures into pixel-perfect, interactive web applications. From custom math compilers to early-warning IoT platforms, I enjoy designing architectures that are robust, highly accessible, and visually captivating.',
    },
    {
      id: 'teaching',
      label: 'The Educator Lens',
      icon: BookOpen,
      color: 'from-purple-400 to-pink-500',
      title: 'Simplifying Complexity',
      content:
        'Teaching English Medium Mathematics to secondary school students in Colombo has strengthened my ability to simplify complex concepts into clear, structured, and engaging learning experiences. By integrating technology, interactive teaching methods, and real-world examples, I help students develop logical thinking and problem-solving skills while making challenging mathematical concepts easier to understand.This experience has sharpened my communication, patience, and analytical thinking. It has also influenced my approach to software engineering designing intuitive user experiences, breaking down complex systems into manageable solutions, and creating technology that is both functional and accessible to its users.',
    },
    {
      id: 'business',
      label: 'Business Context',
      icon: Briefcase,
      color: 'from-amber-400 to-orange-500',
      title: 'Product-Driven Engineering',
      content:
        'Working as a Project Coordinator has given me valuable exposure to client interactions, project planning, and real-world business operations. Collaborating with clients and cross-functional teams has strengthened my understanding of business requirements, operational workflows, and user expectations. This experience enables me to approach software development with a product mindset building practical, user-focused solutions that solve real business problems while delivering measurable value.',
    },
    {
      id: 'goals',
      label: 'Career Vision',
      icon: Compass,
      color: 'from-emerald-400 to-teal-500',
      title: 'Striving for Mastery',
      content:
        'I am an aspiring Software Engineer driven by a passion for continuous learning, innovation, and building impactful technology. My goal is to master modern full-stack development while actively exploring Artificial Intelligence and its real-world applications to create smarter, more efficient solutions. With strong attention to detail, analytical thinking, and experience collaborating across technical and business environments, I strive to develop scalable, user-centered applications that solve meaningful real-world challenges.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-label="About section">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
            <Sparkles size={12} className="text-sky-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
              01 • About Me
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">
            Driven by Passion, <br className="hidden md:block" />
            Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400">Design & Code</span>.
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm md:text-base">
            I build elegant solutions by fusing deep technological logic with real-world business context and empathetic education principles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm group">
              <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-sky-500 via-purple-600 to-cyan-400 opacity-20 group-hover:opacity-40 blur-md transition duration-1000" />

              <div className="relative bg-white/[0.03] border border-white/10 rounded-[2.2rem] p-6 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
                      Active Node: Verified
                    </span>
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 px-2 py-0.5 border border-white/5 rounded bg-white/5">
                    REF: TS-2026
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#38BDF8] via-purple-500 to-cyan-400">
                    <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center overflow-hidden relative">
                      <img
                        src={profilePic}
                        alt="Thisari Siriwardana"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0B1120] flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-sans font-bold text-white tracking-tight">
                    Thisari Siriwardana
                  </h3>
                  <p className="text-xs font-mono text-[#38BDF8] mt-1">
                    Software Engineer • Full Stack Developer
                  </p>
                </div>

                <div className="mt-6 space-y-3.5 border-t border-white/5 pt-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8] font-mono">LOCATION</span>
                    <div className="flex items-center gap-1 text-slate-300">
                      <MapPin size={12} className="text-[#38BDF8]" />
                      <span>Colombo, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8] font-mono">ACADEMICS</span>
                    <div className="flex items-center gap-1 text-slate-300">
                      <Award size={12} className="text-purple-400" />
                      <span>BSc (Hons) IT • UWL, UK</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8] font-mono">STATUS</span>
                    <span className="text-emerald-400 bg-green-500/10 px-2 py-0.5 rounded-full text-[10px] font-mono border border-green-500/20">
                      Open to Offers
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8] font-mono">EXPERTISE</span>
                    <span className="text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full text-[10px] font-mono border border-purple-500/20">
                      React & Node.js
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  aria-label="Go to contact section"
                  className="mt-6 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-mono text-slate-300 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-1"
                >
                  <span>Request Credentials</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-2.5 p-1.5 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-md">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    aria-label={`View ${tab.label}`}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white/5 text-white shadow-md border border-white/10'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-[#38BDF8]' : 'text-[#94A3B8]'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm min-h-[260px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {tabs.map((tab) => {
                  if (tab.id !== activeTab) return null;
                  const Icon = tab.icon;
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-tr ${tab.color} bg-opacity-20`}>
                          <Icon size={18} className="text-white" />
                        </div>
                        <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                          {tab.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base font-sans">
                        {tab.content}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <div className="mt-8 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  <span className="text-[10px] font-mono text-slate-500 ml-2">bio_query.ts</span>
                </div>
                <pre className="text-xs font-mono text-[#38BDF8]/90 overflow-x-auto bg-white/[0.01] p-4 rounded-xl border border-white/5">
                  <code>
{`const engineer = {
  name: "Thisari Siriwardana",
  coreFocus: ["Full-Stack Web Architectures", "Modern Design Systems"],
  attributes: ["Detail Oriented", "Business Grounded", "Continuous Learner"],
  isReadyForImpact: true
};`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
