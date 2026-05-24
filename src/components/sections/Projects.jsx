import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from 'react-icons/fi';
import { SectionHeader, NeonButton, GlowDot } from '../ui/index';
import { projects } from '../../data/portfolio';

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      <div
        className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 h-full flex flex-col"
        style={{ '--project-color': project.color }}
      >
        {/* Top glow bar */}
        <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }} />

        {/* Image / Preview placeholder */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
          {/* Animated background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, ${project.color} 0%, transparent 60%)`,
            }}
          />
          <div className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-500">{project.icon}</div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-white font-semibold font-inter text-sm flex items-center gap-2">
              View Details <FiArrowRight />
            </span>
          </motion.div>
        </div>

        {/* Content */}
          <div className="p-8 flex flex-col gap-6 flex-1">
          <div>
            <h3 className="text-white font-bold font-outfit text-xl mb-2 group-hover:text-[#00F5FF] transition-colors">
              {project.title}
            </h3>
            <p className="text-[#A1A1AA] text-sm font-inter leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {project.features.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 text-[10px] font-inter px-2 py-1 rounded-lg"
                style={{ color: project.color, background: `${project.color}10`, border: `1px solid ${project.color}20` }}
              >
                <GlowDot color={project.color} size={3} />
                {f}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t) => (
              <span key={t} className="text-[#A1A1AA] text-[11px] font-mono bg-white/5 px-2 py-1 rounded-md">
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-3 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-[#A1A1AA] hover:text-white text-xs font-inter transition-colors"
            >
              <FiGithub className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-inter transition-colors"
              style={{ color: project.color }}
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>

          <div className="text-6xl mb-4">{project.icon}</div>
          <h2 className="text-3xl font-bold font-outfit text-white mb-2">{project.title}</h2>
          <p className="text-[#A1A1AA] font-inter mb-6 leading-relaxed">{project.longDesc}</p>

          <div className="mb-6">
            <h4 className="text-white font-semibold font-outfit mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <GlowDot color={project.color} size={4} />
                  <span className="text-[#A1A1AA] text-sm font-inter">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-semibold font-outfit mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-sm font-mono"
                  style={{ color: project.color, background: `${project.color}10`, border: `1px solid ${project.color}25` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <NeonButton href={project.github} target="_blank" rel="noopener noreferrer" variant="outline">
              <FiGithub /> GitHub
            </NeonButton>
            <NeonButton href={project.demo} target="_blank" rel="noopener noreferrer" variant="primary">
              <FiExternalLink /> Live Demo
            </NeonButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          subtitle="Real-world applications built with modern technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <NeonButton href="https://github.com/talhaobaidafzal" target="_blank" rel="noopener noreferrer" variant="outline">
            <FiGithub className="w-4 h-4" />
            View All on GitHub
          </NeonButton>
        </motion.div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
