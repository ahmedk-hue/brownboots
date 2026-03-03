import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Download, Facebook, Instagram } from 'lucide-react';
import { useState, type FormEvent, type ChangeEvent } from 'react';
import SEO from '../components/SEO';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const ContactPage = () => {
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
        <div className="pb-16">
            <SEO
                title="Contact Us | BrownBoot Repairs & Remodeling"
                description="Get a free estimate for your remodeling project in Westmoreland County. Contact BrownBoot Repairs & Remodeling today for quality craftsmanship you can trust."
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />

                    {/* Premium Effects Layer */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <AnimatedGradient />
                        <Particles />
                        <LightBeams />
                    </div>

                    <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-6 grid-rows-6 h-full">
                            {Array.from({ length: 36 }).map((_, i) => (
                                <div key={i} className="border-[0.5px] border-white/20"></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Let's Build Something Together</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">Project</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Ready to transform your home? Reach out today for a consultation. We're proud to serve Westmoreland County with integrity and precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Info Side */}
                        <div>
                            <div className="mb-12">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 tracking-tight">Direct Contact</h2>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                    We're local, responsive, and ready to discuss your next home transformation. Choose the contact method that works best for you.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Call Anywhere</h4>
                                            <a href="tel:724-995-3320" className="text-2xl font-display font-bold text-primary hover:underline leading-none">
                                                (724) 995-3320
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Email Us</h4>
                                            <a href="mailto:contact@brownbootrr.com" className="text-slate-600 hover:text-primary transition-colors text-lg">
                                                contact@brownbootrr.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Service Area</h4>
                                            <p className="text-slate-600 text-lg">
                                                Manor, PA 15665<br />
                                                Serving Westmoreland County & Surrounding Areas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lead Magnet */}
                            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">Planning a Remodel?</h3>
                                    <p className="text-slate-400 mb-8 max-w-sm italic leading-relaxed">
                                        "Download our free guide on how to maximize ROI and avoid common mistakes when remodeling your home."
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-sm font-medium">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            Budgeting tips for maximum ROI
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-medium">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            Choosing the right materials
                                        </li>
                                    </ul>
                                    <button className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl shadow-primary/20">
                                        <Download className="w-5 h-5" /> Download Guide
                                    </button>
                                </div>
                            </div>

                            <div className="mt-12 flex gap-6 items-center">
                                <span className="font-bold text-slate-900 uppercase tracking-widest text-xs">Follow Our Projects</span>
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/brownbootrr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/brownbootrr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100 relative">
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">Request an Estimate</h3>
                                <p className="text-slate-500 mb-10 text-lg">Tell us about your project goals and we'll get back to you within 24 hours.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-400"
                                                placeholder="Your Name"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-400"
                                                placeholder="(724) 000-0000"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-400"
                                            placeholder="you@email.com"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Project Type</label>
                                            <select
                                                name="projectType"
                                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white appearance-none"
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Category</option>
                                                <option value="kitchen">Kitchen Remodel</option>
                                                <option value="bathroom">Bathroom Remodel</option>
                                                <option value="basement">Basement Remodel</option>
                                                <option value="trim">Trim Carpentry</option>
                                                <option value="windows-doors">Windows & Doors</option>
                                                <option value="other">General Inquiry</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Preferred Timeline</label>
                                            <input
                                                type="text"
                                                name="timeline"
                                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-400"
                                                placeholder="e.g. 1-3 Months"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Location (PA City/Zip)</label>
                                        <input
                                            type="text"
                                            name="location"
                                            required
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-400"
                                            placeholder="e.g. Irwin, PA"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Project Details</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-400 resize-none"
                                            placeholder="Tell us about your home transformation goals..."
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-primary hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/20 text-lg flex items-center justify-center gap-3 group"
                                    >
                                        Send Request <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Radius Mention */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h4 className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">Serving Westmoreland County</h4>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-400 font-display font-bold text-xl uppercase italic">
                        <span>Irwin</span>
                        <span>Greensburg</span>
                        <span>Murrysville</span>
                        <span>North Huntington</span>
                        <span>Export</span>
                        <span>Jeanette</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
