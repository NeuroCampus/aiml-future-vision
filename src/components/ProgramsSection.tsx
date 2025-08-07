import { Code, Database, Brain, Zap, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import researchLabImage from '/cs-aiml photos/Labpics/RDlab.jpg';

const ProgramsSection = () => {
  const courses = [
    {
      icon: Brain,
      title: 'Fundamentals of AI & ML',
      description: 'Core concepts of artificial intelligence and machine learning algorithms.',
      topics: ['Python Programming', 'Linear Algebra', 'Statistics', 'ML Algorithms'],
      level: 'Core',
    },
    {
      icon: Code,
      title: 'Data Structures & Algorithms',
      description: 'Fundamental programming concepts essential for AI/ML implementation.',
      topics: ['Arrays', 'Trees', 'Graphs', 'Sorting Algorithms'],
      level: 'Core',
    },
    {
      icon: Database,
      title: 'Database Management Systems',
      description: 'Database design and management for handling large datasets.',
      topics: ['SQL', 'NoSQL', 'Data Warehousing', 'Query Optimization'],
      level: 'Core',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Advanced neural networks and deep learning architectures.',
      topics: ['CNN', 'RNN', 'Neural Networks', 'TensorFlow'],
      level: 'Advanced',
    },
    {
      icon: Globe,
      title: 'Computer Vision',
      description: 'Image processing and computer vision applications.',
      topics: ['Image Processing', 'Object Detection', 'Pattern Recognition'],
      level: 'Specialized',
    },
    {
      icon: Shield,
      title: 'Natural Language Processing',
      description: 'Processing and understanding human language using AI.',
      topics: ['Text Mining', 'Sentiment Analysis', 'Language Models'],
      level: 'Advanced',
    },
  ];

  const labs = [
    {
      name: 'CASE Lab',
      description: 'Computer Aided Software Engineering lab with modern development tools.',
      equipment: 'Latest computers, Software development tools, IDEs',
    },
    {
      name: 'Linux Lab',
      description: 'Dedicated Linux environment for system programming and open-source development.',
      equipment: 'Linux workstations, Server setup, Network tools',
    },
    {
      name: 'R&D Lab',
      description: 'Research and Development lab for AI/ML projects and innovation.',
      equipment: 'High-performance machines, Research software, GPUs',
    },
    {
      name: 'Seminar Hall',
      description: 'Modern presentation facility for technical seminars and workshops.',
      equipment: 'Projector, Audio system, Video conferencing',
    },
  ];

  const industryPartners = [
    'TCS', 'Infosys', 'Wipro', 'Microsoft', 'Amazon', 'Google',
    'IBM', 'Accenture', 'Cognizant', 'Tech Mahindra'
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Programs & <span className="text-gradient">Curriculum</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-aligned curriculum designed to prepare students for the future of artificial intelligence and machine learning.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 bg-card shadow-soft"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <course.icon className="w-6 h-6 text-accent" />
                  </div>
                  <Badge variant={course.level === 'Core' ? 'default' : course.level === 'Advanced' ? 'destructive' : 'secondary'}>
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-display">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
                <div>
                  <h5 className="text-sm font-semibold mb-2">Key Topics:</h5>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Labs Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6">
              State-of-the-Art <span className="text-gradient">Laboratories</span>
            </h3>
            <div className="space-y-6">
              {labs.map((lab, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg border shadow-soft card-hover"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h4 className="text-lg font-semibold mb-2">{lab.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{lab.description}</p>
                  <div className="text-xs text-accent font-medium">
                    Equipment: {lab.equipment}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <img 
              src={researchLabImage} 
              alt="Research Laboratory" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Industry Partners */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-display font-bold mb-8">
            Industry <span className="text-gradient">Partnerships</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Collaborating with leading technology companies to provide real-world experience and placement opportunities.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {industryPartners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-card p-4 rounded-lg border shadow-soft card-hover text-center"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="text-sm font-medium text-muted-foreground">{partner}</div>
              </div>
            ))}
          </div>

          <Button size="lg" className="btn-glow">
            View Complete Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;