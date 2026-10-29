import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Instagram, ExternalLink, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amc-cse-aiml/', label: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
    { icon: Instagram, href: 'https://www.instagram.com/cseaiml/', label: 'Instagram', color: 'hover:bg-[#E1306C]' },
    { icon: Mail, href: 'mailto:cse.aiml@amceducation.in', label: 'Email', color: 'hover:bg-primary' },
  ];

  const email = 'cse.aiml@amceducation.in';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: 'Email Copied',
      description: `${email} copied to your clipboard.`,
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-transparent py-20 md:py-28">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Have questions about admissions, academic curriculum, student startups, or research opportunities? We are here to connect.
          </p>
        </div>

        {/* Single Centered Contact Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto p-7 sm:p-9 rounded-2xl bg-card/85 backdrop-blur-md border border-border/50 shadow-xl shadow-primary/5 hover:border-primary/40 transition-all duration-300"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 text-center sm:text-left">
            Department Coordinates
          </h3>

          <div className="space-y-6">
            {/* Campus Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Campus Address</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=AMC+Engineering+College,+18th+KM,+Bannerghatta+Road,+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed block mt-1 group"
                >
                  AMC Engineering College, 18th KM, Bannerghatta Road, Bengaluru, Karnataka – 560083
                  <ExternalLink className="inline w-3 h-3 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Official Inquiries */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-foreground">Official Inquiries</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Faculty, admissions, and student office</p>
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm font-semibold text-primary hover:underline truncate"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-primary transition-colors"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Social Channels
            </h4>
            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-200 ${color} hover:text-white hover:border-transparent`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
