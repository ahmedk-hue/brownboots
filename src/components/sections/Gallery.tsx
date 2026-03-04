import { motion } from "motion/react";

const projects = [
  {
    image: "/gallery-kitchen.png",
    title: "Gourmet Kitchen Transformation",
    category: "Kitchen Remodeling"
  },
  {
    image: "/gallery-bathroom.png",
    title: "Luxury Master Suite Bath",
    category: "Bathroom Remodeling"
  },
  {
    image: "/gallery-basement.png",
    title: "Finished Basement Lounge",
    category: "Basement Remodeling"
  },
  {
    image: "/gallery-trim.png",
    title: "Custom Crown & Baseboard",
    category: "Trim Carpentry"
  },
  {
    image: "/gallery-windows.png",
    title: "Premium Window & Door Install",
    category: "Windows & Door Installation"
  }
];

export function Gallery() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Work</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900">Recent Projects</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            See the transformation we bring to homes across Westmoreland County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1">{project.category}</p>
                <h4 className="text-white font-bold text-xl">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
