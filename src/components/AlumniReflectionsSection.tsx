import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import OptimizedImage from '@/components/ui/optimized-image';

const AlumniReflectionsSection = () => {
  const reflections = [
    {
      name: 'Jayasri G',
      image: '/Magazine/jayasri.jpg',
      quote: 'Being part of the first CSE AIML batch was full of surprises and challenges. We grew, adapted, and built our department\'s identity together, supported by passionate faculty. Proud to pave the way for others.',
    },
    {
      name: 'Shaikh Mohammed Ausaf',
      image: '/Magazine/shaikh mohammed ausaf.jpg',
      quote: 'As the first CSE-AIML batch, we faced uncertainties but fostered adaptability and ownership. Passionate faculty brought stability, preparing us for jobs and life. Cherished memories and friendships from this pioneering journey.',
    },
    {
      name: 'Sankruth K Gargeyasa',
      image: '/Magazine/sankruth K .jpg',
      quote: 'The first CSE-AIML batch at AMC was life-changing. Dedicated faculty mentored us beyond academics, blending CSE and AI/ML. Extracurriculars helped discover strengths. Forever grateful for the memories and family-like bond.',
    },
    {
      name: 'Mamatha S',
      image: '/Magazine/mamatha.jpg',
      quote: 'Four incredible years at AMC CSE-AIML: growth, learning, and experiences. Supportive faculty guided me academically and personally. Balanced academics and extracurriculars enriched my journey. Grateful for friendships and lessons.',
    },
    {
      name: 'Tejas P V',
      image: '/Magazine/tejas pv.jpg',
      quote: 'First CSE-AIML batch at AMC: ups and downs with amazing faculty like Srinivasaperumal sir and HOD Dr. Nandeeswar. Opportunities to express creativity. Fortunate to have great friends and teachers. Thankful for unlocking potential.',
    },
    {
      name: 'D R Mouna',
      image: '/Magazine/mouna.jpg',
      quote: 'As CSE-AIML pioneers, we navigated a new department with self-study and humor. Teachers evolved, clubs formed. Chaos strengthened us. Survivors, innovators, blazing our path together.',
    },
    {
      name: 'Khusumith S Veera',
      image: '/Magazine/khusumith s veera.jpg',
      quote: 'CSE-AIML first batch: warmth, support, passionate mentors. Infectious energy with events and workshops. Student clubs like family. Part of a dynamic community shaping the future.',
    },
    {
      name: 'Mohammed Ayaan',
      image: '/Magazine/mohammed ayaan.jpg',
      quote: 'Amazing time at AMC CSE-AIML first batch. Set the tone for future. Supportive faculty, hands-on learning. Energetic campus life, personal growth. Thankful for opportunities and memories.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
            Alumni <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Reflections</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Hear from our pioneering Batch of 2025 - the first CSE-AIML graduates who shaped the foundation of our department and established a legacy of excellence.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[Autoplay({ delay: 2500 })]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {reflections.map((reflection, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-2 mb-3">
                        <OptimizedImage
                          src={reflection.image}
                          alt={reflection.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                          aspectRatio="1/1"
                          showLoadingState={false}
                        />
                        <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      
                      <blockquote className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed italic">
                        "{reflection.quote}"
                      </blockquote>
                      
                      <div className="border-t pt-3">
                        <h4 className="font-bold text-xs sm:text-sm mb-1">{reflection.name}</h4>
                        <p className="text-xs text-muted-foreground">CSE-AI&ML Batch 2025</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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