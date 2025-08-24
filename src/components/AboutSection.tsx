import { motion } from 'framer-motion';
import { Target, BookOpen, Users, Award, Lightbulb, Rocket, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To become a nationally recognized center of excellence in AI and ML education, fostering innovation, research, and entrepreneurship to address real-world challenges.',
    },
    {
      icon: BookOpen,
      title: 'Our Mission',
      description: 'Provide dynamic curriculum blending theoretical foundations with practical applications, fostering holistic student development through hands-on projects and industry collaborations.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Dedicated faculty with PhDs and industry experience, committed to mentoring students and fostering innovation in AI and ML technologies.',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Students consistently securing top VTU ranks with Mohammad Ayyan achieving 7th rank (9.43 CGPA) - first rank holder from CSE-AIML branch.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">CSE-AIML</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence and machine learning education through innovative curriculum, cutting-edge research, and industry collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Shaping Tomorrow's AI Leaders
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              The Department of Computer Science and Engineering (AI & ML) at AMC Engineering College is a hub of academic excellence, innovation, and industry-aligned education. Established to meet the demands of the rapidly evolving technological landscape, we are committed to nurturing future-ready professionals equipped with strong technical skills, critical thinking, and a research-driven mindset.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>AICTE Approved Program</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Dynamic AI/ML Curriculum</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Industry-Aligned Education</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Research & Innovation Focus</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Entrepreneurship Development</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Global Industry Partnerships</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            {/* Mobile: Single illustration */}
            <div className="lg:hidden flex justify-center">
              <div className="w-full max-w-sm bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
                <img
                  src="/cartoons/undraw_educator_6dgp.svg"
                  alt="AI Education Excellence"
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>
            
            {/* Desktop: Grid layout */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-4">
                  <img
                    src="/cartoons/undraw_educator_6dgp.svg"
                    alt="Expert Educators"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/cs-aiml-photos/Labpics/Seminarhall.jpg"
                    alt="Modern Seminar Hall"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/cs-aiml-photos/Labpics/CASElab.jpg"
                    alt="Advanced CASE Laboratory"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-xl p-4">
                  <img
                    src="/cartoons/undraw_teaching_58yg.svg"
                    alt="Interactive Learning"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{highlight.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
