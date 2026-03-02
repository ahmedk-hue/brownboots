import { motion } from "motion/react";
import { Hammer, Bath, Home, PenTool, DoorOpen } from "lucide-react";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a modern culinary space with custom cabinetry, countertops, and lighting.",
    icon: <Hammer className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
  },
  {
    title: "Bathroom Remodeling",
    description: "Create a spa-like retreat with luxurious fixtures, tile work, and efficient layouts.",
    icon: <Bath className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80"
  },
  {
    title: "Basement Remodeling",
    description: "Expand your living space with a finished basement perfect for entertainment or a home office.",
    icon: <Home className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
  },
  {
    title: "Trim Carpentry",
    description: "Add elegance with custom crown molding, wainscoting, and detailed woodwork.",
    icon: <PenTool className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1617251137884-7014b754357e?auto=format&fit=crop&q=80"
  },
  {
    title: "Windows & Door Installation",
    description: "Improve energy efficiency and curb appeal with professional window and door installation.",
    icon: <DoorOpen className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80"
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900">Premium Remodeling Services</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional quality and attention to detail for every project.
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
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-100 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg z-10">
                  {service.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
