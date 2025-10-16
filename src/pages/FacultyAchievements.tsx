import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, User, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FacultyAchievements = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Nandeeshwar S B',
      designation: 'HOD & Controller of Examinations',
      education: 'PhD, M.Tech',
      specialization: 'Computer Vision, AI Applications, Wireless Sensor Networks',
      image: '/Magazine/nandeeshwar.png',
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
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-bl from-background via-background/95 to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--aiml-primary)/0.16),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--aiml-secondary)/0.14),transparent_65%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Faculty <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating the remarkable accomplishments and contributions of our distinguished faculty members in research, innovation, and academic excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {facultyMembers.map((faculty, facultyIndex) => (
          faculty.achievements.length > 0 && (
            <motion.div
              key={faculty.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: facultyIndex * 0.1 }}
              className="mb-16"
            >
              <Card className="overflow-hidden shadow-lg border border-border/30 bg-gradient-to-br from-primary/5 to-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    {faculty.image ? (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-2xl font-bold mb-1">
                        {faculty.name}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-primary/90 text-primary-foreground mb-2">
                        {faculty.designation}
                      </Badge>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {faculty.education}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Specialization
                    </h4>
                    <p className="text-muted-foreground">{faculty.specialization}</p>
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Achievements ({faculty.achievements.length})
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {faculty.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="border-l-4 border-primary/30 pl-4 py-4 bg-muted/20 rounded-r-lg hover:bg-muted/30 transition-colors"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                              {achievement.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground font-medium bg-primary/5 px-2 py-1 rounded">
                              {achievement.year}
                            </span>
                          </div>
                          <h4 className="font-semibold text-lg leading-tight mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-muted-foreground italic">
                            {achievement.journal}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
};

export default FacultyAchievements;
