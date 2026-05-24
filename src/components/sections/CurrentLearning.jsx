import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/index';
import { currentLearning } from '../../data/portfolio';

export default function CurrentLearning() {
  return (
    <section className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Learning"
          title="Currently Exploring"
          subtitle="Always growing, always building — my active learning roadmap"
        />

        <div className="grid md:grid-cols-2 gap-5">
          {currentLearning.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  className="text-3xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-semibold font-outfit text-sm">{item.title}</h3>
                    <span className="text-xs font-inter" style={{ color: item.color }}>{item.progress}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                      style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}60)` }}
                    >
                      {/* Animated shine */}
                      <div
                        className="absolute inset-0 rounded-full opacity-50"
                        style={{
                          background: `linear-gradient(90deg, transparent 0%, ${item.color}80 50%, transparent 100%)`,
                          animation: 'shimmer 2s infinite',
                          backgroundSize: '200% auto',
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: item.color }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[#A1A1AA] text-xs font-inter">In Progress</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roadmap note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-[#A1A1AA] text-sm font-inter">
            <span className="text-[#00F5FF]">Goal:</span> Become a proficient AI-integrated Full Stack Engineer & Cybersecurity Enthusiast
          </p>
        </motion.div>
      </div>
    </section>
  );
}
