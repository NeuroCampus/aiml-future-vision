import { useEffect, useState, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // Simulated incremental loader (can later tie to real resource preloads)
  useEffect(() => {
    if (done) return;
    const interval = setInterval(() => {
      setProgress(p => {
        const next = Math.min(100, p + Math.random() * 18 + 6);
        if (next >= 100) {
          clearInterval(interval);
          setDone(true);
        }
        return next;
      });
    }, 260);
    return () => clearInterval(interval);
  }, [done]);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } });
      // Wait until simulated progress completes
      while (!done) {
        await new Promise(r => setTimeout(r, 120));
      }
      await controls.start({ y: -18, transition: { duration: 0.45, ease: 'easeOut' } });
      await controls.start({ opacity: 0, scale: 0.9, filter: 'blur(6px)', transition: { duration: 0.55, ease: 'easeInOut' } });
      onComplete();
    };
    sequence();
  }, [controls, onComplete, done]);

  const spinnerDash = useMemo(() => 220 - (220 * progress) / 100, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={controls}
      role="status"
      aria-live="polite"
      aria-label="Loading site content"
    >
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[34rem] h-[34rem] bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-0 -right-24 w-[38rem] h-[38rem] bg-gradient-to-tl from-fuchsia-500/25 via-primary/10 to-transparent blur-3xl opacity-60" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent)] bg-[repeating-linear-gradient(60deg,hsl(var(--border)/0.15)_0_1px,transparent_1px_160px)] opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Logo with animated halo & progress ring */}
        <div className="relative flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
              {/* Outer pulsing ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-xl"
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.08, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Progress Ring */}
              <svg className="absolute inset-0" viewBox="0 0 80 80" aria-hidden="true">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  className="stroke-primary/15 fill-none"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="35"
                  className="stroke-primary fill-none drop-shadow"
                  strokeLinecap="round"
                  strokeWidth="6"
                  strokeDasharray={220}
                  strokeDashoffset={spinnerDash}
                  animate={{ strokeDashoffset: spinnerDash }}
                  transition={{ ease: 'linear' }}
                />
              </svg>
              {/* Transparent logo (no card) */}
              <img
                src="/cs-aiml-photos/CSAI Logo.jpeg"
                alt="CSE-AIML Department Logo"
                className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 object-contain select-none bg-transparent"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="text-center space-y-2">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">CSE-AIML</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-muted-foreground/90 font-medium"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.6 } }}
          >
            Initializing Intelligence Layer… {Math.round(progress)}%
          </motion.p>
          {/* Tagline ticker */}
          <motion.div
            className="relative h-6 overflow-hidden text-[11px] sm:text-xs text-muted-foreground/80 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
          >
            <motion.div
              key={done ? 'complete' : 'loading'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {!done && (
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Optimizing modules…
                </span>
              )}
              {done && (
                <span className="inline-flex items-center gap-2 text-primary/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" /> Ready
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
        {/* Accessible reduced-motion fallback note (visually hidden) */}
        <span className="sr-only">Loading. Please wait.</span>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
