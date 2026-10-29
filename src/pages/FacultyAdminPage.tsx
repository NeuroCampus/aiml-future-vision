import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  FileText,
  Link2,
  LogIn,
  Paperclip,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
  Upload,
  User,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { facultyProfiles, FacultyProfile } from '@/data/facultyProfiles';
import OptimizedImage from '@/components/ui/optimized-image';

type TimelineEntry = {
  id: string;
  faculty_id: number;
  faculty_name: string;
  faculty_user_id: string;
  entry_type: string;
  title: string;
  details: string | null;
  event_date: string;
  reference_url: string | null;
  attachment_url: string | null;
  attachment_name: string | null;
  created_at: string;
};

const entryTypes = [
  'Achievement',
  'Publication',
  'Certificate',
  'Book Chapter',
  'Patent',
  'Conference Paper',
  'Workshop',
];

const emptyForm = {
  entryType: 'Achievement',
  title: '',
  eventDate: '',
  details: '',
  referenceUrl: '',
};

const FacultyAdminPage = () => {
  const { toast } = useToast();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Selected faculty state
  const [activeFacultyId, setActiveFacultyId] = useState<number | null>(null);
  const activeFaculty = facultyProfiles.find((f) => f.id === activeFacultyId) || null;

  const [isLoadingEntries, setIsLoadingEntries] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [entries, setEntries] = useState<TimelineEntry[]>([]);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [formData, setFormData] = useState(emptyForm);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Track entry being edited
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setIsCheckingAuth(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsCheckingAuth(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!activeFaculty || !supabase) {
      setEntries([]);
      return;
    }

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

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) {
      toast({ title: 'Supabase not configured', variant: 'destructive' });
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password,
    });
    if (error) {
      toast({ title: 'Login failed', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Login successful', description: 'You are now securely logged in.' });
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setActiveFacultyId(null);
    toast({ title: 'Signed out successfully' });
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (entry: TimelineEntry) => {
    setEditingEntryId(entry.id);
    setFormData({
      entryType: entry.entry_type,
      title: entry.title,
      eventDate: entry.event_date,
      details: entry.details || '',
      referenceUrl: entry.reference_url || '',
    });
    setSelectedFile(null); // Force re-upload if they want to change file
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingEntryId(null);
    setFormData(emptyForm);
    setSelectedFile(null);
  };

  const handleDelete = async (entryId: string) => {
    if (!supabase) {
      toast({ title: 'Not connected', description: 'Supabase is not configured.', variant: 'destructive' });
      return;
    }
    if (!window.confirm('Are you sure you want to delete this entry?')) return;

    setIsLoadingEntries(true);
    try {
      const { error } = await supabase
        .from('faculty_timeline_entries')
        .delete()
        .eq('id', entryId);

      if (error) throw error;

      toast({ title: 'Entry deleted', description: 'The timeline item was removed.' });
      setEntries(prev => prev.filter(e => e.id !== entryId));
    } catch (error: any) {
      const message = error?.message ?? 'Unable to delete the entry.';
      toast({ title: 'Delete failed', description: message, variant: 'destructive' });
    } finally {
      setIsLoadingEntries(false);
    }
  };

  const handleEntrySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase || !activeFaculty) return;

    setIsSubmitting(true);
    try {
      let attachmentUrl = '';
      let attachmentName = '';

      if (selectedFile) {
        const safeName = selectedFile.name.replace(/[^a-zA-Z0-9._-]/g, '-');
        const storagePath = `${activeFaculty.id}/${Date.now()}-${safeName}`;

        const { error: uploadError } = await supabase.storage
          .from('faculty-evidence')
          .upload(storagePath, selectedFile, {
            cacheControl: '3600',
            upsert: false,
            contentType: selectedFile.type,
          });

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from('faculty-evidence')
          .getPublicUrl(storagePath);

        attachmentUrl = publicUrlData.publicUrl;
        attachmentName = selectedFile.name;
      }

      const payload: any = {
        faculty_id: activeFaculty.id,
        faculty_name: activeFaculty.name,
        faculty_user_id: user?.email || 'authenticated-user',
        entry_type: formData.entryType,
        title: formData.title,
        details: formData.details,
        event_date: formData.eventDate,
        reference_url: formData.referenceUrl || null,
      };

      if (attachmentUrl) {
        payload.attachment_url = attachmentUrl;
        payload.attachment_name = attachmentName;
      }

      if (editingEntryId) {
        const { error } = await supabase.from('faculty_timeline_entries').update(payload).eq('id', editingEntryId);
        if (error) throw error;
        toast({ title: 'Timeline updated', description: 'The faculty record has been modified.' });
      } else {
        const { error } = await supabase.from('faculty_timeline_entries').insert(payload);
        if (error) throw error;
        toast({ title: 'Timeline added', description: 'The new faculty record has been saved.' });
      }

      setFormData(emptyForm);
      setSelectedFile(null);
      setEditingEntryId(null);

      // Reload entries
      const { data, error: refreshError } = await supabase
        .from('faculty_timeline_entries')
        .select('*')
        .eq('faculty_id', activeFaculty.id)
        .order('event_date', { ascending: false })
        .order('created_at', { ascending: false });

      if (refreshError) throw refreshError;
      setEntries((data ?? []) as TimelineEntry[]);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save the entry.';
      toast({ title: 'Save failed', description: message, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Faculty Admin Portal</h1>
          <p className="text-muted-foreground">Securely manage timeline entries and uploaded documents.</p>
        </div>

        {isCheckingAuth ? (
          <div className="flex justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : !user ? (
          <Card className="max-w-md mx-auto shadow-xl border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="w-5 h-5 text-primary" />
                Secure Faculty Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleLoginSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email address</label>
                  <Input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="admin@amccseaiml.edu"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-muted/30 p-4 rounded-xl border border-border/40">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">Logged in as {user.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut} className="rounded-full">
                Sign out
              </Button>
            </div>

            <div className="max-w-md">
              <label className="block text-sm font-medium mb-2">Select Faculty Member to Edit</label>
              <select
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                value={activeFacultyId || ''}
                onChange={(e) => setActiveFacultyId(Number(e.target.value))}
              >
                <option value="" disabled>-- Select Faculty --</option>
                {facultyProfiles.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name} - {f.designation}
                  </option>
                ))}
              </select>
            </div>

            {activeFaculty && (
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
                <Card className="shadow-xl border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5 text-primary" />
                      {editingEntryId ? `Edit item for ${activeFaculty.name}` : `Add item for ${activeFaculty.name}`}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!isSupabaseConfigured ? (
                      <div className="rounded-2xl border border-amber-300 bg-amber-50 text-amber-900 p-4 text-sm space-y-2">
                        <p className="font-medium">Supabase environment values are missing.</p>
                      </div>
                    ) : (
                      <form className="space-y-4" onSubmit={handleEntrySubmit}>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Entry type</label>
                            <select
                              name="entryType"
                              value={formData.entryType}
                              onChange={handleFieldChange}
                              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                            >
                              {entryTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Event date</label>
                            <Input type="date" name="eventDate" value={formData.eventDate} onChange={handleFieldChange} required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Title</label>
                          <Input name="title" value={formData.title} onChange={handleFieldChange} placeholder="Publication title or achievement summary" required />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Details</label>
                          <Textarea name="details" value={formData.details} onChange={handleFieldChange} placeholder="Add short notes" rows={3} />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Link2 className="w-4 h-4 text-primary" />
                            Reference link
                          </label>
                          <Input type="url" name="referenceUrl" value={formData.referenceUrl} onChange={handleFieldChange} placeholder="Optional URL" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Upload className="w-4 h-4 text-primary" />
                            Upload certificate or paper
                          </label>
                          <div className="rounded-xl border border-dashed border-border/50 bg-muted/20 p-4">
                            <Input type="file" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)} />
                            {selectedFile && (
                              <p className="mt-2 text-xs text-primary font-medium flex items-center gap-2">
                                <Paperclip className="w-3.5 h-3.5" />
                                {selectedFile.name}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button type="submit" disabled={isSubmitting} className="flex-1 rounded-full">
                            {isSubmitting ? 'Saving...' : editingEntryId ? 'Update timeline item' : 'Save timeline item'}
                          </Button>
                          {editingEntryId && (
                            <Button type="button" variant="outline" onClick={handleCancelEdit} disabled={isSubmitting} className="rounded-full">
                              Cancel
                            </Button>
                          )}
                        </div>
                      </form>
                    )}
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-border/40">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-primary" />
                      Timeline Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!isSupabaseConfigured ? (
                      <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 text-sm text-muted-foreground">
                        Connect the Supabase URL and anon key to load entries.
                      </div>
                    ) : isLoadingEntries ? (
                      <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 text-sm text-muted-foreground">
                        Loading timeline entries...
                      </div>
                    ) : entries.length === 0 ? (
                      <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 text-sm text-muted-foreground">
                        No timeline items added for {activeFaculty.name} yet.
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {entries.map((entry, index) => (
                          <motion.article
                            key={entry.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="relative rounded-2xl border border-border/40 bg-background p-4 shadow-sm"
                          >
                            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />
                            <div className="pl-4 space-y-2">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <Badge variant="secondary" className="rounded-full text-xs">
                                  {entry.entry_type}
                                </Badge>
                                <span className="text-xs text-muted-foreground font-medium">
                                  {new Date(entry.event_date).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex justify-between items-start gap-4">
                                <h3 className="text-base font-semibold leading-snug">{entry.title}</h3>
                                <div className="flex items-center gap-1 shrink-0">
                                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" onClick={() => handleEdit(entry)}>
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => handleDelete(entry.id)}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              {entry.details && (
                                <p className="text-xs text-muted-foreground leading-relaxed">{entry.details}</p>
                              )}
                              {(entry.reference_url || entry.attachment_url) && (
                                <div className="flex flex-wrap gap-2 pt-1">
                                  {entry.reference_url && (
                                    <a
                                      href={entry.reference_url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline bg-primary/5 px-2.5 py-1 rounded-full"
                                    >
                                      <Link2 className="w-3 h-3" />
                                      Reference Link
                                    </a>
                                  )}
                                  {entry.attachment_url && (
                                    <a
                                      href={entry.attachment_url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline bg-primary/5 px-2.5 py-1 rounded-full"
                                    >
                                      <FileText className="w-3 h-3" />
                                      {entry.attachment_name ?? 'View Attachment'}
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </motion.article>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyAdminPage;
