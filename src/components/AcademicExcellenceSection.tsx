import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AcademicExcellenceSection = () => {
  const rankHolders = [
    {
      name: 'Mohammad Ayyan',
      batch: 'Batch 2025',
      achievement: '7th rank in VTU',
      cgpa: '9.43 CGPA',
      description: 'First rank holder from CSE-AIML branch',
      icon: Trophy,
    },
    {
      name: 'C. Srinivas Gowda',
      batch: 'Batch 2026',
      achievement: '11th rank (4th sem) & 1st place (6th sem)',
      cgpa: 'Consistent Excellence',
      description: 'Outstanding performance across semesters',
      icon: Star,
    },
    {
      name: 'Kulsum',
      batch: 'Batch 2026',
      achievement: '3rd rank in 6th semester',
      cgpa: 'Top Performer',
      description: 'Exceptional academic achievement',
      icon: Award,
    },
    {
      name: 'Rehmat Bee',
      batch: 'Batch 2025',
      achievement: '1st place in 7th semester',
      cgpa: 'Academic Leader',
      description: 'Consistent top performance',
      icon: Trophy,
    },
    {
      name: 'Jayasri G',
      batch: 'Batch 2025',
      achievement: '5th place in 6th semester',
      cgpa: 'Excellence',
      description: 'High academic standards maintained',
      icon: Star,
    },
    {
      name: 'Mehraj Fathima Ansari',
      batch: 'Batch 2026',
      achievement: '1st place in 4th semester',
      cgpa: 'Top Achiever',
      description: 'Outstanding early performance',
      icon: Award,
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
            Academic <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our students consistently achieve top ranks in Visvesvaraya Technological University (VTU), setting new benchmarks for academic excellence in AI and ML education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankHolders.map((student, index) => {
            const Icon = student.icon;
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
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{student.batch}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-primary/5 rounded-lg p-4 mb-4">
                      <p className="font-bold text-primary text-sm mb-1">{student.achievement}</p>
                      <p className="text-xs text-muted-foreground">{student.cgpa}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{student.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Department Milestone</h3>
            <p className="text-muted-foreground">
              Our students have consistently secured top positions in VTU rankings, with Mohammad Ayyan being the first rank holder from the CSE-AIML branch, establishing our department's reputation for academic excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellenceSection;