
import { motion } from 'framer-motion';
import { Code, Database, Brain, Zap, Globe, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ProgramsSection = () => {
  const courses = [
    {
      icon: Brain,
      title: 'Fundamentals of AI & ML',
      description: 'Core concepts of artificial intelligence and machine learning algorithms.',
    },
    {
      icon: Code,
      title: 'Data Structures & Algorithms',
      description: 'Fundamental programming concepts essential for AI/ML implementation.',
    },
    {
      icon: Database,
      title: 'Database Management Systems',
      description: 'Database design and management for handling large datasets.',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Advanced neural networks and deep learning architectures.',
    },
    {
      icon: Globe,
      title: 'Computer Vision',
      description: 'Image processing and computer vision applications.',
    },
    {
      icon: Shield,
      title: 'Natural Language Processing',
      description: 'Processing and understanding human language using AI.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="programs" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Programs & <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-aligned curriculum designed to prepare students for the future of artificial intelligence and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
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
                    <course.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{course.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
