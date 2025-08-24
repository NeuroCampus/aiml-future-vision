import { motion } from 'framer-motion';
import { Trophy, Target, Medal, Star, Users, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SportsAchievementsSection = () => {
  const sportsAchievements = [
    {
      name: 'S. S. Subhash',
      batch: 'Batch 2026',
      achievement: 'AMC Men\'s Cricket Team Captain',
      result: '3rd place in VTU Inter-Collegiate Tournament',
      date: 'October 2024',
      icon: Trophy,
      category: 'Cricket',
    },
    {
      name: 'Sarika Jaganath',
      batch: 'Batch 2027',
      achievement: 'National Shooting Championship Participant',
      result: 'Competed in 66th National Championship',
      date: 'November-December 2024',
      icon: Target,
      category: 'Shooting',
    },
    {
      name: 'Harshavardhan S. Kale',
      batch: 'Batch 2026',
      achievement: 'Multiple Sports Awards Winner',
      result: 'Cricket and Running Events Champion',
      date: '2024',
      icon: Medal,
      category: 'Multi-Sport',
    },
  ];

  const culturalAchievements = [
    {
      name: 'Akshatha S. Girisagar',
      batch: 'Batch 2027',
      achievement: 'Kuchipudi Dancer',
      result: 'Performed at prestigious institutions',
      date: '2024',
      icon: Music,
      category: 'Dance',
    },
    {
      name: 'Swetha K',
      batch: 'Batch 2027',
      achievement: 'Published Poet',
      result: 'Acclaimed poems: "You, the Star" and "The Voice Between Life and Death"',
      date: '2024',
      icon: Star,
      category: 'Literature',
    },
    {
      name: 'V. Nageshwar & Preethiba D',
      batch: 'Batch 2027',
      achievement: 'Traditional Dance Performance',
      result: 'Kannada Rajyotsava Celebration',
      date: '2024',
      icon: Users,
      category: 'Cultural Dance',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sports & <span className="text-primary">Cultural Excellence</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating our students' achievements beyond academics – from national-level sports competitions to cultural performances that showcase their diverse talents and holistic development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...sportsAchievements, ...culturalAchievements].map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                layout
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border border-border/30 rounded-2xl shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">{achievement.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{achievement.batch}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {achievement.category}
                      </Badge>
                      <span className="bg-secondary/10 text-xs px-2 py-1 rounded-full text-muted-foreground">{achievement.date}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{achievement.achievement}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-14">
          <div className="bg-primary/5 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold mb-2">Holistic Development</h4>
            <p className="text-muted-foreground">Our students excel not only in academics and technology but also in sports and cultural activities, demonstrating the well-rounded education and diverse opportunities available at our department.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsAchievementsSection;