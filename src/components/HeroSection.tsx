import { useState, useEffect } from 'react';
import { ArrowRight, Play, Brain, Cpu, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-aiml.jpg';

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
    { number: '500+', label: 'Students Enrolled' },
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Industry Partners' },
    { number: '20+', label: 'Research Projects' },
  ];

  const floatingIcons = [
    { Icon: Brain, delay: '0s' },
    { Icon: Cpu, delay: '1s' },
    { Icon: Bot, delay: '2s' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] opacity-100"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <Icon 
            key={index}
            className={`absolute text-white/20 w-20 h-20 float-animation`}
            style={{
              top: `${20 + index * 25}%`,
              right: `${10 + index * 15}%`,
              animationDelay: delay,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                Next-Gen AI Education
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
                Shaping the Future of{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {words[currentWord]}
                  </span>
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Join the CSE-AIML program at AMC College of Engineering and be part of the artificial intelligence revolution. Build intelligent systems, master machine learning, and innovate for tomorrow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="gradient" className="group">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10 backdrop-blur-md">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={heroImage} 
                  alt="AIML Laboratory" 
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                
                {/* Floating Info Cards */}
                <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-md rounded-lg p-4 shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">AI Research Active</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-md rounded-lg p-4 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">24/7</div>
                    <div className="text-xs text-muted-foreground">Lab Access</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tech-cyan/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;