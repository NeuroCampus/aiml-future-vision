import React from 'react';
import logoPng from '@/assets/csai-logo.png';
import OptimizedImage from '@/components/ui/optimized-image';

interface DepartmentLogoProps {
  size?: number; // pixel size (height & width square container)
  outline?: boolean; // if true use mask outline style
  className?: string;
  title?: string;
}

// Renders the department logo either as the raw image (default) or an outline style using CSS mask.
// Outline mode uses the PNG as a mask so the shape is filled with currentColor; apply a ring + glow for visual clarity.
const DepartmentLogo: React.FC<DepartmentLogoProps> = ({ size = 48, outline = false, className = '', title = 'CSE-AIML Logo' }) => {
  if (!outline) {
    return (
      <OptimizedImage
        src={logoPng}
        alt={title}
        className={`object-contain block select-none ${className}`}
        aspectRatio="1/1"
        showLoadingState={false}
        priority={true}
      />
    );
  }

  const style: React.CSSProperties = {
    WebkitMask: `url(${logoPng}) center / contain no-repeat`,
    mask: `url(${logoPng}) center / contain no-repeat`,
    background: 'currentColor',
    width: size,
    height: size,
  };

  return (
    <span
      className={`relative inline-flex items-center justify-center text-primary ${className}`}
      aria-label={title}
      role="img"
    >
      <span
        aria-hidden="true"
        style={style}
        className="block"
      />
      {/* outline effect via ring & glow */}
      <span className="pointer-events-none absolute inset-0 rounded-[12%] ring-1 ring-primary/40 blur-[0.5px]" />
    </span>
  );
};

export default DepartmentLogo;
