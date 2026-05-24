import { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/index';
import { skills } from '../../data/portfolio';

const SkillsScene = lazy(() => import('../SkillsScene'));

function SkillBar({ name, level, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group"
    >
      <div className="flex justify-between mb-1.5 px-1">
        <span className="text-white text-sm font-medium font-inter group-hover:text-[#00F5FF] transition-colors">{name}</span>
        <span className="text-[#A1A1AA] text-xs font-inter">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)`, boxShadow: `0 0 10px ${color}60` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const displayed = activeCategory ? skills.filter(s => s.category === activeCategory) : skills;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background 3D sphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 opacity-20">
          <Suspense fallback={null}>
            <SkillsScene />
          </Suspense>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Skills"
          title="Technical Arsenal"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-xl text-sm font-medium font-inter transition-all duration-300 ${
              !activeCategory
                ? 'bg-[#00F5FF]/15 text-[#00F5FF] border border-[#00F5FF]/30'
                : 'glass text-[#A1A1AA] hover:text-white'
            }`}
          >
            All
          </button>
          {skills.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(activeCategory === s.category ? null : s.category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium font-inter transition-all duration-300`}
              style={
                activeCategory === s.category
                  ? { background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }
                  : { background: 'rgba(17,17,17,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)', color: '#A1A1AA' }
              }
            >
              {s.category}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayed.map((category, ci) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Category color accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)` }}
                />

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-lg"
                    style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}
                  >
                    {category.category === 'Frontend' ? '🎨' : category.category === 'Backend' ? '⚙️' : category.category === 'Database' ? '🗄️' : category.category === 'Programming' ? '💻' : '🔧'}
                  </div>
                  <h3 className="text-white font-semibold font-outfit" style={{ color: category.color }}>
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  {category.items.map((skill, si) => (
                    <SkillBar key={skill.name} {...skill} color={category.color} index={si} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {['React', 'Node.js', 'JavaScript', 'Java', 'Python', 'MongoDB', 'MySQL', 'Git', 'Tailwind', 'Express'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-7 py-1.5 glass rounded-xl text-[#A1A1AA] text-xs font-inter cursor-default hover:text-white hover:border-white/20 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
