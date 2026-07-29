import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Database, BookOpen, Users, ChevronRight, GraduationCap, Laptop, ArrowRight } from 'lucide-react';
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
      image: '/cartoons/undraw_developer-activity_4zqd.svg',
      accentColor: 'from-primary/10 to-primary/5',
    },
    {
      title: 'Core AI Fundamentals',
      description: 'Master the foundations of artificial intelligence including search algorithms, knowledge representation, and problem-solving techniques.',
      icon: Brain,
      duration: '2 Semesters',
      level: 'Core Subject',
      intake: 'All Students',
      topics: ['Search Algorithms', 'Knowledge Representation', 'Expert Systems', 'Logical Reasoning'],
      image: '/cartoons/undraw_vibe-coding_mjme.svg',
      accentColor: 'from-accent/10 to-accent/5',
    },
    {
      title: 'Machine Learning Engineering',
      description: 'Learn to design, implement, and deploy machine learning systems at scale with industry best practices.',
      icon: Laptop,
      duration: '3 Semesters',
      level: 'Specialized',
      intake: 'Advanced Track',
      topics: ['MLOps', 'Model Deployment', 'Feature Engineering', 'Performance Optimization'],
      image: '/cartoons/undraw_monitor_ypga.svg',
      accentColor: 'from-primary/10 to-primary/5',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Develop expertise in extracting insights from complex datasets using statistical methods and visualization.',
      icon: Database,
      duration: '2 Semesters',
      level: 'Intermediate',
      intake: 'All Students',
      topics: ['Statistical Analysis', 'Data Visualization', 'Big Data Processing', 'Predictive Modeling'],
      image: '/cartoons/undraw_questions_g2px.svg',
      accentColor: 'from-accent/10 to-accent/5',
    },
    {
      title: 'Research Methodology',
      description: 'Learn systematic approaches to AI research, including experimental design and academic writing.',
      icon: BookOpen,
      duration: '1 Semester',
      level: 'Advanced',
      intake: 'Research Track',
      topics: ['Research Design', 'Literature Review', 'Publication Methods', 'Thesis Writing'],
      image: '/cartoons/undraw_books_wxzz.svg',
      accentColor: 'from-primary/10 to-primary/5',
    },
    {
      title: 'Industry Collaboration',
      description: 'Work on real-world projects with industry partners to gain practical experience and professional skills.',
      icon: Users,
      duration: '2 Semesters',
      level: 'Professional',
      intake: 'Final Year',
      topics: ['Internships', 'Live Projects', 'Industry Mentorship', 'Placement Preparation'],
      image: '/cartoons/undraw_team_85hs.svg',
      accentColor: 'from-accent/10 to-accent/5',
    },
  ];

  const visiblePrograms = showAll ? programs : programs.slice(0, 3);

  return (
    <section id="programs" className="relative overflow-hidden bg-muted/30">
      <div className="h-px bg-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Section header — editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Curriculum</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Academic <span className="text-primary">Programs</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-md md:text-right leading-relaxed">
            Comprehensive curriculum designed to shape the next generation of AI and ML professionals.
          </p>
        </div>

        {/* Program grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {visiblePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group"
                >
                  <div className="h-full bg-background rounded-2xl border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Top image strip */}
                    <div className={`relative h-28 bg-gradient-to-br ${program.accentColor} flex items-center justify-center overflow-hidden`}>
                      <OptimizedImage
                        src={program.image}
                        alt={program.title}
                        className="h-24 w-auto object-contain opacity-80 group-hover:scale-105 transition-transform duration-500"
                        aspectRatio="16/9"
                        showLoadingState={false}
                      />
                      {/* Level badge */}
                      <span className="absolute top-3 right-3 px-2.5 py-1 bg-background/90 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/20">
                        {program.level}
                      </span>
                    </div>

                    {/* Left accent border on body */}
                    <div className="flex flex-1">
                      <div className="w-1 bg-gradient-to-b from-primary to-accent flex-shrink-0 rounded-b-full" />
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-4.5 w-4.5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold leading-snug group-hover:text-primary transition-colors duration-200">{program.title}</h3>
                            <span className="text-xs text-muted-foreground font-medium">{program.duration}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{program.description}</p>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Key Areas</p>
                          <div className="flex flex-wrap gap-1.5">
                            {program.topics.slice(0, 3).map((topic, i) => (
                              <span key={i} className="px-2 py-0.5 bg-primary/8 text-primary text-[11px] font-medium rounded-full border border-primary/15">
                                {topic}
                              </span>
                            ))}
                            {program.topics.length > 3 && (
                              <span className="px-2 py-0.5 bg-muted text-muted-foreground text-[11px] rounded-full">
                                +{program.topics.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show more/less */}
        <div className="text-center mt-10">
          {!showAll && programs.length > 3 ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Explore All Programs
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              Show Less
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;