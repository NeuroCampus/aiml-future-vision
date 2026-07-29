import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Dr. K.R. Paramahamsa',
      position: 'Chairman, AMC Institutions',
      quote: 'The CSE AIML department is playing a pivotal role in preparing the next generation of innovators. I am proud of its academic excellence, industry-aligned skill development, and the remarkable achievements of our students in securing university ranks, publishing research, and launching innovative projects.',
      image: '/Magazine/paramahamsa.png',
      accentColor: 'border-l-4 border-primary',
    },
    {
      name: 'Smt. Geetha Paramahamsa',
      position: 'Vice Chairperson, AMC Institutions',
      quote: 'The department stands as a beacon of futuristic thinking, nurturing young minds to explore AI and ML through a dynamic curriculum and industry collaborations. I congratulate the leadership, faculty, and students for their relentless pursuit of excellence.',
      accentColor: 'border-l-4 border-accent',
    },
    {
      name: 'Mr. Rahul Kalluri',
      position: 'Executive Vice President, AMC Institutions',
      quote: 'The CSE AIML department reflects the spirit of innovation and academic integrity. Its initiatives, from cutting-edge research to entrepreneurship programs, are shaping AI leaders for a competitive world.',
      accentColor: 'border-l-4 border-primary',
    },
    {
      name: 'Dr. Mohan Babu G. N.',
      position: 'Director, AMC Engineering College',
      quote: "The department's focus on academic excellence, research, and industry integration is commendable. Students' participation in competitions, publications, and startups highlights their forward momentum.",
      accentColor: 'border-l-4 border-accent',
    },
    {
      name: 'Dr. Yuvaraju B. N.',
      position: 'Principal, AMC Engineering College',
      quote: 'The CSE AIML department is a hub of innovation and skill-driven learning, empowering students to meet industry demands through a balanced curriculum and impactful technical events.',
      accentColor: 'border-l-4 border-primary',
    },
    {
      name: 'Dr. G. Shivakumar',
      position: 'Vice Principal, AMC Engineering College',
      quote: "The department's commitment to quality education and fostering an entrepreneurial mindset through ideathons and hackathons is inspiring. It is preparing students to lead in a data-driven world.",
      accentColor: 'border-l-4 border-accent',
    },
    {
      name: 'Dr. Nandeeswar S. B.',
      position: 'HOD – CSE (AI & ML)',
      quote: 'Our department is dedicated to shaping professionals with technical expertise and a research-driven mindset. We focus on holistic development through projects, industry exposure, and innovation challenges.',
      accentColor: 'border-l-4 border-primary',
    },
  ];

  // Irregular grid layouts for md+ screens
  const getLayoutClasses = (index: number) => {
    switch (index) {
      case 0:
        return 'md:col-span-3 md:row-span-2';
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

  return (
    <section id="leadership" className="relative overflow-hidden bg-background">
      <div className="h-px bg-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        
        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Institutional Vision</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Leadership <span className="text-primary">Messages</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-md md:text-right leading-relaxed">
            Voices and guidance shaping our department's direction, culture, and innovation mindset.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[auto] gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`${getLayoutClasses(index)}`}
            >
              <div className={`h-full bg-muted/30 hover:bg-background rounded-2xl border border-border/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col p-6 sm:p-8 ${leader.accentColor}`}>
                <Quote className="h-6 w-6 text-primary/40 mb-4 flex-shrink-0" />
                
                <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed italic flex-1 mb-6">
                  "{leader.quote}"
                </blockquote>

                {leader.image && (
                  <div className="flex justify-center mb-6">
                    <OptimizedImage
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full object-cover border-2 border-primary/20 shadow-md"
                      aspectRatio="1/1"
                    />
                  </div>
                )}

                <div className="pt-4 border-t border-border/40">
                  <h3 className="font-bold text-sm sm:text-base tracking-tight">{leader.name}</h3>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{leader.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;