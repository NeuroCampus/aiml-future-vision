import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Users, Code, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import OptimizedImage from '@/components/ui/optimized-image';

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'HACKTOPUS 2024',
      description: 'Annual hackathon organized by CSE-DS department featuring AI/ML challenges and innovative solutions.',
      date: 'May 2024',
      category: 'hackathon',
      mainImage: ['/cs-aiml-photos/Eventspic/HACKTOPUS.jpg'],
    },
    {
      id: 2,
      title: 'IDEATHON 2024',
      description: 'Innovation competition encouraging students to present creative AI solutions for real-world problems.',
      date: 'March 2024',
      category: 'competition',
      mainImage: ['/cs-aiml-photos/Eventspic/IDEATHON.jpg'],
    },
    {
      id: 3,
      title: 'Angel Investment Workshop',
      description: 'Workshop on startup funding, angel investment, and entrepreneurship in the tech industry.',
      date: 'February 2024',
      category: 'workshop',
      mainImage: ['/cs-aiml-photos/Eventspic/AngelInvestment.jpg'],
    },
    {
      id: 4,
      title: 'Cybersecurity Awareness',
      description: 'Comprehensive workshop on cybersecurity threats, prevention strategies, and ethical hacking.',
      date: 'January 2024',
      category: 'workshop',
      mainImage: ['/cs-aiml-photos/Eventspic/Cybersecurity.jpg'],
    },
    
    
    {
      id: 6,
      title: 'World Debate Championship',
      description: 'International debate competition featuring AI ethics, technology impact, and future innovations.',
      date: 'December 2023',
      category: 'competition',
      mainImage: ['/cs-aiml-photos/Eventspic/World-Debate.jpg'],
    },
    {
      id: 7,
      title: 'Hackathon at IIT Bombay',
      description: 'Students participated in a national-level hackathon at IIT Bombay, showcasing their innovative AI/ML solutions.',
      date: 'November 2023',
      category: 'hackathon',
      mainImage: ['/cs-aiml-photos/Studentscertficate/Hackathon at IIT Bombay.jpg'],
    },
  ];

  const eventCategories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'hackathon', label: 'Hackathons', icon: Code },
    { id: 'competition', label: 'Competitions', icon: Trophy },
    { id: 'workshop', label: 'Workshops', icon: Users },
    
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      {/* Events & Activities Background */}
      <div className="absolute inset-0 -z-10">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
        
        {/* Dynamic event gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,hsl(var(--tech-orange)/0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,hsl(var(--tech-violet)/0.12),transparent_65%)]" />
        
        {/* Celebration pattern */}
        <div className="absolute inset-0 opacity-[0.1] bg-[conic-gradient(from_0deg_at_50%_50%,hsl(var(--primary)/0.2),transparent_30%,hsl(var(--accent)/0.2),transparent_60%,hsl(var(--primary)/0.2))] bg-[size:200px_200px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
            Events & <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Discover the vibrant ecosystem of hackathons, competitions, workshops, and technical sessions that foster innovation and learning in our AI/ML community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10">
          {eventCategories.map((category) => {
            const Icon = category.icon;
            return (
              <EnhancedButton
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                effect="magnetic"
                className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base min-h-[44px] flex-1 sm:flex-none"
              >
                <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {category.label}
              </EnhancedButton>
            );
          })}
        </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="group"
              >
                <Card className="overflow-hidden h-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/95 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={event.mainImage[0]}
                      alt={event.title}
                      className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                      aspectRatio="16/9"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="px-2 sm:px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="p-3 sm:p-4 md:p-6">
                    <CardTitle className="text-base sm:text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-primary" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Illustration for empty states or mobile enhancement */}
        {filteredEvents.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <OptimizedImage
              src="/cartoons/undraw_no-data_ig65.svg"
              alt="No events found"
              className="w-48 h-48 mx-auto mb-6 opacity-50"
              aspectRatio="1/1"
              showLoadingState={false}
            />
            <p className="text-muted-foreground">No events found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
