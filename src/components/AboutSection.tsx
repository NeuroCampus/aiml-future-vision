import { motion } from 'framer-motion';
import { Users, Award, BookOpen, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To provide progressive education and flourish student ingenuity for successful professionals impacting society for a smarter and ethical world.',
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'AICTE approved 4-year B.Tech program with comprehensive AI/ML curriculum and hands-on learning.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Qualified faculty with PhDs and industry experience in AI, ML, and emerging technologies.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Strong industry partnerships and placement record with leading tech companies.',
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
              The Department of Computer Science and Engineering (AI & ML) at AMC Engineering College stands at the forefront of technological innovation. We nurture creativity, critical thinking, and problem-solving skills essential for the AI-driven future.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>AICTE Approved Program</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Industry-Ready Curriculum</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Research Opportunities</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Global Partnerships</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/cartoons/undraw_educator_6dgp.svg"
              alt="Educator"
              className="w-full h-auto object-contain rounded-lg"
            />
            <img
              src="/cs-aiml-photos/Labpics/Seminarhall.jpg"
              alt="Department Seminar Hall"
              className="w-full h-auto object-cover rounded-lg"
            />
             <img
              src="/cartoons/undraw_teaching_58yg.svg"
              alt="Teaching"
              className="w-full h-auto object-contain rounded-lg"
            />
             <img
              src="/cs-aiml-photos/Labpics/CASElab.jpg"
              alt="CASE Lab"
              className="w-full h-auto object-cover rounded-lg"
            />
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
