import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/index';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Education"
          title="Academic Background"
          subtitle="Building a strong foundation in Computer Science"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-10 border border-white/5 hover:border-white/15 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${edu.color}08, transparent 70%)` }}
              />

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${edu.color}60, transparent)` }} />

              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: `${edu.color}15`, border: `2px solid ${edu.color}30` }}
                  >
                    {edu.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-bold font-outfit text-xl mb-1">{edu.degree}</h3>
                        <p className="font-semibold font-inter" style={{ color: edu.color }}>{edu.institution}</p>
                      </div>
                      <span
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold font-inter self-start"
                        style={{ color: edu.color, background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                      >
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-[#A1A1AA] text-sm font-inter leading-relaxed mb-3">{edu.description}</p>

                    {edu.badge && (
                      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-xl text-xs font-semibold font-inter"
                        style={{ color: edu.color, background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: edu.color }} />
                        {edu.badge}
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: edu.color }} />
                      <span className="text-[#A1A1AA] text-xs font-inter">{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-20">
                  {[0, 1, 2].map((n) => (
                    <motion.div
                      key={n}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: edu.color }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 2, delay: n * 0.4, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
