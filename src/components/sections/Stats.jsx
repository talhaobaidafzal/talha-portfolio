import { motion } from 'framer-motion';
import { useInView, useCounter } from '../../hooks';
import { stats } from '../../data/portfolio';

function StatItem({ stat, index }) {
  const [ref, inView] = useInView();
  const count = useCounter(typeof stat.value === 'number' ? stat.value : 0, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative">
        <span className="text-5xl md:text-6xl font-bold font-outfit gradient-text">
          {typeof stat.value === 'number' ? count : stat.value}
        </span>
        <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.suffix}</span>
        {/* Glow */}
        <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[#00F5FF] rounded-full" />
      </div>
      <p className="text-[#A1A1AA] text-sm md:text-base font-inter mt-2">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5FF]/3 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass rounded-3xl p-10 md:p-14 border border-[#00F5FF]/10 relative overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#00F5FF]/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#7C3AED]/30 rounded-br-3xl" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
