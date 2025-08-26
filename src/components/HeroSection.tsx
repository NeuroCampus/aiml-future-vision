import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Award, Sparkles, Brain, PlayCircle } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);

  const words = ['Intelligence', 'Innovation', 'Engineering', 'Excellence'];
  const colors = ['text-primary', 'text-primary', 'text-primary', 'text-primary'];

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
    <section id="home" className="relative overflow-hidden py-20 md:py-28">
      {/* Enhanced Background with Professional Academic Theme */}
      <div className="absolute inset-0 -z-10">
        {/* Hero background image overlay */}
        <div className="absolute inset-0 bg-[url('/cs-aiml-photos/Labpics/Seminarhall.jpg')] bg-cover bg-center bg-no-repeat opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        
        {/* Professional gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.25),transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--tech-purple)/0.15),transparent_60%)]" />
        
        {/* Grid pattern for tech feel */}
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] bg-[repeating-linear-gradient(45deg,hsl(var(--primary)/0.08)_0_2px,transparent_2px_20px)]" />
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 via-primary/10 to-fuchsia-500/15 text-primary rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide backdrop-blur border border-primary/20 shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Department of CSE – AI & ML
            </motion.div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="relative font-bold tracking-tight text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] leading-[1.07]">
                <span className="block text-balance text-foreground">Shaping the Future of</span>
                <span className="mt-4 block">
                  <span
                    className="relative inline-flex items-center h-12 sm:h-14 lg:h-[3.6rem] px-1"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWord}
                        className="font-extrabold bg-gradient-to-r from-primary/95 via-primary to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
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
                <span className="mt-4 block text-sm sm:text-base font-medium tracking-wide text-muted-foreground/90">Applied AI & ML Excellence</span>
              </h1>
            </div>

            {/* Description */}
            <motion.p 
              className="text-[0.95rem] sm:text-lg text-muted-foreground/90 max-w-xl lg:max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.75 }}
            >
              A focused engineering ecosystem cultivating industry-ready professionals, innovators, and researchers in Artificial Intelligence & Machine Learning with strong fundamentals and ethical responsibility.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <EnhancedButton 
                onClick={() => scrollToSection('#programs')}
                size="lg" 
                effect="glow"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/30 rounded-full px-7 py-4 text-sm sm:text-base font-semibold"
              >
                <span className="flex items-center gap-2">
                  <span>Explore Programs</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </EnhancedButton>
              <EnhancedButton
                onClick={() => scrollToSection('#vision')}
                size="lg"
                effect="magnetic"
                className="rounded-full px-7 py-4 text-sm sm:text-base font-semibold bg-background/70 border border-primary/30 text-primary hover:bg-primary/10"
              >
                <span className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" /> Vision & Impact
                </span>
              </EnhancedButton>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative p-4 rounded-xl border border-primary/25 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-fuchsia-500/10" />
                    <div className="flex items-center gap-4 relative">
                      <div className="p-2.5 rounded-lg bg-primary/10 ring-1 ring-primary/30">
                        <Icon className="h-5 w-5 text-primary drop-shadow" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold tracking-tight text-foreground">{stat.number}</div>
                        <div className="text-[10px] sm:text-[11px] text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
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
            className="relative mt-16 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22,1,0.36,1] }}
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-fuchsia-500/25 to-transparent blur-2xl opacity-70" />
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse" />
              <div className="absolute inset-6 rounded-full border border-primary/20" />
              <div className="absolute inset-12 rounded-full border border-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-background/60 backdrop-blur-xl border border-primary/30 shadow-xl shadow-primary/10 flex flex-col items-center justify-center gap-3 text-center p-6">
                  <div className="text-[11px] uppercase tracking-wider text-primary/80 font-medium">AI & ML Focus</div>
                  <p className="text-lg sm:text-xl font-semibold text-foreground drop-shadow">
                    Applied Intelligence
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug max-w-[10rem]">
                    Research • Innovation • Industry • Impact
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-2 w-full">
                    {['Research','Projects','Ranks','Innovation'].map(label => (
                      <span key={label} className="text-[9px] sm:text-[10px] px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-medium tracking-wide">
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
    </section>
  );
};

export default HeroSection;
