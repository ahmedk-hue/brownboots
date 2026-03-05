import { motion } from 'motion/react';
import { Gift, Heart, UserCheck, DollarSign, CheckCircle2, ArrowRight, Share2, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const ReferralsPage = () => {
    return (
        <div className="pb-16 text-slate-900">
            <SEO
                title="Referral Program | Reward Your Support"
                description="Join the BrownBoot Referral Program. Earn 3% cash rewards on every remodeling project you refer to us in Westmoreland County."
                keywords="Referral Program, Home Remodeling Rewards, Earn Cash for Referrals, BrownBoot Community"
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

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Community Rewards</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Share the Work. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">Earn Rewards.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We grow through the support of our satisfied customers and community neighbors. Our Referral Program is our way of saying thank you for spreading the word about BrownBoot.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Referral Program Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-3xl flex items-center justify-center mb-8 text-primary shadow-lg shadow-primary/5">
                                <Gift className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Simple Rewards for <span className="text-primary">Trusted Referrals</span>
                            </h2>
                            <div className="space-y-10 group">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner group-hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-6 mb-4">
                                        <div className="bg-primary text-white font-bold p-4 rounded-2xl text-2xl shadow-lg shadow-primary/20">3%</div>
                                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">Full Cash Reward on Base Price Project Price</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-bold tracking-tight">Earn a full 3% commission in cash for every remodeling project you refer that we sign and complete.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <DollarSign className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Cash Incentive</h4>
                                            <p className="text-sm text-slate-600">Paid directly to you upon project completion.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <Heart className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Local Trust</h4>
                                            <p className="text-sm text-slate-600">Help your neighbors find a builder they can rely on.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-slate-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-display font-bold mb-8">How it Works</h3>
                                    <div className="space-y-8">
                                        {[
                                            { step: "01", title: "Spread the Word", desc: "Share our name with friends, family, or neighbors looking to remodel.", icon: <Share2 className="w-6 h-6" /> },
                                            { step: "02", title: "They Contact Us", desc: "Have them mention your name during their initial consultation.", icon: <MessageCircle className="w-6 h-6" /> },
                                            { step: "03", title: "Project Completes", desc: "Once the build is finalized and sign-off is complete.", icon: <UserCheck className="w-6 h-6" /> },
                                            { step: "04", title: "Get Rewarded", desc: "We send you your 3% cash commission as a thank you.", icon: <Gift className="w-6 h-6" /> }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-6 items-start">
                                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 font-display font-bold text-primary">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Referral Link CTA Section */}
            <section className="py-24 bg-slate-50 shadow-inner">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                            Want to Refer a <span className="text-primary">Neighbor?</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            Join the hundreds of Westmoreland County families who trust and recommend BrownBoot.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-primary text-white px-10 py-6 rounded-full font-bold text-xl hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                            >
                                Submit a Referral Request
                            </a>
                        </div>
                        <div className="pt-12 text-slate-500 text-sm font-medium">
                            Questions? <a href="mailto:contact@brownbootrr.com" className="text-primary font-bold hover:underline">Email us for details</a> • 724-995-3320
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReferralsPage;
