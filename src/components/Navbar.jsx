import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { navLinks } from '../data/portfolio';
import { useActiveSection } from '../hooks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navLinks.map((n) => n.id));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-2 left-2 right-2 z-50 w-[calc(100%-16px)] md:w-auto mx-auto rounded-xl backdrop-blur-xl border border-white/10"
      >
        <div
          className={`relative px-8 py-4 transition-all duration-500 ${
            scrolled
              ? 'bg-[#111111]/100 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50'
              : 'bg-[#111111]/70 backdrop-blur-xl border-b border-white/5'
          }`}
        >
          {/* Glow line top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/60 to-transparent" />

          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F5FF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <span className="font-outfit font-bold text-white text-sm hidden sm:block">
                Talha<span className="text-[#00F5FF]">.</span>
              </span>
            </motion.button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active === link.id
                      ? 'text-[#00F5FF]'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {active === link.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -inset-x-3 -inset-y-1.5 bg-[#00F5FF]/10 rounded-lg border border-[#00F5FF]/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <motion.a
                href="/resume.pdf"
                download="Talha_Obaidullah_Afzal_Resume.pdf"
                className="hidden sm:flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#00F5FF]/20 to-[#7C3AED]/20 border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-semibold hover:from-[#00F5FF]/30 hover:to-[#7C3AED]/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-6 h-4" />
                Resume
              </motion.a>

              {/* Mobile toggle */}
              <motion.button
                className="md:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm"
          >
            <div className="bg-[#111111]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active === link.id
                        ? 'bg-[#00F5FF]/15 text-[#00F5FF] border border-[#00F5FF]/20'
                        : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="mt-2 pt-2 border-t border-white/10">
                  <motion.a
                    href="/resume.pdf"
                    download="Talha_Obaidullah_Afzal_Resume.pdf"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#00F5FF]/20 to-[#7C3AED]/20 border border-[#00F5FF]/30 text-[#00F5FF] text-sm font-semibold"
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiDownload className="w-6 h-4" />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
