import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GdprIndex from "./pages/gdpr/index";
import CookiePolicy from "./pages/gdpr/cookies";
import PrivacyPolicy from "./pages/gdpr/privacy-policy";
import Terms from "./pages/gdpr/terms";
import CookieConsentBanner from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gdpr" element={<GdprIndex />} />
          <Route path="/gdpr/cookies" element={<CookiePolicy />} />
          <Route path="/gdpr/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/gdpr/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsentBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
