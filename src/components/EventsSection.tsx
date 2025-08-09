import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Users, Code, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'HACKTOPUS 2024',
      description: 'Annual hackathon organized by CSE-AIML department featuring AI/ML challenges and innovative solutions.',
      date: 'May 2024',
      category: 'hackathon',
      mainImage: ['/cs-aiml photos/Eventspic/HACKTOPUS.jpg'],
    },
    {
      id: 2,
      title: 'IDEATHON 2024',
      description: 'Innovation competition encouraging students to present creative AI solutions for real-world problems.',
      date: 'March 2024',
      category: 'competition',
      mainImage: ['/cs-aiml photos/Eventspic/IDEATHON.jpg'],
    },
    {
      id: 3,
      title: 'Angel Investment Workshop',
      description: 'Workshop on startup funding, angel investment, and entrepreneurship in the tech industry.',
      date: 'February 2024',
      category: 'workshop',
      mainImage: ['/cs-aiml photos/Eventspic/AngelInvestment.jpg'],
    },
    {
      id: 4,
      title: 'Cybersecurity Awareness',
      description: 'Comprehensive workshop on cybersecurity threats, prevention strategies, and ethical hacking.',
      date: 'January 2024',
      category: 'workshop',
      mainImage: ['/cs-aiml photos/Eventspic/Cybersecurity.jpg'],
    },
    {
      id: 5,
      title: 'KGTTI Technical Sessions',
      description: 'Knowledge sharing sessions focusing on emerging technologies and industry trends.',
      date: 'Ongoing',
      category: 'session',
      mainImage: ['/cs-aiml photos/Eventspic/KGTTI1.jpg'],
    },
    {
      id: 6,
      title: 'World Debate Championship',
      description: 'International debate competition featuring AI ethics, technology impact, and future innovations.',
      date: 'December 2023',
      category: 'competition',
      mainImage: ['/cs-aiml photos/Eventspic/World-Debate.jpg'],
    },
    {
      id: 7,
      title: 'Hackathon at IIT Bombay',
      description: 'Students participated in a national-level hackathon at IIT Bombay, showcasing their innovative AI/ML solutions.',
      date: 'November 2023',
      category: 'hackathon',
      mainImage: ['/cs-aiml photos/Studentscertficate/Hackathon at IIT Bombay.jpg'],
    },
  ];

  const eventCategories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'hackathon', label: 'Hackathons', icon: Code },
    { id: 'competition', label: 'Competitions', icon: Trophy },
    { id: 'workshop', label: 'Workshops', icon: Users },
    { id: 'session', label: 'Tech Sessions', icon: Brain },
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
    <section id="events" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Events & <span className="text-primary">Activities</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the vibrant ecosystem of hackathons, competitions, workshops, and technical sessions that foster innovation and learning in our AI/ML community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {eventCategories.map((category) => {
            const Icon = category.icon;
            return (
              <EnhancedButton
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                effect="magnetic"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </EnhancedButton>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden h-full">
                  <img
                src={event.mainImage[0]}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{event.description}</p>
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
