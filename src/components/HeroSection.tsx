import { useState, useEffect } from 'react';
import { ArrowRight, Play, Brain, Cpu, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import heroImage from '@/assets/hero-aiml.jpg';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const words = ['Intelligence', 'Innovation', 'Future', 'Technology'];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const springY = useSpring(y, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Industry Partners' },
    { number: '20+', label: 'Research Projects' },
  ];

  const floatingIcons = [
    { Icon: Brain, delay: 0 },
    { Icon: Cpu, delay: 0.5 },
    { Icon: Bot, delay: 1 },
    { Icon: Sparkles, delay: 1.5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Interactive Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Mouse Follower Effect */}
      <div 
        className="pointer-events-none absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />

      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: springY }}
      >
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 0.3, 
              scale: 1, 
              rotate: 0,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              delay: delay,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute"
            style={{
              top: `${20 + index * 20}%`,
              right: `${10 + index * 15}%`,
            }}
          >
            <Icon className="text-accent w-16 h-16 lg:w-20 lg:h-20" />
          </motion.div>
        ))}
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="w-4 h-4 mr-2" />
                </motion.div>
                Next-Gen AI Education
                <motion.div
                  className="ml-2 opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <Sparkles className="w-3 h-3" />
                </motion.div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
                variants={itemVariants}
              >
                Shaping the Future of{' '}
                <motion.span 
                  className="text-gradient relative inline-block"
                  key={currentWord}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, rotateX: 90 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    duration: 0.6 
                  }}
                >
                  {words[currentWord]}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 1 
                    }}
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                Join the CSE-AIML program at AMC College of Engineering and be part of the artificial intelligence revolution. Build intelligent systems, master machine learning, and innovate for tomorrow.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="btn-glow group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Explore Programs</span>
                  <motion.div
                    className="ml-2 relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="group border-accent text-accent hover:bg-accent/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-accent/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="mr-2 relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Play className="h-5 w-5" />
                  </motion.div>
                  <span className="relative z-10">Watch Demo</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-2xl lg:text-3xl font-bold text-accent group-hover:text-primary transition-colors"
                    animate={{ 
                      textShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0px rgba(59, 130, 246, 0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main Image */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-strong group"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img 
                  src={heroImage} 
                  alt="AIML Laboratory" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ filter: "brightness(1.1)" }}
                />
                
                {/* Interactive Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"
                  whileHover={{ opacity: 0.7 }}
                />
                
                {/* Animated Floating Info Cards */}
                <motion.div 
                  className="absolute top-6 left-6 bg-card/90 backdrop-blur-md rounded-lg p-4 shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium">AI Research Active</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-md rounded-lg p-4 shadow-lg"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -1, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-lg font-bold text-accent"
                      animate={{ 
                        textShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 10px rgba(59, 130, 246, 0.8)",
                          "0 0 0px rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      24/7
                    </motion.div>
                    <div className="text-xs text-muted-foreground">Lab Access</div>
                  </div>
                </motion.div>

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-1"
                  animate={{ y: [0, 600] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatDelay: 2
                  }}
                />
              </motion.div>

              {/* Enhanced Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-tech-cyan/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-accent rounded-full flex justify-center group-hover:border-primary transition-colors"
          whileHover={{ rotateX: 10 }}
        >
          <motion.div 
            className="w-1 h-3 bg-accent rounded-full mt-2 group-hover:bg-primary transition-colors"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.div 
          className="text-xs text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;