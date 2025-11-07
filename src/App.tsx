import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import FacultyAchievements from "./pages/FacultyAchievements";
import StartupsPage from "./pages/StartupsPage";
import StudentClubsPage from "./pages/StudentClubsPage";
import SportsAchievementsPage from "./pages/SportsAchievementsPage";
import InnovationResearchPage from "./pages/InnovationResearchPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/faculty-achievements" element={<FacultyAchievements />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/student-clubs" element={<StudentClubsPage />} />
        <Route path="/sports-achievements" element={<SportsAchievementsPage />} />
        <Route path="/innovation-research" element={<InnovationResearchPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply theme class to document element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;