import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { 
  Sparkles, Atom, FileCode, Code, Wind, Monitor, Zap, 
  Server, Cpu, Workflow, Key, Database, HardDrive, 
  Flame, GitBranch, Github, Terminal, Laptop, PenTool, 
  BookOpen, Cloud, Globe, Coffee, Layers, ShieldAlert, CheckCircle,
  Lightbulb, Layout, RefreshCw
} from 'lucide-react';
import { SKILLS } from '../data';

const SKILL_ICONS: Record<string, LucideIcon> = {
  'React': Atom,
  'TypeScript': FileCode,
  'JavaScript': Code,
  'HTML5': Layers,
  'CSS3': Code,
  'Tailwind CSS': Wind,
  'Responsive Web Design': Monitor,
  'Framer Motion': Zap,
  'Node.js': Server,
  'Express.js': Cpu,
  'REST API Development': Workflow,
  'Authentication & Authorization': Key,
  'CRUD Operations': Database,
  'API Validation': ShieldAlert,
  'Role-Based Access Control (RBAC)': Key,
  'MongoDB': HardDrive,
  'Firebase / Firestore': Flame,
  'MySQL': Database,
  'Mongoose ODM': Layers,
  'Git': GitBranch,
  'GitHub': Github,
  'Postman': Terminal,
  'VS Code': Laptop,
  'Figma': PenTool,
  'Notion': BookOpen,
  'Vercel': Cloud,
  'Netlify': Globe,
  'Render': Server,
  'Vite': Zap,
  'Component-Based Architecture': Layers,
  'API Integration': Workflow,
  'System Architecture': Workflow,
  'Security-Aware Development': ShieldAlert,
  'Data-Driven Architecture': Database,
  'Testing & QA': CheckCircle,
  'Debugging & Troubleshooting': ShieldAlert,
  'Problem Solving': Lightbulb,
  'UI/UX Implementation': Layout,
  'Performance Optimization': RefreshCw,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Stack', id: 'all' },
    { label: 'Frontend', id: 'Frontend Development' },
    { label: 'Backend', id: 'Backend Development' },
    { label: 'Database', id: 'Database' },
    { label: 'Tools & DevOps', id: 'Development Tools' },
    { label: 'Software Engineering', id: 'Software Engineering' },
  ];

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816]" aria-label="Skills section">
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <Sparkles size={12} className="text-purple-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
              04 • Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">
            Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400">Capabilities</span>.
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm md:text-base">
            Organized by framework layers and system disciplines. Filter each category to inspect engineering proficiencies.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-12 pb-2 border-b border-white/5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-label={`Filter skills by ${cat.label}`}
                className={`pb-4 px-4 text-xs md:text-sm font-mono tracking-wide relative cursor-pointer transition-colors duration-200 ${
                  isActive ? 'text-[#38BDF8] font-semibold' : 'text-[#94A3B8] hover:text-slate-300'
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                    layoutId="skillsActiveLine"
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = SKILL_ICONS[skill.name] || Code;
              return (
                <motion.div
                  key={`${skill.name}-${skill.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="interactive-card bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] rounded-2xl p-5 backdrop-blur-md shadow-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#38BDF8]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-[#38BDF8] group-hover:text-purple-400 group-hover:border-white/10 transition-all duration-300">
                        <Icon size={18} />
                      </div>
                      <span className={`text-[9px] md:text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border font-bold uppercase ${
                        skill.level === 'Advanced' ? 'bg-sky-500/10 border-sky-500/20 text-sky-400' :
                        skill.level === 'Proficient' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                        skill.level === 'Intermediate' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                        'bg-amber-500/10 border-amber-500/20 text-amber-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm md:text-base font-sans font-bold text-slate-200 group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </h3>
                      <span className="text-[9px] font-mono uppercase text-[#94A3B8] mt-1 block">
                        {skill.category}
                      </span>
                    </div>

                    <div className="h-1 bg-slate-950 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#38BDF8] via-[#38BDF8] to-[#8B5CF6] rounded-full absolute left-0 top-0"
                        initial={{ width: 0 }}
                        whileInView={{ width: 
                          skill.level === 'Advanced' ? '100%' :
                          skill.level === 'Proficient' ? '80%' :
                          skill.level === 'Intermediate' ? '60%' :
                          '35%'
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
