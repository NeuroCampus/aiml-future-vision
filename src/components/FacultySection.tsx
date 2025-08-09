import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const FacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Nandeeshwar SB',
      designation: 'Head of Department',
      education: 'PhD, M.Tech',
      specialization: 'Computer Vision, AI Applications',
      category: 'research',
      image: '/cs-aiml photos/Facultycertificate/IJATEE Journal.jpg',
    },
    {
      id: 2,
      name: 'Prof. Swathi',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Data Science, Deep Learning',
      category: 'faculty',
      image: '/cs-aiml photos/Facultycertificate/IRJET by Swathi.jpg',
    },
    {
      id: 3,
      name: 'Prof. Ambili K',
      designation: 'Assistant Professor',
      education: 'PhD, M.Tech',
      specialization: 'Machine Learning, IoT Systems',
      category: 'senior',
      image: '/cs-aiml photos/Facultycertificate/Prof. Ambili K(Iot workshop).jpg',
    }
    
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {facultyMembers.map((faculty) => (
              <motion.div
                key={faculty.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden text-center h-full">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">{faculty.name}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground">{faculty.designation}</p>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{faculty.specialization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
