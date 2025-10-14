import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, User, GraduationCap, Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';

const FacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Nandeeswar S B',
      designation: 'COE, HOD (CSE-AIML)',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
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
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: null,
      experience: '23 Years',
      achievements: []
    },
    {
      id: 3,
      name: 'Dr. Lokesh N S',
      designation: 'Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: null,
      experience: 'Not specified',
      achievements: []
    },
    {
      id: 4,
      name: 'Prof. Swathi Srikanth Achanur',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: '/Magazine/swathi.jpg',
      experience: '10.3 Years',
      achievements: []
    },
    {
      id: 5,
      name: 'Prof. Ambili K',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: '/Magazine/ambili k.jpg',
      experience: '5 Years',
      achievements: []
    },
    {
      id: 6,
      name: 'Prof. Vinaya S Kavalgi',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: '/Magazine/vinaya s.jpg',
      experience: '3 Years',
      achievements: []
    },
    {
      id: 7,
      name: 'Prof. Kavya P',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Electronics and Communication Engineering (UG), Computer Science & Engineering (PG)',
      image: '/Magazine/kavya p.jpg',
      experience: '2.7 Years',
      achievements: []
    },
    {
      id: 8,
      name: 'Prof. Mackal Rajawat',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: '/Magazine/mackal rajawat.jpg',
      experience: '1 Year',
      achievements: []
    },
    {
      id: 9,
      name: 'Prof. Ramakrishna Reddy',
      designation: 'Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: '/Magazine/ramkrishna d.jpg',
      experience: 'Not specified',
      achievements: []
    },
    {
      id: 10,
      name: 'Prof. Anulkumar C',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: null,
      experience: '2 Years 4 Months',
      achievements: []
    },
    {
      id: 11,
      name: 'Prof. Kavita Reddy',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Electronics & Communication / VLSI',
      image: null,
      experience: '6 Months',
      achievements: []
    },
    {
      id: 12,
      name: 'Prof. Nagavarshini B R',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Application',
      image: null,
      experience: '1 Year',
      achievements: []
    },
    {
      id: 13,
      name: 'Prof. Pamela Bera',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: null,
      experience: 'Fresher',
      achievements: []
    },
    {
      id: 14,
      name: 'Prof. Roshan U',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Mechanical Engineering / Computational Science',
      image: '/Magazine/roshan.jpg',
      experience: '4 Months',
      achievements: []
    },
    // Additional faculty requested to be added
    {
      id: 15,
      name: 'Dr. Ramani',
      designation: 'Associate Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: null,
      experience: 'Not specified',
      achievements: []
    },
    {
      id: 16,
      name: 'Prof. Veena',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Science & Engineering',
      image: null,
      experience: 'Not specified',
      achievements: []
    }
  ];

  const labInstructors = [
    'Mr. Yasar Beg',
    'Mr. Piyush',
    'Mrs. Shwetha'
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
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="mb-16 flex justify-center"
          >
            <Card className="overflow-hidden rounded-2xl shadow-2xl border border-border/30 bg-gradient-to-br from-primary/15 via-background to-primary/10 max-w-4xl w-full">
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Profile Image */}
                    <div className="relative">
                      {hod.image ? (
                        <div className="relative">
                          <img
                            src={hod.image}
                            alt={hod.name}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-xl"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Award className="w-4 h-4 text-primary-foreground" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 border-4 border-primary/30 shadow-xl">
                          <User className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                          {hod.name}
                        </h3>
                        <Badge variant="secondary" className="bg-primary/90 text-primary-foreground px-4 py-1 text-sm font-medium">
                          {hod.designation}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{hod.education}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{hod.experience} Teaching Experience</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide">Research Expertise</h4>
                        <p className="text-muted-foreground leading-relaxed">{hod.specialization}</p>
                        <p className="text-sm text-muted-foreground mt-2 italic">{hod.bio}</p>
                      </div>

                      {hod.message && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide">Message from HOD</h4>
                          <p className="text-muted-foreground leading-relaxed italic">"{hod.message}"</p>
                        </div>
                      )}

                      {/* Key Highlights */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20 shadow-sm">
                          <div className="text-3xl font-bold text-primary mb-2">{hod.experience.split('+')[0]}</div>
                          <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 text-center border border-accent/20 shadow-sm">
                          <div className="text-3xl font-bold text-primary mb-2">PhD</div>
                          <div className="text-sm text-muted-foreground font-medium">Qualified</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      {/* Faculty Carousel */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[Autoplay({ delay: 4000 })]}
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
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full rounded-xl shadow border border-border/30 bg-gradient-to-br from-primary/5 to-background">
                  <div className="p-4 flex items-center gap-3">
                    {faculty.image ? (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-12 h-12 rounded-full object-cover border border-primary/30"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-sm font-bold mb-1">
                        {faculty.name}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-primary/90 text-primary-foreground mb-1 text-xs">
                        {faculty.designation}
                      </Badge>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          <Briefcase className="w-3 h-3 mr-1" />
                          {faculty.education}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 pt-0 flex-1">
                    <div className="mb-2">
                      <h4 className="font-semibold text-xs text-muted-foreground mb-1 flex items-center gap-2">
                        <BookOpen className="w-3 h-3" />
                        Specialization
                      </h4>
                      <p className="text-xs">{faculty.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/faculty-achievements')}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors shadow-md"
        >
          See Our Faculty Achievements
        </button>
      </div>

      

      <div className="text-center mt-12">
        <div className="bg-primary/5 rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Faculty Excellence</h3>
          <p className="text-muted-foreground">
            Our faculty members are dedicated to providing exceptional education and mentorship, combining academic rigor with practical industry insights to prepare students for successful careers in AI and ML.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FacultySection;