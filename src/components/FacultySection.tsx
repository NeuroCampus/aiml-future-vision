import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, User, GraduationCap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';

const FacultySection = () => {
  const facultyMembers = [
    { id: 1, name: 'Dr. Nandeeswar S. B', designation: 'COE, HOD (CSE-AIML)', education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering', specialization: 'Department of CSE with AIML', image: '/Magazine/nandeeshwar.png', experience: '23 Years', message: 'As the Head of Department, I am committed to fostering innovation and excellence in AI and ML education, guiding our students towards successful careers in this transformative field.' },
    { id: 2, name: 'Dr. K. Vijayakumar', designation: 'Professor', education: 'UG: Computer Science & Engineering, PG: Computer Science & Engineering', specialization: 'Department of CSE with AIML', image: '/cs-aiml-photos/Dr K Vijayakumar.png', experience: '23 Years' },
    { id: 3, name: 'Prof. Swathi Srikanth Achanur', designation: 'Assistant Professor', education: 'UG: CSE, PG: CSE', specialization: 'Department of CSE with AIML', image: '/Magazine/swathi.jpg', experience: '5 Years' },
    { id: 4, name: 'Prof. Ambili K', designation: 'Assistant Professor', education: 'UG: CSE, PG: CSE', specialization: 'Department of CSE with AIML', image: '/Magazine/ambili k.jpg', experience: '3 Years' },
    { id: 5, name: 'Prof. Vinaya S. Kavalgi', designation: 'Assistant Professor', education: 'UG: CSE, PG: CSE', specialization: 'Department of CSE with AIML', image: '/Magazine/vinaya s.jpg', experience: '2.7 Years' },
    { id: 6, name: 'Prof. Kavya P', designation: 'Assistant Professor', education: 'UG: Electronics & Communication, PG: CSE', specialization: 'Department of CSE with AIML', image: '', experience: '1 Year' },
    { id: 7, name: 'Prof. Mackal Rajawat', designation: 'Assistant Professor', education: 'UG: CSE, PG: CSE', specialization: 'Department of CSE with AIML', image: '/Magazine/mackal rajawat.jpg', experience: 'Not specified' },
    { id: 8, name: 'Prof. Ramakrishna Reddy', designation: 'Professor', education: 'UG: CSE, PG: CSE', specialization: 'Department of CSE with AIML', image: '/Magazine/ramkrishna d.jpg', experience: '2 Years 4 Months' },
    { id: 9, name: 'Prof. Anulkumar C', designation: 'Assistant Professor', education: 'UG: CSE, PG: CSE', specialization: 'Department of CSE with AIML', image: '', experience: '6 Months' },
    { id: 10, name: 'Prof. Kavita Reddy', designation: 'Assistant Professor', education: 'UG: Electronics & Communication, PG: VLSI Design', specialization: 'Department of CSE with AIML', image: '/Magazine/nallamilli kavita.png', experience: '1 Year' },
    { id: 11, name: 'Prof. Nagavarshini', designation: 'Assistant Professor', education: 'UG: Computer Application, PG: Computer Application', specialization: 'Department of CSE with AIML', image: '/cs-aiml-photos/Nagavarshini.jpg', experience: 'Fresher' },
    { id: 12, name: 'Prof. Pamela Bera', designation: 'Assistant Professor', education: 'UG: CSE, PG: CSE', specialization: 'Department of CSE with AIML', image: '/cs-aiml-photos/Prof Pamela.png', experience: '4 Months' },
    { id: 13, name: 'Prof. Roshan U', designation: 'Assistant Professor', education: 'UG: Mechanical Engineering, PG: Computational Science', specialization: 'Department of CSE with AIML', image: '/Magazine/roshan.jpg', experience: 'Not specified' },
  ];

  const navigate = useNavigate();
  const hod = facultyMembers.find(f => f.id === 1);
  const otherFaculty = facultyMembers.filter(f => f.id !== 1);

  const openFacultyPortal = (facultyId: number) => {
    navigate(`/faculty-portal/${facultyId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="faculty" className="relative bg-muted/30 overflow-hidden">
      <div className="h-px bg-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Department Faculty</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Our Expert <span className="text-primary">Faculty</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-md md:text-right leading-relaxed">
            Distinguished educators who combine academic depth with industry expertise to shape future AI professionals.
          </p>
        </div>

        {/* HOD Featured Card */}
        {hod && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="bg-background rounded-2xl border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                {/* Photo panel */}
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 flex items-end justify-center p-6 min-h-[280px]">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Head of Department
                    </span>
                  </div>
                  {hod.image ? (
                    <OptimizedImage
                      src={hod.image}
                      alt={hod.name}
                      className="w-44 h-44 rounded-full object-cover border-4 border-background shadow-2xl"
                      aspectRatio="1/1"
                    />
                  ) : (
                    <div className="w-44 h-44 rounded-full bg-primary/20 border-4 border-background shadow-2xl flex items-center justify-center">
                      <User className="w-20 h-20 text-primary" />
                    </div>
                  )}
                </div>

                {/* Content panel */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">{hod.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-4">{hod.designation}</p>

                    <div className="grid sm:grid-cols-3 gap-3 mb-5">
                      {[
                        { label: 'Experience', value: hod.experience },
                        { label: 'Students Guided', value: '500+' },
                        { label: 'Publications', value: '15+' },
                      ].map(({ label, value }) => (
                        <div key={label} className="p-3 rounded-xl bg-muted/50 border border-border/40 text-center">
                          <p className="text-lg font-bold text-primary">{value}</p>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-start gap-2 text-sm text-muted-foreground mb-5">
                      <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{hod.education}</span>
                    </div>

                    <blockquote className="border-l-2 border-primary pl-4 text-sm text-muted-foreground italic leading-relaxed">
                      "{hod.message}"
                    </blockquote>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={() => openFacultyPortal(hod.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors duration-200"
                    >
                      View Timeline
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Faculty Carousel */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Meet the Team</h3>
            <div className="h-px flex-1 bg-border/50 mx-6" />
            <button
              onClick={() => navigate('/faculty-achievements')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              All Achievements <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {otherFaculty.map((faculty, index) => (
                <CarouselItem key={faculty.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full"
                  >
                    <div className="bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden h-full group">
                      {/* Photo strip */}
                      <div className="relative h-40 bg-gradient-to-br from-primary/8 to-accent/5 flex items-center justify-center">
                        {faculty.image ? (
                          <OptimizedImage
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-24 h-24 rounded-full object-cover border-3 border-background shadow-md"
                            aspectRatio="1/1"
                            showLoadingState={false}
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-primary/15 border-3 border-background shadow-md flex items-center justify-center">
                            <User className="w-10 h-10 text-primary" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-4 border-t border-border/40">
                        <h4 className="font-bold text-sm leading-snug mb-1 group-hover:text-primary transition-colors">{faculty.name}</h4>
                        <Badge variant="secondary" className="text-[10px] mb-2">{faculty.designation}</Badge>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                          <Briefcase className="w-3 h-3 text-primary" />
                          <span>{faculty.experience}</span>
                        </div>
                        <button
                          onClick={() => openFacultyPortal(faculty.id)}
                          className="w-full text-xs font-semibold py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          View Timeline
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Faculty Excellence strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl bg-primary/5 border border-primary/15 p-6 md:p-8 text-center"
        >
          <h3 className="text-base font-bold mb-2">Faculty Excellence</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our faculty members are dedicated to providing exceptional education and mentorship, combining academic rigor with practical industry insights to prepare students for successful careers in AI and ML.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
