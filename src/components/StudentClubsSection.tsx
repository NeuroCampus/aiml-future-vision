import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentClubsSection = () => {
  const clubs = [
    {
      title: 'CSE-AIML Innovation Forum',
      description: 'Central body that coordinates, promotes, and provides a unified vision for four other clubs within our department.',
      presidents: [
        {
          name: 'ADITHYA K',
          rollNo: '1AM22CI004',
          quote: '"My time as President of the AI Innovations Forum has been an incredible journey of growth and collaboration. Leading our four sub-clubs—Neuron Net, AI Echelon, Fusion Fiesta, and Quantum Quicks—has shown me how student creativity and teamwork can turn ambitious ideas into reality."',
          role: 'Editor of TIMES.AI Volume I, President of CSE-AIML Innovation Forum, PRESIDENT OF INNOVATION FORUM'
        },
        {
          name: 'DIYA S SINGH',
          rollNo: '1AM22CI024',
          quote: '"Serving as the first President of the CSE-AIML Innovation Forum was a transformative experience. With the support of our faculty and HOD, we organized various events that fostered creativity and community."',
          role: 'President of CSE-AIML Innovation Forum, PRESIDENT OF INNOVATION FORUM'
        }
      ]
    },
    {
      title: 'NeuronNet Club',
      description: 'Encourages students to explore technological advancements.',
      presidents: [
        {
          name: 'UTKARSH KUMAR PANDIT',
          rollNo: '1AM22CI113',
          quote: '"As President of NeuronNet, I\'ve focused on bridging the gap between academic learning and real-world tech applications, organizing workshops that inspire innovation among our members."',
          role: 'President of NeuronNet Club'
        },
        {
          name: 'MEHRAJ FATHIMA ANSARI',
          rollNo: '1AM22CI051',
          quote: '"Leading NeuronNet has been about fostering a community of tech enthusiasts. We\'ve hosted seminars and hackathons that encourage students to explore cutting-edge technologies."',
          role: 'President of NeuronNet Club'
        }
      ]
    },
    {
      title: 'AI Echelon Club',
      description: 'Focused on fostering entrepreneurial skills and generating innovative ideas for startups.',
      presidents: [
        {
          name: 'RITESH N',
          rollNo: '1AM22CI079',
          quote: '"As President of AI Echelon, I\'ve championed entrepreneurial ventures that turn innovative ideas into successful startups, fostering a culture of creativity and business acumen."',
          role: 'President of AI Echelon Club'
        },
        {
          name: 'RUTHU PARINIKA',
          rollNo: '1AM22CI083',
          quote: '"Leading AI Echelon has been about nurturing startup ecosystems. We\'ve mentored aspiring entrepreneurs and organized pitch events to bring ideas to life."',
          role: 'President of AI Echelon Club'
        }
      ]
    },
    {
      title: 'Cultural and Film Making Club',
      description: 'Dedicated to cultural activities and film making, bringing creativity and storytelling to life through events and productions.',
      presidents: [
        {
          name: 'DEEPAK TALARI',
          rollNo: '1AM22CI022',
          quote: '"As President of the Cultural and Film Making Club, I\'ve fostered a space for artistic expression, organizing film screenings and cultural events that celebrate diversity and creativity."',
          role: 'President of Cultural and Film Making Club'
        },
        {
          name: 'BHANU PRIYA R',
          rollNo: '1AM22CI011',
          quote: '"Leading the Cultural and Film Making Club has been about blending tradition with modern storytelling. We\'ve produced short films and hosted cultural festivals that inspire our community."',
          role: 'President of Cultural and Film Making Club'
        }
      ]
    },
    {
      title: 'Quantum Quicks Club',
      description: 'Supports fitness and sports activities.',
      presidents: [
        {
          name: 'SS SUBHASH',
          rollNo: '1AM22CI102',
          quote: '"As President of Quantum Quicks, I\'ve promoted physical fitness and teamwork through various sports events, helping students maintain a healthy balance with their academic pursuits."',
          role: 'President of Quantum Quicks Club'
        },
        {
          name: 'C SRINIVAS GOWDA',
          rollNo: '1AM22CI015',
          quote: '"Leading Quantum Quicks has been about encouraging an active lifestyle. We\'ve organized tournaments and fitness challenges that build camaraderie and physical well-being."',
          role: 'President of Quantum Quicks Club'
        }
      ]
    },
    {
      title: 'MATRIXX Club',
      description: 'Focused on hackathons and coding competitions, fostering innovation and problem-solving skills through collaborative tech challenges.',
      presidents: [
        {
          name: 'HARSHAVARDHAN S KALE',
          rollNo: '1AM22CI035',
          quote: '"As President of MATRIXX, I\'ve driven our hackathon initiatives, creating platforms for students to tackle real-world problems and develop cutting-edge solutions."',
          role: 'President of MATRIXX Club'
        },
        {
          name: 'MONITHESH R',
          rollNo: '1AM22CI056',
          quote: '"Leading MATRIXX has been about building a competitive yet collaborative coding community. We\'ve hosted hackathons that push boundaries and inspire technological breakthroughs."',
          role: 'President of MATRIXX Club'
        }
      ]
    }
  ];

  return (
    <section id="student-clubs" className="py-16 md:py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Student Clubs</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Engage with vibrant student clubs that foster technical skills, innovation, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {clubs.map((club, index) => {
            const gradients = [
              'from-blue-600 to-purple-600',
              'from-green-600 to-teal-600',
              'from-orange-600 to-red-600',
              'from-pink-600 to-purple-600',
              'from-yellow-600 to-orange-600',
              'from-cyan-600 to-blue-600'
            ];
            const borderColors = [
              'border-blue-200',
              'border-green-200',
              'border-orange-200',
              'border-pink-200',
              'border-yellow-200',
              'border-cyan-200'
            ];
            const gradientClass = gradients[index % gradients.length];
            const borderColorClass = borderColors[index % borderColors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  delay: index * 0.1,
                }}
              >
                <Card className={`h-full shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group ${borderColorClass}`}>
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradientClass} p-[1px] animate-spin opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                       style={{ animationDuration: '8s' }}>
                    <div className="bg-card rounded-lg h-full w-full"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className={`text-xl font-semibold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                        {club.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{club.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {club.presidents.map((president, presIndex) => (
                        <div key={presIndex} className="bg-muted/50 rounded-lg p-4 border border-border/50">
                          <div className="space-y-3">
                            <div className="flex justify-between items-start">
                              <h4 className="font-semibold text-foreground">{president.name}</h4>
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                {president.rollNo}
                              </span>
                            </div>
                            <p className={`text-xs font-medium bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                              {president.role}
                            </p>
                            <blockquote className="text-sm text-muted-foreground italic leading-relaxed border-l-2 border-primary/30 pl-3">
                              {president.quote}
                            </blockquote>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentClubsSection;
