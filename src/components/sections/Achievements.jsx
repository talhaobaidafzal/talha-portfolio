import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/index';
import { achievements } from '../../data/portfolio';

export default function Achievements() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FFA3]/3 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Achievements"
          title="Milestones & Impact"
          subtitle="Building real impact through code and education"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-white/5 group cursor-default relative overflow-hidden text-center"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 100%, ${item.color}12, transparent 70%)` }}
              />
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: item.color }}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3
                  className="text-white font-bold font-outfit text-lg mb-2 group-hover:transition-colors"
                  style={{ '--color': item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm font-inter leading-relaxed">{item.desc}</p>

                {/* Color indicator */}
                <div className="mt-4 flex justify-center">
                  <div
                    className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ background: item.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
