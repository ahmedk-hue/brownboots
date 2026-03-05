
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        image: "/kitchen-after-1.jpg",
        title: "Modern Kitchen Transformation",
        category: "Kitchen Remodeling",
        location: "Irwin, PA"
    },
    {
        image: "/bathroom-after-1.jpg",
        title: "Luxury Master Suite Bath",
        category: "Bathroom Remodeling",
        location: "Greensburg, PA"
    },
    {
        image: "/bedroom-after-1.jpg",
        title: "Custom Bedroom Renovation",
        category: "Home Remodeling",
        location: "Murrysville, PA"
    },
    {
        image: "/kitchen-after-2.jpg",
        title: "Premium Kitchen Detail",
        category: "Kitchen Remodeling",
        location: "North Huntingdon, PA"
    }
];

interface RelatedProjectsProps {
    city?: string;
    limit?: number;
}

const RelatedProjects = ({ city, limit = 3 }: RelatedProjectsProps) => {
    const filteredProjects = city
        ? projects.filter(p => p.location.includes(city)).slice(0, limit)
        : projects.slice(0, limit);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Proven Results</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                            {city ? `Recent Projects in ${city}` : 'Recent Projects'}
                        </h2>
                    </div>
                    <Link to="/gallery" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        View Full Gallery <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] overflow-hidden rounded-3xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90 transition-opacity"></div>
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{project.category}</span>
                                <h4 className="text-white font-bold text-2xl mb-1">{project.title}</h4>
                                <p className="text-slate-300 flex items-center gap-1 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {project.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProjects;
