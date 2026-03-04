import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Gallery } from "./components/sections/Gallery";
import { Locations } from "./components/sections/Locations";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

// Service Pages
import KitchenRemodeling from "./pages/services/KitchenRemodeling";
import BathroomRemodeling from "./pages/services/BathroomRemodeling";
import BasementRemodeling from "./pages/services/BasementRemodeling";
import TrimCarpentry from "./pages/services/TrimCarpentry";
import WindowDoorInstallation from "./pages/services/WindowDoorInstallation";
import ServicesPage from "./pages/ServicesPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import ReferralsPage from "./pages/ReferralsPage";

// Location Pages
import Irwin from "./pages/locations/Irwin";
import Greensburg from "./pages/locations/Greensburg";
import Murrysville from "./pages/locations/Murrysville";
import Export from "./pages/locations/Export";
import Jeannette from "./pages/locations/Jeannette";
import NorthHuntingdon from "./pages/locations/NorthHuntingdon";

const MainLayout = () => (
  <>
    <SEO
      title="BrownBoot Repairs & Remodeling | Home Remodeling Irwin PA"
      description="Westmoreland County's trusted home repair and remodeling experts. Specializing in luxury kitchens, finished basements, and custom trim. Local, honest service."
      keywords="Home Remodeling Irwin PA, Kitchen Remodeling Greensburg, Basement Finishing Westmoreland County, Bathroom Renovations, Home Repair Manor PA"
      canonical="https://brownbootrr.com/"
    />
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/referrals" element={<ReferralsPage />} />
            <Route path="/services/kitchen-remodeling" element={<KitchenRemodeling />} />
            <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
            <Route path="/services/basement-remodeling" element={<BasementRemodeling />} />
            <Route path="/services/trim-carpentry" element={<TrimCarpentry />} />
            <Route path="/services/windows-doors" element={<WindowDoorInstallation />} />

            {/* Location Routes */}
            <Route path="/locations/irwin" element={<Irwin />} />
            <Route path="/locations/greensburg" element={<Greensburg />} />
            <Route path="/locations/murrysville" element={<Murrysville />} />
            <Route path="/locations/export" element={<Export />} />
            <Route path="/locations/jeannette" element={<Jeannette />} />
            <Route path="/locations/north-huntingdon" element={<NorthHuntingdon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
