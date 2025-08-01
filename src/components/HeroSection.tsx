import { useState, useEffect } from 'react';
import { ArrowRight, Play, Brain, Cpu, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import CanvasReveal from '@/components/animations/CanvasReveal';
import DotBackground from '@/components/animations/DotBackground';
import ScrollAnimation3D from '@/components/animations/ScrollAnimation3D';
import VortexBackground from '@/components/animations/VortexBackground';
import heroImage from '@/assets/students-group-real.jpg';
import aiIllustration from '@/assets/ai-illustration.jpg';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Intelligence', 'Innovation', 'Future', 'Technology'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '200+', label: 'Students Enrolled' },
    { number: '85%', label: 'Placement Rate' },
    { number: '25+', label: 'Industry Partners' },
    { number: '15+', label: 'Research Projects' },
  ];

  const floatingIcons = [
    { Icon: Brain, delay: '0s' },
    { Icon: Cpu, delay: '1s' },
    { Icon: Bot, delay: '2s' },
  ];

  return (
    <DotBackground expandOnHover={true}>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Enhanced Floating Background Elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {floatingIcons.map(({ Icon, delay }, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: `${20 + index * 25}%`,
                right: `${10 + index * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                delay: parseFloat(delay),
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Icon className="text-accent/30 w-20 h-20" />
            </motion.div>
          ))}
          
          {/* Enhanced Gradient Orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-blue/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-cyan/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Next-Gen AI Education
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Shaping the Future of{' '}
                  <motion.span 
                    className="text-gradient relative"
                    key={words[currentWord]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {words[currentWord]}
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning at AMC College of Engineering. Established in 2018, preparing the next generation of AI professionals.
                </motion.p>
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="btn-glow group pulse-glow">
                    Explore Programs
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="group border-accent text-accent hover:bg-accent/10 interactive-bg">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center card-hover p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="text-2xl lg:text-3xl font-bold text-accent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Right Content - Hero Image with Canvas Reveal */}
            <ScrollAnimation3D className="relative">
              <CanvasReveal revealColor="#1e293b" duration={1.5}>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative">
                    {/* Main Image */}
                    <motion.div 
                      className="relative rounded-2xl overflow-hidden shadow-strong"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={heroImage} 
                        alt="AIML Laboratory" 
                        className="w-full h-[600px] object-cover"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                      
                      {/* Enhanced Floating Info Cards */}
                      <motion.div 
                        className="absolute top-6 left-6 bg-card/90 backdrop-blur-md rounded-lg p-4 shadow-lg"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          y: [0, -10, 0] 
                        }}
                        transition={{ 
                          opacity: { delay: 1 },
                          scale: { delay: 1 },
                          y: { duration: 3, repeat: Infinity, delay: 1 }
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.div 
                            className="w-3 h-3 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-sm font-medium">AI Research Active</span>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-md rounded-lg p-4 shadow-lg"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          y: [0, -15, 0] 
                        }}
                        transition={{ 
                          opacity: { delay: 1.2 },
                          scale: { delay: 1.2 },
                          y: { duration: 4, delay: 1.2, repeat: Infinity }
                        }}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold text-accent">24/7</div>
                          <div className="text-xs text-muted-foreground">Lab Access</div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Enhanced Decorative Elements */}
                    <motion.div 
                      className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute -bottom-4 -left-4 w-32 h-32 bg-tech-cyan/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 4, delay: 1, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </CanvasReveal>
            </ScrollAnimation3D>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0] 
          }}
          transition={{ 
            opacity: { delay: 2 },
            y: { duration: 2, repeat: Infinity, delay: 2 }
          }}
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-accent rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </DotBackground>
  );
};

export default HeroSection;