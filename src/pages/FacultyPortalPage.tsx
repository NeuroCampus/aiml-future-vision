import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  FileText,
  GraduationCap,
  Link2,
  User,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import OptimizedImage from '@/components/ui/optimized-image';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import { facultyProfiles } from '@/data/facultyProfiles';

type TimelineEntry = {
  id: string;
  faculty_id: number;
  faculty_name: string;
  entry_type: string;
  title: string;
  details: string | null;
  event_date: string;
  reference_url: string | null;
  attachment_url: string | null;
  attachment_name: string | null;
};

const FacultyPortalPage = () => {
  const navigate = useNavigate();
  const { facultyId } = useParams();
  const { toast } = useToast();

  const activeFaculty = useMemo(() => {
    const parsedId = Number(facultyId);
    return facultyProfiles.find((faculty) => faculty.id === parsedId) ?? null;
  }, [facultyId]);

  const [isLoadingEntries, setIsLoadingEntries] = useState(false);
  const [entries, setEntries] = useState<TimelineEntry[]>([]);

  useEffect(() => {
    if (!activeFaculty || !supabase) return;

    const loadEntries = async () => {
      setIsLoadingEntries(true);
      const { data, error } = await supabase
        .from('faculty_timeline_entries')
        .select('*')
        .eq('faculty_id', activeFaculty.id)
        .order('event_date', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) {
        toast({ title: 'Could not load timeline', description: error.message, variant: 'destructive' });
      } else {
        setEntries((data ?? []) as TimelineEntry[]);
      }
      setIsLoadingEntries(false);
    };

    loadEntries();
  }, [activeFaculty, toast]);

  if (!activeFaculty) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-xl w-full border-border/40 shadow-2xl">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <User className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">Faculty profile not found</h1>
            <p className="text-muted-foreground">The timeline route does not match a faculty member in the department list.</p>
            <Button onClick={() => navigate('/')} className="rounded-full">Back to home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="relative overflow-hidden border-b border-border/40 bg-muted/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <Button variant="ghost" onClick={() => navigate('/')} className="w-fit px-0 hover:bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Button>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full bg-primary text-primary-foreground">Faculty Timeline Portal</Badge>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{activeFaculty.name}</h1>
                  <p className="text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                    Explore the achievements, certificates, and publications of {activeFaculty.name}.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-border/40 bg-background/80 p-4 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</div>
                    <div className="font-medium">{activeFaculty.designation}</div>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background/80 p-4 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Experience</div>
                    <div className="font-medium">{activeFaculty.experience}</div>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background/80 p-4 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Entries</div>
                    <div className="font-medium">{entries.length}</div>
                  </div>
                </div>
              </div>

              <Card className="overflow-hidden shadow-2xl border border-border/40 bg-background/95 backdrop-blur">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    {activeFaculty.image ? (
                      <OptimizedImage
                        src={activeFaculty.image}
                        alt={activeFaculty.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                        aspectRatio="1/1"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <User className="w-10 h-10 text-primary" />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Badge variant="secondary" className="rounded-full">{activeFaculty.designation}</Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {activeFaculty.message ?? activeFaculty.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 mt-6 text-sm">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <GraduationCap className="w-4 h-4 text-primary mt-0.5" />
                      <span>{activeFaculty.education}</span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-primary mt-0.5" />
                      <span>{activeFaculty.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-xl border-border/40">
          <CardHeader className="pb-4 border-b border-border/40">
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" />
              Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {!isSupabaseConfigured ? (
              <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 text-sm text-muted-foreground text-center">
                Supabase is not configured yet.
              </div>
            ) : isLoadingEntries ? (
              <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 text-sm text-muted-foreground text-center">
                Loading timeline entries...
              </div>
            ) : entries.length === 0 ? (
              <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 text-sm text-muted-foreground text-center">
                No timeline items have been added yet.
              </div>
            ) : (
              <div className="space-y-6">
                {entries.map((entry, index) => (
                  <motion.article
                    key={entry.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="relative rounded-2xl border border-border/40 bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-primary to-secondary" />
                    <div className="pl-4 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-3">
                        <Badge variant="secondary" className="rounded-full">
                          {entry.entry_type}
                        </Badge>
                        <span className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          {new Date(entry.event_date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold leading-snug">{entry.title}</h3>
                      {entry.details && <p className="text-base text-muted-foreground mt-2 leading-relaxed">{entry.details}</p>}
                      <div className="flex flex-wrap gap-4 text-sm font-medium mt-4 pt-3 border-t border-border/20">
                        {entry.reference_url && (
                          <a href={entry.reference_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full transition-colors hover:bg-primary/10">
                            <Link2 className="w-4 h-4" />
                            Reference Link
                          </a>
                        )}
                        {entry.attachment_url && (
                          <a href={entry.attachment_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full transition-colors hover:bg-primary/10">
                            <FileText className="w-4 h-4" />
                            {entry.attachment_name ?? 'View Attachment'}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacultyPortalPage;