import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, ChevronDown, ChevronUp, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FacultySection = () => {
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);
  const [showAllFaculty, setShowAllFaculty] = useState(false);

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Nandeeshwar S B',
      designation: 'HOD & Controller of Examinations',
      education: 'PhD, M.Tech',
      specialization: 'Computer Vision, AI Applications, Wireless Sensor Networks',
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
      achievements: []
    },
    {
      id: 4,
      name: 'Mrs. Swathi S A',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'AI Chatbots, Image Processing, GANs, Object Detection',
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
      achievements: []
    },
    {
      id: 8,
      name: 'Mrs. Mackal Rajawat',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Data Structures, Algorithms',
      achievements: []
    },
    {
      id: 9,
      name: 'Mrs. Vinaya S Kavalgi',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Database Systems, Web Technologies',
      achievements: []
    },
    {
      id: 10,
      name: 'Mr. Ramakrishna R',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Computer Networks, Network Security',
      achievements: []
    },
    {
      id: 11,
      name: 'Mrs. Kavya P',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Machine Learning, Data Analytics',
      achievements: []
    },
    {
      id: 12,
      name: 'Mr. Roshan U',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Artificial Intelligence, Computer Vision',
      achievements: []
    },
    {
      id: 13,
      name: 'Ms. Nagavarshini B R',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Software Development, Mobile Applications',
      achievements: []
    },
    {
      id: 14,
      name: 'Mrs. Nallamilli Kavita',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Data Mining, Big Data Analytics',
      achievements: []
    },
    {
      id: 15,
      name: 'Mrs. Bhagyashree',
      designation: 'Assistant Professor',
      education: 'M.Tech',
      specialization: 'Cloud Computing, Distributed Systems',
      achievements: []
    }
  ];

  const displayedFaculty = showAllFaculty ? facultyMembers : facultyMembers.slice(0, 4);

  const toggleExpanded = (id: number) => {
    setExpandedFaculty(expandedFaculty === id ? null : id);
  };

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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Expert Faculty</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished faculty members who bring years of academic excellence, industry experience, and cutting-edge research to shape future AI/ML professionals.
          </p>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedFaculty.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden h-full rounded-xl shadow border border-border/30 bg-gradient-to-br from-primary/5 to-background text-sm">
                <div className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base font-bold mb-1">
                      {faculty.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground mb-1 text-xs">
                      {faculty.designation}
                    </Badge>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {faculty.education}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <h4 className="font-semibold text-xs text-muted-foreground mb-1 flex items-center gap-2">
                      <BookOpen className="w-3 h-3" />
                      Specialization
                    </h4>
                    <p className="text-xs">{faculty.specialization}</p>
                  </div>
                  <div className="border-t pt-3">
                    <button
                      onClick={() => toggleExpanded(faculty.id)}
                      className="flex items-center justify-between w-full text-left font-semibold text-xs text-primary hover:text-primary/80 transition-colors py-1"
                    >
                      <span className="flex items-center gap-2">
                        <Award className="w-3 h-3" />
                        {expandedFaculty === faculty.id ? 'Explore Less' : 'Explore More'}
                        <span className="text-xs text-muted-foreground">({faculty.achievements.length})</span>
                      </span>
                      {expandedFaculty === faculty.id ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      )}
                    </button>
                    <motion.div
                      initial={false}
                      animate={expandedFaculty === faculty.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`overflow-hidden mt-2 space-y-2 ${expandedFaculty === faculty.id ? 'max-h-60' : 'max-h-0'}`}
                    >
                      {expandedFaculty === faculty.id && faculty.achievements.map((achievement, idx) => (
                        <div key={idx} className="border-l-2 border-primary/20 pl-3 py-2 bg-muted/30 rounded-r-lg">
                          <div className="flex justify-between items-start mb-1">
                            <Badge variant="outline" className="text-xs">
                              {achievement.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground font-medium">{achievement.year}</span>
                          </div>
                          <h5 className="font-medium text-xs leading-tight mb-1">
                            {achievement.title}
                          </h5>
                          <p className="text-xs text-muted-foreground italic">
                            {achievement.journal}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showAllFaculty && displayedFaculty.length < facultyMembers.length && (
            <button
              onClick={() => setShowAllFaculty(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors shadow-md"
            >
              Explore More Faculty ({facultyMembers.length - displayedFaculty.length} more)
            </button>
          )}
          {showAllFaculty && (
            <button
              onClick={() => { setShowAllFaculty(false); setExpandedFaculty(null); }}
              className="bg-muted text-primary hover:bg-primary/10 px-8 py-3 rounded-md font-medium transition-colors shadow-md mt-4"
            >
              Explore Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;