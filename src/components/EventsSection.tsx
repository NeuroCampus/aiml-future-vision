import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Users, Code, ArrowUpRight } from 'lucide-react';
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
      mainImage: '/cs-aiml-photos/Eventspic/HACKTOPUS.jpg',
    },
    {
      id: 2,
      title: 'IDEATHON 2024',
      description: 'Innovation competition encouraging students to present creative AI solutions for real-world problems.',
      date: 'March 2024',
      category: 'competition',
      mainImage: '/cs-aiml-photos/Eventspic/IDEATHON.jpg',
    },
    {
      id: 3,
      title: 'Angel Investment Workshop',
      description: 'Workshop on startup funding, angel investment, and entrepreneurship in the tech industry.',
      date: 'February 2024',
      category: 'workshop',
      mainImage: '/cs-aiml-photos/Eventspic/AngelInvestment.jpg',
    },
    {
      id: 4,
      title: 'Cybersecurity Awareness',
      description: 'Comprehensive workshop on cybersecurity threats, prevention strategies, and ethical hacking.',
      date: 'January 2024',
      category: 'workshop',
      mainImage: '/cs-aiml-photos/Eventspic/Cybersecurity.jpg',
    },
    {
      id: 6,
      title: 'World Debate Championship',
      description: 'International debate competition featuring AI ethics, technology impact, and future innovations.',
      date: 'December 2023',
      category: 'competition',
      mainImage: '/cs-aiml-photos/Eventspic/World-Debate.jpg',
    },
    {
      id: 7,
      title: 'Hackathon at IIT Bombay',
      description: 'Students participated in a national-level hackathon at IIT Bombay, showcasing innovative AI/ML solutions.',
      date: 'November 2023',
      category: 'hackathon',
      mainImage: '/cs-aiml-photos/Studentscertficate/Hackathon at IIT Bombay.jpg',
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

  const categoryColors: Record<string, string> = {
    hackathon: 'text-primary bg-primary/10 border-primary/20',
    competition: 'text-accent bg-accent/10 border-accent/20',
    workshop: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-900/20 dark:border-emerald-800',
  };

  return (
    <section id="events" className="relative bg-background overflow-hidden">
      <div className="h-px bg-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Campus Life</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Events &amp; <span className="text-primary">Activities</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-md md:text-right leading-relaxed">
            Hackathons, competitions, and workshops that fuel innovation and build tomorrow's leaders.
          </p>
        </div>

        {/* Filter tabs — clean pill style */}
        <div className="flex flex-wrap gap-2 mb-10">
          {eventCategories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeFilter === id
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-primary'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-44 bg-muted">
                    <OptimizedImage
                      src={event.mainImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      aspectRatio="16/9"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Category pill overlay */}
                    <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${categoryColors[event.category] || 'text-primary bg-primary/10 border-primary/20'} backdrop-blur-sm bg-background/80`}>
                      {event.category}
                    </span>
                  </div>

                  {/* Body with left accent */}
                  <div className="flex flex-1">
                    <div className="w-1 bg-gradient-to-b from-primary to-accent flex-shrink-0" />
                    <div className="p-5 flex flex-col flex-1">
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-2">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {event.date}
                      </div>

                      <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <OptimizedImage
              src="/cartoons/undraw_no-data_ig65.svg"
              alt="No events found"
              className="w-40 h-40 mx-auto mb-6 opacity-40"
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
