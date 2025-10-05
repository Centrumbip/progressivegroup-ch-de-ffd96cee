import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Automatyzacje from "./pages/Automatyzacje";
import Prezentacje from "./pages/Prezentacje";
import WordPress from "./pages/WordPress";
import StronyInternetowe from "./pages/StronyInternetowe";
import KorzysciAutomatyzacji from "./pages/KorzysciAutomatyzacji";
import KorzysciPrezentacji from "./pages/KorzysciPrezentacji";
import KorzysciWordPress from "./pages/KorzysciWordPress";
import ONas from "./pages/ONas";
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
          <Route path="/automatyzacje" element={<Automatyzacje />} />
          <Route path="/prezentacje" element={<Prezentacje />} />
          <Route path="/wordpress" element={<WordPress />} />
          <Route path="/strony-internetowe" element={<StronyInternetowe />} />
          <Route path="/korzysci-automatyzacji" element={<KorzysciAutomatyzacji />} />
          <Route path="/korzysci-prezentacji" element={<KorzysciPrezentacji />} />
          <Route path="/korzysci-wordpress" element={<KorzysciWordPress />} />
          <Route path="/o-nas" element={<ONas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
