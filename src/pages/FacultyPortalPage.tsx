import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  CalendarDays,
  ExternalLink,
  FileText,
  GraduationCap,
  Link2,
  Medal,
  User,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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

const entryTypeConfig: Record<string, { color: string; bg: string; dot: string }> = {
  Achievement:      { color: 'text-blue-700 dark:text-blue-300',   bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',   dot: 'bg-blue-500' },
  Publication:      { color: 'text-purple-700 dark:text-purple-300', bg: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800', dot: 'bg-purple-500' },
  Certificate:      { color: 'text-emerald-700 dark:text-emerald-300', bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800', dot: 'bg-emerald-500' },
  'Book Chapter':   { color: 'text-amber-700 dark:text-amber-300',  bg: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',  dot: 'bg-amber-500' },
  Patent:           { color: 'text-rose-700 dark:text-rose-300',    bg: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800',    dot: 'bg-rose-500' },
  'Conference Paper': { color: 'text-indigo-700 dark:text-indigo-300', bg: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800', dot: 'bg-indigo-500' },
  Workshop:         { color: 'text-teal-700 dark:text-teal-300',    bg: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',    dot: 'bg-teal-500' },
};

const getEntryStyle = (type: string) =>
  entryTypeConfig[type] ?? { color: 'text-primary', bg: 'bg-primary/5 border-primary/20', dot: 'bg-primary' };

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
        <div className="max-w-md w-full text-center space-y-4 p-8 rounded-2xl border border-border/50 bg-background shadow-lg">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <User className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-xl font-bold">Faculty profile not found</h1>
          <p className="text-sm text-muted-foreground">This URL doesn't match any faculty member in the department.</p>
          <button onClick={() => navigate('/')} className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const typeStats = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.entry_type] = (acc[e.entry_type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background">

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Hero banner */}
      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-medium text-background/60 hover:text-background transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>

          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-end pb-10 border-b border-background/10">
            {/* Photo */}
            <div className="relative">
              {activeFaculty.image ? (
                <OptimizedImage
                  src={activeFaculty.image}
                  alt={activeFaculty.name}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover border-2 border-background/20 shadow-2xl"
                  aspectRatio="1/1"
                />
              ) : (
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-background/10 border border-background/20 flex items-center justify-center">
                  <User className="w-14 h-14 text-background/40" />
                </div>
              )}
              {/* Online dot */}
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-foreground" />
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-background/50 mb-1">Faculty Timeline Portal</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-background">{activeFaculty.name}</h1>
                <p className="text-base text-background/70 mt-1 font-medium">{activeFaculty.designation}</p>
              </div>

              {activeFaculty.message && (
                <p className="text-sm text-background/60 max-w-xl leading-relaxed italic">"{activeFaculty.message}"</p>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-background/10 border border-background/20 text-background/80">
                  <Briefcase className="w-3 h-3" />
                  {activeFaculty.experience} experience
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-background/10 border border-background/20 text-background/80">
                  <Medal className="w-3 h-3" />
                  {entries.length} timeline {entries.length === 1 ? 'entry' : 'entries'}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-background/10 border border-background/20 text-background/80">
                  <GraduationCap className="w-3 h-3" />
                  {activeFaculty.specialization}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & type stats bar */}
      <div className="bg-muted/30 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{activeFaculty.education}</span>
            </div>
            {Object.entries(typeStats).length > 0 && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(typeStats).map(([type, count]) => {
                  const style = getEntryStyle(type);
                  return (
                    <span key={type} className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${style.bg} ${style.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {type} ({count})
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center gap-4 mb-10">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold">Achievements & Contributions</h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {!isSupabaseConfigured ? (
          <EmptyState message="Database not configured." />
        ) : isLoadingEntries ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-28 rounded-2xl border border-border/40 bg-muted/20 animate-pulse" />
            ))}
          </div>
        ) : entries.length === 0 ? (
          <EmptyState message="No timeline entries have been added yet." />
        ) : (
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

            <div className="space-y-6 pl-14">
              {entries.map((entry, index) => {
                const style = getEntryStyle(entry.entry_type);
                return (
                  <motion.article
                    key={entry.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[38px] top-5 w-3 h-3 rounded-full border-2 border-background shadow ${style.dot}`} />

                    <div className="bg-background rounded-2xl border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Top colored strip */}
                      <div className={`h-1 w-full ${style.dot}`} />

                      <div className="p-6">
                        {/* Header row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${style.bg} ${style.color}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                            {entry.entry_type}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                            <CalendarDays className="w-3.5 h-3.5 text-primary" />
                            {new Date(entry.event_date).toLocaleDateString('en-US', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold tracking-tight mb-2 leading-snug">{entry.title}</h3>

                        {/* Details */}
                        {entry.details && (
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{entry.details}</p>
                        )}

                        {/* Links */}
                        {(entry.reference_url || entry.attachment_url) && (
                          <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
                            {entry.reference_url && (
                              <a
                                href={entry.reference_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                              >
                                <Link2 className="w-3.5 h-3.5" />
                                Reference Link
                                <ExternalLink className="w-3 h-3 opacity-60" />
                              </a>
                            )}
                            {entry.attachment_url && (
                              <a
                                href={entry.attachment_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-muted border border-border text-foreground hover:bg-muted/80 transition-colors"
                              >
                                <FileText className="w-3.5 h-3.5 text-primary" />
                                {entry.attachment_name ?? 'View Attachment'}
                                <ExternalLink className="w-3 h-3 opacity-40" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EmptyState = ({ message }: { message: string }) => (
  <div className="text-center py-16 px-8 rounded-2xl border border-dashed border-border bg-muted/20">
    <CalendarDays className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
    <p className="text-sm text-muted-foreground">{message}</p>
  </div>
);

export default FacultyPortalPage;