import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 backdrop-blur-sm z-50"
      style={{ scaleX, transformOrigin: '0%' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500"
        style={{ scaleX }}
      />
    </motion.div>
  );
};

export default ScrollProgress;