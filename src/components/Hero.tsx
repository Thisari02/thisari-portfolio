import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import InteractiveHeroBackground from './InteractiveHeroBackground';

const TYPING_ROLES = [
  'Software Engineer',
  'Full Stack Web Developer',
  'Frontend UI Specialist',
  'IT Graduate (UWL, UK)'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullRole = TYPING_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        
        if (currentText === fullRole) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleDownloadCV = () => {
    setDownloading(true);
    setDownloadSuccess(false);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1800);
  };

  const scrollToSection = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#050816] overflow-hidden pt-20"
      aria-label="Hero section"
    >
      <InteractiveHeroBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full text-left">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0B1120]/80 border border-slate-800/80 rounded-full backdrop-blur-md"
          >
            <Sparkles size={12} className="text-sky-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-slate-300 uppercase">
              Now Available for Software Roles
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-sky-400"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-8xl font-sans font-extrabold text-white tracking-tighter leading-none"
            >
              Thisari Siriwardana
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="h-10 sm:h-12 flex items-center font-sans"
            >
              <span className="text-xl sm:text-3xl font-bold text-slate-300">
                A{' '}
              </span>
              <span className="ml-2 text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400 border-r-2 border-purple-500 animate-caret pr-1.5">
                {currentText}
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="text-sm md:text-lg text-slate-400 leading-relaxed max-w-2xl"
          >
            Building digital experiences that solve real-world problems through clean design, scalable architecture, and user-focused development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500"
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-sky-400" />
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="hidden sm:block opacity-40">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for Remote/On-site Programs</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              aria-label="Go to projects section"
              className="px-6 py-3.5 bg-gradient-to-r from-sky-500 via-sky-600 to-purple-600 text-xs font-mono font-bold tracking-wider text-white uppercase rounded-xl hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={handleDownloadCV}
              disabled={downloading}
              aria-label="Download curriculum vitae"
              className="px-6 py-3.5 bg-slate-900 hover:bg-[#111827] border border-slate-800 hover:border-slate-700 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-white uppercase rounded-xl active:scale-95 transition-all duration-150 flex items-center gap-2 cursor-pointer relative overflow-hidden"
            >
              {downloading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-slate-600 border-t-sky-400 rounded-full animate-spin" />
                  <span>Compiling PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle size={14} className="text-emerald-400 animate-bounce" />
                  <span className="text-emerald-400">CV Ready!</span>
                </>
              ) : (
                <>
                  <Download size={14} />
                  <span>Curriculum Vitae</span>
                </>
              )}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              aria-label="Go to contact section"
              className="px-6 py-3.5 bg-transparent hover:bg-slate-800/20 border border-slate-800 hover:border-slate-700 text-xs font-mono font-bold tracking-wider text-slate-400 hover:text-slate-200 uppercase rounded-xl active:scale-95 transition-all duration-150 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-5 pt-8 border-t border-slate-900 max-w-sm"
          >
            <span className="text-[10px] font-mono tracking-wider text-slate-600 uppercase">
              Connections:
            </span>
            <a
              href="https://github.com/Thisari02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="text-slate-500 hover:text-white active:scale-90 transition-all duration-150 p-1"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/thisari-siriwardana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="text-slate-500 hover:text-white active:scale-90 transition-all duration-150 p-1"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:thisarisiriwardana2@gmail.com"
              aria-label="Send email to Thisari"
              className="text-slate-500 hover:text-white active:scale-90 transition-all duration-150 p-1"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
