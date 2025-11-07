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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden min-h-screen">
      {/* Enhanced Responsive Background with Tech Startup Image */}
      <div className="absolute inset-0">
        {/* Main Background Image - Full Screen Responsive */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8 md:opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
          }}
        ></div>

        {/* Gradient Overlays for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
           
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Startups & <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Innovations</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our entrepreneurial students are transforming innovative ideas into successful ventures,
            creating real-world impact through technology-driven solutions.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </motion.div>
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
              <Card className="h-full bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-accent rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl opacity-50"></div>
                </div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
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
                <Card className="text-center bg-card/90 backdrop-blur-sm border border-primary/10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                  {/* Enhanced Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: achievement.pattern }}
                  ></div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                    <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
                  </div>

                  <CardContent className="relative p-4 sm:p-6">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative">
                        {/* Tech Startup Icons */}
                        <span className="text-primary font-bold text-base sm:text-lg">
                          {index === 0 ? '🏢' : index === 1 ? '🚀' : index === 2 ? '💰' : '🏆'}
                        </span>
                        {/* Subtle Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      </div>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">
                      {achievement.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed relative z-10">
                      {achievement.description}
                    </p>

                    {/* Tech Pattern Overlay */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5">
                      <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full blur-sm"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Tech Startup Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-32 h-32 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}
              ></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full blur-xl"></div>
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 right-8 w-6 h-6 opacity-20"
              >
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 w-4 h-4 opacity-15"
              >
                <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              </motion.div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our vibrant entrepreneurial community and turn your innovative ideas into reality.
                Get mentorship, resources, and the support you need to build the next big thing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Apply for Incubation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-3 border border-primary/20 text-primary font-semibold rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StartupsSection;