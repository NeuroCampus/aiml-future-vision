import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StartupsSection = () => {
  const startups = [
    {
      name: 'Stalight Technology',
      founder: 'Ritesh N (Batch 2026)',
      product: 'SentinelAI',
      description: 'SentinelAI is an advanced AI-powered surveillance platform designed for enhancing public safety. It utilizes cutting-edge machine learning algorithms to detect anomalies, monitor crowds, and provide real-time alerts. Registered with UDYAM and submitted to YUKTI, Stalight Technology is committed to innovative solutions in AI surveillance.',
      status: 'UDYAM Registered',
      focus: 'AI Surveillance',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      illustration: '/cartoons/undraw_connected-world_anke.svg',
      website: 'https://stalight.tech/',
    },
    {
      name: 'Duzo Pvt. Ltd.',
      founder: 'Harshavardhan S. Kale (Batch 2026)',
      product: 'Business Solutions',
      description: 'Participated in CAIAS Startup Summit 2025, showcasing innovative business solutions.',
      status: 'Summit Participant',
      focus: 'Business Innovation',
      gradient: 'from-purple-500/20 to-pink-500/20',
      illustration: '/cartoons/undraw_team_85hs.svg',
    },
    {
      name: 'Kikado',
      founder: 'Harshavardhan S. Kale (Batch 2026)',
      product: 'E-commerce Platform',
      description: 'Curated gifting experiences platform with early revenue generation and market traction.',
      status: 'Revenue Generating',
      focus: 'E-commerce',
      gradient: 'from-green-500/20 to-emerald-500/20',
      illustration: '/cartoons/undraw_vibe-coding_mjme.svg',
    },
  ];

  const achievements = [
    {
      title: 'UDYAM Registration',
      description: 'Official government recognition for startup ventures',
      gradient: 'from-blue-500 to-cyan-500',
      pattern: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%)',
    },
    {
      title: 'YUKTI Submission',
      description: 'Participation in national innovation platform',
      gradient: 'from-purple-500 to-pink-500',
      pattern: 'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3), transparent 50%)',
    },
    {
      title: 'Revenue Generation',
      description: 'Early-stage monetization and market validation',
      gradient: 'from-green-500 to-emerald-500',
      pattern: 'radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.3), transparent 50%)',
    },
    {
      title: 'Summit Participation',
      description: 'Recognition at prestigious startup events',
      gradient: 'from-orange-500 to-red-500',
      pattern: 'radial-gradient(circle at 60% 60%, rgba(249, 115, 22, 0.3), transparent 50%)',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
           
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Startups & <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Innovations</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our entrepreneurial students are transforming innovative ideas into successful ventures,
            creating real-world impact through technology-driven solutions.
          </motion.p>
        </div>

        {/* Featured Illustration */}


        {/* Startup Ventures - Modern Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            >
              <Card className="h-full bg-card border border-primary/20 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-accent rounded-full blur-xl"></div>
                </div>

                <CardHeader className="relative pb-3 sm:pb-4">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={startup.illustration}
                        alt={startup.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                        {startup.status}
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 mb-2">
                    {startup.name}
                  </CardTitle>

                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{startup.founder}</p>
                    <p className="text-sm text-primary font-semibold">{startup.product}</p>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {startup.description}
                  </p>

                  {startup.website && (
                    <a href={startup.website} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-primary hover:underline mb-3 sm:mb-4">
                      Visit Website
                    </a>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-secondary/50 text-secondary-foreground px-2 sm:px-3 py-1 rounded-full font-medium">
                      {startup.focus}
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights - Modern Design */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Entrepreneurial Achievements
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group"
              >
                <Card className="text-center bg-card backdrop-blur-sm border border-primary/10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative">
                  {/* Subtle Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{ background: achievement.pattern }}
                  ></div>

                  <CardContent className="relative p-4 sm:p-6">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-primary font-bold text-base sm:text-lg">
                          {index === 0 ? '🏢' : index === 1 ? '🚀' : index === 2 ? '💰' : '🏆'}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base mb-2 group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}

      </div>
    </section>
  );
};

export default StartupsSection;