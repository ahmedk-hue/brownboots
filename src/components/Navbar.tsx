import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-2xl tracking-tighter">
          <span className={isScrolled ? "text-slate-900" : "text-white"}>Brown</span>
          <span className="text-primary">Boot</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-white/90"}`}>Services</a>
          <a href="#locations" className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-white/90"}`}>Locations</a>
          <a href="#contact" className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-white/90"}`}>Contact</a>
          <a 
            href="tel:724-995-3320" 
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
              isScrolled 
                ? "bg-primary text-white hover:bg-red-700" 
                : "bg-white text-primary hover:bg-slate-100"
            }`}
          >
            <Phone className="w-4 h-4" /> (724) 995-3320
          </a>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
              <a href="#services" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#locations" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Locations</a>
              <a href="#contact" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a href="tel:724-995-3320" className="text-lg font-bold text-primary flex items-center gap-2">
                <Phone className="w-5 h-5" /> (724) 995-3320
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
