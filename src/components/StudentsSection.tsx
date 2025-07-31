import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Users, TrendingUp, Award, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import studentsImage from '@/assets/students-collaboration.jpg';

const StudentsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Harshavardhan',
      batch: '2024 Graduate',
      company: 'Tech Company',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      quote: "Participating in HACKTOPUS hackathon and other technical events helped me develop practical skills. The department's focus on hands-on learning was exceptional.",
      rating: 5,
    },
    {
      name: 'Dhanushree',
      batch: '2023 Graduate',
      company: 'AI Startup',
      role: 'ML Engineer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b8c5?auto=format&fit=crop&w=150&q=80',
      quote: "The AI Skills certification and research opportunities provided by the department gave me a strong foundation in machine learning and deep learning concepts.",
      rating: 5,
    },
    {
      name: 'Sankruth',
      batch: '2024 Graduate',
      company: 'Product Company',
      role: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      quote: "Publishing papers in IJRAR journal and working on innovative projects under faculty guidance helped me build a strong research profile for my career.",
      rating: 5,
    },
    {
      name: 'Tejaswini',
      batch: '2023 Graduate',
      company: 'IT Services',
      role: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      quote: "The comprehensive curriculum covering both theoretical concepts and practical implementation prepared me well for the industry challenges.",
      rating: 5,
    },
  ];

  const placementStats = [
    {
      icon: TrendingUp,
      metric: '85%',
      label: 'Placement Rate',
      description: 'Students placed in leading companies',
    },
    {
      icon: Award,
      metric: '₹8.5L',
      label: 'Average Package',
      description: 'Competitive packages in AI/ML domain',
    },
    {
      icon: Briefcase,
      metric: '50+',
      label: 'Companies',
      description: 'Top companies recruiting our graduates',
    },
    {
      icon: Users,
      metric: '200+',
      label: 'Alumni Network',
      description: 'Growing alumni network since 2018',
    },
  ];

  const topRecruiters = [
    { name: 'TCS', package: '₹7L' },
    { name: 'Infosys', package: '₹8L' },
    { name: 'Wipro', package: '₹6.5L' },
    { name: 'Cognizant', package: '₹7.5L' },
    { name: 'Accenture', package: '₹9L' },
    { name: 'Tech Mahindra', package: '₹8.5L' },
    { name: 'Capgemini', package: '₹7L' },
    { name: 'HCL', package: '₹6L' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="placements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Student Success & <span className="text-gradient">Placements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our graduates are making their mark in leading technology companies worldwide, driving innovation in AI and ML.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {placementStats.map((stat, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 bg-card shadow-soft"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Life & Community */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6">
              Vibrant Student <span className="text-gradient">Community</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our students are at the heart of everything we do. With active tech clubs, research groups, 
              and innovation challenges, students collaborate on cutting-edge projects while building 
              lifelong connections.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tech Clubs & Societies</h4>
                  <p className="text-muted-foreground text-sm">
                    Active AI/ML club, Robotics society, and coding competitions foster collaborative learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation Challenges</h4>
                  <p className="text-muted-foreground text-sm">
                    Regular hackathons, AI competitions, and startup incubation programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industry Mentorship</h4>
                  <p className="text-muted-foreground text-sm">
                    Direct mentorship from industry professionals and alumni working in top tech companies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <img 
              src={studentsImage} 
              alt="Students Collaboration" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold text-center mb-12">
            Student <span className="text-gradient">Testimonials</span>
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 bg-card shadow-soft">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-accent/20"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="w-8 h-8 text-accent mb-4 mx-auto md:mx-0" />
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-muted-foreground">{testimonials[currentTestimonial].batch}</p>
                      <p className="text-accent font-medium">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-display font-bold mb-8">
            Top <span className="text-gradient">Recruiters</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {topRecruiters.map((recruiter, index) => (
              <Card 
                key={index} 
                className="card-hover border-0 bg-card shadow-soft"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-1">{recruiter.name}</h4>
                  <p className="text-accent font-medium">{recruiter.package}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button size="lg" className="btn-glow">
            View Placement Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;