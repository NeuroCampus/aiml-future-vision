import { motion } from 'framer-motion';
import { Users, Code, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentClubsSection = () => {
  const clubs = [
    {
      icon: Code,
      title: 'AI/ML Club',
      description: 'Focuses on hands-on AI/ML projects, workshops, and competitions.',
      image: '/cartoons/undraw_developer-activity_4zqd.svg',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Robotics Club',
      description: 'Promotes creativity and practical skills in robotics and innovative solutions.',
      image: '/cartoons/undraw_connected-world_anke.svg',
    },
    {
      icon: Users,
      title: 'Data Science Community',
      description: 'A platform for data enthusiasts to learn, share, and collaborate on data-driven projects.',
      image: '/cartoons/undraw_online-community_3o0l.svg',
    },
    {
      icon: Rocket,
      title: 'Competitive Programming Club',
      description: 'Trains students for coding competitions and enhances problem-solving abilities.',
      image: '/cartoons/undraw_vibe-coding_mjme.svg',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="student-clubs" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Student Clubs</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Engage with vibrant student clubs that foster technical skills, innovation, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card className="text-center p-6 h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <club.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{club.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{club.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentClubsSection;
