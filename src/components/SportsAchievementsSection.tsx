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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sports & <span className="text-primary">Cultural Excellence</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating our students' achievements beyond academics - from national-level sports competitions to cultural performances that showcase their diverse talents and holistic development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sports Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <Trophy className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Sports Achievements</h3>
            </div>
            
            <div className="space-y-6">
              {sportsAchievements.map((achievement, index) => {
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
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{achievement.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{achievement.batch}</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {achievement.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold text-sm mb-2">{achievement.achievement}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.result}</p>
                        <p className="text-xs text-primary font-medium">{achievement.date}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Cultural Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <Star className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Cultural Achievements</h3>
            </div>
            
            <div className="space-y-6">
              {culturalAchievements.map((achievement, index) => {
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
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{achievement.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{achievement.batch}</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-secondary/50">
                            {achievement.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold text-sm mb-2">{achievement.achievement}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.result}</p>
                        <p className="text-xs text-primary font-medium">{achievement.date}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
            <p className="text-muted-foreground">
              Our students excel not only in academics and technology but also in sports and cultural activities, demonstrating the well-rounded education and diverse opportunities available at our department.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsAchievementsSection;