import { motion } from 'framer-motion';
import { Users, Code, Lightbulb, Rocket, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentClubsSection = () => {
  const clubs = [
    {
      icon: Users,
      title: 'CSE-AIML Innovation Forum',
      description: 'Central body that coordinates, promotes, and provides a unified vision for four other clubs within our department.',
      backgroundImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center',
      presidents: [
        {
          name: 'ADITHYA K',
          rollNo: '1AM22CI004',
          quote: '"My time as President of the AI Innovations Forum has been an incredible journey of growth and collaboration. Leading our four sub-clubs—Neuron Net, AI Echelon, Fusion Fiesta, and Quantum Quicks—has shown me how student creativity and teamwork can turn ambitious ideas into reality."',
          role: 'Editor of TIMES.AI Volume I, President of CSE-AIML Innovation Forum'
        },
        {
          name: 'DIYA S SINGH',
          rollNo: '1AM22CI024',
          quote: '"Serving as the first President of the CSE-AIML Innovation Forum was a transformative experience. With the support of our faculty and HOD, we organized various events that fostered creativity and community."',
          role: 'President of CSE-AIML Innovation Forum'
        },
        {
          name: 'Sankruth',
          rollNo: '1AM21CI041',
          quote: '"Serving as the Treasurer of our department was an enriching experience. I was responsible for managing the department\'s finances, ensuring transparency for every event and initiative."',
          role: 'Editor of TIMES.AI Volume I, Treasurer of CSE-AIML Innovation Forum'
        }
      ]
    },
    {
      icon: Code,
      title: 'NeuronNet Club',
      description: 'Encourages students to explore technological advancements.',
      backgroundImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center',
      presidents: [
        {
          name: 'Tarun Balaji K S',
          rollNo: '1AM21CI049',
          quote: '"I am deeply grateful to the Department of Computer Science and Engineering (AI & ML) for the invaluable opportunity to found NeuronNet. As a student-led club, NeuronNet strives to foster both academic excellence and essential professional skills among our peers."',
          role: 'President of NeuronNet Club'
        },
        {
          name: 'Mamatha S',
          rollNo: '1AM21CI026',
          quote: '"As the President of NeuronNet, I\'m happy to reflect on a successful journey where we organized various seminars, webinars, and online meets aimed at enhancing technical skills and encouraging collaborative learning among students."',
          role: 'President of NeuronNet Club'
        }
      ]
    },
    {
      icon: Lightbulb,
      title: 'AI Echelon Club',
      description: 'Focused on fostering entrepreneurial skills and generating innovative ideas for startups.',
      backgroundImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center',
      presidents: [
        {
          name: 'Khusumith S Veera',
          rollNo: '1AM21CI022',
          quote: '"As the founding president of AI Echelon, our department\'s very first entrepreneurship club, I couldn\'t be prouder of what we\'ve built. We sparked a culture where daring ideas, teamwork, and innovation thrive."',
          role: 'President of AI Echelon Club'
        },
        {
          name: 'Tejas',
          rollNo: '1AM21CI050',
          quote: '"Starting the AI Echelon Entrepreneurship Club, a response to the department\'s lack of belonging and extracurricular opportunities, was a transformative experience."',
          role: 'President of AI Echelon Club'
        }
      ]
    },
    {
      icon: Users,
      title: 'Fusion Fiesta Club',
      description: 'Dedicated to promoting cultural activities like dance and singing.',
      backgroundImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center',
      presidents: [
        {
          name: 'D R Mouna',
          rollNo: '1AM21CI011',
          quote: '"My role as cultural head was a journey of both challenges and triumphs. Though cultural activities started late, the passion for a creative community was always present."',
          role: 'President of Fusion Fiesta Club'
        },
        {
          name: 'Pooja',
          rollNo: '1AM21CI034',
          quote: '"Being the Cultural Head has been such a fun and unforgettable experience. It gave me the chance to bring people together through events and celebrations that added life and color to our college days."',
          role: 'President of Fusion Fiesta Club'
        }
      ]
    },
    {
      icon: Trophy,
      title: 'Quantum Quicks Club',
      description: 'Supports fitness and sports activities.',
      backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      presidents: [
        {
          name: 'Masoom',
          rollNo: '1AM21CI027',
          quote: '"Being the President for Quantum Quicks for CSE AIML at AMC Engineering College was a great learning experience. I improved my leadership and teamwork skills while organizing many sports events."',
          role: 'President of Quantum Quicks Club'
        },
        {
          name: 'Prince',
          rollNo: '1AM22CI403',
          quote: '"As a member of the inaugural CSE-AIML batch at AMC, I embarked on a journey to build a new path in technology. With code as our compass, we chased the future under the guidance of our wise and supportive faculty."',
          role: 'President of Quantum Quicks Club'
        }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section id="student-clubs" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Student Clubs</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Engage with vibrant student clubs that foster technical skills, innovation, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                delay: index * 0.08,
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(80,80,180,0.12)' }}
              className={`${index === 0 ? 'lg:col-span-2' : ''}`}
              style={{ zIndex: clubs.length - index }}
            >
              <Card className="p-6 h-full rounded-2xl shadow-lg bg-gradient-to-br from-primary/5 to-card border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${club.backgroundImage})` }}
                />
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border border-primary/30 shadow">
                        <club.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{club.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-2">{club.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {club.presidents.slice(0, 1).map((president, presIndex) => (
                      <div key={presIndex} className="bg-muted/30 rounded-lg p-4 border border-muted">
                        <div className="flex flex-col space-y-2">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-foreground">{president.name}</h4>
                            <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                              {president.rollNo}
                            </span>
                          </div>
                          <p className="text-xs text-primary font-medium">{president.role}</p>
                          <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                            {president.quote}
                          </blockquote>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentClubsSection;
