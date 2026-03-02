import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-white font-display font-bold text-xl mb-6">BrownBoot Repairs & Remodeling</h3>
            <p className="mb-6 leading-relaxed">
              Trusted by Westmoreland County homeowners. Built to last. We bring quality craftsmanship to every project.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/brownbootrr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/brownbootrr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>115 McMahon Dr.<br />Manor, PA 15665</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:724-995-3320" className="hover:text-white transition-colors">724-995-3320</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contact@brownbootrr.com" className="hover:text-white transition-colors">contact@brownbootrr.com</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bathroom Remodeling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Basement Remodeling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Trim Carpentry</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Windows & Doors</a></li>
            </ul>
          </div>

          {/* License */}
          <div>
            <h4 className="text-white font-bold mb-6">License Info</h4>
            <p className="mb-4">
              Fully licensed and insured for your peace of mind.
            </p>
            <div className="inline-block px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 text-sm font-mono">
              PA Contractor #029340
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BrownBoot Repairs & Remodeling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
