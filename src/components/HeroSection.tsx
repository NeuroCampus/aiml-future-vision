import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Brain, Cpu, Bot, Sparkles, Code, Users, Award, Calendar, BookOpen, Mail, Star, Zap, Rocket, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const controls = useAnimation();

  const words = ['Intelligence', 'Innovation', 'Future', 'Excellence', 'Technology', 'Leadership'];
  const colors = ['text-aiml-primary', 'text-aiml-secondary', 'text-aiml-tertiary', 'text-tech-purple', 'text-tech-cyan', 'text-tech-orange'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '500+', label: 'Students Enrolled', icon: Users, color: 'from-aiml-primary to-aiml-secondary' },
    { number: '95%', label: 'Placement Rate', icon: Award, color: 'from-aiml-secondary to-aiml-tertiary' },
    { number: '50+', label: 'Industry Partners', icon: Sparkles, color: 'from-tech-purple to-tech-cyan' },
    { number: '30+', label: 'Research Projects', icon: Brain, color: 'from-tech-cyan to-tech-orange' },
  ];

  const floatingElements = [
    { src: '/cartoons/undraw_developer-activity_4zqd.svg', size: 'w-32 h-32', position: 'top-20 left-10', delay: 0 },
    { src: '/cartoons/undraw_chat-with-ai_ir62.svg', size: 'w-40 h-40', position: 'top-40 right-16', delay: 0.5 },
    { src: '/cartoons/undraw_books_wxzz.svg', size: 'w-28 h-28', position: 'bottom-32 left-20', delay: 1 },
    { src: '/cartoons/undraw_connected-world_anke.svg', size: 'w-36 h-36', position: 'bottom-20 right-10', delay: 1.5 },
    { src: '/cartoons/undraw_educator_6dgp.svg', size: 'w-32 h-32', position: 'top-60 left-1/4', delay: 2 },
    { src: '/cartoons/undraw_teaching_58yg.svg', size: 'w-30 h-30', position: 'bottom-40 right-1/4', delay: 2.5 },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50"
      style={{
        background: `radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--aiml-primary) / 0.15) 0%, transparent 50%)`
      }}
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating SVG Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} opacity-30 pointer-events-none z-10`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1, 
            rotate: 0,
            y: [0, -20, 0]
          }}
          transition={{ 
            opacity: { delay: element.delay + 1, duration: 1 },
            scale: { delay: element.delay + 1, duration: 0.8 },
            rotate: { delay: element.delay + 1, duration: 0.8 },
            y: { duration: 4, delay: element.delay + 2, repeat: Infinity }
          }}
        >
          <img 
            src={element.src} 
            alt="AI/ML Illustration" 
            className="w-full h-full object-contain filter drop-shadow-lg" 
          />
        </motion.div>
      ))}

      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-aiml-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-aiml-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20 pb-20">
          {/* Institution Logos */}
          <motion.div
              className="col-span-2 flex items-center justify-center space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="/cs-aiml photos/CSAI Logo.jpeg" 
                  alt="CSAI Logo" 
                  className="h-16 sm:h-20 w-auto object-contain rounded"
                  
                />
                <div className="h-8 w-px bg-border opacity-50" />
                <img 
                  src="/cs-aiml photos/AMC Logo.jpg" 
                  alt="AMC Logo" 
                  className="h-16 sm:h-20 w-auto object-contain rounded"
                />
              </div>
            </motion.div>
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-aiml-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-aiml-primary to-aiml-secondary bg-clip-text text-transparent">
                Leading AIML Education in India
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-6">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span className="text-foreground">The Future of</span>
                <br />
                <div className="relative inline-block my-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      className={`${colors[currentWord]} font-extrabold`}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -50, rotateX: 90 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-aiml-primary/20 via-aiml-secondary/20 to-aiml-tertiary/20 rounded-lg blur-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Join India's premier <span className="text-aiml-primary font-semibold">AIML Academy</span> where 
              cutting-edge technology meets world-class education. Shape tomorrow's digital landscape with 
              our industry-leading curriculum and expert faculty.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button 
                onClick={() => scrollToSection('#programs')}
                size="lg" 
                className="group bg-gradient-to-r from-aiml-primary to-aiml-secondary hover:from-aiml-primary/90 hover:to-aiml-secondary/90 text-white shadow-lg hover:shadow-xl hover:shadow-aiml-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Programs</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                onClick={() => setIsVideoPlaying(true)}
                size="lg" 
                variant="outline" 
                className="group border-aiml-primary/50 hover:border-aiml-primary hover:bg-aiml-primary/10 transition-all duration-300"
              >
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative">
                      <Icon className={`h-8 w-8 mx-auto lg:mx-0 mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} />
                      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-aiml-primary to-aiml-secondary bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Background Glow */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-aiml-primary/20 via-aiml-secondary/20 to-aiml-tertiary/20 rounded-3xl blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            {/* Main Visual Container */}
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-2xl">
              {/* Educational Photos Collage */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  className="relative overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/cs-aiml photos/Eventspic/grouppic.jpg"
                    alt="Students Group"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                    Our Students
                  </div>
                </motion.div>
                
                <motion.div
                  className="relative overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/cs-aiml photos/Labpics/CASElab.jpg"
                    alt="AI Lab"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                    AI Lab
                  </div>
                </motion.div>
              </div>

              {/* Stats Pills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {[
                  { label: 'Industry Connect', value: '100%' },
                  { label: 'Hands-on Learning', value: '24/7' },
                  { label: 'Research Focus', value: 'Active' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-aiml-primary/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-aiml-primary/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.2, duration: 0.3 }}
                  >
                    {item.label}: <span className="text-aiml-primary font-bold">{item.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Feature Highlights */}
              <motion.div 
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                {[
                  { icon: Brain, label: 'AI Research', color: 'text-aiml-primary' },
                  { icon: Code, label: 'Live Projects', color: 'text-aiml-secondary' },
                  { icon: Award, label: 'Certifications', color: 'text-aiml-tertiary' }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: 'rgba(255,255,255,0.1)' 
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className={`h-6 w-6 mx-auto mb-2 ${feature.color}`} />
                      <div className="text-xs font-medium text-muted-foreground">
                        {feature.label}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Floating Achievement Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-aiml-primary to-aiml-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                🚀 Next Batch: Jan 2025
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-aiml-tertiary/20 rounded-full blur-lg"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -10, 0] 
        }}
        transition={{ 
          opacity: { delay: 2.5 },
          y: { duration: 2, repeat: Infinity, delay: 2.5 }
        }}
      >
        <div className="w-6 h-10 border-2 border-aiml-primary rounded-full flex justify-center cursor-pointer hover:border-aiml-secondary transition-colors">
          <motion.div 
            className="w-1 h-3 bg-aiml-primary rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/cartoons/bot.webm"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
