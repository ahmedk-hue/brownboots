import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // On subpages, we force the solid/dark styles so the navbar is visible against white backgrounds
  const isHomepage = pathname === "/";
  const shouldShowSolid = isScrolled || !isHomepage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowSolid ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/logo-navbar.png"
            alt="BrownBoot Repairs & Remodeling"
            className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm xl:text-base">
          <div className="relative group">
            <Link to="/services" className={`font-medium flex items-center gap-1 hover:text-primary transition-colors cursor-pointer ${shouldShowSolid ? "text-slate-600" : "text-white/90"}`}>
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[220px]">
                <Link to="/services/kitchen-remodeling" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Kitchen Remodeling</Link>
                <Link to="/services/bathroom-remodeling" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Bathroom Remodeling</Link>
                <Link to="/services/basement-remodeling" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Basement Remodeling</Link>
                <Link to="/services/trim-carpentry" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Trim Carpentry</Link>
                <Link to="/services/windows-doors" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Windows & Doors</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link to="/locations" className={`font-medium flex items-center gap-1 hover:text-primary transition-colors cursor-pointer ${shouldShowSolid ? "text-slate-600" : "text-white/90"}`}>
              Locations <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[200px]">
                <Link to="/locations/irwin" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">Irwin, PA</Link>
                <Link to="/locations/greensburg" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">Greensburg, PA</Link>
                <Link to="/locations/murrysville" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">Murrysville, PA</Link>
                <Link to="/locations/export" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">Export, PA</Link>
                <Link to="/locations/north-huntingdon" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">North Huntingdon, PA</Link>
                <Link to="/locations/jeannette" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">Jeannette, PA</Link>
              </div>
            </div>
          </div>

          <Link to="/gallery" className={`font-medium hover:text-primary transition-colors ${shouldShowSolid ? "text-slate-600" : "text-white/90"}`}>Project Gallery</Link>
          <Link to="/process" className={`font-medium hover:text-primary transition-colors ${shouldShowSolid ? "text-slate-600" : "text-white/90"}`}>Process</Link>
          <Link to="/about" className={`font-medium hover:text-primary transition-colors ${shouldShowSolid ? "text-slate-600" : "text-white/90"}`}>About</Link>

          <div className="relative group">
            <div className={`font-medium flex items-center gap-1 hover:text-primary transition-colors cursor-pointer ${shouldShowSolid ? "text-slate-600" : "text-white/90"}`}>
              Partnerships <ChevronDown className="w-4 h-4" />
            </div>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[180px]">
                <Link to="/partnerships" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">Realtors & Trades</Link>
                <Link to="/referrals" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium text-sm">Referral Program</Link>
                <Link to="/investment-guide" className="block px-4 py-2 text-primary hover:bg-red-50 rounded-lg transition-colors font-bold text-sm">Home Investment Guide</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className={`font-medium hover:text-primary transition-colors ${shouldShowSolid ? "text-slate-600" : "text-white/90"}`}>Contact</Link>
          <a
            href="tel:724-995-3320"
            className={`flex items-center gap-2 px-4 py-2 xl:px-6 xl:py-3 rounded-full font-bold transition-all shadow-lg ${shouldShowSolid
              ? "bg-primary text-white hover:bg-red-700 shadow-primary/20"
              : "bg-white text-primary hover:bg-slate-100 shadow-white/10"
              }`}
          >
            <Phone className="w-4 h-4" /> (724) 995-3320
          </a>
          <a
            href="https://clienthub.getjobber.com/client_hubs/7ea983f8-3b2e-435e-a8d7-acebb8ed14b3/login/new?source=share_login"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden xl:flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${shouldShowSolid
              ? "border-slate-200 text-slate-600 hover:bg-slate-50"
              : "border-white/20 text-white hover:bg-white/10"
              }`}
          >
            Client Login
          </a>
        </div>

        <button
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={shouldShowSolid ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden shadow-2xl absolute w-full top-full"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-3 max-h-[85vh] overflow-y-auto pb-24">
              <div className="grid grid-cols-1 gap-2 border-b border-slate-100 pb-6 mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Services</span>
                <Link to="/services/kitchen-remodeling" className="p-3 text-base font-bold text-slate-900 bg-slate-50 rounded-2xl active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Kitchen Remodeling</Link>
                <Link to="/services/bathroom-remodeling" className="p-3 text-base font-bold text-slate-900 bg-slate-50 rounded-2xl active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Bathroom Remodeling</Link>
                <Link to="/services/basement-remodeling" className="p-3 text-base font-bold text-slate-900 bg-slate-50 rounded-2xl active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Basement Remodeling</Link>
                <Link to="/services/trim-carpentry" className="p-3 text-base font-bold text-slate-900 bg-slate-50 rounded-2xl active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Trim Carpentry</Link>
                <Link to="/services/windows-doors" className="p-3 text-base font-bold text-slate-900 bg-slate-50 rounded-2xl active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Windows & Doors</Link>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-6 mb-2">
                <div className="col-span-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2 block">Our Locations</span>
                </div>
                <Link to="/locations/irwin" className="p-3 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl text-center active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Irwin</Link>
                <Link to="/locations/greensburg" className="p-3 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl text-center active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Greensburg</Link>
                <Link to="/locations/murrysville" className="p-3 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl text-center active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Murrysville</Link>
                <Link to="/locations/export" className="p-3 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl text-center active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Export</Link>
                <Link to="/locations/north-huntingdon" className="p-3 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl text-center active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>N. Huntingdon</Link>
                <Link to="/locations/jeannette" className="p-3 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl text-center active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Jeannette</Link>
              </div>

              <div className="flex flex-col gap-2 border-b border-slate-100 pb-6 mb-2">
                <Link to="/gallery" className="p-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-all" onClick={() => setIsMobileMenuOpen(false)}>Project Gallery</Link>
                <Link to="/process" className="p-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-all" onClick={() => setIsMobileMenuOpen(false)}>Process</Link>
                <Link to="/about" className="p-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-all" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                <Link to="/partnerships" className="p-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-all" onClick={() => setIsMobileMenuOpen(false)}>Partnerships</Link>
                <Link to="/referrals" className="p-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-all" onClick={() => setIsMobileMenuOpen(false)}>Referral Program</Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link to="/investment-guide" className="p-4 text-center text-lg font-bold text-white bg-primary rounded-2xl active:scale-[0.98] transition-all shadow-xl shadow-primary/20" onClick={() => setIsMobileMenuOpen(false)}>Investment Guide</Link>
                <a href="tel:724-995-3320" className="p-4 flex items-center justify-center gap-2 text-lg font-bold text-slate-900 bg-slate-100 rounded-2xl active:scale-[0.98] transition-all">
                  <Phone className="w-5 h-5" /> (724) 995-3320
                </a>
                <Link to="/contact" className="p-4 text-center text-lg font-bold text-primary bg-primary/10 rounded-2xl active:scale-[0.98] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
