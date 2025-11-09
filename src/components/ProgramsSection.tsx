import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Database, Globe, BookOpen, Users, ChevronRight, GraduationCap, Laptop } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

const ProgramsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const programs = [
    {
      title: 'B.Tech CSE (AI & ML)',
      description: 'Comprehensive 4-year undergraduate program covering AI fundamentals, machine learning, deep learning, and practical applications.',
      icon: GraduationCap,
      duration: '4 Years',
      level: 'Undergraduate',
      intake: '60 Students',
      topics: ['AI Algorithms', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Robotics'],
      image: '/cartoons/undraw_developer-activity_4zqd.svg'
    },
    {
      title: 'Core AI Fundamentals',
      description: 'Master the foundations of artificial intelligence including search algorithms, knowledge representation, and problem-solving techniques.',
      icon: Brain,
      duration: '2 Semesters',
      level: 'Core Subject',
      intake: 'All Students',
      topics: ['Search Algorithms', 'Knowledge Representation', 'Expert Systems', 'Logical Reasoning'],
      image: '/cartoons/undraw_vibe-coding_mjme.svg'
    },
    {
      title: 'Machine Learning Engineering',
      description: 'Learn to design, implement, and deploy machine learning systems at scale with industry best practices.',
      icon: Laptop,
      duration: '3 Semesters',
      level: 'Specialized',
      intake: 'Advanced Track',
      topics: ['MLOps', 'Model Deployment', 'Feature Engineering', 'Performance Optimization'],
      image: '/cartoons/undraw_monitor_ypga.svg'
    },
    {
      title: 'Data Science & Analytics',
      description: 'Develop expertise in extracting insights from complex datasets using statistical methods and visualization.',
      icon: Database,
      duration: '2 Semesters',
      level: 'Intermediate',
      intake: 'All Students',
      topics: ['Statistical Analysis', 'Data Visualization', 'Big Data Processing', 'Predictive Modeling'],
      image: '/cartoons/undraw_questions_g2px.svg'
    },
    {
      title: 'Research Methodology',
      description: 'Learn systematic approaches to AI research, including experimental design and academic writing.',
      icon: BookOpen,
      duration: '1 Semester',
      level: 'Advanced',
      intake: 'Research Track',
      topics: ['Research Design', 'Literature Review', 'Publication Methods', 'Thesis Writing'],
      image: '/cartoons/undraw_books_wxzz.svg'
    },
    {
      title: 'Industry Collaboration',
      description: 'Work on real-world projects with industry partners to gain practical experience and professional skills.',
      icon: Users,
      duration: '2 Semesters',
      level: 'Professional',
      intake: 'Final Year',
      topics: ['Internships', 'Live Projects', 'Industry Mentorship', 'Placement Preparation'],
      image: '/cartoons/undraw_team_85hs.svg'
    },
  ];

  const visiblePrograms = showAll ? programs : programs.slice(0, 3);

  return (
    <section id="programs" className="relative py-24 md:py-32 overflow-hidden">
      {/* Academic Programs Background */}
      <div className="absolute inset-0 -z-10">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        
        {/* Tech-inspired gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,hsl(var(--tech-blue)/0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,hsl(var(--tech-cyan)/0.12),transparent_65%)]" />
        
        {/* Hexagonal pattern for tech feel */}
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Academic Programs</span>
          </motion.h2>
          <motion.p 
            className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive curriculum designed to shape the next generation of AI and ML professionals through hands-on learning and industry collaboration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {visiblePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    transition: { duration: 0.3 } 
                  }}
                  className="group"
                >
                  <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                    {/* Program illustration - hidden on mobile */}
                    <div className="hidden sm:block relative h-32 lg:h-40 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                      <OptimizedImage
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        aspectRatio="16/9"
                        showLoadingState={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                            {program.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                            <span className="bg-muted px-2 py-1 rounded-full">{program.duration}</span>
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{program.level}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {program.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-medium">Intake</span>
                          <span className="text-muted-foreground">{program.intake}</span>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium mb-2 block">Key Areas</span>
                          <div className="flex flex-wrap gap-1">
                            {program.topics.slice(0, showAll ? program.topics.length : 3).map((topic, topicIndex) => (
                              <span
                                key={topicIndex}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors duration-200"
                              >
                                {topic}
                              </span>
                            ))}
                            {!showAll && program.topics.length > 3 && (
                              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                                +{program.topics.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {!showAll && programs.length > 3 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="bg-background/80 hover:bg-card border-2 border-primary/20 hover:border-primary/40 backdrop-blur-sm group transition-all duration-300"
            >
              Explore All Programs
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        )}
        
        {showAll && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={() => setShowAll(false)}
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-foreground"
            >
              Show Less
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;