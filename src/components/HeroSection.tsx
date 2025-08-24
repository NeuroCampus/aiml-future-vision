import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Award, Sparkles, Brain } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);

  const words = ['Intelligence', 'Innovation', 'Future', 'Excellence'];
  const colors = ['text-primary', 'text-primary', 'text-primary', 'text-primary'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '500+', label: 'Students Enrolled', icon: Users },
    { number: '75%', label: 'Placement Rate', icon: Award },
    { number: '7+', label: 'Industry Partners', icon: Sparkles },
    { number: '15+', label: 'Research Projects', icon: Brain },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-background overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-80px)] pt-16 pb-12">
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
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm mb-4 md:mb-6"
            >
              <span className="font-semibold">
                Welcome to the CSE-AIML Academy
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Shaping the </span>
                <br className="sm:hidden"/>
                <div className="relative inline-block my-1 h-12 sm:h-16 lg:h-20 align-middle">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      className={`${colors[currentWord]} font-extrabold`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-foreground">
                  &nbsp;of Tomorrow
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore the frontiers of Artificial Intelligence and Machine Learning with our world-class faculty and state-of-the-art facilities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <EnhancedButton 
                onClick={() => scrollToSection('#programs')}
                size="lg" 
                effect="glow"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 rounded-full px-6 py-3 sm:px-8 sm:py-4"
              >
                <span className="flex items-center space-x-2 text-base sm:text-lg font-semibold">
                  <span>Explore Programs</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </EnhancedButton>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-foreground">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div 
            className="relative flex justify-center items-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Floating elements for desktop */}
              <div className="hidden lg:block absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full animate-float-slow"></div>
              <div className="hidden lg:block absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-float"></div>
              
              {/* Main illustration */}
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 sm:p-8 lg:p-12">
                <img 
                  src="/cartoons/undraw_chat-with-ai_ir62.svg"
                  alt="AI and Machine Learning Innovation"
                  className="w-full h-auto object-contain animate-float-slow"
                />
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
                
                {/* Glowing effect for larger screens */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
