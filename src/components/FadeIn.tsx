import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
