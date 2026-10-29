import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import OptimizedImage from '@/components/ui/optimized-image';

const AlumniReflectionsSection = () => {
  const reflections = [
    {
      name: 'Jayasri G',
      image: '/Magazine/jayasri.webp',
      quote: "Being part of the first CSE AIML batch was full of surprises and challenges. We grew, adapted, and built our department's identity together, supported by passionate faculty. Proud to pave the way for others.",
    },
    {
      name: 'Shaikh Mohammed Ausaf',
      image: '/Magazine/shaikh mohammed ausaf.webp',
      quote: 'As the first CSE-AIML batch, we faced uncertainties but fostered adaptability and ownership. Passionate faculty brought stability, preparing us for jobs and life. Cherished memories and friendships from this pioneering journey.',
    },
    {
      name: 'Sankruth K Gargeyasa',
      image: '/Magazine/sankruth K .webp',
      quote: 'The first CSE-AIML batch at AMC was life-changing. Dedicated faculty mentored us beyond academics, blending CSE and AI/ML. Extracurriculars helped discover strengths. Forever grateful for the memories and family-like bond.',
    },
    {
      name: 'Mamatha S',
      image: '/Magazine/mamatha.webp',
      quote: 'Four incredible years at AMC CSE-AIML: growth, learning, and experiences. Supportive faculty guided me academically and personally. Balanced academics and extracurriculars enriched my journey. Grateful for friendships and lessons.',
    },
    {
      name: 'Tejas P V',
      image: '/Magazine/tejas pv.webp',
      quote: 'First CSE-AIML batch at AMC: ups and downs with amazing faculty like Srinivasaperumal sir and HOD Dr. Nandeeswar. Opportunities to express creativity. Fortunate to have great friends and teachers. Thankful for unlocking potential.',
    },
    {
      name: 'D R Mouna',
      image: '/Magazine/mouna.webp',
      quote: 'As CSE-AIML pioneers, we navigated a new department with self-study and humor. Teachers evolved, clubs formed. Chaos strengthened us. Survivors, innovators, blazing our path together.',
    },
    {
      name: 'Khusumith S Veera',
      image: '/Magazine/khusumith s veera.webp',
      quote: 'CSE-AIML first batch: warmth, support, passionate mentors. Infectious energy with events and workshops. Student clubs like family. Part of a dynamic community shaping the future.',
    },
    {
      name: 'Mohammed Ayaan',
      image: '/Magazine/mohammed ayaan.webp',
      quote: 'Amazing time at AMC CSE-AIML first batch. Set the tone for future. Supportive faculty, hands-on learning. Energetic campus life, personal growth. Thankful for opportunities and memories.',
    },
  ];

  return (
    <section id="alumni-reflections" className="relative overflow-hidden bg-transparent">
      <div className="h-px bg-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Graduates</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Alumni <span className="text-primary">Reflections</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-md md:text-right leading-relaxed">
            Hear from our pioneering Batch of 2025 - the first CSE-AIML graduates who established a legacy of excellence.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-6">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reflections.map((reflection, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <div className="bg-card/75 backdrop-blur-md border border-border/40 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <OptimizedImage
                            src={reflection.image}
                            alt={reflection.name}
                            className="w-10 h-10 rounded-full object-cover border border-border"
                            aspectRatio="1/1"
                            showLoadingState={false}
                          />
                          <Quote className="h-5 w-5 text-primary/30" />
                        </div>

                        <blockquote className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                          "{reflection.quote}"
                        </blockquote>
                      </div>

                      <div className="border-t border-border/40 pt-4">
                        <h4 className="font-bold text-sm leading-snug">{reflection.name}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">CSE-AI&ML Batch 2025</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* Milestone Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 border border-primary/15 rounded-2xl p-6 md:p-8 text-center"
        >
          <h3 className="text-base font-bold mb-2">Pioneering Legacy</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our first batch of graduates established the foundation for excellence in CSE-AIML education. Their experiences, leadership, and achievements continue to inspire current and future students, creating a lasting legacy of innovation.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AlumniReflectionsSection;