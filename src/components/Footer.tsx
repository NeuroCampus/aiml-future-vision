
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
    <footer className="relative py-20 overflow-hidden">
      {/* Footer Foundation Background */}
      <div className="absolute inset-0 -z-10">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
        
        {/* Foundation gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(var(--accent)/0.15),transparent_60%)]" />
        
        {/* Institutional pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(0deg,hsl(var(--primary)/0.3)_0_2px,transparent_2px_40px),repeating-linear-gradient(90deg,hsl(var(--accent)/0.2)_0_1px,transparent_1px_60px)]" />
      </div>
      
      <div className="relative">
        <div className="bg-card/70 border-t border-border/40 py-6 text-center">
          <span className="text-base font-medium text-muted-foreground tracking-wide">
            &copy; 2025 AMC Engineering College – CSE AIML Department
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
