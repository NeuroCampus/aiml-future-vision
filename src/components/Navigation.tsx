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
    { to: '/#about', label: 'About' },
    { to: '/#events', label: 'Activities' },
    { to: '/innovation-research', label: 'Research' },
    { to: '/startups', label: 'Startups' },
    { to: '/student-clubs', label: 'Clubs' },
    { to: '/sports-achievements', label: 'Sports' },
  ];

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
              <NavLink 
                to="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 xl:px-6 py-3 font-semibold transition-transform hover:scale-105"
              >
                Get Started
              </NavLink>
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
              className="fixed top-20 right-0 bottom-0 w-full max-w-xs bg-background p-6 shadow-2xl pb-24" // Added pb-24 for bottom padding
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <NavLink
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 focus:outline-none"
                  aria-label="Go to home"
                >
                  <div className="flex items-center gap-2">
                    {/* College Logo */}
                    <img 
                      src="/cs-aiml-photos/AMC Logo.jpg" 
                      alt="AMC College Logo" 
                      className="h-8 w-auto object-contain select-none pointer-events-none" 
                      loading="lazy" 
                      decoding="async" 
                      draggable={false} 
                    />
                    <span className="text-muted-foreground">|</span>
                    {/* Department Logo */}
                    <img 
                      src="/cs-aiml-photos/CSAI Logo.jpeg" 
                      alt="CSE-AIML Department Logo" 
                      className="h-8 w-auto object-contain select-none pointer-events-none" 
                      loading="lazy" 
                      decoding="async" 
                      draggable={false} 
                    />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-foreground">
                    CSE-AIML
                  </span>
                </NavLink>
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
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `w-full justify-start text-lg font-medium py-4 rounded-md transition-colors ${
                        isHashActive(item.to)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-4 text-lg font-semibold mt-4 text-center"
                >
                  Get Started
                </NavLink>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;