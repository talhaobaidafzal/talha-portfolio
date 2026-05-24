import { motion } from 'framer-motion';

export function SectionHeader({ label, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#00F5FF]" />
        <span className="text-[#00F5FF] text-xs font-semibold uppercase tracking-[0.2em] font-inter">
          {label}
        </span>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#00F5FF]" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass rounded-2xl ${hover ? 'hover:border-white/15 transition-all duration-300' : ''} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function NeonButton({ children, variant = 'primary', onClick, className = '', href, ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer';
  const variants = {
    primary: 'bg-gradient-to-r from-[#00F5FF] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-[#00F5FF]/25 hover:scale-105',
    outline: 'border border-[#00F5FF]/50 text-[#00F5FF] hover:bg-[#00F5FF]/10 hover:border-[#00F5FF] hover:scale-105',
    ghost: 'text-[#A1A1AA] hover:text-white hover:bg-white/5 hover:scale-105',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function GlowDot({ color = '#00F5FF', size = 4 }) {
  return (
    <div
      className="rounded-full flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  );
}
