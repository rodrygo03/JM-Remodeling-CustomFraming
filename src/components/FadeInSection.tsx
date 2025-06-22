// components/FadeInSection.tsx
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariant}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut', delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
