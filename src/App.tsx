import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cantine from "./pages/Cantine";
import CantinaDetail from "./pages/CantinaDetail";
import Vini from "./pages/Vini";
import ViniDetail from "./pages/ViniDetail";
import Territorio from "./pages/Territorio";
import Eventi from "./pages/Eventi";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* MODIFICA QUI SOTTO: Aggiungi basename */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ...existing code... */}
          <Route path="/" element={<Index />} />
          <Route path="/cantine" element={<Cantine />} />
          <Route path="/cantine/:id" element={<CantinaDetail />} />
          <Route path="/vini" element={<Vini />} />
          <Route path="/vini/:id" element={<ViniDetail />} />
          <Route path="/territorio" element={<Territorio />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contatti" element={<Contatti />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
