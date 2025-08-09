import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const StudentsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: 'Triosync Team',
      batch: '2024 Batch',
      company: 'IIT Bombay Hackathon',
      image: '/cs-aiml photos/Studentscertficate/Hackathon at IIT Bombay.jpg',
      quote: "Our team, Triosync, secured a top position at the national-level hackathon organized by IIT Bombay, a testament to our problem-solving skills and AI/ML expertise.",
    },
    {
      id: 1,
      name: 'Harshavardhan',
      batch: '2024 Graduate',
      company: 'Tech Innovators',
      image: '/cs-aiml photos/Studentscertficate/HACKTOPUS(Harshavardhan).jpg',
      quote: "Participating in HACKTOPUS hackathon was a game-changer. The practical experience and mentorship from faculty helped me secure my dream job.",
    },
    {
      id: 2,
      name: 'Dhanushree',
      batch: '2023 Graduate',
      company: 'AI Solutions Ltd',
      image: '/cs-aiml photos/Studentscertficate/AI Skills(Dhanushree).jpg',
      quote: "The AI Skills certification program gave me hands-on experience with cutting-edge technologies. The curriculum is perfectly aligned with industry needs.",
    },
    {
      id: 3,
      name: 'Karthik',
      batch: '2024 Graduate',
      company: 'DataTech Corp',
      image: '/cs-aiml photos/Studentscertficate/Joy of Computing (Karthik).png',
      quote: "The Joy of Computing course opened my eyes to the beauty of programming. The faculty's guidance helped me excel in competitive programming.",
    },
    {
      id: 4,
      name: 'Sindhu',
      batch: '2023 Graduate',
      company: 'Research Labs',
      image: '/cs-aiml photos/Studentscertficate/IJRAR(Sindhu).png',
      quote: "Publishing research papers in IJRAR during my studies gave me a strong foundation in research methodology and technical writing.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 5000); // Auto-play every 5 seconds
    return () => clearTimeout(timer);
  }, [currentTestimonial]);

  const testimonialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section id="students" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our students excel in competitions, earn certifications, publish research, and secure placements in top companies through our comprehensive AI/ML program.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="p-6 md:p-8">
                    <Quote className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-3 md:mb-4" />
                    <blockquote className="text-base sm:text-lg leading-relaxed text-foreground mb-3 md:mb-4">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <h4 className="font-bold text-base sm:text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].batch} - {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center mt-6 md:mt-8 space-x-3 md:space-x-4">
            <EnhancedButton onClick={prevTestimonial} variant="outline" size="icon" effect="glow" className="w-9 h-9 sm:w-10 sm:h-10">
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </EnhancedButton>
            <EnhancedButton onClick={nextTestimonial} variant="outline" size="icon" effect="glow" className="w-9 h-9 sm:w-10 sm:h-10">
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </EnhancedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
