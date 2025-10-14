import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Lightbulb, Zap, Code, Rocket, Trophy, Star, Award, Target, TrendingUp, Users, Calendar, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const InnovationResearchSection = () => {
  const [counters, setCounters] = useState({ teams: 0, hackathons: 0, projects: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ideathonResults = [
    {
      prize: '1st Prize',
      team: 'Feel the Feathers',
      members: 'Harshavardhan, Monitesh, Hariharan',
      department: 'CSE-AIML',
      icon: Trophy,
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      prize: '2nd Prize',
      team: 'NeuroSync',
      members: 'Varsha K, Shaktishree T R, Venika',
      department: 'ISE',
      icon: Star,
      gradient: 'from-gray-300 to-gray-500',
    },
    {
      prize: '3rd Prize (Tie)',
      team: 'Plant to Power & Microbial CO2-Eating Roads',
      members: 'Multiple Teams',
      department: 'CSE-AIML',
      icon: Award,
      gradient: 'from-amber-600 to-amber-800',
    },
  ];

  const hackathons = [
    { name: 'Kodikon 3.0', year: '2024', status: 'Winner' },
    { name: 'TJhackIT 2024', year: '2024', status: 'Finalist' },
    { name: 'Hack-A-City 2.0', year: '2024', status: 'Winner' },
    { name: 'Koii Hackathon', year: '2024', status: 'Participant' },
    { name: 'Hacktopus 2025', year: '2025', status: 'Upcoming' },
  ];

  const stats = [
    { label: 'Teams Participated', value: 63, icon: Users, color: 'text-blue-500' },
    { label: 'Hackathons', value: 15, icon: Trophy, color: 'text-purple-500' },
    { label: 'Projects Completed', value: 120, icon: Code, color: 'text-green-500' },
    { label: 'Research Papers', value: 25, icon: TrendingUp, color: 'text-orange-500' },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      // Animate counters
      const animateCounter = (target: number, setValue: (value: number) => void) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setValue(target);
            clearInterval(timer);
          } else {
            setValue(Math.floor(current));
          }
        }, 30);
      };

      setTimeout(() => {
        animateCounter(63, (val) => setCounters(prev => ({ ...prev, teams: val })));
        animateCounter(15, (val) => setCounters(prev => ({ ...prev, hackathons: val })));
        animateCounter(120, (val) => setCounters(prev => ({ ...prev, projects: val })));
      }, 500);
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const floatingVariants = {
    animate: { y: [-10, 10, -10] },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,hsl(var(--primary)/0.02),transparent_50%)]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Innovation &{' '}
            <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Research
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Fostering a culture of innovation through ideathons, hackathons, and research initiatives that address real-world challenges in AI, IoT, sustainability, and healthcare.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative p-6 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-foreground">
                        {counters.teams || counters.hackathons || counters.projects || stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Ideathon Section */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-primary/20 shadow-xl shadow-primary/5 backdrop-blur overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border border-yellow-400/30"
                      variants={floatingVariants}
                      animate="animate"
                      transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
                    >
                      <Lightbulb className="h-8 w-8 text-yellow-500" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl font-bold">ThinkUp – Ideathon 2025</CardTitle>
                      <p className="text-sm text-muted-foreground">63 Teams • Multiple Domains</p>
                    </div>
                  </div>
                  <motion.div
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    Live Event
                  </motion.div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <motion.div
                  className="relative overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/Magazine/ideathon.jpg"
                    alt="ThinkUp – Ideathon 2025"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Showcasing Innovation</p>
                    <p className="text-xs opacity-90">AI • IoT • Sustainability • Healthcare</p>
                  </div>
                </motion.div>

                <p className="text-muted-foreground leading-relaxed">
                  63 teams showcased innovative ideas in AI, IoT, sustainability, and healthcare, demonstrating exceptional creativity and problem-solving skills across multiple domains.
                </p>

                {/* Prize Winners */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ideathonResults.map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="bg-gradient-to-br from-card/90 to-card/70 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                          <CardContent className="p-5">
                            <div className="flex items-start space-x-4">
                              <motion.div
                                className={`w-12 h-12 bg-gradient-to-br ${result.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <IconComponent className="h-6 w-6 text-white" />
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-primary text-lg mb-2 group-hover:text-primary/80 transition-colors">
                                  {result.prize}
                                </h4>
                                <p className="font-semibold text-base mb-2 text-foreground">
                                  {result.team}
                                </p>
                                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                  {result.members}
                                </p>
                                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-medium">
                                  {result.department}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hackathons Section */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-primary/20 shadow-xl shadow-primary/5 backdrop-blur h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
                  >
                    <Trophy className="h-8 w-8 text-purple-500" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-2xl font-bold">National Hackathon Excellence</CardTitle>
                    <p className="text-sm text-muted-foreground">Prestigious Competitions</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our students have excelled in prestigious national-level hackathons, securing top positions and gaining recognition for their innovative solutions.
                </p>

                {/* Hackathon List */}
                <div className="space-y-3">
                  {hackathons.map((hackathon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="bg-card/60 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 group">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                                <Code className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                  {hackathon.name}
                                </h4>
                                <p className="text-xs text-muted-foreground">{hackathon.year}</p>
                              </div>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                              hackathon.status === 'Winner'
                                ? 'bg-green-100 text-green-700 border border-green-200'
                                : hackathon.status === 'Finalist'
                                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                : hackathon.status === 'Upcoming'
                                ? 'bg-orange-100 text-orange-700 border border-orange-200'
                                : 'bg-gray-100 text-gray-700 border border-gray-200'
                            }`}>
                              {hackathon.status}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Recognition Highlights - Landscape Card */}
        <motion.div
          className="mt-12"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-card/80 via-card/60 to-card/80 border border-primary/20 shadow-xl shadow-primary/5 backdrop-blur overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mr-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">Recognition Highlights</h3>
                      <p className="text-sm text-muted-foreground">Excellence in Innovation</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Students have secured top positions in multiple hackathons including IIT Bombay events, showcasing exceptional technical skills and innovation in AI/ML applications.
                  </p>
                  <EnhancedButton
                    effect="glow"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/30"
                  >
                    <span className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      View Achievements
                    </span>
                  </EnhancedButton>
                </div>
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <Trophy className="h-12 w-12 lg:h-16 lg:w-16 text-primary mx-auto mb-2" />
                      <p className="text-xs lg:text-sm font-semibold text-primary">Top Performers</p>
                      <p className="text-xs text-muted-foreground">National Level</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationResearchSection;