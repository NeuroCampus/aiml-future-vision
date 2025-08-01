import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollAnimation3DProps {
  children: React.ReactNode;
  rotateIntensity?: number;
  scaleIntensity?: number;
  className?: string;
}

const ScrollAnimation3D: React.FC<ScrollAnimation3DProps> = ({
  children,
  rotateIntensity = 15,
  scaleIntensity = 0.1,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-rotateIntensity, rotateIntensity]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-rotateIntensity, rotateIntensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1 - scaleIntensity, 1, 1 - scaleIntensity]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      style={{
        rotateX,
        rotateY,
        scale,
        opacity,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation3D;