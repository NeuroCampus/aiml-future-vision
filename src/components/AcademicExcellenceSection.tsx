import { useState } from 'react';
import { motion } from 'framer-motion';
import { Medal, GraduationCap } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

interface RankHolder {
  name: string;
  batch: string;
  achievement: string;
  cgpa: string;
  description: string;
  image?: string;
  highlightRank?: string;
}

const AcademicExcellenceSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const rankHolders: RankHolder[] = [
    {
      name: 'Mohammad Ayyan',
      batch: 'Batch 2025',
      achievement: '7th Rank – VTU (Branch Milestone)',
      cgpa: '9.43',
      description: 'First-ever VTU university rank holder emerging from the CSE–AIML department.',
      image: '/Magazine/mohammed ayaan.webp',
      highlightRank: '7th VTU State Rank',
    },
    {
      name: 'C. Srinivas Gowda',
      batch: 'Batch 2026',
      achievement: '1st Place – VTU (6th Sem) • 11th Rank (4th Sem)',
      cgpa: '9.36',
      description: 'Consecutive top-tier performance across university semesters.',
      image: '/Magazine/srinivas.webp',
      highlightRank: '1st Place VTU (6th Sem)',
    },
    {
      name: 'Ritesh N',
      batch: 'Batch 2026',
      achievement: '2nd Place – VTU (5th Sem) • 18th Place (4th Sem)',
      cgpa: '9.20',
      description: 'Rapid academic ascent with continuous scholastic distinction.',
      image: '/Magazine/ritesh.webp',
      highlightRank: '2nd Place VTU (5th Sem)',
    },
    {
      name: 'Jayasri G',
      batch: 'Batch 2025',
      achievement: '5th Place – VTU (6th Sem)',
      cgpa: '9.10',
      description: 'Sustained academic rigor and excellence in advanced semesters.',
      image: '/Magazine/jayasri.webp',
      highlightRank: '5th Place VTU',
    },
    {
      name: 'Kulsum',
      batch: 'Batch 2026',
      achievement: '3rd Rank – VTU (6th Sem)',
      cgpa: '9.05',
      description: 'High merit performance demonstrating deep analytical consistency.',
      highlightRank: '3rd Rank VTU',
    },
    {
      name: 'Deeksha G',
      batch: 'Batch 2026',
      achievement: '4th Place – VTU (4th Sem)',
      cgpa: '8.95',
      description: 'Early-semester academic excellence and solid core foundations.',
      highlightRank: '4th Place VTU',
    },
    {
      name: 'Sai Mridula YVB',
      batch: 'Batch 2025',
      achievement: '14th Place – VTU (5th Sem)',
      cgpa: '8.85',
      description: 'Consistent university momentum with scholastic rigor.',
      highlightRank: '14th Place VTU',
    },
    {
      name: 'Madhusudan',
      batch: 'Batch 2026',
      achievement: '14th Place – VTU (4th Sem)',
      cgpa: '8.80',
      description: 'Strong mid-semester command in core AI and computing curricula.',
      highlightRank: '14th Place VTU',
    },
  ];

  // Duplicate list for seamless infinite horizontal scroll
  const scrollingHolders = [...rankHolders, ...rankHolders];

  const stats = [
    { label: 'VTU State Rank', value: '7th Rank', subtext: 'Historic Branch Milestone' },
    { label: 'Semester Top Spots', value: '1st & 2nd', subtext: 'Consecutive State Places' },
    { label: 'Peak Merit CGPA', value: '9.43', subtext: 'Scholastic Consistency' },
    { label: 'Rank Achievers', value: '8+ Students', subtext: 'Across Both Batches' },
  ];

  return (
    <section id="academic-excellence" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Scholastic <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Celebrating consistent VTU university ranks and outstanding academic benchmarks established by our students.
          </p>
        </div>

        {/* High-Impact Stat Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-primary font-medium mt-1">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Smooth Scroll Carousel (Full-Width with Edge Fade) */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-20 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-20 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />

        {/* Scrolling Track */}
        <div 
          className="flex gap-4 sm:gap-5 w-max animate-scroll-left"
          style={{ 
            animationDuration: '45s',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {scrollingHolders.map((student, index) => {
            const isTopMilestone = student.name === 'Mohammad Ayyan';
            const hasPhoto = Boolean(student.image);

            return (
              <div
                key={`${student.name}-${index}`}
                className={`w-[270px] sm:w-[330px] flex-shrink-0 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-card/95 border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 ${
                  isTopMilestone
                    ? 'border-primary/40 ring-1 ring-primary/20 bg-gradient-to-b from-card/95 via-card/85 to-primary/5'
                    : 'border-border/50'
                }`}
              >
                <div>
                  {/* Top Rank Badge & CGPA */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                      isTopMilestone
                        ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                        : 'bg-primary/10 text-primary border border-primary/20'
                    }`}>
                      <Medal className="w-3 h-3" />
                      {student.highlightRank || student.achievement.split('•')[0]}
                    </span>

                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-muted text-foreground/80 border border-border/40">
                      {student.cgpa !== '—' ? `CGPA ${student.cgpa}` : student.batch}
                    </span>
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-4">
                    {hasPhoto ? (
                      <OptimizedImage
                        src={student.image!}
                        alt={student.name}
                        containerClassName="w-12 h-12 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] sm:w-14 sm:h-14 sm:min-w-[56px] sm:min-h-[56px] sm:max-w-[56px] sm:max-h-[56px] rounded-full overflow-hidden border-2 border-primary/30 shadow-md flex-shrink-0"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        aspectRatio="1/1"
                        showLoadingState={false}
                      />
                    ) : (
                      <div className="w-12 h-12 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] sm:w-14 sm:h-14 sm:min-w-[56px] sm:min-h-[56px] sm:max-w-[56px] sm:max-h-[56px] rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-base flex-shrink-0">
                        {student.name.charAt(0)}
                      </div>
                    )}

                    <div className="min-w-0">
                      <h3 className="font-bold text-base text-foreground tracking-tight truncate">
                        {student.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium flex items-center gap-1 mt-0.5">
                        <GraduationCap className="w-3.5 h-3.5 text-primary" />
                        {student.batch}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Achievement */}
                  <p className="text-xs font-semibold text-primary/95 leading-snug mb-2 line-clamp-2">
                    {student.achievement}
                  </p>

                  {/* Narrative */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {student.description}
                  </p>
                </div>

                {/* Bottom Status */}
                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground/80">VTU Recognized</span>
                  <span className="font-semibold text-primary">{student.batch}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellenceSection;
