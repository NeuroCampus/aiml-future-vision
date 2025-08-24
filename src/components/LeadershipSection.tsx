import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Bento-style responsive leadership messages section
// Larger, highlighted tiles for key leadership voices with animated entry.

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Dr. K.R. Paramahamsa',
      position: 'Chairman, AMC Institutions',
      quote: 'The CSE AIML department is playing a pivotal role in preparing the next generation of innovators. I am proud of its academic excellence, industry-aligned skill development, and the remarkable achievements of our students in securing university ranks, publishing research, and launching innovative projects.',
    },
    {
      name: 'Smt. Geetha Paramahamsa',
      position: 'Vice Chairperson, AMC Institutions',
      quote: 'The department stands as a beacon of futuristic thinking, nurturing young minds to explore AI and ML through a dynamic curriculum and industry collaborations. I congratulate the leadership, faculty, and students for their relentless pursuit of excellence.',
    },
    {
      name: 'Mr. Rahul Kalluri',
      position: 'Executive Vice President, AMC Institutions',
      quote: 'The CSE AIML department reflects the spirit of innovation and academic integrity. Its initiatives, from cutting-edge research to entrepreneurship programs, are shaping AI leaders for a competitive world.',
    },
    {
      name: 'Dr. Mohan Babu G. N.',
      position: 'Director, AMC Engineering College',
      quote: 'The department\'s focus on academic excellence, research, and industry integration is commendable. Students\' participation in competitions, publications, and startups highlights their forward momentum.',
    },
    {
      name: 'Dr. Yuvaraju B. N.',
      position: 'Principal, AMC Engineering College',
      quote: 'The CSE AIML department is a hub of innovation and skill-driven learning, empowering students to meet industry demands through a balanced curriculum and impactful technical events.',
    },
    {
      name: 'Dr. G. Shivakumar',
      position: 'Vice Principal, AMC Engineering College',
      quote: 'The department\'s commitment to quality education and fostering an entrepreneurial mindset through ideathons and hackathons is inspiring. It is preparing students to lead in a data-driven world.',
    },
    {
      name: 'Dr. Nandeeswar S. B.',
      position: 'HOD – CSE (AI & ML)',
      quote: 'Our department is dedicated to shaping professionals with technical expertise and a research-driven mindset. We focus on holistic development through projects, industry exposure, and innovation challenges.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const getLayoutClasses = (index: number) => {
    // Irregular grid spans for a bento mosaic at md+ breakpoints
    switch (index) {
      case 0:
        return 'md:col-span-3 md:row-span-2 md:[&_.quote]:text-base md:text-lg';
      case 1:
        return 'md:col-span-3';
      case 2:
        return 'md:col-span-2';
      case 3:
        return 'md:col-span-2';
      case 4:
        return 'md:col-span-2';
      case 5:
        return 'md:col-span-3';
      default:
        return 'md:col-span-3';
    }
  };

  const accentClasses = [
    'from-primary/15 via-primary/5 to-transparent',
    'from-fuchsia-500/20 via-background to-transparent dark:from-fuchsia-400/25',
    'from-emerald-500/15 via-background to-transparent',
    'from-blue-500/15 via-background to-transparent',
    'from-amber-500/20 via-background to-transparent',
    'from-rose-500/20 via-background to-transparent',
    'from-cyan-500/20 via-background to-transparent',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* subtle background gradient mesh */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
        <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tl from-fuchsia-500/10 via-background to-transparent blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-balance font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-4">
            Leadership <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Messages</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Voices that shape our direction, culture, and innovation mindset in AI & ML.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-6 auto-rows-[1fr] gap-6"
          aria-label="Leadership messages grid"
        >
          {leaders.map((leader, index) => {
            const accent = accentClasses[index % accentClasses.length];
            return (
              <motion.div
                key={leader.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                className={getLayoutClasses(index)}
              >
                <Card
                  className={
                    'relative h-full flex flex-col group overflow-hidden bg-gradient-to-br ' +
                    'from-background/90 to-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/70 '
                  }
                >
                  {/* gradient accent */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent}`} />
                  <CardContent className="p-6 md:p-8 flex flex-col grow">
                    <Quote className="h-7 w-7 text-primary mb-4 drop-shadow-sm" />
                    <blockquote className="quote text-sm md:text-sm text-muted-foreground leading-relaxed mb-6 relative">
                      <span className="sr-only">Quote:</span>
                      “{leader.quote}”
                    </blockquote>
                    <div className="mt-auto pt-4 border-t border-border/60 flex flex-col">
                      <h3 className="font-semibold text-sm sm:text-base tracking-tight">{leader.name}</h3>
                      <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">{leader.position}</p>
                    </div>
                    {/* glow ring on hover */}
                    <span className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/50 transition-all duration-500" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;