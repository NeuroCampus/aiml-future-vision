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
      backgroundImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      name: 'Sarika Jaganath',
      batch: 'Batch 2027',
      achievement: 'National Shooting Championship Participant',
      result: 'Competed in 66th National Championship',
      date: 'November-December 2024',
      icon: Target,
      category: 'Shooting',
      backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      name: 'Harshavardhan S. Kale',
      batch: 'Batch 2026',
      achievement: 'Multiple Sports Awards Winner',
      result: 'Cricket and Running Events Champion',
      date: '2024',
      icon: Medal,
      category: 'Multi-Sport',
      backgroundImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-green-500/20 to-emerald-500/20',
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
      backgroundImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      name: 'Swetha K',
      batch: 'Batch 2027',
      achievement: 'Published Poet',
      result: 'Acclaimed poems: "You, the Star" and "The Voice Between Life and Death"',
      date: '2024',
      icon: Star,
      category: 'Literature',
      backgroundImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      name: 'Nageshwar & Preethiba',
      batch: 'Batch 2027',
      achievement: 'Traditional Dance Performance',
      result: 'Kannada Rajyotsava Celebration',
      date: '2024',
      icon: Users,
      category: 'Cultural Dance',
      backgroundImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-rose-500/20 to-pink-500/20',
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
            Sports & <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Cultural Excellence</span>
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
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group perspective-1000"
              >
                <Card className={`relative overflow-hidden bg-gradient-to-br ${achievement.gradient} to-card border border-border/30 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-500 h-full group-hover:shadow-2xl`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${achievement.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{achievement.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{achievement.batch}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="bg-primary/15 text-primary border border-primary/20 backdrop-blur-sm">
                        {achievement.category}
                      </Badge>
                      <span className="bg-secondary/20 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-muted-foreground border border-border/20">{achievement.date}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{achievement.achievement}</h4>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{achievement.result}</p>
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
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