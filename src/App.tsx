import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shops from "./pages/Shops";
import VetsCare from "./pages/VetsCare";
import Workplace from "./pages/Workplace";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import BookAppointment from "./pages/BookAppointment";
import BlogDetails from "./pages/BlogDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/vets-care" element={<VetsCare />} />
          <Route path="/workplace" element={<Workplace />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/book-appointment/:vetId" element={<BookAppointment />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
