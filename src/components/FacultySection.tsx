import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, User, GraduationCap, Star, Quote, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';

const FacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Nandeeswar S. B',
      designation: 'COE, HOD (CSE-AIML)',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/nandeeshwar.png',
      experience: '23 Years',
      bio: '',
      message: 'As the Head of Department, I am committed to fostering innovation and excellence in AI and ML education, guiding our students towards successful careers in this transformative field.',
      achievements: []
    },
    {
      id: 2,
      name: 'Dr. K. Vijayakumar',
      designation: 'Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/cs-aiml-photos/Dr K Vijayakumar.png',
      experience: '23 Years',
      achievements: []
    },
    {
      id: 3,
      name: 'Prof. Swathi Srikanth Achanur',
      designation: 'Assistant Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/swathi.jpg',
      experience: '5 Years',
      achievements: []
    },
    {
      id: 4,
      name: 'Prof. Ambili K',
      designation: 'Assistant Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/ambili k.jpg',
      experience: '3 Years',
      achievements: []
    },
    {
      id: 5,
      name: 'Prof. Vinaya S. Kavalgi',
      designation: 'Assistant Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/vinaya s.jpg',
      experience: '2.7 Years',
      achievements: []
    },
    {
      id: 6,
      name: 'Prof. Kavya P',
      designation: 'Assistant Professor',
      education: 'UG: Electronics and Communication Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '',
      experience: '1 Year',
      achievements: []
    },
    {
      id: 7,
      name: 'Prof. Mackal Rajawat',
      designation: 'Assistant Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/mackal rajawat.jpg',
      experience: '(Not specified)',
      achievements: []
    },
    {
      id: 8,
      name: 'Prof. Ramakrishna Reddy',
      designation: 'Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/ramkrishna d.jpg',
      experience: '2 Years 4 Months',
      achievements: []
    },
    {
      id: 9,
      name: 'Prof. Anulkumar C',
      designation: 'Assistant Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '',
      experience: '6 Months',
      achievements: []
    },
    {
      id: 10,
      name: 'Prof. Kavita Reddy',
      designation: 'Assistant Professor',
      education: 'UG: Electronics & Communication, PG: VLSI Design & Embedded Systems',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/nallamilli kavita.png',
      experience: '1 Year',
      achievements: []
    },
    {
      id: 11,
      name: 'Prof. Nagavarshini B. R',
      designation: 'Assistant Professor',
      education: 'UG: Computer Application, PG: Computer Application',
      specialization: 'Department of CSE with AIML',
      image: '/cs-aiml-photos/Nagavarshini.jpg',
      experience: 'Fresher',
      achievements: []
    },
    {
      id: 12,
      name: 'Prof. Pamela Bera',
      designation: 'Assistant Professor',
      education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/cs-aiml-photos/Prof Pamela.png',
      experience: '4 Months',
      achievements: []
    },
    {
      id: 13,
      name: 'Prof. Roshan U',
      designation: 'Assistant Professor',
      education: 'UG: Mechanical Engineering, PG: Computational Science',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/roshan.jpg',
      experience: '(Not specified)',
      achievements: []
    }
  ];

  const navigate = useNavigate();
  const hod = facultyMembers.find(f => f.id === 1);
  const otherFaculty = facultyMembers.filter(f => f.id !== 1);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="faculty" className="relative py-24 md:py-32 overflow-hidden">
      {/* Faculty Excellence Background */}
      <div className="absolute inset-0 -z-10">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-background via-background/95 to-background/90" />
        
        {/* Academic excellence gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--aiml-primary)/0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--aiml-secondary)/0.14),transparent_65%)]" />
        
        {/* Knowledge sharing pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(60deg,hsl(var(--primary)/0.3)_1px,transparent_1px),linear-gradient(-60deg,hsl(var(--accent)/0.2)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
            Our <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Expert Faculty</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Meet our distinguished faculty members who bring years of academic excellence, industry experience, and cutting-edge research to shape future AI/ML professionals.
          </p>
        </div>

        {/* HOD Main Card */}
        {hod && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-background via-background/95 to-primary/5 relative">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/8 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full"></div>

              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Profile Section */}
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                    <div className="relative mb-6">
                      {hod.image ? (
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-75"></div>
                          <img
                            src={hod.image}
                            alt={hod.name}
                            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
                          />
                          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl border-4 border-background">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 border-4 border-primary/30 shadow-2xl">
                          <User className="w-20 h-20 text-primary" />
                        </div>
                      )}
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                      <div className="text-center p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                        <div className="text-2xl font-bold text-primary">{hod.experience.split(' ')[0]}</div>
                        <div className="text-xs text-muted-foreground font-medium">Years</div>
                      </div>
                      <div className="text-center p-3 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                        <div className="text-2xl font-bold text-accent">PhD</div>
                        <div className="text-xs text-muted-foreground font-medium">Degree</div>
                      </div>
                      <div className="text-center p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20">
                        <div className="text-2xl font-bold text-secondary">100+</div>
                        <div className="text-xs text-muted-foreground font-medium">Students</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Header */}
                    <div className="text-center lg:text-left">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                        {hod.name}
                      </h3>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
                        <Badge variant="secondary" className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm font-semibold rounded-full shadow-md">
                          {hod.designation}
                        </Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2 text-sm font-medium rounded-full">
                          Head of Department
                        </Badge>
                      </div>
                    </div>

                    {/* Professional Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Education</h4>
                            <p className="text-sm font-medium text-foreground">{hod.education}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20">
                          <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Experience</h4>
                            <p className="text-sm font-medium text-foreground">{hod.experience} Teaching Experience</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20">
                          <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Department</h4>
                            <p className="text-sm font-medium text-foreground">{hod.specialization}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl border border-primary/20">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Star className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Specialization</h4>
                            <p className="text-sm font-medium text-foreground">AI & ML Education Leadership</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message from HOD */}
                    {hod.message && (
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                        <div className="p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl border border-primary/20 relative">
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                            Message from HOD
                          </h4>
                          <p className="text-muted-foreground leading-relaxed italic text-sm">"{hod.message}"</p>
                          <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20"></div>
                        </div>
                      </div>
                    )}

                    {/* Achievement Highlights */}
                    <div className="pt-4 border-t border-border/30">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4 text-center lg:text-left">
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Award className="w-4 h-4 text-primary" />
                          </div>
                          <div className="text-lg font-bold text-primary">15+</div>
                          <div className="text-xs text-muted-foreground">Publications</div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Users className="w-4 h-4 text-secondary" />
                          </div>
                          <div className="text-lg font-bold text-secondary">500+</div>
                          <div className="text-xs text-muted-foreground">Students Guided</div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Star className="w-4 h-4 text-accent" />
                          </div>
                          <div className="text-lg font-bold text-accent">10+</div>
                          <div className="text-xs text-muted-foreground">Years Leading</div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg border border-primary/20 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <GraduationCap className="w-4 h-4 text-primary" />
                          </div>
                          <div className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">A+</div>
                          <div className="text-xs text-muted-foreground">NAAC Rating</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Faculty Carousel */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Meet Our Faculty</h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {otherFaculty.map((faculty, index) => (
                <CarouselItem key={faculty.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden h-full rounded-2xl shadow-lg border border-border/40 bg-gradient-to-br from-background to-primary/5 transform transition-all duration-300 hover:shadow-xl">
                      <div className="p-5">
                        <div className="flex items-start gap-3">
                          {faculty.image ? (
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 shadow-md"
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-primary/30 shadow-md">
                              <User className="w-7 h-7 text-primary" />
                            </div>
                          )}
                          <div className="flex-1">
                            <CardTitle className="text-base font-bold mb-1">
                              {faculty.name}
                            </CardTitle>
                            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground mb-1 text-xs">
                              {faculty.designation}
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <Briefcase className="w-3 h-3 text-primary" />
                            <span>{faculty.education.split(',')[0]}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <BookOpen className="w-3 h-3 text-primary" />
                            <span>{faculty.experience}</span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-border/30">
                          <h5 className="text-[10px] font-semibold text-muted-foreground mb-1">DEPARTMENT</h5>
                          <p className="text-xs">{faculty.specialization}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => {
              navigate('/faculty-achievements');
              window.scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
          >
            See Our Faculty Achievements
          </button>
        </div>

        <div className="text-center mt-10">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-lg font-bold mb-2">Faculty Excellence</h3>
            <p className="text-muted-foreground text-sm">
              Our faculty members are dedicated to providing exceptional education and mentorship, combining academic rigor with practical industry insights to prepare students for successful careers in AI and ML.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
