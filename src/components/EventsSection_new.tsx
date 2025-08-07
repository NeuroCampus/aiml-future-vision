import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Users, Code, Brain, Zap, MapPin, Clock, Award, Camera, Play, ExternalLink, Star, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const events = [
    {
      id: 1,
      title: 'HACKTOPUS 2024',
      description: 'Annual hackathon organized by CSE-AIML department featuring AI/ML challenges and innovative solutions.',
      date: 'May 2024',
      type: 'Hackathon',
      category: 'hackathon',
      participants: '200+ students',
      duration: '36 hours',
      location: 'AMC Engineering College',
      images: [
        '/cs-aiml photos/Eventspic/HACKTOPUS.jpg',
        '/cs-aiml photos/Eventspic/grouppic.jpg',
        '/cs-aiml photos/Eventspic/audience.jpg'
      ],
      mainImage: '/cs-aiml photos/Eventspic/HACKTOPUS.jpg',
      highlights: ['Winner: Best AI Solution', '36-hour coding marathon', 'Industry mentor support', 'Prize worth ₹50,000'],
      winners: ['Harshavardhan - Best Innovation', 'Triosync Team - Best Collaboration'],
      color: 'from-aiml-primary to-aiml-secondary'
    },
    {
      id: 2,
      title: 'IDEATHON 2024',
      description: 'Innovation competition encouraging students to present creative AI solutions for real-world problems.',
      date: 'March 2024',
      type: 'Competition',
      category: 'competition',
      participants: '150+ teams',
      duration: '2 days',
      location: 'Innovation Hub',
      images: [
        '/cs-aiml photos/Eventspic/IDEATHON.jpg',
        '/cs-aiml photos/Eventspic/IDEATHON1.jpg',
        '/cs-aiml photos/Eventspic/IDEATHON2.jpg'
      ],
      mainImage: '/cs-aiml photos/Eventspic/IDEATHON.jpg',
      highlights: ['Innovative AI concepts', 'Industry problem statements', 'Venture capital exposure', 'Mentorship from experts'],
      winners: ['Smart City Solutions Team', 'HealthAI Innovation Group'],
      color: 'from-aiml-secondary to-aiml-tertiary'
    },
    {
      id: 3,
      title: 'Angel Investment Workshop',
      description: 'Workshop on startup funding, angel investment, and entrepreneurship in the tech industry.',
      date: 'February 2024',
      type: 'Workshop',
      category: 'workshop',
      participants: '80+ attendees',
      duration: '1 day',
      location: 'Seminar Hall',
      images: [
        '/cs-aiml photos/Eventspic/AngelInvestment.jpg'
      ],
      mainImage: '/cs-aiml photos/Eventspic/AngelInvestment.jpg',
      highlights: ['Startup funding strategies', 'Angel investor insights', 'Pitch deck development', 'Networking session'],
      winners: [],
      color: 'from-tech-purple to-tech-cyan'
    },
    {
      id: 4,
      title: 'Cybersecurity Awareness',
      description: 'Comprehensive workshop on cybersecurity threats, prevention strategies, and ethical hacking.',
      date: 'January 2024',
      type: 'Workshop',
      category: 'workshop',
      participants: '120+ students',
      duration: '1 day',
      location: 'Computer Lab',
      images: [
        '/cs-aiml photos/Eventspic/Cybersecurity.jpg'
      ],
      mainImage: '/cs-aiml photos/Eventspic/Cybersecurity.jpg',
      highlights: ['Ethical hacking demos', 'Security best practices', 'Industry expert sessions', 'Hands-on labs'],
      winners: [],
      color: 'from-tech-cyan to-tech-orange'
    },
    {
      id: 5,
      title: 'KGTTI Technical Sessions',
      description: 'Knowledge sharing sessions focusing on emerging technologies and industry trends.',
      date: 'Ongoing',
      type: 'Technical Session',
      category: 'session',
      participants: '100+ per session',
      duration: 'Regular',
      location: 'Various Venues',
      images: [
        '/cs-aiml photos/Eventspic/KGTTI1.jpg',
        '/cs-aiml photos/Eventspic/KGTTI2.jpg',
        '/cs-aiml photos/Eventspic/KGTTI3.jpg',
        '/cs-aiml photos/Eventspic/KGTTI4.jpg'
      ],
      mainImage: '/cs-aiml photos/Eventspic/KGTTI1.jpg',
      highlights: ['Expert speakers', 'Technology trends', 'Interactive sessions', 'Q&A sessions'],
      winners: [],
      color: 'from-aiml-primary to-tech-purple'
    },
    {
      id: 6,
      title: 'World Debate Championship',
      description: 'International debate competition featuring AI ethics, technology impact, and future innovations.',
      date: 'December 2023',
      type: 'Debate',
      category: 'competition',
      participants: '50+ debaters',
      duration: '3 days',
      location: 'Main Auditorium',
      images: [
        '/cs-aiml photos/Eventspic/World-Debate.jpg'
      ],
      mainImage: '/cs-aiml photos/Eventspic/World-Debate.jpg',
      highlights: ['AI ethics debates', 'International participants', 'Expert judges', 'Trophy ceremony'],
      winners: ['Best Speaker Award', 'Team Excellence Recognition'],
      color: 'from-tech-orange to-aiml-primary'
    },
    {
      id: 7,
      title: 'Startup Idea Pitch Competition',
      description: 'Platform for students to pitch their innovative startup ideas to industry experts and investors.',
      date: 'November 2023',
      type: 'Competition',
      category: 'competition',
      participants: '60+ teams',
      duration: '1 day',
      location: 'Innovation Center',
      images: [
        '/cs-aiml photos/Eventspic/StartupIdea.jpg'
      ],
      mainImage: '/cs-aiml photos/Eventspic/StartupIdea.jpg',
      highlights: ['Innovative startup ideas', 'Investor feedback', 'Mentorship opportunities', 'Seed funding possibilities'],
      winners: ['Best Business Model', 'Most Innovative Idea'],
      color: 'from-aiml-secondary to-tech-cyan'
    },
    {
      id: 8,
      title: 'Placement Awareness Program',
      description: 'Comprehensive program to prepare students for placements with resume building and interview skills.',
      date: 'October 2023',
      type: 'Workshop',
      category: 'workshop',
      participants: '200+ students',
      duration: '2 days',
      location: 'Multiple Venues',
      images: [
        '/cs-aiml photos/Eventspic/Placementawareness.png'
      ],
      mainImage: '/cs-aiml photos/Eventspic/Placementawareness.png',
      highlights: ['Resume building', 'Interview preparation', 'Industry insights', 'Mock interviews'],
      winners: [],
      color: 'from-tech-purple to-aiml-tertiary'
    }
  ];

  const eventCategories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'hackathon', label: 'Hackathons', icon: Code },
    { id: 'competition', label: 'Competitions', icon: Trophy },
    { id: 'workshop', label: 'Workshops', icon: Users },
    { id: 'session', label: 'Tech Sessions', icon: Brain }
  ];

  const clubs = [
    {
      name: 'NeuroNET Club',
      focus: 'Neural Networks & Deep Learning',
      icon: Brain,
      activities: ['Technical Workshops', 'Research Paper Reviews', 'Project Collaboration'],
      members: '100+',
      color: 'from-aiml-primary to-aiml-secondary'
    },
    {
      name: 'Quantum Quick',
      focus: 'Quantum Computing & Algorithms',
      icon: Zap,
      activities: ['Quantum Workshops', 'Algorithm Challenges', 'Research Projects'],
      members: '50+',
      color: 'from-aiml-secondary to-aiml-tertiary'
    },
    {
      name: 'CodeCrafters',
      focus: 'Competitive Programming',
      icon: Code,
      activities: ['Coding Contests', 'Algorithm Training', 'Platform Challenges'],
      members: '80+',
      color: 'from-tech-purple to-tech-cyan'
    },
    {
      name: 'AI Innovators',
      focus: 'Artificial Intelligence Projects',
      icon: Target,
      activities: ['AI Projects', 'Innovation Labs', 'Industry Connect'],
      members: '120+',
      color: 'from-tech-cyan to-tech-orange'
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="events" className="py-20 bg-gradient-to-br from-card/30 via-background to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-aiml-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_49%,rgba(120,119,198,0.05)_50%,transparent_51%)] bg-[size:30px_30px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Events & <span className="bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the vibrant ecosystem of hackathons, competitions, workshops, and technical sessions 
              that foster innovation and learning in our AI/ML community.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            {eventCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={`transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-aiml-primary to-aiml-secondary text-white shadow-lg'
                      : 'hover:bg-card hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.label}
                </Button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group">
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.mainImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Event Type Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-aiml-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {event.type}
                  </motion.div>

                  {/* Date Badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </motion.div>

                  {/* View More Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-aiml-primary flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gradient line-clamp-2">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{event.duration}</span>
                    </div>
                  </div>

                  {/* Highlights Preview */}
                  <div className="space-y-1">
                    {event.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs">
                        <div className="w-1 h-1 bg-aiml-primary rounded-full" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Student Clubs Section */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">
              Student Clubs & Communities
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our vibrant student communities focused on different aspects of AI, ML, and computer science.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {clubs.map((club, index) => {
              const Icon = club.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${club.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      <h4 className="text-lg font-bold mb-2 text-gradient">{club.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{club.focus}</p>
                      
                      <div className="mb-4">
                        <Badge className="bg-aiml-primary/10 text-aiml-primary">
                          {club.members} Members
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        {club.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs">
                            <Star className="h-3 w-3 text-aiml-primary" />
                            <span className="text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-lg overflow-hidden overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative">
                <img
                  src={selectedEvent.mainImage}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70 transition-colors p-2 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedEvent.description}
                </p>

                {/* Event Details */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-aiml-primary" />
                    <div className="font-semibold">{selectedEvent.participants}</div>
                    <div className="text-sm text-muted-foreground">Participants</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-aiml-secondary" />
                    <div className="font-semibold">{selectedEvent.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <Award className="h-8 w-8 mx-auto mb-2 text-tech-purple" />
                    <div className="font-semibold">{selectedEvent.type}</div>
                    <div className="text-sm text-muted-foreground">Event Type</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Event Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedEvent.highlights.map((highlight: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-aiml-primary" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Winners */}
                {selectedEvent.winners.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Winners & Achievements</h4>
                    <div className="space-y-2">
                      {selectedEvent.winners.map((winner: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{winner}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image Gallery */}
                {selectedEvent.images.length > 1 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Event Gallery</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedEvent.images.map((image: string, idx: number) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`${selectedEvent.title} ${idx + 1}`}
                          className="w-full h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
