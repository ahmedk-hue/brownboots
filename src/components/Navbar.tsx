import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomepage = pathname === "/";
  const shouldShowSolid = isScrolled || !isHomepage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const close = () => setIsMobileMenuOpen(false);

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
            className="h-9 lg:h-11 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-[15px]">
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
            className={`flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 rounded-full font-bold transition-all shadow-lg ${shouldShowSolid ? "bg-primary text-white hover:bg-red-700 shadow-primary/20" : "bg-white text-primary hover:bg-slate-100 shadow-white/10"
              }`}
          >
            <Phone className="w-4 h-4" /> (724) 995-3320
          </a>

          <a
            href="https://clienthub.getjobber.com/client_hubs/7ea983f8-3b2e-435e-a8d7-acebb8ed14b3/login/new?source=share_login"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden xl:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all border ${shouldShowSolid ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-white/20 text-white hover:bg-white/10"
              }`}
          >
            Client Login
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen
            ? <X className="w-6 h-6 text-white" />
            : <Menu className={`w-6 h-6 ${shouldShowSolid ? "text-slate-900" : "text-white"}`} />
          }
        </button>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="lg:hidden fixed inset-0 z-[100] bg-slate-950 flex flex-col overflow-y-auto"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
              <Link to="/" onClick={close}>
                <img src="/logo-navbar.png" alt="BrownBoot" className="h-9 w-auto brightness-0 invert" />
              </Link>
              <button
                onClick={close}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Body */}
            <div className="flex-1 px-6 py-8 flex flex-col gap-10">

              {/* Services Grid */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { to: "/services/kitchen-remodeling", label: "Kitchen" },
                    { to: "/services/bathroom-remodeling", label: "Bathroom" },
                    { to: "/services/basement-remodeling", label: "Basement" },
                    { to: "/services/trim-carpentry", label: "Trim & Carpentry" },
                    { to: "/services/windows-doors", label: "Windows & Doors" },
                    { to: "/services", label: "All Services →" },
                  ].map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={close}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-sm font-bold text-white transition-colors active:scale-95"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Navigation Links */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">Navigate</p>
                <div className="flex flex-col">
                  {[
                    { to: "/gallery", label: "Project Gallery" },
                    { to: "/process", label: "Our Process" },
                    { to: "/about", label: "About Us" },
                    { to: "/locations", label: "Locations" },
                    { to: "/partnerships", label: "Partnerships" },
                    { to: "/referrals", label: "Referral Program" },
                    { to: "/contact", label: "Contact" },
                  ].map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={close}
                      className="flex items-center justify-between py-4 text-lg font-bold text-white border-b border-white/[0.08] hover:text-primary transition-colors last:border-0"
                    >
                      {label}
                      <span className="text-slate-600">›</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="px-6 pb-10 pt-4 flex flex-col gap-3 border-t border-white/10 shrink-0"
            >
              <Link
                to="/contact"
                onClick={close}
                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-2xl text-center shadow-2xl shadow-primary/30 active:scale-[0.98] transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:724-995-3320"
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-bold text-base py-4 rounded-2xl border border-white/15 active:scale-[0.98] transition-all"
              >
                <Phone className="w-5 h-5" /> (724) 995-3320
              </a>
              <Link
                to="/investment-guide"
                onClick={close}
                className="w-full text-center text-primary font-bold text-sm py-3 active:opacity-70 transition-opacity"
              >
                Download Free Investment Guide →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
