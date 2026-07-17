import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, Trophy, MapPin, Sparkles } from 'lucide-react';
import { EDUCATION } from '../data';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#050816]" aria-label="Education section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#38BDF8]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="space-y-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
              <GraduationCap size={12} className="text-sky-400" />
              <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                05 • Academia
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white">
              Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">& Qualifications</span>.
            </h2>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="interactive-card bg-white/[0.03] border border-white/10 rounded-2.5xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#38BDF8]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-slate-500">
                    <div className="flex items-center gap-1 bg-white/5 border border-white/5 px-3 py-1 rounded-full text-slate-400">
                      <Calendar size={11} className="text-[#38BDF8]" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="text-[#8B5CF6] font-semibold uppercase">{edu.schoolTag || 'ACADEMICS'}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-sans font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {edu.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-xs md:text-sm text-slate-400 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-3 space-y-2">
                      <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wide">
                        <Award size={11} />
                        <span>Academic Distinctions</span>
                      </div>
                      <ul className="list-disc pl-4 text-xs text-slate-400 space-y-1">
                        {edu.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="leading-relaxed">
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-[1px] rounded-2.5xl overflow-hidden bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 shadow-2xl group"
            >
              <div className="bg-[#0b0e22]/95 backdrop-blur-xl p-6 md:p-8 rounded-2.5xl space-y-5 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/15 transition-all" />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                      <Trophy size={14} className="text-amber-400 animate-bounce" />
                      <span>Research Achievement</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-sans font-bold text-white tracking-tight">
                      Research Selected for International Conference
                    </h3>
                  </div>
                  <div className="p-2.5 bg-sky-500/10 border border-sky-500/20 rounded-2xl text-sky-400 hidden sm:block">
                    <Sparkles size={18} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-3 border-t border-white/5 text-xs md:text-sm">
                  <div className="sm:col-span-12 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                      Research Publication & Presentation
                    </span>
                    <p className="text-slate-200 font-medium font-sans leading-relaxed">
                      IoT-Based Elephant Detection and Driver Alert System
                    </p>
                  </div>

                  <div className="sm:col-span-8 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                      Conference
                    </span>
                    <p className="text-slate-300 font-sans leading-relaxed">
                      International Conference on Multidisciplinary Approaches (ICMA)
                    </p>
                  </div>

                  <div className="sm:col-span-4 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                      Host Institution & Year
                    </span>
                    <div className="flex items-center gap-1 text-slate-300">
                      <MapPin size={12} className="text-purple-400 flex-shrink-0" />
                      <span className="font-sans leading-relaxed">USJ, LK | 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
