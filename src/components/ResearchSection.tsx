import { useState } from 'react';
import { ExternalLink, Users, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ResearchSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Computer Vision', 'NLP', 'Robotics', 'Healthcare AI', 'Cybersecurity'];

  const projects = [
    {
      title: 'Intelligent Medical Diagnosis System',
      description: 'AI-powered diagnostic tool for early detection of diseases using medical imaging and patient data analysis.',
      category: 'Healthcare AI',
      team: 'Dr. Sarah Johnson, 4 PhD students',
      duration: '2023-2025',
      funding: '₹15 Lakhs',
      status: 'Active',
      technologies: ['Deep Learning', 'Computer Vision', 'Medical Imaging'],
      publications: 3,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Autonomous Drone Navigation',
      description: 'Development of AI algorithms for autonomous drone navigation in complex environments using computer vision.',
      category: 'Robotics',
      team: 'Dr. Michael Chen, 5 M.Tech students',
      duration: '2022-2024',
      funding: '₹12 Lakhs',
      status: 'Active',
      technologies: ['Computer Vision', 'Path Planning', 'Reinforcement Learning'],
      publications: 5,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Multilingual Sentiment Analysis',
      description: 'Advanced NLP model for real-time sentiment analysis across multiple Indian languages and dialects.',
      category: 'NLP',
      team: 'Dr. Priya Sharma, 3 research scholars',
      duration: '2023-2024',
      funding: '₹8 Lakhs',
      status: 'Completed',
      technologies: ['NLP', 'Transformers', 'Multi-language Processing'],
      publications: 4,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'AI-Enhanced Cybersecurity Framework',
      description: 'Machine learning-based intrusion detection system for identifying and preventing cyber attacks.',
      category: 'Cybersecurity',
      team: 'Dr. Robert Kumar, 6 students',
      duration: '2023-2025',
      funding: '₹18 Lakhs',
      status: 'Active',
      technologies: ['Machine Learning', 'Network Security', 'Anomaly Detection'],
      publications: 2,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Smart Traffic Management System',
      description: 'Computer vision and AI-based system for optimizing traffic flow and reducing congestion in urban areas.',
      category: 'Computer Vision',
      team: 'Dr. Lisa Wang, 4 researchers',
      duration: '2022-2024',
      funding: '₹20 Lakhs',
      status: 'Active',
      technologies: ['Computer Vision', 'Real-time Processing', 'Traffic Optimization'],
      publications: 6,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Agricultural Crop Disease Detection',
      description: 'Mobile app using AI to identify crop diseases from smartphone photos for precision agriculture.',
      category: 'Computer Vision',
      team: 'Dr. Amit Patel, 3 students',
      duration: '2023-2024',
      funding: '₹10 Lakhs',
      status: 'Completed',
      technologies: ['Mobile AI', 'Image Classification', 'Edge Computing'],
      publications: 3,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const researchStats = [
    { number: '25+', label: 'Active Projects' },
    { number: '₹2.5Cr', label: 'Total Funding' },
    { number: '150+', label: 'Publications' },
    { number: '8', label: 'Patents Filed' },
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Research & <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge research projects pushing the boundaries of AI and ML technology to solve real-world challenges.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card rounded-lg border shadow-soft card-hover animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'btn-glow' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 bg-card shadow-soft overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-display line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer" />
                </div>
                <Badge variant="outline" className="w-fit text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {project.category}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">{project.team}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">{project.duration}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Funding: </span>
                      <span className="font-semibold text-accent">{project.funding}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Papers: </span>
                      <span className="font-semibold">{project.publications}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Button size="lg" className="btn-glow mr-4">
            View All Research
          </Button>
          <Button size="lg" variant="outline">
            Research Collaboration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;