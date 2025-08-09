import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } });
      await controls.start({ y: -20, transition: { duration: 0.5, ease: "easeOut" } });
      await controls.start({ opacity: 0, scale: 1.2, transition: { duration: 0.7, ease: "easeIn" } });
      onComplete();
    };
    sequence();
  }, [controls, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.img
          src="/cs-aiml photos/CSAI Logo.jpeg"
          alt="CSAI Logo"
          className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-contain mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
        />
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }}
        >
          <span className="text-primary">CSE</span>-AIML
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }}
        >
          Loading Awesome Experience...
        </motion.p>
      </div>

      {/* Simple background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
