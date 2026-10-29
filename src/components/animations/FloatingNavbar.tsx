import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingNavbarProps {
  children: React.ReactNode;
  hideThreshold?: number;
  className?: string;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  children,
  hideThreshold = 100,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      setIsAtTop(currentScrollY < 50);
      
      if (currentScrollY > hideThreshold) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, hideThreshold]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isAtTop ? 'bg-transparent' : 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg'
            } ${className}`}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            whileHover={{ y: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;