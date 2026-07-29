import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Instagram, Youtube, ExternalLink, Phone } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: 'About Department', href: '/#about' },
    { label: 'Academic Programs', href: '/#programs' },
    { label: 'Our Faculty', href: '/#faculty' },
    { label: 'Events & Activities', href: '/#events' },
    { label: 'Research & Innovation', href: '/innovation-research' },
    { label: 'Student Clubs', href: '/student-clubs' },
  ];

  const resources = [
    { label: 'Faculty Achievements', href: '/faculty-achievements' },
    { label: 'Startups & Ventures', href: '/startups' },
    { label: 'Sports Champions', href: '/sports-achievements' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amc-cse-aiml/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/cseaiml/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:cseaimlminds@gmail.com', label: 'Email' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-background">CSE-AIML</h3>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/50 mt-1">AMC Engineering College</p>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Pioneering the future of artificial intelligence and machine learning education. NAAC A+ Accredited · NBA Accredited · Autonomous.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-background" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      if (href.startsWith('/#')) {
                        e.preventDefault();
                        navigate('/');
                        setTimeout(() => {
                          const id = href.replace('/#', '');
                          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 h-px bg-primary inline-block" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">Achievements</h4>
            <ul className="space-y-2.5">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 h-px bg-primary inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=AMC+Engineering+College,+18th+KM,+Bannerghatta+Road,+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 hover:text-background transition-colors leading-relaxed"
                >
                  18th KM, Bannerghatta Road,<br />Bengaluru, Karnataka
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:cse.aiml@amceducation.in"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  cse.aiml@amceducation.in
                </a>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-background/5 border border-background/10">
              <p className="text-xs text-background/50 font-medium">Affiliated to VTU · AICTE Approved</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} AMC Engineering College – CSE AIML Department. All rights reserved.
          </p>
          <p className="text-xs text-background/30">
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
