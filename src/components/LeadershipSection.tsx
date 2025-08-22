import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Dr. K.R. Paramahamsa',
      position: 'Chairman, AMC Institutions',
      quote: 'The CSE AIML department is playing a pivotal role in preparing the next generation of innovators. I am proud of its academic excellence, industry-aligned skill development, and the remarkable achievements of our students in securing university ranks, publishing research, and launching innovative projects.',
    },
    {
      name: 'Smt. Geetha Paramahamsa',
      position: 'Vice Chairperson, AMC Institutions',
      quote: 'The department stands as a beacon of futuristic thinking, nurturing young minds to explore AI and ML through a dynamic curriculum and industry collaborations. I congratulate the leadership, faculty, and students for their relentless pursuit of excellence.',
    },
    {
      name: 'Mr. Rahul Kalluri',
      position: 'Executive Vice President, AMC Institutions',
      quote: 'The CSE AIML department reflects the spirit of innovation and academic integrity. Its initiatives, from cutting-edge research to entrepreneurship programs, are shaping AI leaders for a competitive world.',
    },
    {
      name: 'Dr. Mohan Babu G. N.',
      position: 'Director, AMC Engineering College',
      quote: 'The department\'s focus on academic excellence, research, and industry integration is commendable. Students\' participation in competitions, publications, and startups highlights their forward momentum.',
    },
    {
      name: 'Dr. Yuvaraju B. N.',
      position: 'Principal, AMC Engineering College',
      quote: 'The CSE AIML department is a hub of innovation and skill-driven learning, empowering students to meet industry demands through a balanced curriculum and impactful technical events.',
    },
    {
      name: 'Dr. G. Shivakumar',
      position: 'Vice Principal, AMC Engineering College',
      quote: 'The department\'s commitment to quality education and fostering an entrepreneurial mindset through ideathons and hackathons is inspiring. It is preparing students to lead in a data-driven world.',
    },
    {
      name: 'Dr. Nandeeswar S. B.',
      position: 'HOD – CSE (AI & ML)',
      quote: 'Our department is dedicated to shaping professionals with technical expertise and a research-driven mindset. We focus on holistic development through projects, industry exposure, and innovation challenges.',
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
            Leadership <span className="text-primary">Messages</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our visionary leaders about the department's commitment to excellence and innovation in AI and ML education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
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
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-primary mb-4" />
                  <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{leader.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-sm">{leader.name}</h4>
                    <p className="text-xs text-muted-foreground">{leader.position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;