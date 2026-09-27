import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Brands from "./pages/Brands";
import AboutUs from "./pages/about-us";
import CoreTeam from "./pages/CoreTeam";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Awards from "./pages/Awards";
import FloatingActionButtons from "./components/FloatingActionButtons";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

/** Render slash and no-slash URLs as the same page. Does not change the address bar. */
const AppRoutes = () => {
  const location = useLocation();
  const pathname =
    location.pathname.length > 1
      ? location.pathname.replace(/\/+$/, "")
      : location.pathname;

  return (
    <Routes location={{ ...location, pathname }}>
          <Route path="/" element={<Index />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/core-team" element={<CoreTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<Awards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        <FloatingActionButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
