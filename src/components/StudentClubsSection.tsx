import { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/optimized-image';

interface PresidentInfo {
  name: string;
  rollNo: string;
  role: string;
  quote: string;
}

interface Club {
  id: string;
  title: string;
  category: string;
  domain: string;
  description: string;
  image: string;
  presidents: PresidentInfo[];
}

const StudentClubsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const forumPresidents: PresidentInfo[] = [
    {
      name: 'Adithya K',
      rollNo: '1AM22CI004',
      role: 'President, CSE–AIML Innovation Forum · Editor, TIMES.AI Volume I',
      quote:
        'Leading our four sub-clubs—Neuron Net, AI Echelon, Fusion Fiesta, and Quantum Quicks—has proven how student creativity and collaborative execution turn ambitious engineering concepts into tangible impact.',
    },
    {
      name: 'Diya S Singh',
      rollNo: '1AM22CI024',
      role: 'Founding President, CSE–AIML Innovation Forum',
      quote:
        'Serving as the inaugural President established a lasting governance model where students are empowered to build, host hackathons, and foster an inclusive technical community.',
    },
  ];

  const clubs: Club[] = [
    {
      id: 'neuronnet',
      title: 'NeuronNet Club',
      category: 'technical',
      domain: 'Applied AI & Deep Learning Horizons',
      description:
        'Dedicated to hands-on exploration of machine learning pipelines, transformer architectures, and real-world deployment challenges through peer workshops.',
      image: '/cs-aiml-photos/Eventspic/IDEATHON1.webp',
      presidents: [
        {
          name: 'Utkarsh Kumar Pandit',
          rollNo: '1AM22CI113',
          role: 'President, NeuronNet',
          quote:
            'Focusing on bridging theoretical neural algorithms with practical industry-grade model architectures and open-source tooling.',
        },
        {
          name: 'Mehraj Fathima Ansari',
          rollNo: '1AM22CI051',
          role: 'President, NeuronNet',
          quote:
            'Cultivating an active peer learning circle where every student builds confidence with modern frameworks and reproducible benchmarks.',
        },
      ],
    },
    {
      id: 'ai-echelon',
      title: 'AI Echelon Club',
      category: 'entrepreneurship',
      domain: 'Ventures, Product Design & Startups',
      description:
        'Nurturing student-led startup ventures from initial problem validation to prototype development, pitch presentations, and incubation.',
      image: '/cs-aiml-photos/Eventspic/StartupIdea.webp',
      presidents: [
        {
          name: 'Ritesh N',
          rollNo: '1AM22CI079',
          role: 'President, AI Echelon',
          quote:
            'Championing practical ventures that translate deep technical capabilities into viable products solving real market pain points.',
        },
        {
          name: 'Ruthu Parinika',
          rollNo: '1AM22CI083',
          role: 'President, AI Echelon',
          quote:
            'Connecting student founders with mentorship and peer feedback to turn hackathon concepts into scalable, sustainable ventures.',
        },
      ],
    },
    {
      id: 'matrixx',
      title: 'MATRIXX Club',
      category: 'technical',
      domain: 'Competitive Coding & Hackathon Sprints',
      description:
        'Preparing department cohorts for high-stakes national hackathons, algorithmic contests, and speed coding olympiads.',
      image: '/cs-aiml-photos/Eventspic/HACKTOPUS.webp',
      presidents: [
        {
          name: 'Harshavardhan S. Kale',
          rollNo: '1AM22CI035',
          role: 'President, MATRIXX',
          quote:
            'Driving competitive hackathon teams to podium finishes across top national institutions through systematic problem-solving drills.',
        },
        {
          name: 'Monithesh R',
          rollNo: '1AM22CI056',
          role: 'President, MATRIXX',
          quote:
            'Building a supportive yet razor-sharp coding culture where members master algorithms, data structures, and rapid prototyping.',
        },
      ],
    },
    {
      id: 'cultural-film',
      title: 'Cultural & Film Making Club',
      category: 'cultural',
      domain: 'Visual Cinema, Storytelling & Performing Arts',
      description:
        'A creative collective capturing college life through cinematography, producing short films, scriptwriting, and coordinating stage festivals.',
      image: '/culture.webp',
      presidents: [
        {
          name: 'Deepak Talari',
          rollNo: '1AM22CI022',
          role: 'President, Cultural & Film Making',
          quote:
            'Creating an authentic platform for cinematic storytelling, documentary filmmaking, and artistic student expression.',
        },
        {
          name: 'Bhanu Priya R',
          rollNo: '1AM22CI011',
          role: 'President, Cultural & Film Making',
          quote:
            'Blending rich regional artistic traditions with contemporary multimedia production to tell compelling human stories.',
        },
      ],
    },
    {
      id: 'quantum-quicks',
      title: 'Quantum Quicks Club',
      category: 'sports',
      domain: 'Athletics, Physical Conditioning & Leagues',
      description:
        'Organizing inter-batch sports tournaments, fitness bootcamps, and recreational leagues to ensure balance, teamwork, and vitality.',
      image: '/DSC_0779_Original.webp',
      presidents: [
        {
          name: 'S. S. Subhash',
          rollNo: '1AM22CI102',
          role: 'President, Quantum Quicks',
          quote:
            'Promoting physical stamina, discipline, and active team bonding that translates directly into sharper academic focus.',
        },
        {
          name: 'C. Srinivas Gowda',
          rollNo: '1AM22CI015',
          role: 'President, Quantum Quicks',
          quote:
            'Encouraging an active sports lifestyle with open participation across indoor and outdoor collegiate tournaments.',
        },
      ],
    },
  ];

  const filteredClubs =
    activeCategory === 'all'
      ? clubs
      : clubs.filter((c) => c.category === activeCategory);

  return (
    <section id="student-clubs" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Our Student <span className="text-primary">Clubs</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Empowering student leadership, collaborative innovation, competitive coding, and creative pursuits through autonomous student-led bodies.
          </p>
        </div>

        {/* Umbrella Body Spotlight: CSE-AIML Innovation Forum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-lg hover:border-primary/40 transition-all duration-300"
        >
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Photo */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[300px] lg:min-h-[460px] group">
              <OptimizedImage
                src="/Magazine/student club.webp"
                alt="CSE-AIML Innovation Forum Student Body"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                aspectRatio="16/9"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-background/90 text-foreground backdrop-blur-md border border-border/50">
                  Umbrella Governing Body
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <p className="text-xs uppercase tracking-widest text-primary-foreground/90 font-bold mb-1">
                  Department Coordination &amp; Vision
                </p>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  CSE–AIML Innovation Forum
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Coordinating, resource-funding, and guiding specialized student clubs across technical, entrepreneurship, arts, and athletic domains.
                </p>
              </div>
            </div>

            {/* Right Information & Leadership */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Student Leadership Council
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
                  Autonomous Student Governance
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  The Innovation Forum acts as the department's executive student council, publishing the annual TIMES.AI departmental magazine, facilitating club resource allocation, and organizing university-wide technical festivals.
                </p>

                {/* Forum Presidents Showcase */}
                <div className="space-y-4">
                  {forumPresidents.map((pres) => (
                    <div
                      key={pres.name}
                      className="p-4 rounded-xl bg-muted/40 border border-border/40 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-foreground">
                          {pres.name}
                        </h4>
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {pres.rollNo}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-primary mb-2">
                        {pres.role}
                      </p>
                      <blockquote className="text-xs text-muted-foreground italic leading-relaxed border-l-2 border-primary/40 pl-3">
                        {pres.quote}
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                <span>Governed with HOD &amp; Faculty Advisory</span>
                <span className="font-semibold text-primary">5 Active Sub-Clubs</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            All Sub-Clubs
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'technical'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            Technical &amp; Coding
          </button>
          <button
            onClick={() => setActiveCategory('entrepreneurship')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'entrepreneurship'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            Startups &amp; Product
          </button>
          <button
            onClick={() => setActiveCategory('cultural')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'cultural'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            Film &amp; Arts
          </button>
          <button
            onClick={() => setActiveCategory('sports')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'sports'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            Sports &amp; Fitness
          </button>
        </div>

        {/* Sub-Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredClubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={club.image}
                    alt={club.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aspectRatio="16/10"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-background/90 text-foreground backdrop-blur-md border border-border/50">
                      {club.domain}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {club.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {club.description}
                  </p>

                  {/* Presidents Leadership Roster */}
                  <div className="mt-5 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Club Leadership
                    </p>
                    {club.presidents.map((pres) => (
                      <div
                        key={pres.name}
                        className="p-3.5 rounded-xl bg-muted/40 border border-border/40"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-foreground mb-1">
                          <span>{pres.name}</span>
                          <span className="font-mono text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                            {pres.rollNo}
                          </span>
                        </div>
                        <p className="text-[11px] font-semibold text-primary mb-1">
                          {pres.role}
                        </p>
                        <p className="text-xs text-muted-foreground italic leading-relaxed">
                          {pres.quote}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="h-px bg-border/40 mb-3" />
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                  CSE–AIML Innovation Forum Sub-Club
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentClubsSection;
