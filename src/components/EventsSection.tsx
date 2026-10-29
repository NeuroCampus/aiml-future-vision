import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Users, Code, ArrowUpRight, X, MapPin } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'hackathon' | 'competition' | 'workshop';
  mainImage: string;
  location?: string;
  badge?: string;
}

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const events: EventItem[] = [
    {
      id: 1,
      title: 'HACKTOPUS 2024',
      description: 'Annual hackathon organized by CSE-DS department featuring AI/ML challenges, rapid prototyping, and industry-grade solutions.',
      date: 'May 2024',
      category: 'hackathon',
      mainImage: '/cs-aiml-photos/Eventspic/HACKTOPUS.webp',
      location: 'AMC Tech Campus',
      badge: 'Flagship Event',
    },
    {
      id: 2,
      title: 'IDEATHON 2024',
      description: 'Innovation competition encouraging students to pitch and present creative AI solutions for high-impact societal challenges.',
      date: 'March 2024',
      category: 'competition',
      mainImage: '/cs-aiml-photos/Eventspic/IDEATHON.webp',
      location: 'Auditorium Hall',
      badge: 'Innovation Drive',
    },
    {
      id: 3,
      title: 'Angel Investment Workshop',
      description: 'Comprehensive workshop on early-stage tech startup funding, angel investments, pitch decks, and entrepreneurship in AI.',
      date: 'February 2024',
      category: 'workshop',
      mainImage: '/cs-aiml-photos/Eventspic/AngelInvestment.webp',
      location: 'Seminar Hall',
      badge: 'E-Cell Series',
    },
    {
      id: 4,
      title: 'Cybersecurity Awareness',
      description: 'In-depth workshop on modern cybersecurity attack vectors, defense strategies, cryptographic security, and ethical AI practices.',
      date: 'January 2024',
      category: 'workshop',
      mainImage: '/cs-aiml-photos/Eventspic/Cybersecurity.webp',
      location: 'Computing Center',
      badge: 'Hands-on Lab',
    },
    {
      id: 5,
      title: 'World Debate Championship',
      description: 'International debating competition exploring AI ethics, existential risks, regulatory frameworks, and future technologies.',
      date: 'December 2023',
      category: 'competition',
      mainImage: '/cs-aiml-photos/Eventspic/World-Debate.webp',
      location: 'Main Auditorium',
      badge: 'Global Forum',
    },
    {
      id: 6,
      title: 'Hackathon at IIT Bombay',
      description: 'AMC students represented the department at IIT Bombay, demonstrating state-of-the-art AI/ML algorithms and prototype models.',
      date: 'November 2023',
      category: 'hackathon',
      mainImage: '/cs-aiml-photos/Studentscertficate/Hackathon at IIT Bombay.webp',
      location: 'IIT Bombay, Mumbai',
      badge: 'National Finalist',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'hackathon', label: 'Hackathons', icon: Code },
    { id: 'competition', label: 'Competitions', icon: Trophy },
    { id: 'workshop', label: 'Workshops', icon: Users },
  ];

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(e => e.category === activeFilter);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'hackathon':
        return 'text-blue-600 bg-blue-500/10 border-blue-500/20 dark:text-blue-400';
      case 'competition':
        return 'text-amber-600 bg-amber-500/10 border-amber-500/20 dark:text-amber-400';
      case 'workshop':
        return 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20 dark:text-emerald-400';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section id="events" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Events &amp; <span className="text-primary">Activities</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Hands-on hackathons, research symposiums, and innovation workshops that build competitive, industry-ready expertise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {categories.map(({ id, label, icon: Icon }) => {
            const isActive = activeFilter === id;
            return (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground bg-card/70 backdrop-blur-sm border border-border/50 hover:text-foreground hover:border-primary/40'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeEventFilter"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => {
              const theme = getCategoryTheme(event.category);

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group flex flex-col"
                >
                  <div 
                    onClick={() => setSelectedEvent(event)}
                    className="cursor-pointer relative h-full flex flex-col justify-between rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40"
                  >
                    {/* Event Banner Image */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted/30">
                      <OptimizedImage
                        src={event.mainImage}
                        alt={event.title}
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        aspectRatio="16/9"
                        showLoadingState={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-md bg-background/90 ${theme}`}>
                          {event.category}
                        </span>

                        {event.badge && (
                          <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-background/80 backdrop-blur-md text-foreground border border-border/40">
                            {event.badge}
                          </span>
                        )}
                      </div>

                      {/* Date & Location overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                        <span className="flex items-center gap-1.5 drop-shadow">
                          <Calendar className="w-3.5 h-3.5 text-primary-foreground" />
                          {event.date}
                        </span>
                        {event.location && (
                          <span className="flex items-center gap-1 drop-shadow opacity-90">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold text-base sm:text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {event.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-primary font-semibold">
                        <span>Click to view details</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-60 w-full overflow-hidden bg-muted">
                <OptimizedImage
                  src={selectedEvent.mainImage}
                  alt={selectedEvent.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  showLoadingState={false}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full border ${getCategoryTheme(selectedEvent.category)}`}>
                    {selectedEvent.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {selectedEvent.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">
                  {selectedEvent.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {selectedEvent.description}
                </p>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
