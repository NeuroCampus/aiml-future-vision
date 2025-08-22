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
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Innovation & <span className="text-primary">Research</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Fostering a culture of innovation through ideathons, hackathons, and research initiatives that address real-world challenges in AI, IoT, sustainability, and healthcare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ThinkUp Ideathon Results */}
          <div>
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">ThinkUp – Ideathon 2025</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              63 teams showcased innovative ideas in AI, IoT, sustainability, and healthcare, demonstrating exceptional creativity and problem-solving skills.
            </p>
            
            <div className="space-y-4">
              {ideathonResults.map((result, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-primary text-sm mb-1">{result.prize}</h4>
                          <p className="font-semibold text-sm mb-1">{result.team}</p>
                          <p className="text-xs text-muted-foreground mb-1">{result.members}</p>
                          <p className="text-xs text-primary">{result.department}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* National Hackathons */}
          <div>
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">National Hackathon Excellence</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Our students have excelled in prestigious national-level hackathons, securing top positions and gaining recognition for their innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Rocket className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold text-sm">{hackathon}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-primary/5 rounded-lg p-4">
              <h4 className="font-bold text-sm mb-2 text-primary">Recognition Highlights</h4>
              <p className="text-xs text-muted-foreground">
                Students have secured top positions in multiple hackathons including IIT Bombay events, showcasing exceptional technical skills and innovation in AI/ML applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationResearchSection;