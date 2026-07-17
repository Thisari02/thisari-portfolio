import { motion } from 'motion/react';
import { Calendar, MapPin, Sparkles, Cpu } from 'lucide-react';
import { EXPERIENCE } from '../data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050816]" aria-label="Experience section">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
            <Sparkles size={12} className="text-sky-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
              03 • Background
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400">Timeline</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base">
            An overview of my professional engineering work, team integrations, educational sessions, and commercial coordination roles.
          </p>
        </div>

        <div className="relative border-l border-white/5 md:border-none max-w-4xl mx-auto pl-6 md:pl-0">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#38BDF8]/50 via-[#8B5CF6]/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute -left-[31px] md:left-1/2 md:-translate-x-1/2 top-4 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#050816] border-2 border-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.8)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[45%]" />

                  <motion.div
                    className="w-full md:w-[45%]"
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="interactive-card relative bg-white/[0.03] border border-white/10 rounded-2.5xl p-6 md:p-8 backdrop-blur-md hover:border-white/20 transition-all duration-300 shadow-xl group">
                      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#38BDF8] to-[#8B5CF6] opacity-60 rounded-l-full" />

                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-slate-500">
                          <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-full text-slate-400">
                            <Calendar size={11} className="text-[#38BDF8]" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-400">
                            <MapPin size={11} className="text-[#8B5CF6]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <h3 className="text-lg md:text-xl font-sans font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-xs font-mono text-[#8B5CF6] font-medium">
                            {exp.company}
                          </p>
                        </div>

                        <ul className="space-y-2.5 text-xs text-[#94A3B8] pl-4 list-disc marker:text-[#38BDF8]">
                          {exp.description.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                          <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-1 mr-1">
                            <Cpu size={10} />
                            <span>STK:</span>
                          </div>
                          {exp.skillsUsed.map((skill) => (
                            <span
                              key={skill}
                              className="text-[9px] font-mono px-2 py-0.5 bg-white/5 text-[#38BDF8] border border-[#38BDF8]/10 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
