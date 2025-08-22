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
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Startups & <span className="text-primary">Innovations</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our entrepreneurial students are transforming innovative ideas into successful ventures, creating real-world impact through technology-driven solutions.
          </p>
        </div>

        {/* Startup Ventures */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
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
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{startup.name}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">{startup.founder}</p>
                      <p className="text-xs text-primary">{startup.product}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">{startup.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{startup.status}</span>
                      <span className="bg-secondary/50 px-2 py-1 rounded-full">{startup.focus}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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