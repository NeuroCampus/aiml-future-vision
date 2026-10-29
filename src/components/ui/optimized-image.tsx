import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  showLoadingState?: boolean;
  blurOnLoad?: boolean;
  aspectRatio?: string;
  priority?: boolean;
}

const normalizeSrc = (url: string) => {
  if (!url) return '';
  let resolved = url;
  if (resolved.startsWith('/') && /\.(jpe?g|png)$/i.test(resolved)) {
    resolved = resolved.replace(/\.(jpe?g|png)$/i, '.webp');
  }
  return encodeURI(decodeURI(resolved));
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  containerClassName = '',
  showLoadingState,
  blurOnLoad,
  aspectRatio,
  priority = false,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(() => normalizeSrc(src));

  const handleError = () => {
    if (imgSrc.endsWith('.webp')) {
      setImgSrc(imgSrc.replace(/\.webp$/i, '.jpg'));
    } else if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div
      className={cn('relative overflow-hidden', containerClassName)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={imgSrc}
        alt={alt}
        className={cn('w-full h-full object-cover', className)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
