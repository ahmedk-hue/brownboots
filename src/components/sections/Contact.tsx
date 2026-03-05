import { motion } from "framer-motion";
import { Download, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, type FormEvent, type ChangeEvent } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to webhook)
    console.log("Form submitted:", formState);
    alert("Thank you! We will be in touch shortly.");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

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
              Download our free guide: <strong className="text-white">"How To Add Value To Your Home When You Remodel"</strong>.
              Learn the secrets to maximizing your investment.
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
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">Get A Quote</h3>
            <p className="text-slate-500 mb-8">Tell us about your project and we'll get back to you.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(724) 555-0123"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Project Type</label>
                  <select
                    name="projectType"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="kitchen">Kitchen Remodel</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="basement">Basement Remodel</option>
                    <option value="trim">Trim Carpentry</option>
                    <option value="windows-doors">Windows & Doors</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Budget Range</label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    onChange={handleChange}
                  >
                    <option value="">Select Budget</option>
                    <option value="under-10k">Under $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-plus">$50k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Timeline</label>
                <input
                  type="text"
                  name="timeline"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="e.g. ASAP, Next Month, Summer"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Location (City/Zip)</label>
                <input
                  type="text"
                  name="location"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="e.g. Irwin, PA"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-secondary hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-900/20"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
