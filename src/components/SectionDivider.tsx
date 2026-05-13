import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionDivider() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="h-px bg-gradient-to-r from-transparent via-cyber-500/20 to-transparent origin-center"
      />
    </div>
  );
}
