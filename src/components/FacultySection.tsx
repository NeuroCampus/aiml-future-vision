import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, User, GraduationCap, Star, Quote, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';

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
      name: 'Prof. Nagavarshini ',
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
        {/* Solid background */}
        <div className="absolute inset-0 bg-background" />
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
            <Card className="overflow-hidden shadow-2xl border-0 bg-background relative">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/8 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full"></div>

              <div className="relative p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* Profile Section */}
                  <div className="md:col-span-1 flex flex-col items-center">
                    <div className="relative mb-4">
                      {hod.image ? (
                        <div className="relative">
                          <OptimizedImage
                            src={hod.image}
                            alt={hod.name}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-xl"
                            aspectRatio="1/1"
                          />
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-primary/20 border-4 border-primary/30 shadow-xl">
                          <User className="w-16 h-16 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                        {hod.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="bg-primary text-white px-3 py-1 text-sm font-medium rounded-full">
                          {hod.designation}
                        </Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1 text-sm font-medium rounded-full">
                          Head of Department
                        </Badge>
                      </div>
                    </div>

                    {/* Key Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-muted-foreground">Education:</span>
                        <p className="text-foreground">M.Tech in CSE</p>
                      </div>
                      <div>
                        <span className="font-semibold text-muted-foreground">Experience:</span>
                        <p className="text-foreground">{hod.experience} Years</p>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="text-muted-foreground text-sm leading-relaxed italic">
                        "Committed to fostering innovation and excellence in AI/ML education, guiding students towards successful careers in this transformative field."
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="text-2xl font-bold text-primary mb-1">{hod.experience.split(' ')[0]}+</div>
                        <div className="text-sm font-medium text-primary">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                        <div className="text-sm font-medium text-blue-700">Students Guided</div>
                      </div>
                      <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <div className="text-2xl font-bold text-accent mb-1">15+</div>
                        <div className="text-sm font-medium text-accent">Publications</div>
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
                    <Card className="overflow-hidden h-full rounded-2xl shadow-lg border border-border/40 bg-background transform transition-all duration-300 hover:shadow-xl">
                      <div className="p-5">
                        <div className="flex items-start gap-3">
                          {faculty.image ? (
                            <OptimizedImage
                              src={faculty.image}
                              alt={faculty.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 shadow-md"
                              aspectRatio="1/1"
                              showLoadingState={false}
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/20 border-2 border-primary/30 shadow-md">
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
          >
            See Our Faculty Achievements
          </button>
        </div>

        <div className="text-center mt-10">
          <div className="bg-primary/10 rounded-xl p-6 max-w-4xl mx-auto border border-primary/20">
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
