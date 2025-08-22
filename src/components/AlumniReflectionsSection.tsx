import { motion } from 'framer-motion';
import { Quote, GraduationCap, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AlumniReflectionsSection = () => {
  const reflections = [
    {
      name: 'Jayasri',
      rollNumber: '1AM21CI019',
      quote: 'As the first batch, we navigated challenges with independence and built a strong community. The faculty\'s support and hands-on learning prepared us for life beyond academics.',
      role: 'Editor of TIMES.AI Volume I, President of CSE-AIML Innovation Forum',
      icon: GraduationCap,
    },
    {
      name: 'Khusumith S. Veera',
      rollNumber: '1AM21CI022',
      quote: 'The department\'s warmth and brilliant professors inspired us to push our limits and shape the future together.',
      role: 'President of AI Echelon Club',
      icon: Heart,
    },
    {
      name: 'Ausaf',
      rollNumber: '1AM21CI044',
      quote: 'Serving as the first President of the CSE-AIML Innovation Forum was a transformative experience. With the support of our faculty and HOD, we organized various events that fostered creativity and community.',
      role: 'President of CSE-AIML Innovation Forum',
      icon: Users,
    },
    {
      name: 'Sankruth',
      rollNumber: '1AM21CI041',
      quote: 'Serving as the Treasurer taught me financial planning, precision, and communication. It\'s an experience that sharpened my organizational skills and instilled a deep sense of responsibility.',
      role: 'Editor of TIMES.AI Volume I, Treasurer of CSE-AIML Innovation Forum',
      icon: GraduationCap,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Alumni <span className="text-primary">Reflections</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our pioneering Batch of 2025 - the first CSE-AIML graduates who shaped the foundation of our department and established a legacy of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reflections.map((reflection, index) => {
            const Icon = reflection.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Quote className="h-6 w-6 text-primary" />
                    </div>
                    
                    <blockquote className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                      "{reflection.quote}"
                    </blockquote>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-sm mb-1">{reflection.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{reflection.rollNumber}</p>
                      <p className="text-xs text-primary font-medium">{reflection.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">CSE-AI&ML Batch 2025, AMC Engineering College</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Pioneering Legacy</h3>
            <p className="text-muted-foreground">
              Our first batch of graduates established the foundation for excellence in CSE-AIML education. Their experiences, leadership, and achievements continue to inspire current and future students, creating a lasting legacy of innovation and community spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniReflectionsSection;