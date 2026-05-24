import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: FiGithub, href: 'https://github.com/talhaobaidafzal', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/talhaobaidafzal/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:talhaobaid1010@gmail.com', label: 'Email' },
];

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00F5FF]/3 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00F5FF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-xs">
                T
              </div>
              <span className="font-outfit font-bold text-white">
                Talha<span className="text-[#00F5FF]">.</span>
              </span>
            </div>
            <p className="text-[#A1A1AA] text-xs font-inter">Full Stack Developer</p>
            <p className="text-[#A1A1AA]/60 text-[11px] font-inter mt-1 italic">
              "Building digital experiences one line of code at a time."
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[#A1A1AA] hover:text-white text-xs font-inter transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#A1A1AA]/60 text-[11px] font-inter">
            © {new Date().getFullYear()} Talha Obaidullah Afzal. All rights reserved.
          </p>
          <p className="text-[#A1A1AA]/60 text-[11px] font-inter flex items-center gap-1">
            Built with <FiHeart className="w-3 h-3 text-[#EC4899]" /> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
