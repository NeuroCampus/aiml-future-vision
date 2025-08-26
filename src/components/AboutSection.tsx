import { motion } from 'framer-motion';
import { Target, BookOpen, Users, Award, Cpu, BarChart3, Network, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
        {/* Background image with education theme */}
        <div className="absolute inset-0 bg-[url('/cs-aiml-photos/Labpics/Lecturehall.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.15),transparent_65%)]" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(30deg,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(150deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            About <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">CSE-AIML</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence and machine learning education through innovative curriculum, cutting-edge research, and industry collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-10 w-56 h-56 bg-primary/15 blur-3xl rounded-full" />
            <div className="absolute bottom-0 -right-10 w-64 h-64 bg-fuchsia-500/15 blur-3xl rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground tracking-tight">
              Shaping Tomorrow's AI Leaders
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              The Department of Computer Science and Engineering (AI & ML) at AMC Engineering College is a hub of academic excellence, innovation, and industry-aligned education. We nurture future-ready professionals with strong technical foundations, critical thinking, ethical responsibility, and a research-driven mindset.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {stats.map(s => (
                <div key={s.label} className="relative p-4 rounded-xl border border-primary/20 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 group overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-fuchsia-500/10" />
                  <p className="text-[11px] uppercase tracking-wide font-semibold text-primary/70 mb-1 relative">{s.label}</p>
                  <p className="text-sm font-medium text-muted-foreground relative">{s.value}</p>
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/30 group-hover:ring-primary/60 transition-all" />
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
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
                  <Card className="h-full p-6 flex flex-col justify-start bg-gradient-to-br from-background/80 to-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-primary/25 overflow-hidden">
                    <div className="absolute inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.22),transparent_70%)]" />
                    <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="h-7 w-7 text-primary" />
                      <span className="absolute inset-0 rounded-xl ring-1 ring-primary/30" />
                    </div>
                    <h3 className="relative text-lg font-semibold mb-2 tracking-tight">{highlight.title}</h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                    <span className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/50 transition-all duration-500" />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Secondary highlight ribbon */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl" />
          <div className="rounded-2xl border border-primary/20 bg-background/70 backdrop-blur p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 space-y-4">
              <h4 className="text-xl font-bold tracking-tight">Why CSE-AIML @ AMC?</h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We cultivate a growth mindset where engineering rigor meets creative exploration. Students are empowered to build, experiment, publish, and launch—supported by mentorship, laboratories, and collaborative ecosystems.
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:w-1/2">
              {['AICTE Approved', 'Hackathons', 'Industry Sessions', 'Innovation Cells', 'Research Mentorship', 'Entrepreneurship'].map(item => (
                <li key={item} className="text-[11px] sm:text-xs px-4 py-3 rounded-lg bg-primary/5 border border-primary/15 font-medium text-primary/80 tracking-wide text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
