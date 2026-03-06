import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { AnimatedGradient } from '../effects/AnimatedGradient';
import { Particles } from '../effects/Particles';
import { LightBeams } from '../effects/LightBeams';

interface LocationHeroProps {
    city: string;
    subtitle: string;
}

const LocationHero = ({ city, subtitle }: LocationHeroProps) => {
    return (
        <section className="relative min-h-[30vh] flex items-center overflow-hidden bg-slate-950 pt-28 pb-10 md:pt-36 md:pb-14">
            {/* Background with Decorative Elements */}
            <div className="absolute inset-0 z-0 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>

                {/* Premium Effects Layer */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <AnimatedGradient />
                    <Particles />
                    <LightBeams />
                </div>

                {/* Decorative Grid Overlay to match brand */}
                <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/20"></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block underline decoration-primary/30 underline-offset-8">
                        Now Serving {city}, PA
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        BrownBoot Repairs & Remodeling - <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">{city}</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <Link
                            to="/quote"
                            className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 text-center"
                        >
                            Get Free Quote
                        </Link>
                        <Link
                            to="/investment-guide"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all font-display text-center"
                        >
                            See Price Guide
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LocationHero;
