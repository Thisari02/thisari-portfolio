import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#050816] border-t border-white/5 py-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-purple-500/5 rounded-t-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#8B5CF6] flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">TS</span>
          </div>
          <p className="text-xs font-sans text-slate-500">
            Designed & Engineered by <span className="text-slate-300 font-semibold hover:text-[#38BDF8] transition-colors">Thisari Siriwardana</span>.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
          <Sparkles size={11} className="text-[#38BDF8]" />
          <span>PORTFOLIO v2.6.0</span>
          <span className="opacity-40">•</span>
          <Heart size={10} className="text-red-500 animate-pulse fill-red-500" />
          <span>React & Tailwind</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group p-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white rounded-full transition-all duration-300 cursor-pointer"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
