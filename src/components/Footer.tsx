import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Instagram } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: 'About Department', href: '/#about' },
    { label: 'Scholastic Honors', href: '/#academic-excellence' },
    { label: 'Our Faculty', href: '/#faculty' },
    { label: 'Events & Activities', href: '/#events' },
    { label: 'Alumni Reflections', href: '/#alumni-reflections' },
  ];

  const portals = [
    { label: 'Research & Innovation', href: '/innovation-research' },
    { label: 'Faculty Achievements', href: '/faculty-achievements' },
    { label: 'Startups & Ventures', href: '/startups' },
    { label: 'Student Clubs & E-Cell', href: '/student-clubs' },
    { label: 'Sports Champions', href: '/sports-achievements' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amc-cse-aiml/', label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
    { icon: Instagram, href: 'https://www.instagram.com/cseaiml/', label: 'Instagram', color: 'hover:text-[#E1306C]' },
    { icon: Mail, href: 'mailto:cse.aiml@amceducation.in', label: 'Email', color: 'hover:text-primary' },
  ];

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        navigate(href);
      }
    }
  };

  return (
    <footer className="relative bg-card/90 dark:bg-card/75 backdrop-blur-xl border-t border-border/60 text-foreground overflow-hidden">
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          
          {/* Brand & Accreditation */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <OptimizedImage
                src="/cs-aiml-photos/CSAI Logo.webp"
                alt="CSE-AIML Logo"
                containerClassName="w-9 h-9 overflow-visible flex items-center justify-center flex-shrink-0"
                className="w-full h-full object-contain"
                showLoadingState={false}
              />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground leading-none">
                  CSE – AIML
                </h3>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mt-1">
                  AMC Engineering College
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Autonomous • NAAC A+ • NBA Accredited • VTU Affiliated
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.05, y: -1.5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-8 h-8 rounded-lg bg-card border border-border/60 flex items-center justify-center text-muted-foreground transition-all duration-200 ${color} hover:border-primary/40`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Department Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Department
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleHashClick(e, href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Portals
            </h4>
            <ul className="space-y-2 text-xs">
              {portals.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                <span>18th KM, Bannerghatta Road, Bengaluru, Karnataka – 560083</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <a href="mailto:cse.aiml@amceducation.in" className="hover:text-primary transition-colors font-medium">
                  cse.aiml@amceducation.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} AMC Engineering College – Department of CSE (AI & ML). All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Bengaluru, Karnataka</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>AICTE Approved</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>VTU Affiliated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
