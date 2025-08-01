import { useState } from 'react';
import { motion } from 'framer-motion';

interface DotBackgroundProps {
  children?: React.ReactNode;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
  expandOnHover?: boolean;
}

const DotBackground: React.FC<DotBackgroundProps> = ({
  children,
  dotColor = 'hsl(var(--accent))',
  dotSize = 2,
  gap = 20,
  expandOnHover = true,
}) => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  // Calculate dots per row/column based on viewport
  const dotsPerRow = Math.ceil(window.innerWidth / gap);
  const dotsPerColumn = Math.ceil(window.innerHeight / gap);
  const totalDots = dotsPerRow * dotsPerColumn;

  const dots = Array.from({ length: totalDots }, (_, index) => {
    const row = Math.floor(index / dotsPerRow);
    const col = index % dotsPerRow;
    
    return {
      id: index,
      x: col * gap + gap / 2,
      y: row * gap + gap / 2,
    };
  });

  return (
    <div className="relative overflow-hidden">
      {/* Dot Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          width="100%" 
          height="100%" 
          className="absolute inset-0"
          style={{ minWidth: '100vw', minHeight: '100vh' }}
        >
          {dots.map((dot) => (
            <motion.circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={dotSize}
              fill={dotColor}
              initial={{ scale: 1, opacity: 0.3 }}
              whileHover={expandOnHover ? { 
                scale: 3, 
                opacity: 0.8,
                transition: { duration: 0.2 }
              } : {}}
              animate={hoveredDot === dot.id ? {
                scale: 4,
                opacity: 1,
              } : {
                scale: 1,
                opacity: 0.3,
              }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer pointer-events-auto"
              onHoverStart={() => expandOnHover && setHoveredDot(dot.id)}
              onHoverEnd={() => expandOnHover && setHoveredDot(null)}
            />
          ))}
        </svg>
      </div>

      {/* Ripple Effect on Hover */}
      {hoveredDot !== null && expandOnHover && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: dots[hoveredDot]?.x || 0,
            top: dots[hoveredDot]?.y || 0,
            width: 100,
            height: 100,
            marginLeft: -50,
            marginTop: -50,
            borderRadius: '50%',
            border: `2px solid ${dotColor}`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DotBackground;