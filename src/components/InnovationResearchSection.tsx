import { motion } from 'framer-motion';
import { Lightbulb, Zap, Code, Rocket, Trophy, Star, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InnovationResearchSection = () => {
  const ideathonResults = [
    {
      prize: '1st Prize',
      team: 'Feel the Feathers',
      members: 'Harshavardhan, Monitesh, Hariharan',
      department: 'CSE-AIML',
      icon: Trophy,
    },
    {
      prize: '2nd Prize',
      team: 'NeuroSync',
      members: 'Varsha K, Shaktishree T R, Venika',
      department: 'ISE',
      icon: Star,
    },
    {
      prize: '3rd Prize (Tie)',
      team: 'Plant to Power & Microbial CO2-Eating Roads',
      members: 'Multiple Teams',
      department: 'CSE-AIML',
      icon: Award,
    },
  ];

  const hackathons = [
    'Kodikon 3.0',
    'TJhackIT 2024',
    'Hack-A-City 2.0',
    'Koii Hackathon',
    'Hacktopus 2025',
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Innovation & <span className="text-primary">Research</span>
          </motion.h2>
          <motion.p 
            className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fostering a culture of innovation through ideathons, hackathons, and research initiatives that address real-world challenges in AI, IoT, sustainability, and healthcare.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <motion.div className="md:col-span-2 bg-card/80 rounded-2xl shadow-lg p-6 flex flex-col justify-between" layout initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants} transition={{ duration: 0.5 }}>
            <div>
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">ThinkUp – Ideathon 2025</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                63 teams showcased innovative ideas in AI, IoT, sustainability, and healthcare, demonstrating exceptional creativity and problem-solving skills.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {ideathonResults.map((result, index) => (
                <Card key={index} className="bg-card/90 border border-border/30 rounded-xl">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-base mb-2">{result.prize}</h4>
                        <p className="font-semibold text-base mb-2">{result.team}</p>
                        <p className="text-sm text-muted-foreground mb-2">{result.members}</p>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {result.department}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          <motion.div className="md:col-span-1 bg-card/80 rounded-2xl shadow-lg p-6 flex flex-col justify-between" layout initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants} transition={{ duration: 0.5, delay: 0.2 }}>
            <div>
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">National Hackathon Excellence</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our students have excelled in prestigious national-level hackathons, securing top positions and gaining recognition for their innovative solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {hackathons.map((hackathon, index) => (
                <Card key={index} className="bg-card/90 border border-border/30 rounded-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Rocket className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-sm">{hackathon}</h4>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <motion.div className="mt-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 backdrop-blur-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <h4 className="font-bold text-base mb-3 text-primary">Recognition Highlights</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students have secured top positions in multiple hackathons including IIT Bombay events, showcasing exceptional technical skills and innovation in AI/ML applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnovationResearchSection;