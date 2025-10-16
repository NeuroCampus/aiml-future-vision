import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingNavbar from '@/components/animations/FloatingNavbar';
import { ThemeToggle } from '@/components/ThemeProvider';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Programs' },
    { href: '#faculty', label: 'Faculty' },
    { href: '#student-clubs', label: 'Clubs' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <FloatingNavbar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-3">
            {/* Logo Section */}
            <button
              onClick={() => scrollToSection('#home')}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Go to top / Home"
            >
              <img src="/cs-aiml-photos/CSAI Logo.jpeg" alt="CSE-AIML Department Logo" className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none transition-transform group-hover:scale-[1.04]" loading="eager" decoding="async" draggable={false} />
              <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">CSE-AIML</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Primary">
              {navItems.map((item) => (
                <Button 
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 xl:px-4 py-2 rounded-md transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* CTA Button and Theme Toggle */}
            <div className="hidden lg:flex items-center shrink-0 gap-2">
              <ThemeToggle />
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 xl:px-6 py-3 font-semibold transition-transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative z-10 flex items-center gap-2">
              <ThemeToggle />
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-muted/50"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </FloatingNavbar>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-lg z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-xs bg-background p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => scrollToSection('#home')}
                  className="flex items-center gap-3 focus:outline-none"
                  aria-label="Go to top / Home"
                >
                  <img
                    src="/cs-aiml-photos/CSAI Logo.jpeg"
                    alt="CSE-AIML Department Logo"
                    className="h-10 w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <span className="text-lg font-bold tracking-tight text-foreground">
                    CSE-AIML
                  </span>
                </button>
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4" aria-label="Mobile">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="w-full justify-start text-lg font-medium text-muted-foreground hover:text-foreground py-4"
                  >
                    {item.label}
                  </Button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-4 text-lg font-semibold mt-4"
                >
                  Get Started
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;