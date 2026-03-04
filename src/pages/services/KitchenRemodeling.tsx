import { motion } from 'framer-motion';
import { ChefHat, CheckCircle2, ArrowRight, Calendar, ClipboardCheck, PencilRuler, HardHat, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import { AnimatedGradient } from '../../components/effects/AnimatedGradient';
import { Particles } from '../../components/effects/Particles';
import { LightBeams } from '../../components/effects/LightBeams';

const KitchenRemodeling = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Kitchen Remodeling Irwin PA | Custom Kitchen Design"
                description="Elevate your home with Westmoreland County's premier kitchen remodeler. Luxury custom cabinetry, quartz countertops, and modern layouts designed for longevity."
                keywords="Kitchen Remodeling Irwin, Custom Kitchen Design Greensburg, Modern Kitchen Renovations PA, Kitchen Design Westmoreland County"
                canonical="https://brownbootrr.com/services/kitchen-remodeling"
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <AnimatedGradient />
                        <Particles />
                        <LightBeams />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block underline decoration-primary/30 underline-offset-8">Relatable & Approachable Service</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Kitchen Remodeling for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">Way You Actually Live.</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                            Trusted by Westmoreland County homeowners to turn dated kitchens into the heart of the home. Built to last, designed for convenience, and handled by local pros.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="tel:724-995-3320"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                            >
                                Get My Free Estimate
                            </a>
                            <a
                                href="https://clienthub.getjobber.com/client_hubs/2957b483-4a1e-4503-ac8b-40b49ac21e5b/login/new?source=share_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                Client Login
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Vibe Section */}
            <section className="py-24 bg-white border-b border-slate-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight">Real Life, <span className="text-primary">Real Value.</span></h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8 italic font-medium">
                        "You don’t need a showroom-perfect kitchen that you’re afraid to cook in. You need a space where the kids can do homework, where the coffee is always within reach, and where the cabinets don’t stick."
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        At BrownBoot Repairs & Remodeling, we focus on practical value and durable craftsmanship that stands up to real life. From Irwin to Murrysville, we help our neighbors increase their home value without the headache of "big box" contractors who don't call you back.
                    </p>
                </div>
            </section>

            {/* 5-Step Process Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">The BrownBoot Way</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">We take the mystery out of remodeling. Here is how Kyle and the team get it done:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8">
                        {[
                            { name: "Free Home Visit", icon: <Calendar />, desc: "We'll be there in 24-48 hours to assess your project." },
                            { name: "Free Estimate", icon: <ClipboardCheck />, desc: "Clear, honest quote back within 2-3 days." },
                            { name: "Selections", icon: <PencilRuler />, desc: "We help you pick the right materials and handle permits." },
                            { name: "Construction", icon: <HardHat />, desc: "Founder-led team treating your home with respect." },
                            { name: "Walkthrough", icon: <CheckCircle />, desc: "Built to last. We don't leave until you're satisfied." }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group"
                            >
                                <div className="text-primary mb-6 group-hover:scale-110 transition-transform inline-block bg-red-50 p-4 rounded-2xl">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3">{step.name}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                <div className="absolute top-4 right-4 text-slate-100 font-display font-black text-4xl -z-0">
                                    0{idx + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Value Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">
                                Honest Pricing. <br />
                                <span className="text-primary">No Surprises.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                                We know budget is your top priority. Whether you’re looking for a simple fix or a total kitchen renovation, we help you understand the average cost of home renovation in Pennsylvania so there are no surprises.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="text-2xl font-bold text-primary">$25k-$75k</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Mid-Range Kitchens (PA 2026)</h4>
                                        <p className="text-sm text-slate-500">Typical range for full-service updates including cabinets and layout.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="text-2xl font-bold text-primary">113%</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Return on Investment</h4>
                                        <p className="text-sm text-slate-500">Current PA market data suggests cosmetic kitchen lifts can see major ROI.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                                    Pro Tip
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-6">Cash Referrals</h3>
                                <p className="text-slate-300 mb-10 leading-relaxed text-lg italic">
                                    "Refer a neighbor, and we'll pay you a <strong>3% commission in cash</strong> once their project is finished!"
                                </p>
                                <a
                                    href="/referrals"
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                                >
                                    Learn About Referrals
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trends Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-16">2026 Kitchen Design Trends</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Warm Neutrals", desc: "Moving away from 'stark whites' toward mushroom, clay, and soft taupes for a grounded feel." },
                            { title: "Intentional Spaces", desc: "Focusing on 'Defined Spaces' like prep nooks and secondary coffee stations over pure open concepts." },
                            { title: "Western PA Durability", desc: "Highlighting Quartz and White Oak—the gold standard for durability in local homes." }
                        ].map((trend, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{trend.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{trend.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-slate-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 to-transparent"></div>
                        <div className="max-w-3xl mx-auto relative z-10">
                            <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">Ready to Start <span className="text-primary">Step 1?</span></h2>
                            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                                Join the Westmoreland County homeowners who trust BrownBoot for craftsmanship that's built for real life.
                            </p>
                            <a
                                href="tel:724-995-3320"
                                className="inline-flex items-center justify-center bg-primary text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-red-700 transition-all shadow-2xl shadow-primary/40"
                            >
                                Schedule Your Home Visit
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KitchenRemodeling;
