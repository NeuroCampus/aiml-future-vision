import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

interface Reflection {
  name: string;
  image: string;
  quote: string;
  highlight: string;
  roleTag?: string;
}

const AlumniReflectionsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const reflections: Reflection[] = [
    {
      name: 'Mohammed Ayaan',
      image: '/Magazine/mohammed ayaan.webp',
      highlight: 'Set the tone for the future through hands-on learning and faculty mentorship.',
      quote: 'Amazing time at AMC CSE-AIML first batch. Set the tone for future. Supportive faculty, hands-on learning. Energetic campus life, personal growth. Thankful for opportunities and memories.',
      roleTag: '7th Rank VTU Holder',
    },
    {
      name: 'Jayasri G',
      image: '/Magazine/jayasri.webp',
      highlight: 'Proud to pave the way and build our department identity together.',
      quote: "Being part of the first CSE AIML batch was full of surprises and challenges. We grew, adapted, and built our department's identity together, supported by passionate faculty. Proud to pave the way for others.",
      roleTag: '5th Place VTU (6th Sem)',
    },
    {
      name: 'Shaikh Mohammed Ausaf',
      image: '/Magazine/shaikh mohammed ausaf.webp',
      highlight: 'Fostered adaptability, ownership, and lifelong professional stability.',
      quote: 'As the first CSE-AIML batch, we faced uncertainties but fostered adaptability and ownership. Passionate faculty brought stability, preparing us for jobs and life. Cherished memories and friendships from this pioneering journey.',
      roleTag: 'Pioneering Batch',
    },
    {
      name: 'Sankruth K Gargeyasa',
      image: '/Magazine/sankruth K .webp',
      highlight: 'Dedicated faculty mentorship that blended CSE with AI/ML depth.',
      quote: 'The first CSE-AIML batch at AMC was life-changing. Dedicated faculty mentored us beyond academics, blending CSE and AI/ML. Extracurriculars helped discover strengths. Forever grateful for the memories and family-like bond.',
      roleTag: 'Pioneering Batch',
    },
    {
      name: 'Mamatha S',
      image: '/Magazine/mamatha.webp',
      highlight: 'Enriching journey with balanced academics, support, and friendship.',
      quote: 'Four incredible years at AMC CSE-AIML: growth, learning, and experiences. Supportive faculty guided me academically and personally. Balanced academics and extracurriculars enriched my journey. Grateful for friendships and lessons.',
      roleTag: 'Pioneering Batch',
    },
    {
      name: 'Tejas P V',
      image: '/Magazine/tejas pv.webp',
      highlight: 'Unlocked creative potential with exceptional guidance from leadership and faculty.',
      quote: 'First CSE-AIML batch at AMC: ups and downs with amazing faculty like Srinivasaperumal sir and HOD Dr. Nandeeswar. Opportunities to express creativity. Fortunate to have great friends and teachers. Thankful for unlocking potential.',
      roleTag: 'Pioneering Batch',
    },
    {
      name: 'D R Mouna',
      image: '/Magazine/mouna.webp',
      highlight: 'Survivors and innovators blazing our unique career paths together.',
      quote: 'As CSE-AIML pioneers, we navigated a new department with self-study and humor. Teachers evolved, clubs formed. Chaos strengthened us. Survivors, innovators, blazing our path together.',
      roleTag: 'Pioneering Batch',
    },
    {
      name: 'Khusumith S Veera',
      image: '/Magazine/khusumith s veera.webp',
      highlight: 'A dynamic, high-energy community that continues shaping the AI future.',
      quote: 'CSE-AIML first batch: warmth, support, passionate mentors. Infectious energy with events and workshops. Student clubs like family. Part of a dynamic community shaping the future.',
      roleTag: 'Pioneering Batch',
    },
  ];

  // Duplicate list for seamless gapless marquee
  const scrollingReflections = [...reflections, ...reflections];

  return (
    <section id="alumni-reflections" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Alumni <span className="text-primary">Reflections</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Real voices and experiences from the first-ever graduating cohort of CSE–AIML who laid the foundation for department excellence.
          </p>
        </div>
      </div>

      {/* Infinite Smooth Scroll Carousel (Full-Width with Edge Fade) */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />

        {/* Scrolling Track */}
        <div 
          className="flex gap-5 w-max animate-scroll-left"
          style={{ 
            animationDuration: '50s',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {scrollingReflections.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="w-[300px] sm:w-[350px] flex-shrink-0 flex flex-col justify-between p-6 rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div>
                {/* Header: Avatar, Name & Quote Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      containerClassName="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm flex-shrink-0"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      aspectRatio="1/1"
                      showLoadingState={false}
                    />
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-foreground tracking-tight truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-muted-foreground font-medium">
                        Batch 2025
                      </p>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Pull quote highlight */}
                <p className="text-xs sm:text-sm font-semibold text-foreground/90 leading-snug mb-2.5 italic border-l-2 border-primary/40 pl-2.5">
                  "{item.highlight}"
                </p>

                {/* Full quote */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                  {item.quote}
                </p>
              </div>

              {/* Role / Batch Tag */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="font-medium text-primary">
                  {item.roleTag || 'Alumni Pioneer'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniReflectionsSection;
