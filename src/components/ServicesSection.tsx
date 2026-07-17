import { motion } from 'motion/react';
import { Atom, Layers, Sparkle, Check, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '../data';

const ICON_MAP: Record<string, LucideIcon> = {
  Atom,
  Layers,
  Sparkles: Sparkle
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050816]" aria-label="Services section">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <Sparkle size={12} className="text-cyan-400" />
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              07 • Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">
            Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400">Services</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base">
            Bespoke engineering solutions tailored for agencies, businesses, startups, and recruiters demanding elite frontend precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = ICON_MAP[srv.iconName] || Atom;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="interactive-card bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group shadow-xl flex flex-col justify-between"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#38BDF8]/10 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150" />

                <div className="space-y-6">
                  <div className="inline-flex p-3.5 bg-white/5 border border-white/5 rounded-2xl text-[#38BDF8] group-hover:text-[#8B5CF6] group-hover:border-white/10 transition-all duration-300">
                    <Icon size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-5 border-t border-white/5">
                    {srv.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check size={14} className="text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="#contact"
                    aria-label="Go to contact section"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-slate-400 group-hover:text-[#38BDF8] transition-all"
                  >
                    <span>Discuss Requirement</span>
                    <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
