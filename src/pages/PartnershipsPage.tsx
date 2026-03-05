import { motion } from 'motion/react';
import { Handshake, UserPlus, FileText, CheckCircle2, ArrowRight, Building2, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const PartnershipsPage = () => {
    return (
        <div className="pb-16 text-slate-900">
            <SEO
                title="Professional Partnerships | Realtor & Trade Incentives"
                description="Partner with Westmoreland County's trusted remodeler. We offer 3% commissions for Realtors and Net-15 payment terms for local trades."
                keywords="Construction Partnerships, Realtor Referral Program PA, Trade Contractors Westmoreland County, BrownBoot Partners"
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <AnimatedGradient />
                        <Particles />
                        <LightBeams />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Professional Collaboration</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Grow Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">With BrownBoot</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We value our professional relationships. Whether you're a Realtor looking to close more deals or a Trade Professional looking for reliable work, we're here to grow together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Realtor Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-primary shadow-lg shadow-primary/10">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Realtor <span className="text-primary">Incentive Program</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed italic border-l-4 border-primary/20 pl-6">
                                "Add value to your clients' home buying or selling experience while earning more on every referral."
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Full 3% Commission",
                                        desc: "Earn a full 3% commission on the base price of any remodeling project you refer to us."
                                    },
                                    {
                                        title: "Pre-Listing Value Add",
                                        desc: "We help your sellers identify the most profitable repairs to maximize their sale price."
                                    },
                                    {
                                        title: "Priority Estimates",
                                        desc: "Get fast, reliable quotes for your buyers during the inspection period."
                                    }
                                ].map((offer, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xl mb-1">{offer.title}</h4>
                                            <p className="text-slate-600">{offer.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 border border-slate-100 rounded-3xl p-12 shadow-inner group"
                        >
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Realtor Promise</h3>
                                <p className="text-slate-700 leading-relaxed mb-8 italic">
                                    "We understand that your reputation is on the line when you refer a contractor. We treat your clients with the same professionalism and care that you do, ensuring a smooth transaction for everyone involved."
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:translate-x-2 transition-transform"
                                >
                                    Join Our Realtor Network <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trade Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 shadow-inner">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="aspect-video bg-white rounded-3xl border border-slate-100 p-12 flex flex-col justify-center shadow-xl">
                                <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 border-b border-slate-100 pb-6">The Trade Promise</h3>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="bg-primary text-white font-bold p-4 rounded-2xl shadow-lg shadow-primary/20">Net-15</div>
                                        <p className="text-xl font-medium text-slate-800 tracking-tight leading-snug">Reliable, fast payment terms. We value your work and your time.</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="bg-slate-900 text-white font-bold p-4 rounded-2xl shadow-lg shadow-slate-900/10">Stable</div>
                                        <p className="text-xl font-medium text-slate-800 tracking-tight leading-snug">A consistent pipeline of premium work throughout Westmoreland County.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg">
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Trade <span className="text-primary">Partners</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed leading-relaxed font-medium">
                                We're always looking to expand our network of highly skilled, reliable trade professionals. If you take pride in your work and value a strong partnership, we want to hear from you.
                            </p>

                            <ul className="space-y-4 mb-10 text-slate-800 font-bold tracking-tight">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Electrical & Plumbing Specialists
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Custom Cabinetry & Millwork
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Tile & Flooring Professionals
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Structural & Foundation Experts
                                </li>
                            </ul>

                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl"
                            >
                                Inquire about Trade Partnerships
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                            Ready to <span className="text-primary">Collaborate?</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            Join the BrownBoot professional network today and let's build something lasting together in Westmoreland County.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="mailto:contact@brownbootrr.com"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                            >
                                contact@brownbootrr.com
                            </a>
                            <a
                                href="tel:724-995-3320"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-900 text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
                            >
                                Call: (724) 995-3320
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnershipsPage;
