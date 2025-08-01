import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CanvasRevealProps {
  children: React.ReactNode;
  revealColor?: string;
  duration?: number;
}

const CanvasReveal: React.FC<CanvasRevealProps> = ({ 
  children, 
  revealColor = '#3b82f6',
  duration = 2 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fill canvas with reveal color
    ctx.fillStyle = revealColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create reveal animation
    let animationProgress = 0;
    
    const animate = () => {
      if (animationProgress >= 1) return;
      
      animationProgress += 0.02;
      
      // Clear canvas progressively from center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height);
      const currentRadius = animationProgress * maxRadius;
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
      ctx.fill();
      
      requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    setTimeout(() => {
      animate();
      controls.start({ opacity: 1 });
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [revealColor, controls]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={controls}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CanvasReveal;