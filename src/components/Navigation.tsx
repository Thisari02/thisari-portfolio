import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavLink {
  label: string;
  targetId: string;
}

const LINKS: NavLink[] = [
  { label: 'Home', targetId: 'home' },
  { label: 'About', targetId: 'about' },
  { label: 'Skills', targetId: 'skills' },
  { label: 'Experience', targetId: 'experience' },
  { label: 'Projects', targetId: 'projects' },
  { label: 'Services', targetId: 'services' },
  { label: 'Contact', targetId: 'contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    LINKS.forEach((link) => {
      const element = document.getElementById(link.targetId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div id="scroll-progress" className="fixed top-0 left-0 w-full h-[3px] z-50 bg-slate-900 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.7)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        id="navbar-header"
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-40 rounded-full border transition-all duration-500 ${
          isScrolled
            ? 'bg-white/[0.02] backdrop-blur-md border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2.5'
            : 'bg-transparent border-transparent py-4'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full min-h-[3.75rem] relative">
          <div className="flex items-center justify-start min-w-0">
            <button
              onClick={() => scrollToSection('home')}
              aria-label="Go to home section"
              className="group flex items-center gap-2.5 font-sans text-lg sm:text-xl font-bold text-white tracking-tight cursor-pointer active:scale-95 transition-all duration-150"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#8B5CF6] flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
                <span className="text-xs font-bold tracking-widest text-white">TS</span>
              </div>
              <span className="hidden sm:inline-block hover:text-[#38BDF8] transition-colors duration-300">
                Thisari Siriwardana
              </span>
              <span className="sm:hidden text-[#38BDF8]">Siriwardana</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <nav aria-label="Primary" className="flex items-center justify-center gap-1 bg-white/[0.02] border border-white/10 p-1 rounded-full backdrop-blur-md">
              {LINKS.map((link) => {
                const isActive = activeSection === link.targetId;
                return (
                  <button
                    key={link.targetId}
                    onClick={() => scrollToSection(link.targetId)}
                    aria-label={`Go to ${link.label}`}
                    className={`px-4 xl:px-5 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-300 relative cursor-pointer active:scale-95 ${
                      isActive ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 border border-[#38BDF8]/30 rounded-full"
                        layoutId="navActiveBg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center justify-end">
            <div className="hidden lg:flex items-center justify-end gap-2 xl:gap-3 min-w-0">
              <a
                href="https://github.com/Thisari02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="p-2 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-full border border-transparent hover:border-white/10 active:scale-90 transition-all duration-150"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/thisari-siriwardana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="p-2 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-full border border-transparent hover:border-white/10 active:scale-90 transition-all duration-150"
              >
                <Linkedin size={18} />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                aria-label="Go to contact section"
                className="px-5 py-2.5 bg-gradient-to-r from-[#38BDF8] via-[#38BDF8] to-[#8B5CF6] text-xs font-mono font-bold tracking-wider text-white uppercase rounded-full hover:shadow-[0_0_15px_rgba(56,189,248,0.45)] active:scale-95 transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                Connect
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                aria-label="Go to contact section"
                className="px-4 py-2 bg-white/[0.03] border border-white/10 text-[10px] font-mono tracking-widest text-white uppercase rounded-full active:scale-95 transition-all duration-150"
              >
                Connect
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                className="p-2 bg-white/[0.03] border border-white/10 rounded-full text-[#94A3B8] hover:text-white focus:outline-none active:scale-90 transition-all duration-150"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="fixed inset-0 z-30 bg-[#050816]/95 backdrop-blur-lg flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono pl-3">
                Navigation
              </span>
              <nav aria-label="Mobile" className="flex flex-col gap-2">
                {LINKS.map((link, idx) => {
                  const isActive = activeSection === link.targetId;
                  return (
                    <motion.button
                      key={link.targetId}
                      onClick={() => scrollToSection(link.targetId)}
                      aria-label={`Go to ${link.label}`}
                      className={`text-left px-4 py-3 text-xl sm:text-2xl font-sans tracking-tight font-medium rounded-2xl flex items-center justify-between transition-all cursor-pointer active:scale-[0.97] duration-150 ${
                        isActive ? 'bg-[#111827] text-sky-400' : 'text-slate-300 hover:bg-[#0B1120]/50'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col gap-6 pl-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono">
                Social Connect
              </span>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/Thisari02"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="p-3 bg-[#111827] border border-slate-800 rounded-full text-slate-300 hover:text-white active:scale-90 transition-all duration-150"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/thisari-siriwardana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="p-3 bg-[#111827] border border-slate-800 rounded-full text-slate-300 hover:text-white active:scale-90 transition-all duration-150"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:thisarisiriwardana2@gmail.com"
                  aria-label="Send email to Thisari"
                  className="p-3 bg-[#111827] border border-slate-800 rounded-full text-slate-300 hover:text-white active:scale-90 transition-all duration-150"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Colombo, Sri Lanka • Available for Opportunities
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
