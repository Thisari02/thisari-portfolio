import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 1200;
    const intervalTime = 12;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="page-loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] select-none"
          role="status"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/10 to-blue-500/10 blur-[120px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-slate-800"
                style={{ borderTopColor: '#38BDF8', borderRightColor: '#8B5CF6' }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-[#0B1120]/80 border border-slate-800 flex items-center justify-center shadow-lg shadow-purple-500/5"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400 font-sans">
                  TS
                </span>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400 font-mono">
                Initializing Environment
              </h2>
              <div className="mt-2 flex items-baseline justify-center font-mono gap-1 text-sky-400 font-medium">
                <span className="text-3xl font-bold tracking-tighter">
                  {Math.floor(progress)}
                </span>
                <span className="text-sm opacity-60">%</span>
              </div>
            </motion.div>

            <div className="w-48 h-[2px] bg-slate-900 rounded-full mt-4 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 absolute left-0 top-0"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
