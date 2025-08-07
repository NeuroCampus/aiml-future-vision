import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Users, TrendingUp, Award, Briefcase, Trophy, Medal, Target, BookOpen, Code, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const StudentsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const testimonials = [
    {
      id: 1,
      name: 'Harshavardhan',
      batch: '2024 Graduate',
      company: 'Tech Innovators',
      role: 'Software Engineer',
      image: '/cs-aiml photos/Studentscertficate/HACKTOPUS(Harshavardhan).jpg',
      quote: "Participating in HACKTOPUS hackathon was a game-changer. The practical experience and mentorship from faculty helped me secure my dream job.",
      rating: 5,
      achievement: 'HACKTOPUS Winner',
      certificateImage: '/cs-aiml photos/Studentscertficate/HACKTOPUS(Harshavardhan).jpg'
    },
    {
      id: 2,
      name: 'Dhanushree',
      batch: '2023 Graduate',
      company: 'AI Solutions Ltd',
      role: 'ML Engineer',
      image: '/cs-aiml photos/Studentscertficate/AI Skills(Dhanushree).jpg',
      quote: "The AI Skills certification program gave me hands-on experience with cutting-edge technologies. The curriculum is perfectly aligned with industry needs.",
      rating: 5,
      achievement: 'AI Skills Certified',
      certificateImage: '/cs-aiml photos/Studentscertficate/AI Skills(Dhanushree).jpg'
    },
    {
      id: 3,
      name: 'Karthik',
      batch: '2024 Graduate',
      company: 'DataTech Corp',
      role: 'Data Scientist',
      image: '/cs-aiml photos/Studentscertficate/Joy of Computing (Karthik).png',
      quote: "The Joy of Computing course opened my eyes to the beauty of programming. The faculty's guidance helped me excel in competitive programming.",
      rating: 5,
      achievement: 'Joy of Computing',
      certificateImage: '/cs-aiml photos/Studentscertficate/Joy of Computing (Karthik).png'
    },
    {
      id: 4,
      name: 'Sindhu',
      batch: '2023 Graduate',
      company: 'Research Labs',
      role: 'Research Engineer',
      image: '/cs-aiml photos/Studentscertficate/IJRAR(Sindhu).png',
      quote: "Publishing research papers in IJRAR during my studies gave me a strong foundation in research methodology and technical writing.",
      rating: 5,
      achievement: 'Research Publication',
      certificateImage: '/cs-aiml photos/Studentscertficate/IJRAR(Sindhu).png'
    },
  ];

  const studentCertificates = [
    {
      name: 'Harshavardhan',
      type: 'Hackathon',
      title: 'HACKTOPUS Winner',
      image: '/cs-aiml photos/Studentscertficate/HACKTOPUS(Harshavardhan).jpg',
      category: 'competition',
      description: 'Outstanding performance in national-level hackathon'
    },
    {
      name: 'Triosync Team',
      type: 'Hackathon',
      title: 'HACKTOPUS Team Achievement',
      image: '/cs-aiml photos/Studentscertficate/HACKTOPUS(Triosync).jpg',
      category: 'competition',
      description: 'Team collaboration and innovative solution development'
    },
    {
      name: 'Dhanushree',
      type: 'Certification',
      title: 'AI Skills Program',
      image: '/cs-aiml photos/Studentscertficate/AI Skills(Dhanushree).jpg',
      category: 'certification',
      description: 'Comprehensive AI and ML skills certification'
    },
    {
      name: 'Sankruth',
      type: 'Publication',
      title: 'IJRAR Research Paper',
      image: '/cs-aiml photos/Studentscertficate/IJRAR(Sankruth).png',
      category: 'research',
      description: 'Published research in international journal'
    },
    {
      name: 'Sindhu',
      type: 'Publication',
      title: 'IJRAR Research Publication',
      image: '/cs-aiml photos/Studentscertficate/IJRAR(Sindhu).png',
      category: 'research',
      description: 'Research contribution in artificial intelligence'
    },
    {
      name: 'Tejaswini',
      type: 'Publication',
      title: 'IJRAR Journal Publication',
      image: '/cs-aiml photos/Studentscertficate/IJRAR(Tejaswini).png',
      category: 'research',
      description: 'Academic research and publication achievement'
    },
    {
      name: 'Varshini',
      type: 'Publication',
      title: 'IJRAR Research Work',
      image: '/cs-aiml photos/Studentscertficate/IJRAR(Varshini).png',
      category: 'research',
      description: 'Research excellence in computer science'
    },
    {
      name: 'Vikram',
      type: 'Publication',
      title: 'IJRAR Research Paper',
      image: '/cs-aiml photos/Studentscertficate/IJRAR(Vikram).png',
      category: 'research',
      description: 'Innovation in AI/ML research'
    },
    {
      name: 'Students Group',
      type: 'Competition',
      title: 'IIT Bombay Hackathon',
      image: '/cs-aiml photos/Studentscertficate/Hackathon at IIT Bombay.jpg',
      category: 'competition',
      description: 'National level hackathon participation'
    },
    {
      name: 'Student Group',
      type: 'Event',
      title: 'TechFest Participation',
      image: '/cs-aiml photos/Studentscertficate/Techfest.jpg',
      category: 'event',
      description: 'Technical festival and innovation showcase'
    }
  ];

  const placementStats = [
    {
      icon: Users,
      metric: '95%',
      label: 'Placement Rate',
      description: 'Students placed in top companies',
      color: 'text-aiml-primary'
    },
    {
      icon: TrendingUp,
      metric: '12 LPA',
      label: 'Highest Package',
      description: 'Maximum salary offered',
      color: 'text-aiml-secondary'
    },
    {
      icon: Award,
      metric: '150+',
      label: 'Certifications',
      description: 'Industry certifications earned',
      color: 'text-tech-purple'
    },
    {
      icon: Trophy,
      metric: '50+',
      label: 'Competition Wins',
      description: 'Hackathons and contests',
      color: 'text-tech-cyan'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Achievements', icon: Star },
    { id: 'competition', label: 'Competitions', icon: Trophy },
    { id: 'certification', label: 'Certifications', icon: Medal },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'event', label: 'Events', icon: Target }
  ];

  const filteredCertificates = activeCategory === 'all' 
    ? studentCertificates 
    : studentCertificates.filter(cert => cert.category === activeCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section ref={ref} id="students" className="py-20 bg-gradient-to-br from-background via-background to-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-aiml-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_49%,rgba(120,119,198,0.05)_50%,transparent_51%)] bg-[size:40px_40px]" />

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
              Student <span className="bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how our students excel in competitions, earn certifications, publish research, 
              and secure placements in top companies through our comprehensive AI/ML program.
            </p>
          </motion.div>
        </motion.div>

        {/* Placement Statistics */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {placementStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`h-12 w-12 mx-auto ${stat.color} group-hover:scale-110 transition-transform`} />
                </motion.div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-aiml-primary to-aiml-secondary bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Student Testimonials */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">
              What Our Students Say
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful graduates about their journey and achievements.
            </p>
          </motion.div>

          <motion.div 
            className="relative max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="text-center md:text-left">
                        <div className="relative mb-4">
                          <img
                            src={testimonials[currentTestimonial].certificateImage}
                            alt={testimonials[currentTestimonial].name}
                            className="w-24 h-24 rounded-full mx-auto md:mx-0 object-cover border-4 border-aiml-primary/20"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-aiml-primary text-white p-1 rounded-full">
                            <Trophy className="h-4 w-4" />
                          </div>
                        </div>
                        <h4 className="font-bold text-lg text-gradient">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {testimonials[currentTestimonial].batch}
                        </p>
                        <p className="text-sm font-medium text-aiml-primary">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          @ {testimonials[currentTestimonial].company}
                        </p>
                        <Badge className="mt-2 bg-aiml-primary/10 text-aiml-primary">
                          {testimonials[currentTestimonial].achievement}
                        </Badge>
                      </div>

                      <div className="md:col-span-2">
                        <Quote className="h-8 w-8 text-aiml-primary mb-4" />
                        <blockquote className="text-lg leading-relaxed text-foreground mb-4">
                          "{testimonials[currentTestimonial].quote}"
                        </blockquote>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="hover:bg-aiml-primary/10 hover:border-aiml-primary"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-aiml-primary scale-125'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="hover:bg-aiml-primary/10 hover:border-aiml-primary"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Student Achievements Gallery */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">
              Student Achievements Gallery
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our students' certificates, awards, and recognitions across various domains.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-aiml-primary to-aiml-secondary text-white shadow-lg'
                        : 'hover:bg-card hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={`${certificate.name}-${certificate.type}-${index}`}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCertificate(certificate.image)}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 text-aiml-primary font-semibold">
                        {certificate.type}
                      </Badge>
                    </div>

                    {/* View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-aiml-primary">
                        Click to View
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h4 className="font-bold text-sm text-gradient mb-1 line-clamp-2">
                      {certificate.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">{certificate.name}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {certificate.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70 transition-colors p-2 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentsSection;
