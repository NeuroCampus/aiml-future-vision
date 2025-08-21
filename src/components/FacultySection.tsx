import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FacultySection = () => {
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Nandeeshwar S B',
      designation: 'Head of Department',
      education: 'PhD, M.Tech',
      specialization: 'Computer Vision, AI Applications, Wireless Sensor Networks',
      image: '/cs-aiml-photos/Facultycertificate/IJATEE Journal.jpg',
      achievements: [
        {
          title: 'ResNet50-deep affinity network for object detection and tracking in videos',
          year: '2024',
          journal: 'International Journal of Advanced Technology and Engineering Exploration',
          type: 'Scopus Q3'
        },
        {
          title: 'Mathematical Modelling and Implementation of Multiscale Attention Feature Enhancement Network',
          year: '2024',
          journal: 'International Journal of Intelligent Systems and Applications in Engineering',
          type: 'Scopus Q3'
        },
        {
          title: 'A framework for brain tumor image analysis using convolution with RELU',
          year: '2024',
          journal: 'International Journal of Intelligent Systems and Applications in Engineering',
          type: 'Scopus Q3'
        },
        {
          title: 'Wireless Sensor Network Routing Protocols, Challenging Issues in Performance Comparison',
          year: '2023',
          journal: 'Journal of Theoritical and Applied Information Technology',
          type: 'Scopus Q4'
        },
        {
          title: 'A Smart Biomedical Healthcare system to detect stress using IoMT, ML and AI',
          year: '2023',
          journal: 'International Journal of Intelligent Systems and Applications in Engineering',
          type: 'Scopus Q3'
        }
      ]
    },
    {
      id: 2,
      name: 'Dr. Vijaykumar K',
      designation: 'Associate Professor',
      education: 'PhD, M.Tech',
      specialization: 'IoT Systems, 5G Networks, Deep Learning, Computer Architecture',
      image: '/cs-aiml-photos/Facultycertificate/Iot workshop.jpg',
      achievements: [
        {
          title: 'IOT based robotic device for seed dispersing and pesticide spraying',
          year: '2024',
          journal: 'Indian Patent',
          type: 'Patent No. 41347-001'
        },
        {
          title: 'Management and deployment of 5G small cells and Hetnets using deep learning',
          year: '2024',
          journal: 'Routledge Taylor and Francis Group',
          type: 'Book Chapter'
        },
        {
          title: 'Graphical User Interface for a Computer Display device',
          year: '2024',
          journal: 'UK Patent',
          type: 'Design No. 6390J11'
        },
        {
          title: 'Computer Architecture',
          year: '2024',
          journal: 'Kalyani Publications',
          type: 'Book Chapter'
        },
        {
          title: 'Object Oriented Programming using Java',
          year: '2024',
          journal: 'Kalyani Publications',
          type: 'Book Chapter'
        },
        {
          title: 'Securing Space Tourism Operations using Blockchain Technology',
          year: '2024',
          journal: 'Indian Patent Filed',
          type: 'ID: 202441067348'
        }
      ]
    },
    {
      id: 3,
      name: 'Prof. Swathi S A',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'AI Chatbots, Image Processing, GANs, Object Detection',
      image: '/cs-aiml-photos/Facultycertificate/IRJET by Swathi.jpg',
      achievements: [
        {
          title: 'VBOT: An AI Powered chatbot for streamlining college administration',
          year: '2025',
          journal: 'International Journal of Research and Analytical Reviews',
          type: 'Research Paper'
        },
        {
          title: 'State of the art Review on Chatbot for College Enquiry',
          year: '2025',
          journal: 'International Journal of Scientific Research in Engineering and Management',
          type: 'Research Paper'
        },
        {
          title: 'Real-time distress signal recognition: Acoustic monitoring for crime control',
          year: '2025',
          journal: 'International Research Journal of Engineering and Technology',
          type: 'Research Paper'
        },
        {
          title: 'AI Based Goggles for Visually Impaired',
          year: '2024',
          journal: 'Government of India Patent Office',
          type: 'Patent ID 410787-001'
        },
        {
          title: 'State of the art review on image synthesis with generative adversarial networks',
          year: '2024',
          journal: 'International Research Journal of Engineering and Technology',
          type: 'Research Paper'
        },
        {
          title: 'AI driven Social Media Platform Profanity-Free',
          year: '2025',
          journal: 'International Journal of Research and Analytical Reviews',
          type: 'Research Paper'
        }
      ]
    },
    {
      id: 4,
      name: 'Prof. Sreenivasaperumal',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Ensemble Learning, Deep Learning, Cybersecurity, CNN Models',
      image: '/cs-aiml-photos/Facultycertificate/IJRAR Journal.png',
      achievements: [
        {
          title: 'Performance Evaluation of children at risk for schizophrenia using ensemble learning',
          year: '2025',
          journal: 'Smart Factories for Industry 5.0 Transformation',
          type: 'Book Chapter'
        },
        {
          title: 'Boosting Deep Learning Models with Improved Artificial Gorilla Troops Algorithm',
          year: '2025',
          journal: 'SCI Journal',
          type: 'SCI Paper'
        },
        {
          title: 'Innovations in Cybersecurity and Data Science',
          year: '2024',
          journal: 'Proceedings of ICICDS - Springer',
          type: 'Book Chapter'
        },
        {
          title: 'A review of Convolution Neural Networks(D-CNN) Models',
          year: '2023',
          journal: 'AETS Global',
          type: 'Book Chapter'
        }
      ]
    },
    {
      id: 5,
      name: 'Prof. Ambili K',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Machine Learning, IoT Systems, Object Detection, Image Processing',
      image: '/cs-aiml-photos/Facultycertificate/Prof. Ambili K(Iot workshop).jpg',
      achievements: [
        {
          title: 'Object detection based on Python and Image Processing',
          year: '2025',
          journal: 'International Journal of Artificial Intelligence Research and Development',
          type: 'Research Paper'
        }
      ]
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedFaculty(expandedFaculty === id ? null : id);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="faculty" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Expert Faculty</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished faculty members who bring years of academic excellence, industry experience, and cutting-edge research to shape future AI/ML professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {faculty.designation}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    {faculty.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {faculty.education}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Specialization
                    </h4>
                    <p className="text-sm">{faculty.specialization}</p>
                  </div>

                  <div className="border-t pt-4">
                    <button
                      onClick={() => toggleExpanded(faculty.id)}
                      className="flex items-center justify-between w-full text-left font-semibold text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Research & Achievements ({faculty.achievements.length})
                      </span>
                      {expandedFaculty === faculty.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedFaculty === faculty.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-3 max-h-64 overflow-y-auto"
                      >
                        {faculty.achievements.map((achievement, idx) => (
                          <div key={idx} className="border-l-2 border-primary/20 pl-4 py-2">
                            <div className="flex justify-between items-start mb-1">
                              <Badge variant="outline" className="text-xs mb-2">
                                {achievement.type}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{achievement.year}</span>
                            </div>
                            <h5 className="font-medium text-sm leading-tight mb-1">
                              {achievement.title}
                            </h5>
                            <p className="text-xs text-muted-foreground italic">
                              {achievement.journal}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;