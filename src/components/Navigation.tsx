import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Brain, Code, Users, Calendar, BookOpen, Award, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      href: '#about', 
      label: 'About', 
      icon: BookOpen,
      submenu: [
        { href: '#about', label: 'Our Vision' },
        { href: '#faculty', label: 'Faculty' },
        { href: '#infrastructure', label: 'Infrastructure' }
      ]
    },
    { 
      href: '#programs', 
      label: 'Programs', 
      icon: Code,
      submenu: [
        { href: '#programs', label: 'Curriculum' },
        { href: '#labs', label: 'Laboratories' },
        { href: '#industry', label: 'Industry Connections' }
      ]
    },
    { href: '#events', label: 'Events', icon: Calendar },
    { href: '#research', label: 'Research', icon: Brain },
    { href: '#faculty', label: 'Faculty', icon: Award },
    { href: '#students', label: 'Students', icon: Users },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo Section */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => scrollToSection('#home')}
            >
              <div className="relative group">
                <motion.img
                  src="/cs-aiml photos/CSAI Logo.jpeg"
                  alt="CSAI Logo"
                  className="h-12 w-12 lg:h-14 lg:w-14 object-contain transition-all duration-300 group-hover:drop-shadow-2xl"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <motion.h1 
                  className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  AIML Academy
                </motion.h1>
                <motion.p 
                  className="text-xs lg:text-sm font-medium bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Shaping Tomorrow's Tech Leaders
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button
                    onClick={() => !item.submenu && scrollToSection(item.href)}
                    className="group relative flex items-center space-x-2 px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className="h-4 w-4 group-hover:text-aiml-secondary transition-colors duration-300" />
                    <span className="group-hover:text-aiml-primary transition-colors duration-300">{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                    
                    {/* Enhanced Hover Effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-aiml-primary/10 via-aiml-secondary/10 to-aiml-tertiary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ originX: 0.5 }}
                    />
                  </motion.button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.button
                              key={subItem.href}
                              onClick={() => scrollToSection(subItem.href)}
                              className="w-full text-left px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-background/50 rounded-lg transition-all duration-200 group"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <span className="group-hover:text-aiml-primary transition-colors duration-200">
                                {subItem.label}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="relative bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary text-white px-8 py-3 rounded-full font-semibold shadow-2xl hover:shadow-aiml-secondary/25 transition-all duration-500 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 group-hover:animate-spin" />
                    <span>Get Started</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-aiml-tertiary via-aiml-secondary to-aiml-primary"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-6 w-6 text-aiml-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-6 w-6 text-aiml-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-card/98 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-8">
                {/* Mobile Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/cs-aiml photos/CSAI Logo.png"
                      alt="CSAI Logo"
                      className="h-10 w-10 object-contain"
                    />
                    <div>
                      <h2 className="font-bold text-lg bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary bg-clip-text text-transparent">
                        AIML Academy
                      </h2>
                      <p className="text-xs text-muted-foreground">Shaping Tomorrow's Tech Leaders</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <div key={item.href} className="space-y-2">
                      <motion.button
                        onClick={() => !item.submenu && scrollToSection(item.href)}
                        className="w-full flex items-center justify-between p-4 rounded-xl text-left hover:bg-background/50 transition-all duration-300 group border border-transparent hover:border-aiml-primary/20"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5 text-aiml-primary group-hover:text-aiml-secondary transition-colors duration-300" />
                          <span className="font-medium group-hover:text-aiml-primary transition-colors duration-300">{item.label}</span>
                        </div>
                        {item.submenu && (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        )}
                      </motion.button>

                      {/* Mobile Submenu */}
                      {item.submenu && (
                        <div className="ml-8 space-y-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.button
                              key={subItem.href}
                              onClick={() => scrollToSection(subItem.href)}
                              className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-aiml-primary rounded-lg transition-all duration-200"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                              whileHover={{ x: 3 }}
                            >
                              {subItem.label}
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-border/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button 
                      onClick={() => scrollToSection('#contact')}
                      className="w-full bg-gradient-to-r from-aiml-primary via-aiml-secondary to-aiml-tertiary text-white py-4 rounded-xl font-semibold shadow-xl"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Get Started Today
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;