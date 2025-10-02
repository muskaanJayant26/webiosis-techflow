import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OurWorkPage from "./pages/OurWorkPage";
import BlogPage from "./pages/BlogPage";
import SolutionsPage from "./pages/SolutionsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import IndustriesPage from "./pages/IndustriesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
