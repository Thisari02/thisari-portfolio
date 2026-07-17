import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../data';

export default function AchievementsTestimonials() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#050816]" aria-label="Achievements section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="interactive-card bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden text-center group"
            >
              <div className="space-y-2">
                <span className="block text-4xl md:text-5xl font-sans font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#8B5CF6] to-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  {ach.metric}
                </span>
                <span className="block text-sm font-sans font-bold text-white tracking-tight">
                  {ach.label}
                </span>
                <span className="block text-[11px] text-slate-500 font-mono leading-relaxed max-w-xs mx-auto">
                  {ach.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
