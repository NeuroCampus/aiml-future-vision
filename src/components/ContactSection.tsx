import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Instagram, Youtube, ExternalLink, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amc-cse-aiml/', label: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
    { icon: Instagram, href: 'https://www.instagram.com/cseaiml/', label: 'Instagram', color: 'hover:bg-[#E1306C]' },
    { icon: Mail, href: 'mailto:cseaimlminds@gmail.com', label: 'Email', color: 'hover:bg-primary' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-[#FF0000]' },
  ];

  return (
    <section id="contact" className="relative bg-muted/30 overflow-hidden">
      <div className="h-px bg-border/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Editorial header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Reach Out</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have questions about our programs, research, or admissions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">

          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl border border-border/50 p-8 space-y-8"
          >
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=AMC+Engineering+College,+18th+KM,+Bannerghatta+Road,+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed group"
                  >
                    AMC Engineering College, 18th KM,<br />
                    Bannerghatta Road, Bengaluru, Karnataka
                    <ExternalLink className="inline w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a
                    href="mailto:cse.aiml@amceducation.in"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    cse.aiml@amceducation.in
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center ${color} hover:text-white transition-all duration-200`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary rounded-2xl p-8 flex flex-col justify-between text-primary-foreground"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">We're here to help!</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                Reach out for any queries about our department, programs, or events. Connect with us for the latest updates and career opportunities in AI & ML.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {['Admissions', 'Research', 'Events', 'Placements'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-center text-primary-foreground/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="mailto:cse.aiml@amceducation.in"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 bg-primary-foreground text-primary font-semibold text-sm rounded-full hover:bg-primary-foreground/90 transition-colors duration-200"
            >
              Send an Email
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;