import { motion } from 'framer-motion';
import { FiCode, FiBook, FiCpu, FiShield } from 'react-icons/fi';
import { SectionHeader } from '../ui/index';
import { timeline } from '../../data/portfolio';

const traits = [
  { icon: FiCode, title: 'Developer', desc: 'Building scalable, high-performance web apps with modern tech.', color: '#00F5FF' },
  { icon: FiBook, title: 'Educator', desc: 'Teaching CS and inspiring the next generation of developers.', color: '#7C3AED' },
  { icon: FiCpu, title: 'Explorer', desc: 'Constantly learning new technologies from AI to system design.', color: '#00FFA3' },
  { icon: FiShield, title: 'Security', desc: 'Cybersecurity enthusiast with hands-on internship experience at Redynox.', color: '#EF4444' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="About Me"
          title="Passionate Developer & Educator"
          subtitle="Building digital experiences and inspiring future developers"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Profile + traits */}
          <div className="flex flex-col gap-8">
            {/* Profile placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm mx-auto lg:mx-0"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#111111] to-[#1a1a2e] border border-white/10 relative overflow-hidden">
                {/* Neon border glow */}
                <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,245,255,0.15)' }} />
                {/* Photo — fills the entire card */}
                <img
                  src="/avatar.jpg"
                  alt="Talha Obaidullah Afzal"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback shown only when image fails to load */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#111111] to-[#1a1a2e]"
                  style={{ display: 'none' }}
                >
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#00F5FF]/20 to-[#7C3AED]/20 border-2 border-[#00F5FF]/40 flex items-center justify-center">
                    <span className="text-5xl font-bold gradient-text font-outfit">T</span>
                  </div>
                </div>
                {/* Overlay gradient at bottom for name badge */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-0 right-0 text-center px-4">
                  <p className="text-white font-semibold font-outfit text-sm drop-shadow">Talha Obaidullah Afzal</p>
                  <p className="text-[#00F5FF] text-xs font-inter drop-shadow">Full Stack Developer</p>
                </div>
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#00F5FF] rounded-full opacity-60" style={{ animation: 'pulse-glow 2s infinite' }} />
                <div className="absolute bottom-20 left-4 w-2 h-2 bg-[#7C3AED] rounded-full opacity-60" style={{ animation: 'pulse-glow 2.5s infinite' }} />
              </div>
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00F5FF]/10 to-[#7C3AED]/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>

            {/* Trait cards */}
            <div className="grid grid-cols-3 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:border-white/15 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${trait.color}15`, border: `1px solid ${trait.color}30` }}
                  >
                    <trait.icon style={{ color: trait.color }} className="w-5 h-5" />
                  </div>
                  <p className="text-white text-xs font-semibold font-outfit">{trait.title}</p>
                  <p className="text-[#A1A1AA] text-[11px] font-inter leading-relaxed hidden sm:block">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Text + Timeline */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-7"
            >
              <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed font-inter">
                I am a <span className="text-white font-medium">Computer Science student at Karachi University</span> and a Full Stack Developer passionate about building high-performance web applications.
              </p>
              <p className="text-[#A1A1AA] text-base leading-relaxed font-inter">
                My journey began with <span className="text-[#00F5FF] font-medium">HTML and CSS</span> and evolved into React development, JavaScript engineering, and creating complete software solutions.
              </p>
              <p className="text-[#A1A1AA] text-base leading-relaxed font-inter">
                Alongside development, I <span className="text-[#00FFA3] font-medium">teach Computer Science</span> and help students understand programming through practical, hands-on learning.
              </p>

              {/* Info chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: '📍 Karachi, Pakistan' },
                  { label: '🎓 CS Student, KU' },
                  { label: '⚡ Open to Work' },
                ].map(({ label }) => (
                  <span key={label} className="px-3 py-1.5 rounded-lg glass text-[#A1A1AA] text-xs font-inter border border-white/10">
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-white font-semibold font-outfit mb-4 text-sm uppercase tracking-wider">My Journey</p>
              <div className="flex flex-wrap items-center gap-2">
                {timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <motion.div
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: 'spring' }}
                    >
                      <div
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold font-inter border"
                        style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}
                      >
                        {item.label}
                      </div>
                      <span className="text-[#A1A1AA] text-[10px] mt-1">{item.year}</span>
                    </motion.div>
                    {i < timeline.length - 1 && (
                      <div className="w-4 h-px bg-gradient-to-r from-[#A1A1AA]/30 to-transparent hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
