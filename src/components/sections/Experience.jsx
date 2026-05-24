import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { SectionHeader, GlowDot } from '../ui/index';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="Where I've applied my skills in the real world"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F5FF]/60 via-[#7C3AED]/60 to-transparent" />

          <div className="flex flex-col gap-10 pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-12 top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: exp.color, background: `${exp.color}20` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                </div>

                <div className="glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 relative overflow-hidden">
                  {/* Left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" style={{ background: exp.color }} />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FiBriefcase style={{ color: exp.color }} className="w-4 h-4" />
                        <h3 className="text-white font-bold font-outfit text-lg">{exp.role}</h3>
                      </div>
                      <p className="text-[#A1A1AA] text-sm font-inter">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span
                        className="px-3 py-1 rounded-lg text-xs font-semibold font-inter"
                        style={{ color: exp.color, background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                      >
                        {exp.period}
                      </span>
                      <span className="text-[#A1A1AA] text-xs font-inter">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-[#A1A1AA] text-sm font-inter mb-5 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-col gap-3">
                    {exp.responsibilities.map((r, ri) => (
                      <motion.div
                        key={ri}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ri * 0.08 }}
                        className="flex items-start gap-2.5"
                      >
                        <GlowDot color={exp.color} size={4} />
                        <span className="text-[#A1A1AA] text-sm font-inter">{r}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
