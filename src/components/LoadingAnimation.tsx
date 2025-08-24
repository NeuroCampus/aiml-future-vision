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
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.6 } }}
        >
          <img
            src="/cs-aiml-photos/CSAI Logo.jpeg"
            alt="CSAI Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 object-contain mx-auto rounded-xl"
          />
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }}
        >
          <span className="text-primary">CSE</span>-AIML
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-muted-foreground mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }}
        >
          Loading Innovation...
        </motion.p>
        
        {/* Loading indicator */}
        <motion.div
          className="mt-6 flex justify-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.4 } }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
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
