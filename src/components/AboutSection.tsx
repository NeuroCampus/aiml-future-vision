import { motion } from 'framer-motion';
import { Target, BookOpen, Users, Award, Cpu, BarChart3, Network, Star, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Vision',
      description: 'Nationally recognized center of excellence in AI & ML driving innovation, research, entrepreneurship, and societal impact.',
    },
    {
      icon: BookOpen,
      title: 'Mission',
      description: 'Blend strong theoretical foundations with immersive, industry-driven practical learning and innovation culture.',
    },
    {
      icon: Users,
      title: 'Faculty Strength',
      description: 'Highly qualified mentors with academic depth & industry insight fostering student-led research and product thinking.',
    },
    {
      icon: Award,
      title: 'Rank Achievements',
      description: 'Multiple VTU rank holders; first branch rank milestone highlighting scholastic excellence & consistency.',
    },
  ];

  const stats = [
    { label: 'University Ranks', value: 'Multiple+' },
    { label: 'Research & Publications', value: 'Growing' },
    { label: 'Industry Tie-ups', value: 'Active' },
    { label: 'Innovation Drives', value: 'Hackathons' },
  ];

  const pillars = [
    { icon: Cpu, text: 'AI Core' },
    { icon: Network, text: 'Collaboration' },
    { icon: BarChart3, text: 'Data Insight' },
    { icon: Star, text: 'Excellence' },
  ];

  // cardVariants removed (not used after redesign)

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Professional Academic Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Very subtle overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_65%)]" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(150deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-12">
                    <h2 id="about-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 tracking-tight">
            About <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">CSE-AIML</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Pioneering the future of artificial intelligence and machine learning education through innovative curriculum, cutting-edge research, and industry collaboration.
          </p>
        </div>        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground tracking-tight">
              Shaping Tomorrow's AI Leaders
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              The Department of Computer Science and Engineering (AI & ML) at AMC Engineering College is a hub of academic excellence, innovation, and industry-aligned education. We nurture future-ready professionals with strong technical foundations, critical thinking, ethical responsibility, and a research-driven mindset.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {stats.map(s => (
                <div key={s.label} className="relative p-3 sm:p-4 rounded-xl border border-primary/20 bg-card group overflow-hidden">
                  <p className="text-[11px] sm:text-xs uppercase tracking-wide font-semibold text-primary/70 mb-1 relative">{s.label}</p>
                  <p className="text-sm sm:text-base font-medium text-muted-foreground relative">{s.value}</p>
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all" />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {pillars.map(p => {
                const Icon = p.icon;
                return (
                  <span key={p.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-primary/10 border border-primary/25 text-primary backdrop-blur">
                    <Icon className="w-4 h-4" /> {p.text}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Highlights grid (cards) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.12),transparent_70%)]" />
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative group"
                >
                  <Card className="h-full p-4 sm:p-6 flex flex-col justify-start bg-gradient-to-br from-background/80 to-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-primary/25 overflow-hidden">
                    <div className="absolute inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.22),transparent_70%)]" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      <span className="absolute inset-0 rounded-xl ring-1 ring-primary/30" />
                    </div>
                    <h3 className="relative text-base sm:text-lg font-semibold mb-2 sm:mb-2 tracking-tight">{highlight.title}</h3>
                    <p className="relative text-sm sm:text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                    <span className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/50 transition-all duration-500" />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Secondary highlight ribbon */}
        <div className="mt-10 sm:mt-12 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl" />
          <div className="rounded-2xl border border-primary/20 bg-background/70 backdrop-blur p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="flex-1 space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-bold tracking-tight">Why CSE-AIML @ AMC?</h4>
              <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                We cultivate a growth mindset where engineering rigor meets creative exploration. Students are empowered to build, experiment, publish, and launch—supported by mentorship, laboratories, and collaborative ecosystems.
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:w-1/2">
              {['AICTE Approved', 'Hackathons', 'Industry Sessions', 'Innovation Cells', 'Research Mentorship', 'Entrepreneurship'].map(item => (
                <li key={item} className="text-[10px] sm:text-xs px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-primary/5 border border-primary/15 font-medium text-primary/80 tracking-wide text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
        <div className="mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">AMC Engineering College (Autonomous)</h3>
                    <p className="text-sm text-muted-foreground">NAAC A+ Accredited • NBA Accredited</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground italic">Committed to excellence</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </section>
  );
};

export default AboutSection;
