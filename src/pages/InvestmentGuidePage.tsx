import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    ArrowRight,
    Download,
    DollarSign,
    Clock,
    ShieldCheck,
    MapPin,
    Calendar,
    Phone,
    Mail,
    User,
    ChevronRight,
    Sparkles,
    Trophy,
    Users
} from 'lucide-react';
import SEO from '../components/SEO';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const services = [
    { value: 'kitchen', label: 'Kitchen Remodeling' },
    { value: 'bathroom', label: 'Bathroom Remodeling' },
    { value: 'basement', label: 'Basement Remodeling' },
    { value: 'trim', label: 'Trim & Carpentry' },
    { value: 'windows-doors', label: 'Windows & Doors' }
];

const budgets = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 – $25,000' },
    { value: '25k-50k', label: '$25,000 – $50,000' },
    { value: 'over-50k', label: '$50,000+' }
];

const pricingData = [
    {
        service: 'Bathroom Remodel',
        levels: [
            { name: 'Refresh', range: '$12,000 – $18,000', details: 'New vanity, flooring, paint, and upgraded fixtures.' },
            { name: 'Full Gut', range: '$25,000 – $45,000+', details: 'Custom tile shower, layout changes, premium cabinetry.' }
        ]
    },
    {
        service: 'Kitchen Remodel',
        levels: [
            { name: 'Cosmetic', range: '$20,000 – $35,000', details: 'Cabinet refacing, new hardware, countertops, and backsplash.' },
            { name: 'Custom', range: '$50,000 – $85,000+', details: 'All-new layout, custom storage, pro-grade appliances, lighting.' }
        ]
    },
    {
        service: 'Basement Finishing',
        levels: [
            { name: 'Standard', range: '$35,000 – $55,000', details: 'Framing, drywall, flooring, and lighting for open living space.' },
            { name: 'The Suite', range: '$65,000 – $90,000+', details: 'Added bathroom, wet bar, or egress windows.' }
        ]
    },
    {
        service: 'Trim & Carpentry',
        levels: [
            { name: 'Per Project', range: '$2,500 – $7,500', details: 'Custom crown molding, wainscoting, or built-in shelving.' }
        ]
    }
];

const InvestmentGuidePage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        budget: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate webhook
        setTimeout(() => {
            setLoading(false);
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1200);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isSubmitted) {
        return (
            <div className="bg-white min-h-screen">
                <SEO
                    title="2026 Housing Investment Guide | BrownBoot Repairs & Remodeling"
                    description="Your guide is here. Explore 2026 Westmoreland County remodeling costs and investment ranges."
                    keywords="Home Remodeling Costs Westmoreland County, Kitchen Budget Guide Irwin PA"
                    canonical="https://brownbootrr.com/investment-guide"
                />

                {/* Success Header */}
                <section className="bg-slate-950 text-white pt-40 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <AnimatedGradient />
                        <Particles />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold text-sm mb-8 border border-green-500/30"
                        >
                            <CheckCircle2 className="w-5 h-5" /> Your Guide is on its way to your inbox!
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                            2026 Home <span className="text-primary italic">Investment</span> Guide
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                            Realistic pricing and budgeting for Westmoreland County homeowners who value quality that lasts.
                        </p>
                    </div>
                </section>

                {/* Intro */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                            <div className="md:col-span-4 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/about-kyle.jpg"
                                    alt="Kyle Stack"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:col-span-8">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 italic">"Hi, I'm Kyle Stack."</h2>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                    <p>
                                        At BrownBoot Repairs & Remodeling, we know that the biggest hurdle to a dream home is the "black box" of pricing. We grew up here in Irwin, and we believe our neighbors deserve honesty.
                                    </p>
                                    <p>
                                        This guide helps you plan your investment so there are no surprises—just results that are built to last. Use these 2026 market ranges to start your planning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Table */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Estimated Investment Ranges</h2>
                            <p className="text-slate-500 font-medium">Standard 2026 Westmoreland County Market Rates</p>
                        </div>

                        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="px-8 py-6 font-display font-bold text-lg">Service</th>
                                            <th className="px-8 py-6 font-display font-bold text-lg">Level</th>
                                            <th className="px-8 py-6 font-display font-bold text-lg">Investment Range</th>
                                            <th className="px-8 py-6 font-display font-bold text-lg">Includes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {pricingData.map((group, idx) => (
                                            <React.Fragment key={idx}>
                                                {group.levels.map((level, lIdx) => (
                                                    <tr key={lIdx} className="hover:bg-slate-50 transition-colors">
                                                        {lIdx === 0 && (
                                                            <td rowSpan={group.levels.length} className="px-8 py-8 font-bold text-slate-900 bg-slate-50/50">
                                                                {group.service}
                                                            </td>
                                                        )}
                                                        <td className="px-8 py-8 font-medium text-slate-700">{level.name}</td>
                                                        <td className="px-8 py-8">
                                                            <span className="bg-red-50 text-primary font-bold px-4 py-2 rounded-full border border-red-100 whitespace-nowrap">
                                                                {level.range}
                                                            </span>
                                                        </td>
                                                        <td className="px-8 py-8 text-slate-500 text-sm italic">{level.details}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Promise */}
                <section className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                                The BrownBoot <span className="text-primary italic">Promise</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 tracking-tight">Relatable & Local</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    We aren't a massive corporation. We’re a founder-led team that takes pride in every mitered corner and every laid tile.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group border-primary/20">
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-110 transition-transform shadow-primary/20">
                                    <Trophy className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 tracking-tight">Built to Last</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    We don't cut corners on the things you <span className="italic">can't</span> see (like waterproofing and framing) so that the things you <span className="italic">can</span> see stay beautiful for decades.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 tracking-tight">Efficiency</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    From our 48-hour response time to our streamlined estimate process, we respect your time as much as your home.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <LightBeams />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
                                Ready to get a <span className="text-primary italic">firm</span> number?
                            </h2>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed italic">
                                "If you’re ready to move past the averages and get a customized quote, skip the wait. Kyle is currently booking Free Home Visits for the next two weeks in the Irwin and Murrysville areas."
                            </p>

                            <a
                                href="https://clienthub.getjobber.com/client_hubs/7ea983f8-3b2e-435e-a8d7-acebb8ed14b3/login/new?source=share_login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-red-700 transition-all shadow-2xl shadow-primary/30"
                            >
                                Book Your Free Home Visit Now <Calendar className="w-6 h-6 ml-2" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Free Remodeling Budget Guide | 2026 Westmoreland County"
                description="Don't know where to start with your remodeling budget? Download our free 2026 Home Investment Guide for Westmoreland County homeowners."
                keywords="Remodeling Budget Guide, Home Investment Irwin PA, Kitchen Remodel Cost Greensburg"
                canonical="https://brownbootrr.com/investment-guide"
            />

            {/* Squeeze Hero */}
            <section className="bg-slate-950 text-white pt-48 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/hero-home-v3.jpg"
                        alt="Luxury Remodeling"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/80 z-10" />
                </div>

                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <AnimatedGradient />
                    <Particles />
                    <LightBeams />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="max-w-3xl"
                            >
                                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full font-bold mb-8 border border-primary/30">
                                    <DollarSign className="w-5 h-5" /> 2026 Home Investment Guide
                                </div>
                                <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-tight">
                                    Want to Remodel but Don’t Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary italic underline decoration-primary/30 underline-offset-8">Where to Start with the Budget?</span>
                                </h1>
                                <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
                                    Download our free <strong>2026 Westmoreland County Home Investment Guide</strong>. Get realistic pricing for kitchens, baths, and more—built specifically for local homeowners who value quality that lasts.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                            <Download className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-2">Cost Breakdowns</h3>
                                            <p className="text-slate-400 text-sm">See what local residents are actually spending in 2026.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                            <Sparkles className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-2">Value vs. Cost</h3>
                                            <p className="text-slate-400 text-sm">Upgrade strategies that increase appraisal value.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Squeeze Form */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[4rem] p-10 md:p-14 shadow-2xl relative"
                            >
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-primary text-white px-6 py-2 rounded-2xl font-bold shadow-xl rotate-3">
                                    Free Download
                                </div>

                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-2 tracking-tight">Instant Access</h2>
                                    <p className="text-slate-500 font-medium">Get the 2026 Guide Sent Directly to You</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative group">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            required
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            required
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <select
                                                name="project"
                                                required
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="">Project Type</option>
                                                {services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                                            </select>
                                        </div>

                                        <div className="relative group">
                                            <select
                                                name="budget"
                                                required
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="">Target Budget</option>
                                                {budgets.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mt-8 group"
                                    >
                                        {loading ? 'Processing...' : 'Send Me the Investment Guide!'}
                                        {!loading && <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                                    </button>

                                    <p className="text-center text-slate-400 text-xs mt-6">
                                        We respect your privacy. No spam, just value. Irwin native owned.
                                    </p>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-3xl font-bold text-slate-900">#029340</div>
                            <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">PA License</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900">724-995-3320</div>
                            <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">Direct Support</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900">100%</div>
                            <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">Irwin Owned</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900">2026</div>
                            <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">Updated Guide</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InvestmentGuidePage;
