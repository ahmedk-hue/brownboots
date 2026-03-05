import { motion } from "motion/react";
import { ArrowRight, Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { AnimatedGradient } from "../effects/AnimatedGradient";
import { Particles } from "../effects/Particles";
import { LightBeams } from "../effects/LightBeams";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white pt-20">
      {/* Background with Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img
          src="/hero-home-v2.jpg"
          alt="Luxury Remodeling"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-950/80 z-10" />
      </div>

      {/* Subtle Effects Layer */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <AnimatedGradient />
        <Particles />
        <LightBeams />
      </div>

      {/* Content Layer - Left Aligned */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                #1 Rated in Westmoreland County
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight tracking-tighter">
              Precision Repairs. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary drop-shadow-sm">
                Expert Remodeling.
              </span>
            </h1>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 bg-primary mb-10 rounded-full shadow-lg shadow-primary/40"
            />

            <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              From luxury kitchens to finished basements, BrownBoot Repairs & Remodeling delivers craftsmanship that raises the value of your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                Request A Quote <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:724-995-3320"
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> (724) 995-3320
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">Licensed & Insured</p>
                  <p className="text-xs text-slate-400">PA #029340</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">On-Time Completion</p>
                  <p className="text-xs text-slate-400">Guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
