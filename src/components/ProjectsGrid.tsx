import { useState, useRef, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, Github, Sparkles, Compass, CheckCircle,
  Monitor, AlertTriangle, ChevronDown, ChevronUp,
  Workflow, Play
} from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function ProjectsGrid() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack', value: 'Full Stack Web Application' },
    { label: 'IoT & Edge', value: 'IoT Research Project' },
    { label: 'Web Apps', value: 'Web Application' },
    { label: 'Business Solutions', value: 'Business Website' },
    { label: 'EdTech', value: 'EdTech' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const toggleExpand = (projectId: string) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050816]" aria-label="Projects section">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
              <Sparkles size={12} className="text-purple-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                02 • Engineering Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400">Engineering Work</span>.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
              A curated catalog of highly optimized software systems. Click on any card’s <span className="text-sky-400 font-semibold font-mono">Case Study →</span> button to view full architectural details, key features, technical challenges, and applied engineering solutions in-place.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 p-1 bg-white/[0.01] border border-white/10 rounded-2xl self-start lg:self-end">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  aria-label={`Filter projects by ${filter.label}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wide transition-all duration-300 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#38BDF8]/20 to-purple-600/20 text-white border border-[#38BDF8]/30 shadow-[0_0_15px_rgba(56,189,248,0.1)]'
                      : 'text-[#94A3B8] hover:text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                isExpanded={expandedProjectId === project.id}
                onToggleExpand={() => toggleExpand(project.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  key?: string;
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function FeatureStatusList({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: 'emerald' | 'purple' | 'amber';
}) {
  const styles = {
    emerald: {
      border: 'border-emerald-500/20',
      background: 'bg-emerald-950/10',
      text: 'text-emerald-400',
      marker: '✓'
    },
    purple: {
      border: 'border-purple-500/20',
      background: 'bg-purple-950/10',
      text: 'text-purple-400',
      marker: '◇'
    },
    amber: {
      border: 'border-amber-500/20',
      background: 'bg-amber-950/10',
      text: 'text-amber-400',
      marker: '◌'
    }
  }[tone];

  return (
    <div className={`p-4 rounded-2xl ${styles.background} border ${styles.border} space-y-2.5`}>
      <h5 className={`text-[10px] font-mono font-bold uppercase tracking-widest ${styles.text}`}>
        {title}
      </h5>
      <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className={`${styles.text} mt-0.5 flex-shrink-0`}>{styles.marker}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, index, isExpanded, onToggleExpand }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isExpanded) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

    const glow = card.querySelector('.card-glow') as HTMLElement;
    if (glow) {
      glow.style.background = `radial-gradient(circle 350px at ${x}px ${y}px, rgba(56, 189, 248, 0.12), transparent 80%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    const glow = card.querySelector('.card-glow') as HTMLElement;
    if (glow) {
      glow.style.background = 'transparent';
    }
  };

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full"
    >
      {project.featured && (
        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#38BDF8] via-purple-500 to-cyan-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none" />
      )}

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 ease-out backdrop-blur-md shadow-2xl ${
          isExpanded ? 'border-sky-500/30 shadow-[0_0_30px_rgba(56,189,248,0.05)]' : 'hover:border-white/20'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="card-glow absolute inset-0 pointer-events-none z-10 transition-all duration-300" />

        {project.featured && (
          <div className="absolute top-0 right-0 overflow-hidden w-40 h-40 pointer-events-none z-20">
            <div className="absolute transform rotate-45 bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 text-slate-950 font-mono font-bold text-[9px] tracking-wider text-center py-1.5 w-56 -right-14 top-7 shadow-lg uppercase">
              Featured Work
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 md:p-8">
          <div className="lg:col-span-5 relative h-56 sm:h-64 lg:h-full min-h-[220px] rounded-2xl overflow-hidden bg-slate-950">
            <div className="absolute inset-0 bg-slate-950/20 z-10" />
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />

            <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[9px] font-mono tracking-wider font-bold uppercase bg-slate-950/85 backdrop-blur-md text-white rounded-full border border-white/10">
                {project.category}
              </span>
              <span className="px-3 py-1 text-[9px] font-mono tracking-wider font-bold bg-[#0a192f]/85 backdrop-blur-md text-sky-400 rounded-full border border-sky-400/20">
                {project.year}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 z-20">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider backdrop-blur-md uppercase ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                  : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                }`} />
                <span>{project.status}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase block mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-3xl font-sans font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm font-mono text-sky-400/90 font-medium tracking-wide mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
                  Core Architecture
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] md:text-[10px] font-mono px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 rounded-md transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo for ${project.title}`}
                    className="p-2 bg-white/5 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] border border-white/10 rounded-xl text-slate-400 active:scale-95 transition-all duration-150 shadow-md flex items-center gap-1.5 text-xs font-mono"
                    title="Live Demo"
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open GitHub repository for ${project.title}`}
                    className="p-2 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 rounded-xl text-slate-400 active:scale-95 transition-all duration-150 shadow-md flex items-center gap-1.5 text-xs font-mono"
                    title="GitHub"
                  >
                    <Github size={14} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                )}
              </div>

              <button
                onClick={onToggleExpand}
                aria-label={isExpanded ? `Collapse case study for ${project.title}` : `Expand case study for ${project.title}`}
                className={`px-4 py-2 text-xs font-mono tracking-wider font-semibold rounded-xl flex items-center gap-2 active:scale-95 transition-all duration-150 cursor-pointer ${
                  isExpanded
                    ? 'bg-sky-500/10 border border-sky-500/20 text-sky-400'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <span>Case Study</span>
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10 bg-slate-950/40"
            >
              <div className="p-6 md:p-8 space-y-8 animate-fade-in">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-white/[0.01] border border-white/5 shadow-inner">
                  <div className="space-y-3 flex flex-col justify-between">
                    <div>
                      <span className={`text-xs font-mono font-bold flex items-center gap-1.5 uppercase tracking-widest ${project.liveUrl ? 'text-emerald-400' : 'text-amber-400'}`}>
                        <span>{project.liveUrl ? '✅' : '◌'}</span> {project.liveUrl ? 'Live Website' : 'Project Status'}
                      </span>
                      <p className="text-[11px] text-slate-500 font-mono mt-1">
                        {project.liveUrl ? 'Production Live Environment' : 'Prototype/MVP • Active personal project'}
                      </p>
                    </div>
                    {project.liveUrl ? (
                      <div className="pt-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 hover:from-sky-300 hover:to-sky-400 font-mono font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg hover:shadow-sky-500/10 active:scale-95 transition-all duration-150 group/link"
                        >
                          <span>Visit Website</span>
                          <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500 italic">Live link pending deployment</span>
                    )}
                  </div>

                  {project.role && (
                    <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                      <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">
                        Role
                      </span>
                      <h5 className="text-white font-sans font-bold text-sm md:text-base">
                        {project.role}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {project.roleDescription}
                      </p>
                    </div>
                  )}
                </div>

                {project.videoUrl && (
                  <div className="space-y-3.5 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2 font-bold">
                      <Monitor size={14} className="text-sky-400 animate-pulse" />
                      System Demonstration Walkthrough
                    </h4>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-2xl group/video p-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <video
                        src={project.videoUrl}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full rounded-xl max-h-[480px] object-contain bg-black shadow-inner relative z-10"
                        poster={project.image}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="mt-2 px-3 pb-1 flex justify-between items-center text-[10px] font-mono text-slate-500 relative z-10">
                        <span>▶ Interactive MP4 Walkthrough Recording</span>
                        <span className="text-sky-400 font-semibold">{project.title} Demo</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2 font-bold">
                    <Play size={12} className="text-sky-400" />
                    Project Overview
                  </h4>
                  <div className="text-slate-300 text-xs md:text-sm leading-relaxed space-y-4 whitespace-pre-line">
                    {project.longDescription}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2 font-bold">
                    <CheckCircle size={14} className="text-sky-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                    {project.keyFeatures.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                        <span className="text-slate-300 text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.implementationStatus && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FeatureStatusList
                      title="Implemented"
                      items={project.implementationStatus.implemented}
                      tone="emerald"
                    />
                    {project.implementationStatus.prototype && (
                      <FeatureStatusList
                        title="Prototype"
                        items={project.implementationStatus.prototype}
                        tone="purple"
                      />
                    )}
                    {project.implementationStatus.inProgress && (
                      <FeatureStatusList
                        title="In Progress"
                        items={project.implementationStatus.inProgress}
                        tone="amber"
                      />
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-red-950/10 border border-red-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-xs md:text-sm font-mono tracking-wider uppercase">
                      <AlertTriangle size={16} className="text-red-400" />
                      <span>Technical Challenges</span>
                    </div>
                    {Array.isArray(project.challenges) ? (
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 leading-relaxed pl-1">
                        {project.challenges.map((ch, cIdx) => (
                          <li key={cIdx}>{ch}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-300 leading-relaxed pl-1">
                        {project.challenges}
                      </p>
                    )}
                  </div>

                  <div className="p-5 rounded-2xl bg-sky-950/10 border border-sky-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-xs md:text-sm font-mono tracking-wider uppercase">
                      <Compass size={16} className="text-sky-400" />
                      <span>Applied Engineering Solutions</span>
                    </div>
                    {Array.isArray(project.solutions) ? (
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 leading-relaxed pl-1">
                        {project.solutions.map((so, sIdx) => (
                          <li key={sIdx}>{so}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-300 leading-relaxed pl-1">
                        {project.solutions}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs md:text-sm font-mono tracking-wider uppercase">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span>Real-World Impact</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed pl-1">
                    {project.impact}
                  </p>
                </div>

                {project.technologiesUsed && (
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2 font-bold">
                      <Workflow size={14} />
                      Full Stack Technologies Breakdown
                    </h4>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-white/[0.01] border border-white/5 p-5 rounded-2xl">
                      {project.technologiesUsed.frontend && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase block">
                            Frontend
                          </span>
                          <div className="flex flex-col gap-1">
                            {project.technologiesUsed.frontend.map((t) => (
                              <span key={t} className="text-xs text-slate-300 font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.technologiesUsed.backend && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase block">
                            Backend
                          </span>
                          <div className="flex flex-col gap-1">
                            {project.technologiesUsed.backend.map((t) => (
                              <span key={t} className="text-xs text-slate-300 font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.technologiesUsed.database && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase block">
                            Database
                          </span>
                          <div className="flex flex-col gap-1">
                            {project.technologiesUsed.database.map((t) => (
                              <span key={t} className="text-xs text-slate-300 font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.technologiesUsed.deployment && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase block">
                            Deployment
                          </span>
                          <div className="flex flex-col gap-1">
                            {project.technologiesUsed.deployment.map((t) => (
                              <span key={t} className="text-xs text-slate-300 font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {(project.technologiesUsed.tools || project.technologiesUsed.hardware || project.technologiesUsed.software || project.technologiesUsed.programming) && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase block">
                            {project.technologiesUsed.hardware ? 'Hardware' : 'Tools & Other'}
                          </span>
                          <div className="flex flex-col gap-1">
                            {(project.technologiesUsed.tools || 
                              project.technologiesUsed.hardware || 
                              project.technologiesUsed.software || 
                              project.technologiesUsed.programming || []).slice(0, 4).map((t) => (
                              <span key={t} className="text-xs text-slate-300 font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
