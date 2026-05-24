import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const x = useSpring(0, { stiffness: 80, damping: 20 });
  const y = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handler = (e) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [x, y]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0 w-[400px] h-[400px] rounded-full"
      style={{
        x,
        y,
        background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, rgba(124,58,237,0.02) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  );
}
