
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Students', href: '#students' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 relative overflow-hidden">
      {/* Background decorations - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 opacity-5">
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-20 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <img
                src="/cs-aiml-photos/CSAI Logo.jpeg"
                alt="CSAI Logo"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">CSE-AIML</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Shaping the future of artificial intelligence and machine learning through innovative education, cutting-edge research, and industry collaboration at AMC Engineering College.
            </p>
            
            {/* Quick Links - Mobile Only */}
            <div className="md:hidden">
              <h4 className="text-base font-semibold mb-3">Quick Links</h4>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Desktop */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">
                  AMC Engineering College<br />
                  18th KM, Bannerghatta Road<br />
                  Bengaluru, Karnataka 560083
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:cse.aiml@amceducation.in"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  cse.aiml@amceducation.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-6 mt-8 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
            <p>&copy; 2024 AMC Engineering College - CSE AIML Department</p>
            <span className="hidden sm:inline">•</span>
            <p>All rights reserved</p>
            <span className="hidden sm:inline">•</span>
            <a 
              href="#" 
              className="hover:text-primary transition-colors duration-200 inline-flex items-center space-x-1"
            >
              <span>Visit AMC</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
