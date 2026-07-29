import { motion } from 'framer-motion';
import { Target, BookOpen, Users, Award, Cpu, BarChart3, Network, Star } from 'lucide-react';

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
    { label: 'University Ranks', value: 'Multiple+', icon: '🏆' },
    { label: 'Research & Publications', value: 'Growing', icon: '📄' },
    { label: 'Industry Tie-ups', value: 'Active', icon: '🤝' },
    { label: 'Innovation Drives', value: 'Hackathons', icon: '💡' },
  ];

  const pillars = [
    { icon: Cpu, text: 'AI Core' },
    { icon: Network, text: 'Collaboration' },
    { icon: BarChart3, text: 'Data Insight' },
    { icon: Star, text: 'Excellence' },
  ];

  return (
    <section id="about" className="relative overflow-hidden" aria-labelledby="about-heading">
      {/* Top editorial divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Why CSE-AIML — warm gray band */}
      <div className="bg-muted/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">About the Department</p>
              <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                Shaping Tomorrow's<br />
                <span className="text-primary">AI Leaders</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                The Department of Computer Science and Engineering (AI & ML) at AMC Engineering College is a hub of academic excellence, innovation, and industry-aligned education. We nurture future-ready professionals with strong technical foundations, critical thinking, ethical responsibility, and a research-driven mindset.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {pillars.map(p => {
                  const Icon = p.icon;
                  return (
                    <span key={p.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary">
                      <Icon className="w-3.5 h-3.5" /> {p.text}
                    </span>
                  );
                })}
              </div>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/5 border border-primary/20">
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">AMC Engineering College (Autonomous)</p>
                  <p className="text-xs text-muted-foreground">NAAC A+ Accredited · NBA Accredited · VTU Affiliated</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Highlights grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-background rounded-2xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold mb-1.5 tracking-tight">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats row — clean white */}
      <div className="bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background px-6 py-8 text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why CSE-AIML strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center justify-between">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Why CSE-AIML @ AMC?</h4>
              <p className="text-sm md:text-base text-primary-foreground/80 max-w-xl leading-relaxed">
                We cultivate a growth mindset where engineering rigor meets creative exploration. Students are empowered to build, experiment, publish, and launch—backed by mentorship, labs, and collaborative ecosystems.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:w-auto w-full">
              {['AICTE Approved', 'Hackathons', 'Industry Sessions', 'Innovation Cells', 'Research Mentorship', 'Entrepreneurship'].map(item => (
                <span key={item} className="text-xs px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 font-semibold text-primary-foreground/90 tracking-wide text-center whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
