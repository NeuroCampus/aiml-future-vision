import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Research', href: '#research' },
    { name: 'Events', href: '#events' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  const academicLinks = [
    { name: 'Admissions', href: '#admissions' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Research Papers', href: '#papers' },
    { name: 'Student Projects', href: '#projects' },
    { name: 'Industry Partnerships', href: '#industry' },
  ];

  const resourceLinks = [
    { name: 'Library', href: '#library' },
    { name: 'Labs', href: '#labs' },
    { name: 'Student Portal', href: '#portal' },
    { name: 'Alumni Network', href: '#alumni' },
    { name: 'Career Services', href: '#careers' },
    { name: 'News & Updates', href: '#news' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">CSE-AIML</h3>
                <p className="text-sm text-muted-foreground">AMC College of Engineering</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Shaping the future of artificial intelligence and machine learning through innovative education, cutting-edge research, and industry collaboration.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  AMC Engineering College, Bangalore-560083, Karnataka, India
                </span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">+91 80 2345 6789</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">aiml@amcec.edu.in</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Academic</h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 AMC College of Engineering - CSE AIML Department. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;