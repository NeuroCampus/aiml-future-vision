import { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [phase, setPhase] = useState<'initial' | 'fadeIn' | 'scale' | 'exit'>('initial');

  useEffect(() => {
    const timeline = [
      { phase: 'fadeIn', delay: 300 },
      { phase: 'scale', delay: 1200 },
      { phase: 'exit', delay: 2000 },
    ];

    timeline.forEach(({ phase, delay }) => {
      setTimeout(() => setPhase(phase as any), delay);
    });

    // Complete animation and show main content
    setTimeout(() => {
      onComplete();
    }, 3200);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-1000 ${
      phase === 'exit' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Background gradient animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-cyan/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main loading text */}
      <div className="relative z-10 text-center">
        <div className={`transition-all duration-1000 ease-out ${
          phase === 'initial' ? 'opacity-0 transform scale-50 translate-y-8' :
          phase === 'fadeIn' ? 'opacity-100 transform scale-75 translate-y-4' :
          phase === 'scale' ? 'opacity-100 transform scale-100 translate-y-0' :
          'opacity-0 transform scale-125 -translate-y-8'
        }`}>
          {/* CSE - AIML Text */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold">
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-tech-cyan bg-clip-text text-transparent">
              CSE
            </span>
            <span className="mx-4 text-muted-foreground">–</span>
            <span className="text-gradient bg-gradient-to-r from-tech-cyan via-accent to-primary bg-clip-text text-transparent">
              AIML
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className={`mt-4 transition-all duration-700 delay-500 ${
            phase === 'initial' || phase === 'fadeIn' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <p className="text-lg text-muted-foreground font-medium tracking-wider">
              Artificial Intelligence & Machine Learning
            </p>
          </div>
        </div>

        {/* Loading indicator dots */}
        <div className={`flex justify-center space-x-2 mt-12 transition-all duration-500 ${
          phase === 'exit' ? 'opacity-0' : 'opacity-100'
        }`}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;