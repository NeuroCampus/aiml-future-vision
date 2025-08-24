import { motion } from 'framer-motion';
import { Rocket, Building, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StartupsSection = () => {
  const startups = [
    {
      name: 'Stalight Technology Pvt. Ltd.',
      founder: 'Ritesh N (Batch 2026)',
      product: 'SentinelAI',
      description: 'AI-powered surveillance platform for public safety, registered with UDYAM and submitted to YUKTI.',
      icon: Building,
      status: 'UDYAM Registered',
      focus: 'AI Surveillance',
    },
    {
      name: 'Duzo Pvt. Ltd.',
      founder: 'Harshavardhan S. Kale (Batch 2026)',
      product: 'Business Solutions',
      description: 'Participated in CAIAS Startup Summit 2025, showcasing innovative business solutions.',
      icon: Rocket,
      status: 'Summit Participant',
      focus: 'Business Innovation',
    },
    {
      name: 'Kikado',
      founder: 'Harshavardhan S. Kale (Batch 2026)',
      product: 'E-commerce Platform',
      description: 'Curated gifting experiences platform with early revenue generation and market traction.',
      icon: DollarSign,
      status: 'Revenue Generating',
      focus: 'E-commerce',
    },
  ];

  const achievements = [
    {
      title: 'UDYAM Registration',
      description: 'Official government recognition for startup ventures',
      icon: Building,
    },
    {
      title: 'YUKTI Submission',
      description: 'Participation in national innovation platform',
      icon: Rocket,
    },
    {
      title: 'Revenue Generation',
      description: 'Early-stage monetization and market validation',
      icon: DollarSign,
    },
    {
      title: 'Summit Participation',
      description: 'Recognition at prestigious startup events',
      icon: Users,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Startups & <span className="text-primary">Innovations</span>
          </motion.h2>
          <motion.p 
            className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our entrepreneurial students are transforming innovative ideas into successful ventures, creating real-world impact through technology-driven solutions.
          </motion.p>
        </div>

        {/* Mobile illustration */}
        <div className="lg:hidden mb-12 flex justify-center">
          <div className="w-full max-w-sm bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
            <img 
              src="/cartoons/undraw_tree-swing_5010.svg"
              alt="Innovation and Growth"
              className="w-full h-auto object-contain animate-float"
            />
          </div>
        </div>

        {/* Startup Ventures */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Desktop illustration as first column */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-fit">
              <img 
                src="/cartoons/undraw_tree-swing_5010.svg"
                alt="Innovation Growth"
                className="w-full h-auto animate-float-slow"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {startups.map((startup, index) => {
              const Icon = startup.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/95 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-3">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {startup.name}
                      </CardTitle>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-muted-foreground">{startup.founder}</p>
                        <p className="text-sm text-primary font-medium">{startup.product}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {startup.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 text-xs">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {startup.status}
                        </span>
                        <span className="bg-secondary/50 px-3 py-1 rounded-full">
                          {startup.focus}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievement Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Entrepreneurial Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-bold text-sm mb-2">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Entrepreneurial Ecosystem</h3>
            <p className="text-muted-foreground">
              Our department actively fosters entrepreneurship through mentorship, incubation support, and industry connections, enabling students to transform innovative ideas into successful ventures that create real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;