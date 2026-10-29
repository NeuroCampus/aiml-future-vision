import React, { useState, useRef, useEffect } from 'react';
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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  containerClassName = '',
  showLoadingState = true,
  blurOnLoad = true,
  aspectRatio,
  priority = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Normalize URL and resolve webp
  const normalizeSrc = (url: string) => {
    if (!url) return '';
    let resolved = url;
    // Auto-convert standard image extensions to .webp for local files
    if (resolved.startsWith('/') && /\.(jpe?g|png)$/i.test(resolved)) {
      resolved = resolved.replace(/\.(jpe?g|png)$/i, '.webp');
    }
    return encodeURI(decodeURI(resolved));
  };

  const [currentSrc, setCurrentSrc] = useState(() => normalizeSrc(src));

  useEffect(() => {
    const nextSrc = normalizeSrc(src);
    setCurrentSrc(nextSrc);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  // Check if image is already cached/complete
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoading(false);
    }
  }, [currentSrc]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    // If .webp fails, attempt automatic fallback to original .jpg or .png
    if (currentSrc.endsWith('.webp') && !hasError) {
      const fallbackJpg = currentSrc.replace(/\.webp$/i, '.jpg');
      setCurrentSrc(fallbackJpg);
      setHasError(true);
      return;
    }
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }
    setIsLoading(false);
  };

  return (
    <div
      className={cn('relative overflow-hidden', containerClassName)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300 ease-out will-change-[opacity]',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
