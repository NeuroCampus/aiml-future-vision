import { Calendar, Trophy, Users, Code, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import hacktopusImage from '@/assets/hacktopus-winners.jpg';
import ideathonImage from '@/assets/ideathon-participants.jpg';
import studentClubsImage from '@/assets/student-clubs-real.jpg';

const EventsSection = () => {
  const events = [
    {
      title: 'HACKTOPUS 2024',
      description: 'Annual hackathon organized by CSE-AIML department featuring AI/ML challenges and innovative solutions.',
      date: 'May 2024',
      type: 'Hackathon',
      participants: '200+ students',
      image: hacktopusImage,
      highlights: ['Winner: Best AI Solution', '36-hour coding marathon', 'Industry mentor support']
    },
    {
      title: 'IDEATHON 2024',
      description: 'Innovation competition encouraging students to present creative AI solutions for real-world problems.',
      date: 'March 2024',
      type: 'Competition',
      participants: '150+ teams',
      image: ideathonImage,
      highlights: ['Innovative AI concepts', 'Industry problem statements', 'Venture capital exposure']
    },
    {
      title: 'NeuroNET Club Activities',
      description: 'Student-led club focusing on neural networks, deep learning workshops, and technical sessions.',
      date: 'Year Round',
      type: 'Club Activity',
      participants: '100+ members',
      image: studentClubsImage,
      highlights: ['Weekly workshops', 'Research presentations', 'Industry guest lectures']
    }
  ];

  const clubs = [
    {
      name: 'NeuroNET Club',
      focus: 'Neural Networks & Deep Learning',
      icon: Brain,
      activities: ['Technical Workshops', 'Research Paper Reviews', 'Project Collaboration']
    },
    {
      name: 'Quantum Quick',
      focus: 'Quantum Computing & Algorithms',
      icon: Zap,
      activities: ['Quantum Programming', 'Algorithm Design', 'Research Projects']
    },
    {
      name: 'AI Echelon Club',
      focus: 'Artificial Intelligence Applications',
      icon: Code,
      activities: ['AI Projects', 'Industry Connections', 'Skill Development']
    },
    {
      name: 'Fusion Fiesta',
      focus: 'Tech Events & Cultural Activities',
      icon: Users,
      activities: ['Event Organization', 'Technical Fests', 'Cultural Programs']
    }
  ];

  const achievements = [
    'Winner - HACKTOPUS Best Innovation Award',
    'Published 15+ papers in IJRAR journal',
    'Completed IoT Workshop certification',
    'Active participation in IIT Bombay Hackathon',
    'AI Skills certification programs',
    'Joy of Computing course completions'
  ];

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Events & <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our vibrant student life through technical events, competitions, and active student clubs that foster innovation and learning.
          </p>
        </div>

        {/* Recent Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Recent Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card 
                key={index} 
                className="card-hover animate-scale-in border-0 bg-card shadow-soft overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {event.type}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-display">{event.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">{event.participants}</span>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Key Highlights:</div>
                    <div className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <Trophy className="w-3 h-3 mr-2 text-accent" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Clubs */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Student Clubs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, index) => (
              <Card 
                key={index} 
                className="card-hover animate-scale-in border-0 bg-gradient-card shadow-soft text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <club.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2">{club.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{club.focus}</p>
                  <div className="space-y-1">
                    {club.activities.map((activity, idx) => (
                      <div key={idx} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                        {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Achievements */}
        <div className="bg-card rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-display font-bold mb-6 text-center">Student Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <Trophy className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" className="btn-glow">
            Join Our Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;