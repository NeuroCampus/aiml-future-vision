import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Award, Sparkles, Brain, PlayCircle } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);

  const words = ['Intelligence', 'Innovation', 'Engineering', 'Excellence'];
  const colors = ['text-primary', 'text-primary', 'text-primary', 'text-primary'];

  // Get list of image files from public directory
  const imageFiles = [
    'DSC_0779_Original.JPG',
    'DSC_9842_Original.JPG',
    'IMG_0480.jpg',
    'IMG_0484.jpg',
    'IMG_2446.jpeg',
    'IMG_2461.jpeg',
    'IMG_2796.jpeg',
    'IMG_6321.CR2.jpg',
    'IMG_8492.jpg',
    'IMG_8962.jpg',
    'accd3d75-7df7-42b0-9235-1e95050237b6.jpg',
    'b171ef6b-d574-4b32-93cb-1654536489d2.jpg',
    'culture.jpeg',
    'ideathon.jpg',
    'simp.jpg',
    'simp1.jpg',
    'hi.jpeg',
    'hi11.jpeg',
    'hi111.jpeg'
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
   
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden py-8 md:py-12">
      {/* Professional Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
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
                className="text-base sm:text-lg lg:text-xl text-muted-foreground/90 max-w-xl lg:max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
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
                  onClick={() => scrollToSection('#events')}
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
                  onClick={() => scrollToSection('#vision')}
                  size="lg"
                  effect="magnetic"
                  className="rounded-full px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold bg-background/70 border border-primary/30 text-primary hover:bg-primary/10 min-h-[48px] w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2">
                    <PlayCircle className="h-4 sm:h-5 w-4 sm:w-5" /> Vision & Impact
                  </span>
                </EnhancedButton>
              </motion.div>            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative p-3 sm:p-4 rounded-xl border border-primary/25 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55 overflow-hidden">
                    <div className="flex items-center gap-3 sm:gap-4 relative">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 ring-1 ring-primary/30 flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary drop-shadow" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-foreground">{stat.number}</div>
                        <div className="text-[10px] sm:text-[11px] lg:text-xs text-muted-foreground font-medium uppercase tracking-wide leading-tight">{stat.label}</div>
                      </div>
                    </div>
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/50 transition-all duration-500" />
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Visual */}
          <motion.div 
            className="relative mt-12 lg:mt-0 order-first lg:order-last"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22,1,0.36,1] }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-fuchsia-500/25 to-transparent blur-2xl opacity-70" />
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse" />
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-primary/20" />
              <div className="absolute inset-8 sm:inset-12 rounded-full border border-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl bg-background/60 backdrop-blur-xl border border-primary/30 shadow-xl shadow-primary/10 flex flex-col items-center justify-center gap-2 sm:gap-3 text-center p-4 sm:p-6">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary/80 font-medium">AI & ML Focus</div>
                  <p className="text-base sm:text-lg lg:text-xl font-semibold text-foreground drop-shadow">
                    Applied Intelligence
                  </p>
                  <p className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground leading-snug max-w-[8rem] sm:max-w-[10rem]">
                    Research • Innovation • Industry • Impact
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-1 sm:gap-2 w-full">
                    {['Research','Projects','Ranks','Innovation'].map(label => (
                      <span key={label} className="text-[8px] sm:text-[9px] lg:text-[10px] px-1 sm:px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-medium tracking-wide">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
                  <img 
                    src={`/${image}`} 
                    alt={`Department photo ${index + 1}`}
                    className="h-32 w-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500 brightness-90 group-hover:brightness-100"
                    loading="lazy"
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
                  <img 
                    src={`/${image}`} 
                    alt={`Department photo ${index + 1}`}
                    className="h-32 w-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500 brightness-90 group-hover:brightness-100"
                    loading="lazy"
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