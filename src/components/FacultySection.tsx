import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FacultySection = () => {
  const facultyMembers = [
    {
      name: 'Prof. Ambili K',
      designation: 'Professor & Head of Department',
      education: 'PhD, M.Tech',
      specialization: 'Machine Learning, IoT Systems',
      experience: '15+ years',
      publications: 8,
      achievements: ['IoT Workshop Coordinator', 'Research Guide', 'Industry Collaborations'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Prof. Swathi',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Data Science, Deep Learning',
      experience: '10+ years',
      publications: 12,
      achievements: ['IJRAR Publications', 'IRJET Publications', 'TIJER Journal Contributor'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Dr. Faculty Member',
      designation: 'Associate Professor',
      education: 'PhD, M.Tech',
      specialization: 'Computer Vision, AI Applications',
      experience: '12+ years',
      publications: 6,
      achievements: ['Research Supervision', 'Industry Projects', 'Conference Speaker'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const departmentStats = [
    {
      icon: Users,
      metric: '10+',
      label: 'Faculty Members',
      description: 'Qualified and experienced faculty'
    },
    {
      icon: BookOpen,
      metric: '25+',
      label: 'Research Publications',
      description: 'Published in reputed journals'
    },
    {
      icon: Award,
      metric: '15+',
      label: 'Certifications',
      description: 'Professional certifications and workshops'
    },
    {
      icon: GraduationCap,
      metric: '100+',
      label: 'Students Guided',
      description: 'Project guidance and mentorship'
    }
  ];

  const researchAreas = [
    'Machine Learning & Deep Learning',
    'Internet of Things (IoT)',
    'Computer Vision & Image Processing',
    'Data Science & Analytics',
    'Artificial Intelligence Applications',
    'Natural Language Processing',
    'Cybersecurity in AI',
    'Edge Computing & AI'
  ];

  return (
    <section id="faculty" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Our <span className="text-gradient">Faculty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated faculty members who bring years of industry experience and academic excellence to guide the next generation of AI professionals.
          </p>
        </div>

        {/* Department Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {departmentStats.map((stat, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 bg-gradient-card shadow-soft text-center"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent mb-1">{stat.metric}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Faculty Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultyMembers.map((faculty, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 bg-card shadow-soft overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-accent">
                  {faculty.experience}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-display">{faculty.name}</CardTitle>
                <p className="text-accent font-medium">{faculty.designation}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {faculty.education}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Specialization:</div>
                  <p className="text-sm font-medium">{faculty.specialization}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">{faculty.publications} Publications</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Key Achievements:</div>
                  <div className="space-y-1">
                    {faculty.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <Award className="w-3 h-3 mr-2 text-accent" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas */}
        <div className="bg-card rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-display font-bold mb-6 text-center">Research Focus Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchAreas.map((area, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-accent/10 border border-accent/20 text-center transition-transform duration-200 hover:scale-105"
              >
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;