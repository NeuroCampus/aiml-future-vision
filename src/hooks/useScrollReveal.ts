import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface UseScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    duration = 0.6,
    distance = 50,
    direction = 'up'
  } = options;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      });
    } else if (!triggerOnce) {
      const getInitialTransform = () => {
        switch (direction) {
          case 'up':
            return { y: distance };
          case 'down':
            return { y: -distance };
          case 'left':
            return { x: distance };
          case 'right':
            return { x: -distance };
          default:
            return { y: distance };
        }
      };

      controls.start({
        opacity: 0,
        scale: 0.95,
        ...getInitialTransform(),
        transition: { duration: 0.3 }
      });
    }
  }, [inView, controls, triggerOnce, delay, duration, distance, direction]);

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, scale: 0.95 };
      case 'down':
        return { opacity: 0, y: -distance, scale: 0.95 };
      case 'left':
        return { opacity: 0, x: distance, scale: 0.95 };
      case 'right':
        return { opacity: 0, x: -distance, scale: 0.95 };
      default:
        return { opacity: 0, y: distance, scale: 0.95 };
    }
  };

  return {
    ref,
    controls,
    initial: getInitialState(),
    animate: controls
  };
};

export const useStaggerReveal = (itemCount: number, options: UseScrollRevealOptions = {}) => {
  const { delay = 0, duration = 0.6 } = options;
  const baseReveal = useScrollReveal({ ...options, delay: 0 });

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
        duration
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return {
    ...baseReveal,
    staggerVariants,
    itemVariants
  };
};