import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { useMousePosition } from '../../hooks';
import Typewriter from '../ui/Typewriter';
import { NeonButton } from '../ui/index';

const HeroScene = lazy(() => import('../HeroScene'));

const socials = [
  { icon: FiGithub, href: 'https://github.com/talhaobaidafzal', label: 'GitHub', color: '#A1A1AA' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/talhaobaidafzal/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FiMail, href: 'mailto:talhaobaid1010@gmail.com', label: 'Email', color: '#00F5FF' },
];

export default function Hero() {
  const mouse = useMousePosition();

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F5FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FFA3]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* LEFT: Text content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit px-10 py-5 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 w-max"
            >
              <div className="w-2 h-2 bg-[#00FFA3] rounded-full" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
              <span className="ml-2 text-[#00F5FF] text-xs font-medium font-inter tracking-wide ">
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-[#A1A1AA] text-lg font-inter mb-1">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white leading-tight">
                Talha Obaidullah
                <br />
                <span className="gradient-text">Afzal</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-outfit font-semibold h-10 flex items-center"
            >
              <Typewriter />
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-lg font-inter"
            >
              I build <span className="text-white font-medium">modern, scalable, and user-focused</span> web applications that transform ideas into digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <NeonButton variant="primary" onClick={scrollToProjects}>
                View Projects
                <FiArrowRight className="w-4 h-4" />
              </NeonButton>
              <NeonButton variant="outline" onClick={scrollToContact}>
                Contact Me
              </NeonButton>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-[#A1A1AA] text-xs font-inter">Find me on</span>
              <div className="w-12 h-px bg-[#A1A1AA]/30" />
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] transition-all duration-300 hover:border-white/25"
                    whileHover={{ scale: 1.15, color }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--hover-color': color }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[#00F5FF]/30 border-t-[#00F5FF] rounded-full animate-spin" />
              </div>
            }>
              <HeroScene mouse={mouse} />
            </Suspense>

            {/* Floating tech badges */}
            {[
              { label: 'React', color: '#61DAFB', pos: 'top-16 right-8' },
              { label: 'Node.js', color: '#339933', pos: 'bottom-32 right-4' },
              { label: 'JavaScript', color: '#F7DF1E', pos: 'top-1/2 left-0' },
            ].map(({ label, color, pos }) => (
              <motion.div
                key={label}
                className={`absolute ${pos} glass px-3 py-1.5 rounded-xl text-xs font-semibold font-mono z-20`}
                style={{ color, borderColor: `${color}30` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#A1A1AA] text-xs font-inter">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiChevronDown className="w-5 h-5 text-[#00F5FF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
