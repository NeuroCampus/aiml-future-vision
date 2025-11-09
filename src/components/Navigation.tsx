import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingNavbar from '@/components/animations/FloatingNavbar';
import { ThemeToggle } from '@/components/ThemeProvider';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/innovation-research', label: 'Research' },
    { to: '/startups', label: 'Startups' },
    { to: '/student-clubs', label: 'Clubs' },
    { to: '/sports-achievements', label: 'Champions' },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isHashActive = (to: string) => {
    if (to.startsWith('/#')) {
      const hash = to.split('#')[1];
      return location.hash === `#${hash}`;
    }
    return location.pathname === to;
  };

  return (
    <>
      <FloatingNavbar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-3">
            {/* Logo Section - Showing both College and Department logos */}
            <NavLink
              to="/"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Go to home"
            >
              <div className="flex items-center gap-2">
                {/* College Logo */}
                <img 
                  src="/cs-aiml-photos/AMC Logo.jpg" 
                  alt="AMC College Logo" 
                  className="h-8 sm:h-10 w-auto object-contain select-none pointer-events-none transition-transform group-hover:scale-[1.04]" 
                  loading="eager" 
                  decoding="sync" 
                  draggable={false} 
                />
                <span className="text-muted-foreground">|</span>
                {/* Department Logo */}
                <img 
                  src="/cs-aiml-photos/CSAI Logo.jpeg" 
                  alt="CSE-AIML Department Logo" 
                  className="h-8 sm:h-10 w-auto object-contain select-none pointer-events-none transition-transform group-hover:scale-[1.04]" 
                  loading="eager" 
                  decoding="sync" 
                  draggable={false} 
                />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">CSE-AIML</span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium px-3 xl:px-4 py-2 rounded-md transition-colors ${
                      isHashActive(item.to)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button and Theme Toggle */}
            <div className="hidden lg:flex items-center shrink-0 gap-2">
              <ThemeToggle />
              <Button 
                onClick={scrollToAbout}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-xl z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-card/95 to-card/90 backdrop-blur-2xl border-l border-border/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="/cs-aiml-photos/AMC Logo.jpg"
                      alt="AMC College Logo"
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-muted-foreground">|</span>
                    <img
                      src="/cs-aiml-photos/CSAI Logo.jpeg"
                      alt="CSE-AIML Department Logo"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-foreground">
                    CSE-AIML
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <motion.nav
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col space-y-2"
                  aria-label="Mobile"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `group flex items-center w-full px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                            isHashActive(item.to)
                              ? 'text-primary bg-primary/15 shadow-lg shadow-primary/10 border border-primary/20'
                              : 'text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:shadow-md'
                          }`
                        }
                      >
                        <span className="flex-1">{item.label}</span>
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.3 }}
                        />
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8"
                >
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToAbout();
                    }}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Get Started
                    </motion.span>
                  </Button>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="px-6 pb-6"
              >
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Department of Computer Science & Engineering
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    AI & Machine Learning
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;