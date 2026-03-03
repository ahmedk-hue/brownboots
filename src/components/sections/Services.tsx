import { motion } from 'framer-motion';
import { ChefHat, Bath, Box, Scaling, DoorOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Kitchen Remodeling",
    description: "From custom cabinetry to modern layouts, we create kitchens that serve as the heart of your home.",
    icon: ChefHat,
    link: "/services/kitchen-remodeling",
    features: ["Custom Cabinetry", "Quartz/Granite Counters", "Modern Lighting"]
  },
  {
    title: "Bathroom Remodeling",
    description: "Transform your dated bathroom into a luxury spa-like retreat with expert tile work and fixtures.",
    icon: Bath,
    link: "/services/bathroom-remodeling",
    features: ["Custom Tile Showers", "Vanity Installation", "Space Optimization"]
  },
  {
    title: "Basement Remodeling",
    description: "Unlock the full potential of your home by converting your basement into a beautiful space.",
    icon: Box,
    link: "/services/basement-remodeling",
    features: ["Finished Living Areas", "Home Offices", "Custom Bars"]
  },
  {
    title: "Trim Carpentry",
    description: "The fine details that define a custom home. Master-class crown molding and built-ins.",
    icon: Scaling,
    link: "/services/trim-carpentry",
    features: ["Crown Molding", "Custom Built-ins", "Decorative Trim"]
  },
  {
    title: "Windows & Doors",
    description: "Improve energy efficiency and curb appeal with precision-installed windows and doors.",
    icon: DoorOpen,
    link: "/services/windows-doors",
    features: ["Energy Efficient", "Entry Systems", "Expert Sealing"]
  },
  {
    title: "General Repairs",
    description: "Reliable solutions for your home's maintenance and repair needs, handled with care.",
    icon: CheckCircle2,
    link: "/services",
    features: ["Small Repairs", "Interior Fixes", "General Maintenance"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Premium Remodeling Services</h3>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            From precision repairs to complete transformations, we bring master-class craftsmanship to every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 line-clamp-2 italic">
                "{service.description}"
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 font-medium mb-6 italic">Looking for something specific?</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
