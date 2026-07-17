import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]" aria-label="Contact section">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full">
                <Mail size={12} className="text-sky-400" />
                <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                  09 • Connection
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400">Something Legendary</span>.
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-md">
                I am currently open to internship programs, software roles, and creative full-stack freelance contracts. Drop me a note and let's coordinate!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:thisarisiriwardana2@gmail.com"
                aria-label="Send email to Thisari"
                className="flex items-center gap-4 p-4 bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 rounded-2xl active:scale-[0.98] transition-all duration-150 group"
              >
                <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-[#38BDF8] group-hover:text-[#8B5CF6] transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-[#94A3B8] uppercase">EMAIL ADDRESS</span>
                  <span className="block text-xs md:text-sm text-slate-200 group-hover:text-white font-medium">thisarisiriwardana2@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
                <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-cyan-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-[#94A3B8] uppercase">LOCATION BASE</span>
                  <span className="block text-xs md:text-sm text-slate-200 font-medium">Colombo, Sri Lanka (GMT +5:30)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase">NETWORKS:</span>
              <a
                href="https://github.com/Thisari02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-400 hover:text-white active:scale-90 transition-all duration-150"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/thisari-siriwardana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-400 hover:text-white active:scale-90 transition-all duration-150"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight">
                    Secure Console Communication
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-mono">
                    Encryption: TLSv1.3 • Connection: SECURE
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label htmlFor="contact-name" className="sr-only">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        aria-label="Your name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-white text-xs md:text-sm font-sans focus:outline-none focus:border-[#38BDF8]/80 transition-colors"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="contact-email" className="sr-only">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        aria-label="Your email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-white text-xs md:text-sm font-sans focus:outline-none focus:border-[#38BDF8]/80 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="contact-subject" className="sr-only">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      aria-label="Message subject"
                      placeholder="Message Subject (Optional)"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-white text-xs md:text-sm font-sans focus:outline-none focus:border-[#38BDF8]/80 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      aria-label="Your message"
                      placeholder="Your Message * (Describe your software needs or opportunity...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-white text-xs md:text-sm font-sans focus:outline-none focus:border-[#38BDF8]/80 transition-colors resize-none"
                      required
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {status === 'error' && (
                      <motion.div
                        role="alert"
                        className="flex items-center gap-2 text-xs text-red-400 font-mono bg-red-950/10 border border-red-500/20 p-3.5 rounded-xl"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        <AlertCircle size={14} />
                        <span>Please fully populate required parameters.</span>
                      </motion.div>
                    )}

                    {status === 'success' && (
                      <motion.div
                        role="status"
                        className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/10 border border-emerald-500/20 p-3.5 rounded-xl"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        <CheckCircle size={14} />
                        <span>Message compiled & broadcast successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-3">
                    <button
                      type="submit"
                      aria-label="Submit contact form"
                      disabled={status === 'submitting'}
                      className={`w-full py-3.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] transition-all duration-150 ${
                        status === 'submitting'
                          ? 'bg-slate-900 border border-[#38BDF8]/10 text-slate-500'
                          : 'bg-gradient-to-r from-[#38BDF8] via-[#38BDF8] to-[#8B5CF6] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] text-white'
                      }`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-slate-700 border-t-[#38BDF8] animate-spin" />
                          <span>Dispatching Signal...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
