import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, User, GraduationCap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';

const FacultySection = () => {
  const navigate = useNavigate();
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Nandeeshwar S B',
      designation: 'HOD & Controller of Examinations',
      education: 'PhD, M.Tech',
      specialization: 'Computer Vision, AI Applications, Wireless Sensor Networks',
      image: '/Magazine/nandeeshwar.png',
      experience: '8+ Years',
      bio: 'Leading researcher in AI and Computer Vision with extensive experience in developing innovative solutions for real-world applications. Committed to advancing AI education and research excellence.',
      achievements: [
        {
          year: 'Feb-24',
          title: 'ResNet50-deep affinity network for object detection and tracking in videos',
          type: 'Scopus Q3',
          journal: 'International Journal of Advanced Technology and Engineering Exploration'
        },
        {
          year: 'Feb-24',
          title: 'Mathematical Modelling and Implementation of Multiscale Attention Feature Enhancement Network algorithm for the clarity of SEM and TEM images',
          type: 'Scopus Q3',
          journal: 'International Journal of Intelligent Systems and Applications in Engineering'
        },
        {
          year: 'Mar-24',
          title: 'A framework for brain tumor image analysis using convolution with RELU',
          type: 'Scopus Q3',
          journal: 'International Journal of Intelligent Systems and Applications in Engineering'
        },
        {
          year: 'Oct-23',
          title: 'Wireless Sensor Network Routing Protocols, Challenging Issues in Performance Comparison',
          type: 'Scopus Q4',
          journal: 'Journal of Theoritical and Applied Information Technology'
        },
        {
          year: 'Sep-23',
          title: 'A Smart Biomedical Healthcare system to detect stress using internet of medical things, Machine Learning and Artificial Intelligence',
          type: 'Scopus Q3',
          journal: 'International Journal of Intelligent Systems and Applications in Engineering'
        }
      ]
    },
    {
      id: 2,
      name: 'Dr. Vijaya Kumar',
      designation: 'Professor',
      education: 'PhD, M.Tech',
      specialization: 'IoT Systems, 5G Networks, Deep Learning, Computer Architecture',
      image: null,
      achievements: [
        {
          year: 'Apr-24',
          title: 'IOT based robotic device for seed dispersing and pesticide sparying',
          type: 'Indian Patent',
          journal: 'Design no-41347-001(Indian Patent)'
        },
        {
          year: 'Dec-24',
          title: 'Management and deployment of 5G small cells and Hetnets using deep learning',
          type: 'Book Chapter',
          journal: 'Book chapter in Routeledge Taylor and Francis Group'
        },
        {
          year: 'Apr-24',
          title: 'Graphical User Interface for a Computer Display device',
          type: 'UK Patent',
          journal: 'Design no- 6390J11(UK Patent)'
        },
        {
          year: 'Sep-24',
          title: 'Computer Architecture',
          type: 'Book Chapter',
          journal: 'Book chapter in Kalyani Publications'
        },
        {
          year: 'Sep-24',
          title: 'Object Oriented Programming using Java',
          type: 'Book Chapter',
          journal: 'Book chapter in Kalyani Publications'
        },
        {
          year: 'Dec-24',
          title: 'Revolutionizing Human Machine Conversations: Real time speech recognition and synthesis with GPT-2',
          type: 'Conference Paper',
          journal: 'Proceedings of the 3rd International Conferences on Optimization Techniques in the field of Engineering'
        },
        {
          year: 'Dec-24',
          title: 'The application of Machine Learning to NLP: Mordern Advances in the study of Human Language',
          type: 'Conference Paper',
          journal: '3rd International Conference on Sustainable Technologies and Advances in Automation, Aerospace and Robotics'
        },
        {
          year: 'Dec-24',
          title: 'Securing Space Tourism Operations using Blockchain Technology',
          type: 'Patent Filed',
          journal: 'ID: 202441067348(Indian Patent Filed)'
        }
      ]
    },
    {
      id: 3,
      name: 'Dr. Lokesh NS',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Machine Learning, Data Science, Algorithms',
      image: null,
      achievements: []
    },
    {
      id: 4,
      name: 'Mrs. Swathi S A',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'AI Chatbots, Image Processing, GANs, Object Detection',
      image: '/Magazine/swathi.jpg',
      achievements: [
        {
          year: 'Feb-25',
          title: 'VBOT: An AI Powered chatbot for streamlining college administration and enhancing student engagement',
          type: 'Research Paper',
          journal: 'International Journal of Research and Analytical Reviews'
        },
        {
          year: 'Apr-25',
          title: 'State of the art Review on Chatbot for College Enquiry',
          type: 'Research Paper',
          journal: 'International Journal of Scientific Research in Engineering and Management'
        },
        {
          year: 'Jan-25',
          title: 'Real-time distress signal recognition: Acoustic monitoring for crime control',
          type: 'Research Paper',
          journal: 'International Research Journal of Engineering and Technology'
        },
        {
          year: 'Jan-25',
          title: 'Object detection based on Python and Image Processing',
          type: 'Research Paper',
          journal: 'International Journal of Artificial Intelligence Research and Development'
        },
        {
          year: 'Nov-24',
          title: 'State of the art review on image synthesis with generative adversarial networks',
          type: 'Research Paper',
          journal: 'International Research Journal of Engineering and Technology'
        },
        {
          year: 'Mar-24',
          title: 'AI Based Goggles for Visually Impaired',
          type: 'Patent',
          journal: 'Patent ID 410787-001The Patent office, Government of India'
        },
        {
          year: 'Jan-25',
          title: 'Analysing and predicting the control of GHG emissions using Machine Learning Models',
          type: 'Book Chapter',
          journal: 'Artificial Intelligence and Software Engineering: Tools,Techniques and future trends, Bright Sky Publications'
        },
        {
          year: 'Mar-25',
          title: 'Digital Survival: Navigating Internet vulnerabilities in the modern era',
          type: 'Research Paper',
          journal: 'International Journal of Scientific Research in Engineering and Management'
        },
        {
          year: 'Jan-25',
          title: 'AI driven Social Media Platform Profanity- Free',
          type: 'Research Paper',
          journal: 'International Journal of Research and Analytical Reviews'
        }
      ]
    },
    {
      id: 5,
      name: 'Mr. Sreenivasaperumal',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Ensemble Learning, Deep Learning, Cybersecurity, CNN Models',
      image: null,
      achievements: [
        {
          year: 'Jan-25',
          title: 'Performance Evaluation of children at risk for schizophrenia using ensemble learning',
          type: 'Book Chapter',
          journal: 'Book Chapter in Smart Factories for Industry 5.0 Transformation'
        },
        {
          year: 'Feb-25',
          title: 'Boosting Deep Learning Models with Improved Artificial Gorilla Troops Algorithm for real time object detection and classification on self driving cars',
          type: 'SCI Journal',
          journal: 'SCI Journal'
        },
        {
          year: 'Dec-24',
          title: 'Innovations in Cybersecurity and Data Science',
          type: 'Book Chapter',
          journal: 'Proceedings of ICICDS Book chapter in Springer'
        },
        {
          year: 'Sep-23',
          title: 'A review of Convolution Neural Networks(D-CNN) Models',
          type: 'Book Chapter',
          journal: 'Book Chapter in AETS Global'
        }
      ]
    },
    {
      id: 6,
      name: 'Mrs. Ambili K',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Machine Learning, IoT Systems, Object Detection, Image Processing',
      image: '/Magazine/ambili k.jpg',
      achievements: [
        {
          year: 'Jan-25',
          title: 'Object detection based on Python and Image Processing',
          type: 'Research Paper',
          journal: 'International Journal of Artificial Intelligence Research and Development'
        }
      ]
    },
    {
      id: 7,
      name: 'Mr. Anul Kumar',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Software Engineering, Programming Languages',
      image: null,
      achievements: []
    },
    {
      id: 8,
      name: 'Mrs. Mackal Rajawat',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Data Structures, Algorithms',
      image: '/Magazine/mackal rajawat.jpg',
      achievements: []
    },
    {
      id: 9,
      name: 'Mrs. Vinaya S Kavalgi',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Database Systems, Web Technologies',
      image: '/Magazine/vinaya s.jpg',
      achievements: []
    },
    {
      id: 10,
      name: 'Mr. Ramakrishna R',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Networks, Network Security',
      image: '/Magazine/ramkrishna d.jpg',
      achievements: []
    },
    {
      id: 11,
      name: 'Mrs. Kavya P',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Machine Learning, Data Analytics',
      image: '/Magazine/kavya p.jpg',
      achievements: []
    },
    {
      id: 12,
      name: 'Mr. Roshan U',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Artificial Intelligence, Computer Vision',
      image: '/Magazine/roshan.jpg',
      achievements: []
    },
    {
      id: 13,
      name: 'Ms. Nagavarshini B R',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Software Development, Mobile Applications',
      image: null,
      achievements: []
    },
    {
      id: 14,
      name: 'Mrs. Nallamilli Kavita',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Data Mining, Big Data Analytics',
      image: '/Magazine/nallamilli kavita.png',
      achievements: []
    },
    {
      id: 15,
      name: 'Mrs. Bhagyashree',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Cloud Computing, Distributed Systems',
      image: null,
      achievements: []
    }
  ];

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

                      {/* Key Highlights */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20 shadow-sm">
                          <div className="text-3xl font-bold text-primary mb-2">{hod.experience.split('+')[0]}</div>
                          <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                        </div>
                        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 text-center border border-secondary/20 shadow-sm">
                          <div className="text-3xl font-bold text-primary mb-2">{hod.achievements.length}</div>
                          <div className="text-sm text-muted-foreground font-medium">Research Papers</div>
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