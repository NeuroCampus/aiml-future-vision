import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Users, Award, BookOpen, Target, Brain, Zap, Rocket, Star, TrendingUp, Globe, Code, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const highlights = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To provide progressive education and flourish student ingenuity for successful professionals impacting society for a smarter and ethical world.',
      color: 'from-aiml-primary to-aiml-secondary',
      bgColor: 'bg-aiml-primary/10'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'AICTE approved 4-year B.Tech program with comprehensive AI/ML curriculum and hands-on learning.',
      color: 'from-aiml-secondary to-aiml-tertiary',
      bgColor: 'bg-aiml-secondary/10'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Qualified faculty with PhDs and industry experience in AI, ML, and emerging technologies.',
      color: 'from-tech-purple to-tech-cyan',
      bgColor: 'bg-tech-purple/10'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Strong industry partnerships and placement record with leading tech companies.',
      color: 'from-tech-cyan to-tech-orange',
      bgColor: 'bg-tech-cyan/10'
    },
  ];

  const achievements = [
    { metric: '15+', label: 'Qualified Faculty', icon: Users, color: 'text-aiml-primary' },
    { metric: '50+', label: 'Research Publications', icon: BookOpen, color: 'text-aiml-secondary' },
    { metric: '15+', label: 'Industry Projects', icon: Code, color: 'text-tech-purple' },
    { metric: '2021', label: 'Established', icon: Star, color: 'text-tech-cyan' },
  ];

  const tabContent = [
    {
      title: "Our Mission",
      content: "Empowering students with cutting-edge AI/ML knowledge and skills to solve real-world challenges and drive innovation in the digital age.",
      features: ["Facilitate state-of-the-art infrastructure and exposure to the latest AI tools.",
    "Achieve academic excellence through research and creative pedagogy in AI & ML.",
    "Strengthen Industry-Institute Interaction to prepare students for real-world environments.",
    "Develop entrepreneurial, ethical, and socially responsible AI professionals."],
      image: "/cs-aiml photos/Labpics/Seminarhall.jpg"
    },
    
    {
      title: "Research Excellence",
      content: "Our faculty and students are actively engaged in groundbreaking research across various domains of AI and ML.",
      features: ["Neural Networks", "Deep Learning", "Computer Vision", "Natural Language Processing"],
      image: "/cs-aiml photos/Labpics/RDlab.jpg"
    },
    {
      title: "Industry Connect",
      content: "Strong partnerships with leading technology companies provide our students with internship and placement opportunities.",
      features: ["Industry Mentorship", "Live Projects", "Placement Support", "Alumni Network"],
      image: "/cs-aiml photos/Eventspic/audience.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-br from-background via-background to-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-aiml-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

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
              About <span className="bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary bg-clip-text text-transparent">CSE-AIML</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Department of Computer Science and Engineering (Artificial Intelligence & Machine Learning) is committed to producing 
            competent professionals with strong technical skills and research capabilities....
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive Tabs Section */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabContent.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-aiml-primary to-aiml-secondary text-white shadow-lg'
                      : 'bg-card/80 text-muted-foreground hover:bg-card hover:text-foreground'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {tabContent[activeTab].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-aiml-primary rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">{tabContent[activeTab].title}</h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Vision & Highlights Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gradient">
              Shaping Tomorrow's AI Leaders
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Department of Computer Science and Engineering (AI & ML) at AMC Engineering College 
              stands at the forefront of technological innovation. We nurture creativity, critical thinking, 
              and problem-solving skills essential for the AI-driven future.
            </p>
            
            <div className="space-y-4">
              {["AICTE Approved Program", "Industry-Ready Curriculum", "Research Opportunities", "Global Partnerships"].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { delay: 0.5 + idx * 0.1 } 
                    }
                  }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-aiml-primary to-aiml-secondary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Department Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/cs-aiml photos/Labpics/Seminarhall.jpg"
                alt="Department Seminar Hall"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-aiml-primary/20 via-transparent to-aiml-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-aiml-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                State-of-the-art Facility
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 ${highlight.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`h-8 w-8 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-gradient">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="text-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold mb-12 text-gradient"
          >
            Our Achievements
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
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
                    <Icon className={`h-12 w-12 mx-auto ${achievement.color} group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-aiml-primary to-aiml-secondary bg-clip-text text-transparent mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {achievement.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
