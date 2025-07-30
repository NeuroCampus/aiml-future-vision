import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import csaiLogo from '@/assets/csai-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'About', 
      href: '#about',
      submenu: [
        { name: 'Our Vision', href: '#vision' },
        { name: 'Faculty', href: '#faculty' },
        { name: 'Infrastructure', href: '#infrastructure' }
      ]
    },
    { 
      name: 'Programs', 
      href: '#programs',
      submenu: [
        { name: 'Curriculum', href: '#curriculum' },
        { name: 'Laboratories', href: '#labs' },
        { name: 'Industry Connections', href: '#industry' }
      ]
    },
    { name: 'Research', href: '#research' },
    { name: 'Events', href: '#events' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#home" className="flex items-center space-x-3">
              <img 
                src={csaiLogo} 
                alt="CSAI Logo" 
                className="w-12 h-12 object-contain logo-animate"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold text-foreground">CSE-AIML</h1>
                <p className="text-xs text-muted-foreground">AMC College of Engineering</p>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center relative overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
                    <span className="absolute inset-0 bg-accent/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                  
                  {/* Submenu */}
                  {item.submenu && (
                    <motion.div 
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                          >
                            {subItem.name}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button className="btn-glow pulse-glow">
              Apply Now
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md border-t border-border">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-card-foreground hover:text-accent hover:bg-muted block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <Button className="w-full btn-glow">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;