import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VortexBackgroundProps {
  children?: React.ReactNode;
  particleCount?: number;
  baseColor?: string;
  accentColor?: string;
  speed?: number;
  className?: string;
}

const VortexBackground: React.FC<VortexBackgroundProps> = ({
  children,
  particleCount = 100,
  baseColor = '#3b82f6',
  accentColor = '#06b6d4',
  speed = 1,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      angle: number;
      radius: number;
      speed: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 200 + 50,
        speed: (Math.random() * 0.5 + 0.1) * speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? baseColor : accentColor,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw vortex effect
      const centerX = width / 2;
      const centerY = height / 2;

      particles.forEach((particle) => {
        // Calculate distance from center
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Create vortex motion
        particle.angle += particle.speed * (1 + distance * 0.0001);
        
        // Update position in spiral
        particle.x = centerX + Math.cos(particle.angle) * particle.radius;
        particle.y = centerY + Math.sin(particle.angle) * particle.radius;

        // Gradually decrease radius for spiral effect
        particle.radius *= 0.999;

        // Reset particle if it gets too close to center
        if (particle.radius < 10) {
          particle.radius = Math.random() * 200 + 150;
          particle.x = Math.random() * width;
          particle.y = Math.random() * height;
          particle.angle = Math.random() * Math.PI * 2;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connecting lines for web effect
        particles.forEach((otherParticle) => {
          const dx2 = particle.x - otherParticle.x;
          const dy2 = particle.y - otherParticle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance2) / 100 * 0.1;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, baseColor, accentColor, speed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default VortexBackground;