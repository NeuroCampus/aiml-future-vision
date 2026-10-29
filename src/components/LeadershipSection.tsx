import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Building2, GraduationCap, Compass } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

interface Leader {
  name: string;
  position: string;
  category: 'trust' | 'directorate' | 'department';
  quote: string;
  highlight: string;
  image?: string;
  initials: string;
}

const LeadershipSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const leaders: Leader[] = [
    {
      name: 'Dr. K.R. Paramahamsa',
      position: 'Chairman, AMC Institutions',
      category: 'trust',
      highlight: 'Preparing the next generation of innovators through academic excellence and skill development.',
      quote: 'The CSE AIML department is playing a pivotal role in preparing the next generation of innovators. I am proud of its academic excellence, industry-aligned skill development, and the remarkable achievements of our students in securing university ranks, publishing research, and launching innovative projects.',
      image: '/Magazine/paramahamsa.webp',
      initials: 'KP',
    },
    {
      name: 'Dr. Nandeeswar S. B.',
      position: 'HOD – CSE (AI & ML)',
      category: 'department',
      highlight: 'Shaping future-ready professionals with strong research foundations and ethical responsibility.',
      quote: 'Our department is dedicated to shaping professionals with technical expertise and a research-driven mindset. We focus on holistic development through projects, industry exposure, and innovation challenges.',
      image: '/Magazine/nandeeshwar.webp',
      initials: 'NS',
    },
    {
      name: 'Smt. Geetha Paramahamsa',
      position: 'Vice Chairperson, AMC Institutions',
      category: 'trust',
      highlight: 'A beacon of futuristic thinking, nurturing young minds through dynamic industry collaborations.',
      quote: 'The department stands as a beacon of futuristic thinking, nurturing young minds to explore AI and ML through a dynamic curriculum and industry collaborations. I congratulate the leadership, faculty, and students for their relentless pursuit of excellence.',
      initials: 'GP',
    },
    {
      name: 'Mr. Rahul Kalluri',
      position: 'Executive Vice President, AMC Institutions',
      category: 'trust',
      highlight: 'Fostering cutting-edge research and entrepreneurial initiatives for a competitive world.',
      quote: 'The CSE AIML department reflects the spirit of innovation and academic integrity. Its initiatives, from cutting-edge research to entrepreneurship programs, are shaping AI leaders for a competitive world.',
      initials: 'RK',
    },
    {
      name: 'Dr. Mohan Babu G. N.',
      position: 'Director, AMC Engineering College',
      category: 'directorate',
      highlight: 'Forward momentum driven by industry integration, publications, and student ventures.',
      quote: "The department's focus on academic excellence, research, and industry integration is commendable. Students' participation in competitions, publications, and startups highlights their forward momentum.",
      initials: 'MB',
    },
    {
      name: 'Dr. Yuvaraju B. N.',
      position: 'Principal, AMC Engineering College',
      category: 'directorate',
      highlight: 'Empowering students to meet modern AI demands with balanced curriculum and technical events.',
      quote: 'The CSE AIML department is a hub of innovation and skill-driven learning, empowering students to meet industry demands through a balanced curriculum and impactful technical events.',
      initials: 'YB',
    },
    {
      name: 'Dr. G. Shivakumar',
      position: 'Vice Principal, AMC Engineering College',
      category: 'directorate',
      highlight: 'Cultivating entrepreneurial drive and analytical excellence through ideathons and hackathons.',
      quote: "The department's commitment to quality education and fostering an entrepreneurial mindset through ideathons and hackathons is inspiring. It is preparing students to lead in a data-driven world.",
      initials: 'GS',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Leadership', icon: Compass },
    { id: 'trust', label: 'Executive Trust', icon: Building2 },
    { id: 'directorate', label: 'College Directorate', icon: GraduationCap },
    { id: 'department', label: 'Department Head', icon: GraduationCap },
  ];

  const filteredLeaders = activeCategory === 'all'
    ? leaders
    : leaders.filter(l => l.category === activeCategory);

  return (
    <section id="leadership" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Leadership <span className="text-primary">Messages</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Visionary insights and institutional guidance driving our pursuit of academic excellence, innovation, and ethical leadership.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {categories.map(({ id, label, icon: Icon }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground bg-card/70 backdrop-blur-sm border border-border/50 hover:text-foreground hover:border-primary/40'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeLeadershipCategory"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Leaders Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader, index) => {
              const isChairman = leader.name.includes('Paramahamsa') && leader.image;
              const isHOD = leader.category === 'department';

              return (
                <motion.div
                  key={leader.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className={`group flex flex-col ${
                    isChairman && activeCategory === 'all'
                      ? 'md:col-span-2 lg:col-span-2'
                      : ''
                  }`}
                >
                  <div className={`relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-card/85 backdrop-blur-md border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 ${
                    isChairman || isHOD
                      ? 'border-primary/30 ring-1 ring-primary/10'
                      : 'border-border/50'
                  }`}>
                    {/* Header: Avatar/Badge & Quote Icon */}
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3.5">
                          {leader.image ? (
                            <div className="relative">
                              <OptimizedImage
                                src={leader.image}
                                alt={leader.name}
                                containerClassName="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md ring-2 ring-primary/10"
                                className="w-full h-full object-cover"
                                aspectRatio="1/1"
                                priority={isChairman}
                                showLoadingState={false}
                              />
                              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background" />
                            </div>
                          ) : (
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/15 via-accent/15 to-primary/5 border border-primary/25 flex items-center justify-center text-primary font-bold text-base sm:text-lg shadow-sm">
                              {leader.initials}
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-base sm:text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                              {leader.name}
                            </h3>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">
                              {leader.position}
                            </p>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                          <Quote className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Pull quote highlight */}
                      <p className="text-sm sm:text-base font-semibold text-foreground/90 leading-snug mb-3.5 italic border-l-2 border-primary/40 pl-3">
                        "{leader.highlight}"
                      </p>

                      {/* Full message */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {leader.quote}
                      </p>
                    </div>

                    {/* Bottom Tag */}
                    <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="font-medium uppercase tracking-wider">
                        {leader.category === 'trust' ? 'Trust Board' : leader.category === 'directorate' ? 'College Directorate' : 'Department Leadership'}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
