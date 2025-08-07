import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users, Star, Trophy, Brain, Code, Globe, Calendar, Mail, Phone, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const FacultySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const facultyMembers = [
    {
      id: 1,
      name: 'Prof. Ambili K',
      designation: 'Professor & Head of Department',
      education: 'PhD, M.Tech',
      specialization: 'Machine Learning, IoT Systems',
      experience: '15+ years',
      publications: 8,
      category: 'senior',
      achievements: ['IoT Workshop Coordinator', 'Research Guide', 'Industry Collaborations'],
      certificates: [
        '/cs-aiml photos/Facultycertificate/Prof. Ambili K(Iot workshop).jpg',
        '/cs-aiml photos/Facultycertificate/Iot workshop.jpg'
      ],
      researchAreas: ['Internet of Things', 'Machine Learning', 'Sensor Networks'],
      contact: {
        email: 'ambili.k@amcec.edu',
        phone: '+91-9876543210'
      },
      image: '/cs-aiml photos/Facultycertificate/Prof. Ambili K(Iot workshop).jpg',
      color: 'from-aiml-primary to-aiml-secondary'
    },
    {
      id: 2,
      name: 'Prof. Swathi',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Data Science, Deep Learning',
      experience: '10+ years',
      publications: 12,
      category: 'faculty',
      achievements: ['IJRAR Publications', 'IRJET Publications', 'TIJER Journal Contributor'],
      certificates: [
        '/cs-aiml photos/Facultycertificate/IJRAR(swathi).png',
        '/cs-aiml photos/Facultycertificate/IRJET(SWATHI).jpg',
        '/cs-aiml photos/Facultycertificate/TIJER(swathi).png'
      ],
      researchAreas: ['Deep Learning', 'Data Analytics', 'Neural Networks'],
      contact: {
        email: 'swathi@amcec.edu',
        phone: '+91-9876543211'
      },
      image: '/cs-aiml photos/Facultycertificate/IRJET by Swathi.jpg',
      color: 'from-aiml-secondary to-aiml-tertiary'
    },
    {
      id: 3,
      name: 'Dr. Research Faculty',
      designation: 'Associate Professor',
      education: 'PhD, M.Tech',
      specialization: 'Computer Vision, AI Applications',
      experience: '12+ years',
      publications: 6,
      category: 'research',
      achievements: ['Research Supervision', 'Industry Projects', 'Conference Speaker'],
      certificates: [
        '/cs-aiml photos/Facultycertificate/IJATEE Journal.jpg'
      ],
      researchAreas: ['Computer Vision', 'AI Applications', 'Pattern Recognition'],
      contact: {
        email: 'research@amcec.edu',
        phone: '+91-9876543212'
      },
      image: '/cs-aiml photos/Facultycertificate/IJATEE Journal.jpg',
      color: 'from-tech-purple to-tech-cyan'
    }
  ];

  const departmentStats = [
    {
      icon: Users,
      metric: '10+',
      label: 'Faculty Members',
      description: 'Qualified and experienced faculty',
      color: 'text-aiml-primary'
    },
    {
      icon: BookOpen,
      metric: '50+',
      label: 'Research Publications',
      description: 'Published in reputed journals',
      color: 'text-aiml-secondary'
    },
    {
      icon: Award,
      metric: '25+',
      label: 'Awards & Recognitions',
      description: 'Academic and research excellence',
      color: 'text-tech-purple'
    },
    {
      icon: Trophy,
      metric: '15+',
      label: 'Industry Projects',
      description: 'Collaborative research initiatives',
      color: 'text-tech-cyan'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Faculty' },
    { id: 'senior', label: 'Senior Faculty' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'research', label: 'Research' }
  ];

  const filteredFaculty = activeFilter === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.category === activeFilter);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="faculty" className="py-20 bg-gradient-to-br from-card/30 via-background to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aiml-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(120,119,198,0.05)_50%,transparent_51%)] bg-[size:20px_20px]" />

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
              Our <span className="bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary bg-clip-text text-transparent">Expert Faculty</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Meet our distinguished faculty members who bring years of academic excellence, 
              industry experience, and cutting-edge research to shape future AI/ML professionals.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-aiml-primary to-aiml-secondary text-white shadow-lg'
                    : 'hover:bg-card hover:text-foreground'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Department Statistics */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {departmentStats.map((stat, index) => {
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

        {/* Faculty Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {filteredFaculty.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredCard(faculty.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group">
                {/* Faculty Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${faculty.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Experience Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-aiml-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {faculty.experience}
                  </motion.div>

                  {/* Publications Badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <BookOpen className="h-3 w-3" />
                    <span>{faculty.publications} Publications</span>
                  </motion.div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-gradient mb-1">
                        {faculty.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {faculty.designation}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GraduationCap className="h-6 w-6 text-aiml-primary" />
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Education */}
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {faculty.education}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {faculty.specialization}
                    </p>
                  </div>

                  {/* Research Areas */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Research Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {faculty.researchAreas.map((area, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs bg-aiml-primary/10 text-aiml-primary hover:bg-aiml-primary/20"
                        >
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements</h4>
                    <ul className="space-y-1">
                      {faculty.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center space-x-2">
                          <Star className="h-3 w-3 text-aiml-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <motion.div 
                    className="pt-4 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredCard === faculty.id ? 1 : 0.7 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-3 w-3" />
                        <span className="truncate">{faculty.contact.email}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 px-2 text-xs hover:bg-aiml-primary/10 hover:text-aiml-primary"
                      >
                        View Profile
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Faculty Achievements Gallery */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">
              Faculty Achievements & Certifications
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our faculty's commitment to excellence is reflected in their numerous publications, 
              certifications, and industry recognitions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {[
              '/cs-aiml photos/Facultycertificate/IJATEE Journal.jpg',
              '/cs-aiml photos/Facultycertificate/IJRAR Journal.png',
              '/cs-aiml photos/Facultycertificate/IRJET by Swathi.jpg',
              '/cs-aiml photos/Facultycertificate/Iot workshop.jpg'
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={cert}
                  alt={`Faculty Certificate ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Achievement Certificate
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
