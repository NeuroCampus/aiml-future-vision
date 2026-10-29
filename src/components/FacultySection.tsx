import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';

interface Faculty {
  id: number;
  name: string;
  designation: string;
  education: string;
  specialization: string;
  image?: string;
  experience: string;
  roleType: 'hod' | 'professor' | 'assistant';
  message?: string;
}

const FacultySection = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);

  const facultyMembers: Faculty[] = [
    {
      id: 1,
      name: 'Dr. Nandeeswar S. B.',
      designation: 'COE, HOD (CSE-AIML)',
      education: 'UG: Computer Science & Engineering • PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/nandeeshwar.webp',
      experience: '23 Years',
      roleType: 'hod',
      message: 'Committed to fostering innovation and research rigor in AI and ML education, guiding our students toward impactful careers and university distinction.',
    },
    {
      id: 2,
      name: 'Dr. K. Vijayakumar',
      designation: 'Professor',
      education: 'UG: Computer Science & Engineering • PG: Computer Science & Engineering',
      specialization: 'Department of CSE with AIML',
      image: '/cs-aiml-photos/Dr K Vijayakumar.webp',
      experience: '23 Years',
      roleType: 'professor',
    },
    {
      id: 3,
      name: 'Prof. Swathi Srikanth Achanur',
      designation: 'Assistant Professor',
      education: 'UG: CSE • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/swathi.webp',
      experience: '5 Years',
      roleType: 'assistant',
    },
    {
      id: 4,
      name: 'Prof. Ambili K',
      designation: 'Assistant Professor',
      education: 'UG: CSE • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/ambili k.webp',
      experience: '3 Years',
      roleType: 'assistant',
    },
    {
      id: 5,
      name: 'Prof. Vinaya S. Kavalgi',
      designation: 'Assistant Professor',
      education: 'UG: CSE • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/vinaya s.webp',
      experience: '2.7 Years',
      roleType: 'assistant',
    },
    {
      id: 6,
      name: 'Prof. Kavya P',
      designation: 'Assistant Professor',
      education: 'UG: Electronics & Communication • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '',
      experience: '1 Year',
      roleType: 'assistant',
    },
    {
      id: 7,
      name: 'Prof. Mackal Rajawat',
      designation: 'Assistant Professor',
      education: 'UG: CSE • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/mackal rajawat.webp',
      experience: 'Experienced',
      roleType: 'assistant',
    },
    {
      id: 8,
      name: 'Prof. Ramakrishna Reddy',
      designation: 'Professor',
      education: 'UG: CSE • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/ramkrishna d.webp',
      experience: '2.4 Years',
      roleType: 'professor',
    },
    {
      id: 9,
      name: 'Prof. Anulkumar C',
      designation: 'Assistant Professor',
      education: 'UG: CSE • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '',
      experience: '6 Months',
      roleType: 'assistant',
    },
    {
      id: 10,
      name: 'Prof. Kavita Reddy',
      designation: 'Assistant Professor',
      education: 'UG: Electronics & Communication • PG: VLSI Design',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/nallamilli kavita.webp',
      experience: '1 Year',
      roleType: 'assistant',
    },
    {
      id: 11,
      name: 'Prof. Nagavarshini',
      designation: 'Assistant Professor',
      education: 'UG: Computer Application • PG: Computer Application',
      specialization: 'Department of CSE with AIML',
      image: '/cs-aiml-photos/Nagavarshini.webp',
      experience: 'Associate Faculty',
      roleType: 'assistant',
    },
    {
      id: 12,
      name: 'Prof. Pamela Bera',
      designation: 'Assistant Professor',
      education: 'UG: CSE • PG: CSE',
      specialization: 'Department of CSE with AIML',
      image: '/cs-aiml-photos/Prof Pamela.webp',
      experience: 'Associate Faculty',
      roleType: 'assistant',
    },
    {
      id: 13,
      name: 'Prof. Roshan U',
      designation: 'Assistant Professor',
      education: 'UG: Mechanical Engineering • PG: Computational Science',
      specialization: 'Department of CSE with AIML',
      image: '/Magazine/roshan.webp',
      experience: 'Associate Faculty',
      roleType: 'assistant',
    },
  ];

  const hod = facultyMembers.find(f => f.roleType === 'hod');
  const teamMembers = facultyMembers.filter(f => f.roleType !== 'hod');

  // Duplicate for seamless infinite horizontal scroll
  const scrollingFaculty = [...teamMembers, ...teamMembers];

  const openFacultyPortal = (facultyId: number) => {
    navigate(`/faculty-portal/${facultyId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="faculty" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Our Expert <span className="text-primary">Faculty</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Distinguished scholars and mentors combining high academic depth with practical engineering insights.
          </p>
        </div>

        {/* HOD Executive Spotlight Card */}
        {hod && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 rounded-2xl bg-card/85 backdrop-blur-md border border-primary/30 ring-1 ring-primary/10 overflow-hidden shadow-xl shadow-primary/5"
          >
            <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
              {/* Photo Panel */}
              <div className="relative bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-border/50">
                <span className="self-start px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                  Head of Department
                </span>

                <div className="relative mb-4">
                  <OptimizedImage
                    src={hod.image!}
                    alt={hod.name}
                    containerClassName="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-primary/30"
                    className="w-full h-full object-cover"
                    aspectRatio="1/1"
                    showLoadingState={false}
                  />
                  <span className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-background" />
                </div>

                <h3 className="font-bold text-lg text-foreground text-center">{hod.name}</h3>
                <p className="text-xs text-primary font-semibold text-center mt-0.5">{hod.designation}</p>
              </div>

              {/* Details & Quote Panel */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { label: 'Experience', value: '23+ Years' },
                      { label: 'Scholars Guided', value: '500+' },
                      { label: 'Publications', value: '15+' },
                    ].map(({ label, value }) => (
                      <div key={label} className="p-3 rounded-xl bg-card/60 border border-border/50 text-center">
                        <p className="text-lg sm:text-xl font-bold text-primary">{value}</p>
                        <p className="text-[10px] uppercase font-semibold text-muted-foreground mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{hod.education}</span>
                  </p>

                  <blockquote className="border-l-2 border-primary/50 pl-4 text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-6">
                    "{hod.message}"
                  </blockquote>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40">
                  <span className="text-xs font-medium text-muted-foreground">
                    Controller of Examination (COE) • AMC Institutions
                  </span>
                  <button
                    onClick={() => openFacultyPortal(hod.id)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    View Academic Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Faculty Carousel Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-bold text-foreground tracking-tight">Faculty Directory</h3>

          <button
            onClick={() => navigate('/faculty-achievements')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline self-start sm:self-auto"
          >
            All Faculty Achievements & Research
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Infinite Smooth Scroll Carousel (Full-Width with Edge Fade) */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />

        {/* Scrolling Track */}
        <div 
          className="flex gap-5 w-max animate-scroll-left"
          style={{ 
            animationDuration: '45s',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {scrollingFaculty.map((faculty, index) => {
            const hasPhoto = Boolean(faculty.image);

            return (
              <div
                key={`${faculty.id}-${index}`}
                className="w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col justify-between p-5 rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div>
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-3.5 mb-4">
                    {hasPhoto ? (
                      <OptimizedImage
                        src={faculty.image!}
                        alt={faculty.name}
                        containerClassName="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm flex-shrink-0"
                        className="w-full h-full object-cover"
                        aspectRatio="1/1"
                        showLoadingState={false}
                      />
                    ) : (
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-base flex-shrink-0">
                        {faculty.name.split(' ').slice(1, 2)[0]?.charAt(0) || faculty.name.charAt(0)}
                      </div>
                    )}

                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-foreground tracking-tight truncate">
                        {faculty.name}
                      </h4>
                      <Badge variant="secondary" className="text-[10px] px-2 py-0 mt-0.5 truncate max-w-full">
                        {faculty.designation}
                      </Badge>
                    </div>
                  </div>

                  {/* Experience and Education */}
                  <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                      <span className="font-medium text-foreground/80">{faculty.experience}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{faculty.education}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openFacultyPortal(faculty.id)}
                  className="w-full py-2 px-3 rounded-xl border border-primary/25 text-primary text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
