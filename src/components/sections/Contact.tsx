import { motion } from "framer-motion";
import { Download, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { QuoteFunnel } from "./QuoteFunnel";

export function Contact() {

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Lead Magnet Side */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-3xl font-display font-bold mb-6 relative z-10">
              Planning a Remodel?
            </h3>
            <p className="text-slate-300 mb-8 relative z-10 text-lg">
              Download our free <strong className="text-white">Home Investment Guide</strong>.
              Learn the secrets to maximizing your investment and budgeting for your project.
            </p>

            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-200">Budgeting tips for maximum ROI</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-200">Choosing the right materials</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-200">Timeline expectations</span>
              </li>
            </ul>

            <Link to="/investment-guide" className="w-full py-4 bg-primary hover:bg-red-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 relative z-10">
              <Download className="w-5 h-5" /> Download Free Guide
            </Link>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center">
            <QuoteFunnel />
          </div>
        </div>
      </div>
    </section>
  );
}
