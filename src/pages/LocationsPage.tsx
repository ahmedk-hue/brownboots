import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Phone, Home } from 'lucide-react';
import SEO from '../components/SEO';

const LocationsPage = () => {
    const locations = [
        "Irwin", "Greensburg", "Murrysville",
        "Export", "North Huntington", "Jeanette",
        "Penn Trafford", "Delmont", "Harrison City"
    ];

    return (
        <div className="pt-24 pb-16">
            <SEO
                title="Service Areas | BrownBoot Repairs & Remodeling"
                description="We proudly serve Westmoreland County and surrounding areas, including Irwin, Greensburg, Murrysville, and more. Quality remodeling where you live."
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/20"></div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Westmoreland County Proud</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                            Areas We <span className="text-primary">Serve</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Based in Manor, PA, we are your local experts for high-quality repairs and remodeling. We focus our expertise on the communities that make Westmoreland County home.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Homegrown Service</h2>
                            <p className="text-lg text-slate-600 mb-12 leading-relaxed italic">
                                "At BrownBoot, we don't just work in these neighborhoods—we live here. Being local means we understand the specific needs of Westmoreland County homes and building standards."
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {locations.map((loc, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
                                    >
                                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                                        <span className="font-bold text-slate-800">{loc}, PA</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl relative">
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Why Choose Local?</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Home className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Community Knowledge</h4>
                                            <p className="text-slate-600 italic text-sm">Understanding local architecture and community standards.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Faster Response</h4>
                                            <p className="text-slate-600 italic text-sm">Being nearby allows for more consistent scheduling and follow-ups.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Accountability</h4>
                                            <p className="text-slate-600 italic text-sm">Our reputation is built on the word of our neighbors.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 bg-slate-50 rounded-2xl text-center">
                                    <p className="text-slate-900 font-bold mb-4 italic">Don't see your town?</p>
                                    <p className="text-slate-600 text-sm mb-6">We often travel to surrounding areas within a 30-minute radius of Manor, PA.</p>
                                    <a href="tel:724-995-3320" className="text-primary font-bold hover:underline">Inquire About Your Area →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationsPage;
