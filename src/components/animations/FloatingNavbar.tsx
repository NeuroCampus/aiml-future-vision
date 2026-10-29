import { useState, useEffect } from 'react';

interface FloatingNavbarProps {
  children: React.ReactNode;
  hideThreshold?: number;
  className?: string;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  children,
  className = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
    };

    // Check once on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      } ${className}`}
    >
      {children}
    </header>
  );
};

export default FloatingNavbar;
