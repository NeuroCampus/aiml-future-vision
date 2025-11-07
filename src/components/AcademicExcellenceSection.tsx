import { motion } from 'framer-motion';
import { Trophy, Star, Award, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Unique multi-zone layout (hero highlight + stacked list + horizontal scroll ribbon)
const AcademicExcellenceSection = () => {
  const rankHolders = [
    // Ordered by best VTU performance (1st place, then 2nd, 3rd, etc.)
    { name: 'Mohammad Ayyan', batch: 'Batch 2025', achievement: '7th Rank – VTU (Branch Milestone)', cgpa: '9.43', description: 'First-ever VTU rank holder emerging from CSE–AIML.', icon: Trophy, image: '/Magazine/mohammed ayaan.jpg' },
    { name: 'C. Srinivas Gowda', batch: 'Batch 2026', achievement: '1st Place – VTU (6th Sem) • 11th Rank (4th Sem)', cgpa: '9.36', description: 'Consistent top-tier outcomes across consecutive semesters.', icon: Trophy, image: '/Magazine/srinivas.jpeg' },
    { name: 'Ritesh N', batch: 'Batch 2026', achievement: '2nd Place – VTU (5th Sem) • 18th Place (4th Sem)', cgpa: '9.2', description: 'Rapid academic ascent with strong improvement trajectory.', icon: Star, image: '/Magazine/ritesh.jpeg' },
    { name: 'Jayasri G', batch: 'Batch 2025', achievement: '5th Place – VTU (6th Sem)', cgpa: '—', description: 'Sustained academic rigor in advanced semester.', icon: Award, image: '/Magazine/jayasri.jpg' },
    { name: 'Kulsum', batch: 'Batch 2026', achievement: '3rd Rank – VTU (6th Sem)', cgpa: '—', description: 'High merit performance demonstrating depth and consistency.', icon: Award },
    { name: 'Deeksha G', batch: 'Batch 2026', achievement: '4th Place – VTU (4th Sem)', cgpa: '—', description: 'Early-semester excellence & strong analytical grounding.', icon: Star },
    { name: 'Sai Mridula YVB', batch: 'Batch 2025', achievement: '14th Place – VTU (5th Sem)', cgpa: '—', description: 'Consistent momentum with solid performance.', icon: Star },
    { name: 'Madhusudan', batch: 'Batch 2026', achievement: '14th Place – VTU (4th Sem)', cgpa: '—', description: 'Strong mid-semester grasp in core subjects.', icon: Star },
  ];

  const sortedRankHolders = rankHolders.sort((a, b) => {
    const getCgpa = (cgpa) => cgpa === '—' ? 0 : parseFloat(cgpa.split(' ')[0]);
    return getCgpa(b.cgpa) - getCgpa(a.cgpa);
  });

  const hero = sortedRankHolders[0];
  const others = sortedRankHolders.slice(1);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* background decorative */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,hsl(var(--background))_0%,hsl(var(--background))_40%,hsl(var(--primary)/0.05)_60%,transparent_100%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] bg-[repeating-linear-gradient(90deg,hsl(var(--border)/0.15)_0_1px,transparent_1px_120px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Celebrating <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Rank Holders</span>
          </h2>
          <p className="max-w-3xl text-muted-foreground text-base sm:text-lg leading-relaxed">
            Recognizing consistent scholastic distinction and university accolades achieved by our AI & ML students.
          </p>
        </div>

        {/* Hero + Side list */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-5 items-stretch">
          {/* Hero highlight */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-3 relative group"
            >
              <Card className="h-full overflow-hidden relative border-primary/30 bg-gradient-to-br from-background via-background/95 to-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.25),transparent_70%)]" />
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      {hero.image ? (
                        <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-primary/30 shadow-inner">
                          <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center ring-2 ring-primary/30 shadow-inner">
                          <hero.icon className="w-8 h-8 text-primary" />
                        </div>
                      )}
                      
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{hero.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">{hero.batch}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm sm:text-base font-medium text-primary/90">{hero.achievement}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{hero.description}</p>
                    <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary tracking-wide">
                      {hero.cgpa}
                    </div>
                  </div>
                  <div className="mt-auto grid sm:grid-cols-3 gap-4 text-center text-xs sm:text-sm">
                    {[
                      { label: 'Consistency', value: 'High' },
                      { label: 'University Impact', value: 'Notable' },
                      { label: 'Inspiration', value: 'Peers' },
                    ].map(stat => (
                      <div key={stat.label} className="relative p-3 rounded-md bg-primary/5 border border-primary/10">
                        <p className="font-medium text-primary text-[11px] sm:text-xs uppercase tracking-wide mb-1">{stat.label}</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-primary/30 group-hover:ring-primary/60 transition-all duration-500" />
              </Card>
            </motion.div>

          {/* Vertical stacked list */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {others.slice(0,3).map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative group"
                >
                  <Card className="overflow-hidden flex items-center gap-5 p-5 pr-6 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/60 hover:border-primary/40 transition-colors">
                    {s.image ? (
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                        <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold tracking-tight leading-tight truncate">{s.name}</p>
                      <p className="text-[11px] text-muted-foreground mb-1">{s.batch}</p>
                      <p className="text-[11px] sm:text-xs text-primary/90 font-medium leading-snug line-clamp-2">{s.achievement}</p>
                    </div>
                    <div className="text-[10px] sm:text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold border border-primary/20">
                      {s.cgpa.split(' ')[0]}
                    </div>
                    <span className="absolute inset-0 rounded-lg ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/50 transition-all duration-500" />
                  </Card>
                </motion.div>
              );
            })}
            <div className="mt-2 text-xs text-muted-foreground pl-1">Additional achievers showcased below →</div>
          </div>
        </div>

        {/* Infinite scroll ribbon */}
        <div className="mt-20">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-primary/90 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Excellence Ribbon</h3>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex gap-6 animate-[scroll_10s_linear_infinite] hover:[animation-play-state:paused]" aria-label="Excellence ribbon" role="list">
              {/* First set of items */}
              {others.slice(3).map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={`first-${s.name}`}
                    className="shrink-0 min-w-[240px]"
                  >
                    <Card className="h-full p-5 flex flex-col gap-3 bg-gradient-to-br from-background/90 to-background/60 border-border/60 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3">
                        {s.image ? (
                          <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{s.name}</p>
                          <p className="text-[10px] text-muted-foreground">{s.batch}</p>
                        </div>
                      </div>
                      <p className="text-[11px] leading-snug text-primary/90 font-medium line-clamp-3">{s.achievement}</p>
                      <p className="text-[11px] text-muted-foreground line-clamp-2">{s.description}</p>
                    </Card>
                  </div>
                );
              })}
              {/* Duplicate set for seamless infinite scroll */}
              {others.slice(3).map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={`second-${s.name}`}
                    className="shrink-0 min-w-[240px]"
                  >
                    <Card className="h-full p-5 flex flex-col gap-3 bg-gradient-to-br from-background/90 to-background/60 border-border/60 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3">
                        {s.image ? (
                          <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{s.name}</p>
                          <p className="text-[10px] text-muted-foreground">{s.batch}</p>
                        </div>
                      </div>
                      <p className="text-[11px] leading-snug text-primary/90 font-medium line-clamp-3">{s.achievement}</p>
                      <p className="text-[11px] text-muted-foreground line-clamp-2">{s.description}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* Milestone ribbon area */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-primary/0 to-primary/10 rounded-2xl" />
          <div className="rounded-2xl border border-primary/20 bg-background/70 backdrop-blur p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 tracking-tight flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary" /> Department Milestone
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our students continue to secure top positions in VTU, with a landmark achievement by <span className="text-primary font-semibold">Mohammad Ayyan</span>—the first VTU rank holder emerging from the CSE–AIML branch—setting a legacy that ongoing toppers like <span className="text-primary font-semibold">{hero.name}</span> continue to elevate.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
              {[
                { label: 'University Ranks', value: 'Multiple' },
                { label: 'Top Sem Performers', value: 'Each Year' },
                { label: 'Growth Focus', value: 'AI & ML' },
              ].map(s => (
                <div key={s.label} className="text-center px-4 py-3 rounded-lg bg-primary/5 border border-primary/15">
                  <p className="text-[11px] uppercase tracking-wide text-primary/70 font-semibold mb-1">{s.label}</p>
                  <p className="text-xs font-medium text-muted-foreground">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellenceSection;