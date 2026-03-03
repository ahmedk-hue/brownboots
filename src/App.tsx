import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Gallery } from "./components/sections/Gallery";
import { Locations } from "./components/sections/Locations";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Service Pages
import KitchenRemodeling from "./pages/services/KitchenRemodeling";
import BathroomRemodeling from "./pages/services/BathroomRemodeling";
import BasementRemodeling from "./pages/services/BasementRemodeling";
import TrimCarpentry from "./pages/services/TrimCarpentry";
import WindowDoorInstallation from "./pages/services/WindowDoorInstallation";
import ServicesPage from "./pages/ServicesPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";

const MainLayout = () => (
  <>
    <Hero />
    <Services />
    <Gallery />
    <Locations />
    <Contact />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-slate-900 bg-white selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/kitchen-remodeling" element={<KitchenRemodeling />} />
            <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
            <Route path="/services/basement-remodeling" element={<BasementRemodeling />} />
            <Route path="/services/trim-carpentry" element={<TrimCarpentry />} />
            <Route path="/services/windows-doors" element={<WindowDoorInstallation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
