import React from 'react';
import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends ButtonProps {
  effect?: 'glow' | 'neon' | 'pulse' | 'magnetic';
  ripple?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, effect = 'glow', ripple = true, children, ...props }, ref) => {
    const effectClasses = {
      glow: 'btn-glow hover:shadow-lg hover:shadow-accent/25',
      neon: 'neon-glow border-accent text-accent hover:bg-accent hover:text-accent-foreground',
      pulse: 'pulse-glow',
      magnetic: 'hover:scale-105 transition-transform duration-200',
    };

    return (
      <motion.div
        whileHover={{ scale: effect === 'magnetic' ? 1.05 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          ref={ref}
          className={cn(
            effectClasses[effect],
            ripple && 'relative overflow-hidden',
            className
          )}
          {...props}
        >
          {children}
          {ripple && (
            <motion.span
              className="absolute inset-0 bg-white/20 rounded-full scale-0"
              whileTap={{ scale: 4 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </Button>
      </motion.div>
    );
  }
);

EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };