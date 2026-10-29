import { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/optimized-image';

interface IdeathonWinner {
  prize: string;
  badgeColor: string;
  team: string;
  members: string;
  department: string;
  solution: string;
}

interface HackathonEntry {
  title: string;
  organizer: string;
  year: string;
  status: 'Winner' | 'Finalist' | 'Selected';
  description: string;
  image: string;
}

interface ResearchPaper {
  title: string;
  authors: string;
  journal: string;
  year: string;
  domain: string;
  image: string;
}

const InnovationResearchSection = () => {
  const [activeTab, setActiveTab] = useState<'hackathons' | 'research' | 'labs'>('hackathons');

  const stats = [
    { value: '63+', label: 'Ideathon Teams', detail: 'Cross-disciplinary engineering teams' },
    { value: '15+', label: 'National Hackathons', detail: 'Podium & finalist finishes across India' },
    { value: '120+', label: 'Working Prototypes', detail: 'AI, IoT, and sustainability solutions' },
    { value: '25+', label: 'Research Papers', detail: 'Peer-reviewed Scopus & UGC journals' },
  ];

  const ideathonWinners: IdeathonWinner[] = [
    {
      prize: '1st Prize Winner',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      team: 'Feel the Feathers',
      members: 'Harshavardhan, Monitesh, Hariharan',
      department: 'CSE-AIML',
      solution: 'Autonomous poultry health monitoring system utilizing computer vision and edge anomaly detection.',
    },
    {
      prize: '2nd Prize Winner',
      badgeColor: 'bg-primary/10 text-primary border-primary/30',
      team: 'NeuroSync',
      members: 'Varsha K, Shaktishree T R, Venika',
      department: 'ISE',
      solution: 'Neural bio-signal analysis interface for assistive accessibility communication.',
    },
    {
      prize: '3rd Prize (Joint)',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      team: 'Plant to Power & CO2 Roads',
      members: 'Multidisciplinary Student Cohort',
      department: 'CSE-AIML',
      solution: 'Microbial biological power generation and carbon-sequestering highway paving solutions.',
    },
  ];

  const nationalHackathons: HackathonEntry[] = [
    {
      title: 'Hackathon at IIT Bombay',
      organizer: 'IIT Bombay Techfest',
      year: '2024',
      status: 'Winner',
      description: 'National recognition for developing an automated machine learning diagnosis assistant under competitive time constraints.',
      image: '/cs-aiml-photos/Studentscertficate/Hackathon at IIT Bombay.webp',
    },
    {
      title: 'HACKTOPUS 2025',
      organizer: 'AMC Department Hackathon',
      year: '2025',
      status: 'Winner',
      description: 'Department-hosted 24-hour sprint tackling generative AI, edge computing, and real-time vision pipelines with student prototypes.',
      image: '/cs-aiml-photos/Eventspic/HACKTOPUS.webp',
    },
    {
      title: 'Techfest National Innovation',
      organizer: 'National Technical Summit',
      year: '2024',
      status: 'Finalist',
      description: 'Represented AMC CSE-AIML among thousands of nationwide entries, qualifying through rigorous technical benchmarking.',
      image: '/cs-aiml-photos/Studentscertficate/Techfest.webp',
    },
    {
      title: 'Kodikon 3.0 & Hack-A-City',
      organizer: 'Inter-Collegiate Hackathon',
      year: '2024',
      status: 'Winner',
      description: 'Consecutive first-place triumphs with smart city municipal management pipelines and distributed sensory nodes.',
      image: '/cs-aiml-photos/Eventspic/IDEATHON2.webp',
    },
  ];

  const researchPapers: ResearchPaper[] = [
    {
      title: 'Predictive Medical Diagnostics using Deep Residual Networks',
      authors: 'Varshini & Faculty Mentors',
      journal: 'International Journal of Research & Analytical Reviews (IJRAR)',
      year: '2024',
      domain: 'Healthcare AI',
      image: '/cs-aiml-photos/Studentscertficate/IJRAR(Varshini).webp',
    },
    {
      title: 'Automated Detection of Agronomic Plant Pathology via Mobile Vision',
      authors: 'Sankruth K & Department Research Team',
      journal: 'International Journal of Research & Analytical Reviews (IJRAR)',
      year: '2024',
      domain: 'Computer Vision',
      image: '/cs-aiml-photos/Studentscertficate/IJRAR(Sankruth).webp',
    },
    {
      title: 'Distributed IoT Sensor Telemetry with Edge Anomaly Classification',
      authors: 'Vikram & Swathi Mentorship Group',
      journal: 'IRJET & Peer-Reviewed Proceedings',
      year: '2024',
      domain: 'Edge Computing',
      image: '/cs-aiml-photos/Studentscertficate/IJRAR(Vikram).webp',
    },
    {
      title: 'Deep Learning Architectures for Real-Time Sentiment & Speech Processing',
      authors: 'Tejaswini & Research Scholars',
      journal: 'International Journal of Research & Analytical Reviews (IJRAR)',
      year: '2024',
      domain: 'NLP & Speech',
      image: '/cs-aiml-photos/Studentscertficate/IJRAR(Tejaswini).webp',
    },
  ];

  const researchLabs = [
    {
      name: 'Advanced Research & Development (R&D) Lab',
      role: 'High-Performance Computing & Deep Learning Facility',
      specs: 'Equipped with dedicated GPU workstations, accelerated CUDA runtime environments, and low-latency network storage for large model training and experimentation.',
      image: '/cs-aiml-photos/Labpics/RDlab.webp',
      focus: ['Foundation Models', 'Computer Vision', 'Deep Neural Networks', 'Parallel Computing'],
    },
    {
      name: 'CASE & Intelligent Software Engineering Lab',
      role: 'Full-Stack AI Application Development & Deployment',
      specs: 'Specialized for architectural modeling, containerized API deployments, embedded edge sensor interfacing, and end-to-end software pipeline evaluation.',
      image: '/cs-aiml-photos/Labpics/CASElab.webp',
      focus: ['Edge Inference', 'Full-Stack AI Apps', 'Software Architecture', 'IoT Integration'],
    },
  ];

  return (
    <section id="innovation-research" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Innovation &amp; <span className="text-primary">Research</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Fostering technical leadership through flagship ideathons, national hackathon podiums, dedicated R&amp;D laboratories, and peer-reviewed student research publications.
          </p>
        </div>

        {/* Impact Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 sm:p-6 rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 shadow-sm hover:border-primary/40 transition-all duration-300"
            >
              <div className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary mb-1 sm:mb-2">
                {item.value}
              </div>
              <div className="text-xs sm:text-base font-bold text-foreground">
                {item.label}
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Showcase: ThinkUp Ideathon 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-lg hover:border-primary/40 transition-all duration-300"
        >
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Left: Ideathon Photo */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[300px] lg:min-h-[460px] group">
              <OptimizedImage
                src="/ideathon.webp"
                alt="ThinkUp Ideathon 2025 AMC Engineering College"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                aspectRatio="16/9"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-background/90 text-foreground backdrop-blur-md border border-border/50 shadow-sm">
                  Flagship Event
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <p className="text-xs uppercase tracking-widest text-primary-foreground/90 font-bold mb-1">
                  Department Innovation Sprint
                </p>
                <h3 className="text-lg sm:text-xl font-bold leading-snug">
                  ThinkUp – Ideathon 2025
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  63 teams across engineering disciplines solving real-world challenges.
                </p>
              </div>
            </div>

            {/* Right: Ideathon Winners & Highlights */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    ThinkUp Podium Results
                  </h3>
                  <span className="text-xs text-muted-foreground font-semibold px-2.5 py-1 rounded-md bg-muted">
                    2025 Edition
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  Judged by leading industry practitioners and departmental faculty on innovation quotient, technical feasibility, architectural robustness, and social impact.
                </p>

                {/* Winner cards */}
                <div className="space-y-3.5">
                  {ideathonWinners.map((winner) => (
                    <div
                      key={winner.prize}
                      className="p-4 rounded-xl bg-muted/40 border border-border/40 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${winner.badgeColor}`}>
                          {winner.prize}
                        </span>
                        <span className="text-[11px] font-semibold text-muted-foreground">
                          {winner.department}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-foreground">
                        {winner.team}
                      </h4>
                      <p className="text-xs font-medium text-primary mt-0.5">
                        {winner.members}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                        {winner.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'hackathons'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            National Hackathons &amp; Competitions
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'research'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            Research Publications &amp; Journals
          </button>
          <button
            onClick={() => setActiveTab('labs')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'labs'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            R&amp;D Infrastructure &amp; Labs
          </button>
        </div>

        {/* Tab 1: National Hackathons Grid */}
        {activeTab === 'hackathons' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {nationalHackathons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aspectRatio="16/10"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${
                      item.status === 'Winner'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                      <span className="font-semibold text-primary">{item.organizer}</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Research Publications */}
        {activeTab === 'research' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={paper.image}
                    alt={paper.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aspectRatio="16/10"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-background/90 text-foreground backdrop-blur-md border border-border/50">
                      {paper.domain}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                      <span className="font-semibold text-primary">{paper.journal}</span>
                      <span>{paper.year}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
                      Author(s): {paper.authors}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 3: R&D Laboratories */}
        {activeTab === 'labs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchLabs.map((lab, index) => (
              <motion.div
                key={lab.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="group rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={lab.image}
                    alt={lab.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aspectRatio="16/10"
                  />
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-black/70 text-white backdrop-blur-md border border-white/20">
                      {lab.role}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {lab.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                      {lab.specs}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/40">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2.5">
                      Core Research Thrusts
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {lab.focus.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InnovationResearchSection;
