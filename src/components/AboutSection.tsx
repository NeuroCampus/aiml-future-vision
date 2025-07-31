import { Users, Award, BookOpen, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import neuralNetworkImage from '@/assets/neural-network.jpg';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To provide progressive education and flourish student ingenuity for successful professionals impacting society for a smarter and ethical world.',
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'AICTE approved 4-year B.Tech program with comprehensive AI/ML curriculum and hands-on learning.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Qualified faculty with PhDs and industry experience in AI, ML, and emerging technologies.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Strong industry partnerships and placement record with leading tech companies.',
    },
  ];

  const achievements = [
    { metric: '10+', label: 'Qualified Faculty' },
    { metric: '50+', label: 'Research Publications' },
    { metric: '15+', label: 'Industry Projects' },
    { metric: '2018', label: 'Established' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">CSE-AIML</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence and machine learning education through innovative curriculum, cutting-edge research, and industry collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Leading the AI Revolution</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Computer Science & Engineering - Artificial Intelligence & Machine Learning department at AMC College of Engineering is established in 2018 to meet the growing demand for AI/ML professionals. Our 4-year B.Tech program focuses on cutting-edge AI and ML concepts, preparing students to build intelligent systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We emphasize problem-solving, programming skills, and experiential learning through industry collaborations, making our students industry-ready professionals in AI and Machine Learning domains.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-lg bg-card border card-hover"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-2xl font-bold text-accent mb-1">{achievement.metric}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={neuralNetworkImage} 
                alt="Neural Network Visualization" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">2018</div>
                  <div className="text-xs text-muted-foreground">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 bg-gradient-card shadow-soft"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <highlight.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-3">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;