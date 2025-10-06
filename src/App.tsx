import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import Automatyzacje from "./pages/Automatyzacje";
import Prezentacje from "./pages/Prezentacje";
import WordPress from "./pages/WordPress";
import StronyInternetowe from "./pages/StronyInternetowe";
import KorzysciAutomatyzacji from "./pages/KorzysciAutomatyzacji";
import KorzysciPrezentacji from "./pages/KorzysciPrezentacji";
import KorzysciWordPress from "./pages/KorzysciWordPress";
import ONas from "./pages/ONas";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Cookies from "./pages/Cookies";
import PortfolioDetail from "./pages/PortfolioDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/automatyzacje" element={<Automatyzacje />} />
          <Route path="/prezentacje" element={<Prezentacje />} />
          <Route path="/wordpress" element={<WordPress />} />
          <Route path="/strony-internetowe" element={<StronyInternetowe />} />
          <Route path="/korzysci-automatyzacji" element={<KorzysciAutomatyzacji />} />
          <Route path="/korzysci-prezentacji" element={<KorzysciPrezentacji />} />
          <Route path="/korzysci-wordpress" element={<KorzysciWordPress />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
