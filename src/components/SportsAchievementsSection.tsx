import { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/optimized-image';

interface Achievement {
  name: string;
  batch: string;
  title: string;
  category: string;
  badge: string;
  honor: string;
  details: string;
  image: string;
  type: 'sports' | 'cultural';
}

const SportsAchievementsSection = () => {
  const [filter, setFilter] = useState<'all' | 'sports' | 'cultural'>('all');

  const achievements: Achievement[] = [
    {
      name: 'S. S. Subhash',
      batch: 'Batch of 2026',
      title: "Captain, AMC Men's Cricket Team",
      category: 'Cricket · VTU Inter-Collegiate',
      badge: '3rd Place State Rank',
      honor: 'Led AMC College team across regional qualifiers into the VTU State Inter-Collegiate Finals.',
      details: 'Demonstrated tactical on-field captaincy and match-winning athletic performance across multi-day tournament fixtures.',
      image: '/DSC_0779_Original.webp',
      type: 'sports',
    },
    {
      name: 'Sarika Jaganath',
      batch: 'Batch of 2027',
      title: 'National Shooting Athlete',
      category: 'Marksmanship · Shooting',
      badge: '66th National Championship',
      honor: 'Represented Karnataka and AMC at the prestigious National Shooting Championship.',
      details: 'Competed at the highest national tier in precision 10m air rifle target events under rigorous national qualification standards.',
      image: '/DSC_9842_Original.webp',
      type: 'sports',
    },
    {
      name: 'Harshavardhan S. Kale',
      batch: 'Batch of 2026',
      title: 'Multi-Sport Athletics Champion',
      category: 'Athletics & Cricket',
      badge: 'Gold & Silver Medalist',
      honor: 'Decorated all-round university athlete across sprinting, track events, and competitive cricket.',
      details: 'Consistently secured podium medals in inter-college sprint invitationals while anchoring departmental athletic teams.',
      image: '/IMG_8492.webp',
      type: 'sports',
    },
    {
      name: 'Akshatha S. Girisagar',
      batch: 'Batch of 2027',
      title: 'Classical Kuchipudi Performer',
      category: 'Classical Performing Arts',
      badge: 'University Cultural Soloist',
      honor: 'Performed solo recitals at premier cultural convocations and university youth celebrations.',
      details: 'Trained classical exponent bringing authentic cultural storytelling and expressive performance art to state platforms.',
      image: '/culture.webp',
      type: 'cultural',
    },
    {
      name: 'Swetha K',
      batch: 'Batch of 2027',
      title: 'Published Poet & Literary Author',
      category: 'Creative Literature',
      badge: 'Published Works',
      honor: 'Authored acclaimed published poetry collections: "You, the Star" and "The Voice Between Life and Death".',
      details: 'Widely praised for philosophical exploration and linguistic resonance, showcasing the creative depth of CSE-AIML scholars.',
      image: '/IMG_0480.webp',
      type: 'cultural',
    },
    {
      name: 'Nageshwar & Preethiba',
      batch: 'Batch of 2027',
      title: 'Traditional Folk Ensemble Leads',
      category: 'Folk Arts & Heritage',
      badge: 'Kannada Rajyotsava Honor',
      honor: 'Choreographed and led high-energy folk performances honoring Karnataka cultural heritage.',
      details: 'Celebrated by college leadership for preserving traditional performing art forms through choreographed ensemble storytelling.',
      image: '/culture.webp',
      type: 'cultural',
    },
  ];

  const filtered = filter === 'all' ? achievements : achievements.filter((a) => a.type === filter);

  return (
    <section id="sports-cultural" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Sports &amp; <span className="text-primary">Cultural Excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Celebrating athletic champions, performing artists, and literary creators who represent the AMC CSE–AIML spirit at national, state, and university levels.
          </p>
        </div>

        {/* Featured Cultural & Campus Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-lg hover:border-primary/40 transition-all duration-300"
        >
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Photo */}
            <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-[420px] group">
              <OptimizedImage
                src="/culture.webp"
                alt="AMC Cultural & Heritage Festival"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                aspectRatio="16/9"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-background/90 text-foreground backdrop-blur-md border border-border/50">
                  Annual Cultural Heritage
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <p className="text-xs uppercase tracking-widest text-primary-foreground/90 font-bold mb-1">
                  Kannada Rajyotsava &amp; Arts Fest
                </p>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  Cultural Expression &amp; Performing Arts
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
                  Highlighting the rich cultural diversity, classical dance forms, and artistic expressions nurtured across the department.
                </p>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Holistic Development
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
                  Beyond Academic Rigor
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  Engineers at AMC CSE–AIML excel across the athletic field and the artistic stage. From representing Karnataka in national shooting championships to published poetry and classical dance recitals, student endeavors embody well-rounded excellence.
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40">
                    <p className="text-xs font-bold text-foreground">Athletic Leadership</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Inter-university cricket championships, state track invitationals, and national shooting fixtures.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40">
                    <p className="text-xs font-bold text-foreground">Artistic &amp; Literary Works</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Classical Kuchipudi recitals, published poetry anthologies, and regional folk choreography.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                <span>VTU Affiliated Athletic Body</span>
                <span className="font-semibold text-primary">AMC Sports Complex</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            All Achievers
          </button>
          <button
            onClick={() => setFilter('sports')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'sports'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            Athletic Champions
          </button>
          <button
            onClick={() => setFilter('cultural')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'cultural'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground bg-card/70 border border-border/50 hover:text-foreground hover:border-primary/40'
            }`}
          >
            Cultural &amp; Literary Artists
          </button>
        </div>

        {/* Achievers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={item.image}
                    alt={item.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aspectRatio="16/10"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-background/90 text-foreground backdrop-blur-md border border-border/50">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-primary text-primary-foreground shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="font-semibold text-primary">{item.batch}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-foreground/80 mt-0.5 mb-3">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed mb-2">
                    {item.honor}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="h-px bg-border/40 mb-3" />
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                  Department of CSE–AIML
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsAchievementsSection;
