import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

const AcademicExcellenceSection = () => {
  const rankHolders = [
    { name: 'Mohammad Ayyan', batch: 'Batch 2025', achievement: '7th Rank – VTU (Branch Milestone)', cgpa: '9.43', description: 'First-ever VTU rank holder emerging from CSE–AIML.', icon: Trophy, image: '/Magazine/mohammed ayaan.jpg' },
    { name: 'C. Srinivas Gowda', batch: 'Batch 2026', achievement: '1st Place – VTU (6th Sem) • 11th Rank (4th Sem)', cgpa: '9.36', description: 'Consistent top-tier outcomes across consecutive semesters.', icon: Trophy, image: '/Magazine/srinivas.jpeg' },
    { name: 'Ritesh N', batch: 'Batch 2026', achievement: '2nd Place – VTU (5th Sem) • 18th Place (4th Sem)', cgpa: '9.2', description: 'Rapid academic ascent with strong improvement trajectory.', icon: Star, image: '/Magazine/ritesh.jpeg' },
    { name: 'Jayasri G', batch: 'Batch 2025', achievement: '5th Place – VTU (6th Sem)', cgpa: '—', description: 'Sustained academic rigor in advanced semester.', icon: Award, image: '/Magazine/jayasri.jpg' },
    { name: 'Kulsum', batch: 'Batch 2026', achievement: '3rd Rank – VTU (6th Sem)', cgpa: '—', description: 'High merit performance demonstrating depth and consistency.', icon: Award },
    { name: 'Deeksha G', batch: 'Batch 2026', achievement: '4th Place – VTU (4th Sem)', cgpa: '—', description: 'Early-semester excellence & strong analytical grounding.', icon: Star },
    { name: 'Sai Mridula YVB', batch: 'Batch 2025', achievement: '14th Place – VTU (5th Sem)', cgpa: '—', description: 'Consistent momentum with solid performance.', icon: Star },
    { name: 'Madhusudan', batch: 'Batch 2026', achievement: '14th Place – VTU (4th Sem)', cgpa: '—', description: 'Strong mid-semester grasp in core subjects.', icon: Star },
  ];

  const sortedRankHolders = [...rankHolders].sort((a, b) => {
    const getCgpa = (cgpa: string) => cgpa === '—' ? 0 : parseFloat(cgpa.split(' ')[0]);
    return getCgpa(b.cgpa) - getCgpa(a.cgpa);
  });

  const hero = sortedRankHolders[0];
  const others = sortedRankHolders.slice(1);

  return (
    <section id="academic-excellence" className="relative overflow-hidden bg-muted/30">
      <div className="h-px bg-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Academic Achievements</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Scholastic <span className="text-primary">Excellence</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-md md:text-right leading-relaxed">
            Recognizing consistent university accolades and scholastic distinction achieved by our students.
          </p>
        </div>

        {/* Highlight Section */}
        <div className="grid gap-6 md:grid-cols-5 items-stretch">
          {/* Main Hero Rank Holder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <div className="h-full bg-background rounded-2xl border-l-4 border-l-primary border-y border-r border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {hero.image ? (
                    <OptimizedImage
                      src={hero.image}
                      alt={hero.name}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-primary/20 shadow-md"
                      aspectRatio="1/1"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Trophy className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{hero.name}</h3>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{hero.batch}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-base font-bold text-primary">{hero.achievement}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{hero.description}</p>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    CGPA: {hero.cgpa}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/45 text-center">
                {[
                  { label: 'Consistency', value: 'High' },
                  { label: 'University Impact', value: 'Notable' },
                  { label: 'Inspiration', value: 'Peers' },
                ].map(stat => (
                  <div key={stat.label} className="p-3 bg-muted/40 rounded-xl border border-border/40">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-xs font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* List of other Rank Holders */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {others.slice(0, 3).map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="bg-background rounded-xl border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-200 p-4 flex items-center gap-4">
                  {s.image ? (
                    <OptimizedImage
                      src={s.image}
                      alt={s.name}
                      className="w-12 h-12 rounded-lg object-cover border border-border"
                      aspectRatio="1/1"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/15">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold truncate leading-tight group-hover:text-primary transition-colors">{s.name}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{s.batch}</p>
                    <p className="text-xs text-primary font-semibold truncate mt-1">{s.achievement}</p>
                  </div>

                  <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                    {s.cgpa.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestone ribbon area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl bg-primary/5 border border-primary/15 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Department Milestone</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our students continue to secure top positions in VTU, with a landmark achievement by <span className="text-primary font-bold">Mohammad Ayyan</span>—the first VTU rank holder emerging from the CSE–AIML branch—setting a legacy that ongoing toppers continue to elevate.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
            {[
              { label: 'University Ranks', value: 'Multiple' },
              { label: 'Top Performers', value: 'Each Year' },
              { label: 'Growth Focus', value: 'AI & ML' },
            ].map(s => (
              <div key={s.label} className="text-center px-4 py-3 bg-background rounded-xl border border-border/40 min-w-[100px]">
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">{s.label}</p>
                <p className="text-xs font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicExcellenceSection;