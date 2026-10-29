import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Award, Brain, PlayCircle } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const navigate = useNavigate();

  const words = ['Intelligence', 'Innovation', 'Engineering', 'Excellence'];
  const colors = ['text-primary', 'text-primary', 'text-primary', 'text-primary'];

  // Get list of image files from public directory
  const imageFiles = [
    'DSC_0779_Original.webp',
    'DSC_9842_Original.webp',
    'IMG_0480.webp',
    'IMG_0484.webp',
    'IMG_2446.webp',
    'IMG_2461.webp',
    'IMG_2796.webp',
    'IMG_6321.CR2.webp',
    'IMG_8492.webp',
    'IMG_8962.webp',
    'accd3d75-7df7-42b0-9235-1e95050237b6.webp',
    'b171ef6b-d574-4b32-93cb-1654536489d2.webp',
    'culture.webp',
    'ideathon.webp',
    'simp.webp',
    'simp1.webp',
    'hi.webp',
    'hi11.webp',
    'hi111.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="relative overflow-hidden py-8 md:py-12">
      {/* Professional Atmospheric Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_65%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide backdrop-blur border border-primary/20 shadow-sm mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Department of CSE – AI & ML
              </motion.div>

              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="relative font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6rem leading-tight">
                  <span className="block text-balance text-foreground">Shaping the Future of</span>
                  <span className="mt-2 sm:mt-4 block">
                    <span
                      className="relative inline-flex items-center h-10 sm:h-12 lg:h-14 xl:h-16 px-1"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentWord}
                          className="font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                          initial={{ opacity: 0, y: 32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -32 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                          {words[currentWord]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </span>
                  <span className="mt-2 sm:mt-4 block text-sm sm:text-base lg:text-lg font-medium tracking-wide text-muted-foreground/90">Applied AI & ML Excellence</span>
                </h1>
              </div>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-foreground/80 dark:text-foreground/85 font-medium max-w-xl lg:max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.75 }}
              >
                A focused engineering ecosystem cultivating industry-ready professionals, innovators, and researchers in Artificial Intelligence & Machine Learning with strong fundamentals and ethical responsibility.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-10 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
              >
                <EnhancedButton 
                  onClick={() => {
                    const elem = document.getElementById('events');
                    if ((window as any).__lenis) {
                      (window as any).__lenis.scrollTo(elem || '#events', { offset: -80, duration: 1.1 });
                    } else if (elem) {
                      elem.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  size="lg" 
                  effect="glow"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/30 rounded-full px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold min-h-[48px] w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2">
                    <span>Explore Programs</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </EnhancedButton>
                <EnhancedButton
                  onClick={() => {
                    const elem = document.getElementById('about');
                    if ((window as any).__lenis) {
                      (window as any).__lenis.scrollTo(elem || '#about', { offset: -80, duration: 1.1 });
                    } else if (elem) {
                      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      navigate('/#about');
                    }
                  }}
                  size="lg"
                  effect="magnetic"
                  className="rounded-full px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold bg-background/70 border border-primary/30 text-primary hover:bg-primary/10 min-h-[48px] w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2">
                    <PlayCircle className="h-4 sm:h-5 w-4 sm:w-5" /> Vision & Impact
                  </span>
                </EnhancedButton>
              </motion.div>
            </motion.div>

            {/* Right Content - CSE AIML Department Crest Visual */}
            <motion.div 
              className="relative mt-12 lg:mt-0 order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-3xl opacity-70 pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-primary/25 animate-pulse" />
                <div className="absolute inset-4 sm:inset-6 rounded-full border border-primary/20" />
                <div className="absolute inset-8 sm:inset-12 rounded-full border border-primary/10" />
                
                {/* CSE-AIML Logo with subtle ambient float */}
                <motion.div
                  className="relative z-10 flex items-center justify-center p-4 sm:p-6"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <OptimizedImage
                    src="/cs-aiml-photos/CSAI Logo.webp"
                    alt="CSE-AIML Department Logo"
                    containerClassName="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 overflow-visible flex items-center justify-center"
                    className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_15px_35px_rgba(43,89,209,0.35)] transition-transform duration-500 hover:scale-105"
                    priority={true}
                    blurOnLoad={false}
                    showLoadingState={false}
                  />
                </motion.div>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Enhanced Carousels - Placed below main content */}
      <div className="pt-8">
        {/* Top Carousel - Left to Right */}
        <div className="overflow-hidden py-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm border-y border-primary/10 mb-1">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...imageFiles, ...imageFiles].map((image, index) => (
              <div key={index} className="mx-3 inline-block">
                <div className="relative group">
                  <OptimizedImage
                    src={`/${image}`}
                    alt={`Department photo ${index + 1}`}
                    className="h-32 w-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500 brightness-90 group-hover:brightness-100"
                    containerClassName="h-32 w-48"
                    aspectRatio="48/32"
                    blurOnLoad={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Carousel - Right to Left */}
        <div className="overflow-hidden py-6 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 backdrop-blur-sm border-y border-primary/10">
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...imageFiles, ...imageFiles].map((image, index) => (
              <div key={index} className="mx-3 inline-block">
                <div className="relative group">
                  <OptimizedImage
                    src={`/${image}`}
                    alt={`Department photo ${index + 1}`}
                    className="h-32 w-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500 brightness-90 group-hover:brightness-100"
                    containerClassName="h-32 w-48"
                    aspectRatio="48/32"
                    blurOnLoad={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;