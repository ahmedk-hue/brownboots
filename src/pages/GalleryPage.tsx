import { motion } from 'framer-motion';
import { Camera, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const projects = [
    {
        image: "/project-kitchen-after-1.jpg",
        title: "Modern Kitchen Transformation",
        category: "Full Remodel",
        description: "A complete kitchen overhaul featuring custom cabinetry, premium finishes, and a modern open-concept layout."
    },
    {
        image: "/project-kitchen-during-1.jpg",
        title: "Kitchen Remodel in Progress",
        category: "Full Remodel",
        description: "A look at the structural changes and utility updates during the peak of this major kitchen transformation."
    },
    {
        image: "/project-kitchen-before-1.jpg",
        title: "Kitchen - Before",
        category: "Full Remodel",
        description: "The original state of the kitchen before we stepped in to modernize and elevate the space."
    },
    {
        image: "/project-kitchen-after-2.jpg",
        title: "Kitchen - Detail & Finish",
        category: "Full Remodel",
        description: "Highlighting the high-end hardware, countertops, and meticulous attention to detail."
    },
    {
        image: "/project-bedroom-before-1.jpg",
        title: "Bedroom - Before",
        category: "Home Remodeling",
        description: "Initial assessment of a bedroom space prior to its upcoming renovation."
    }
];

const GalleryPage = () => {
    return (
        <div className="pt-24 pb-20">
            <SEO
                title="Project Gallery | BrownBoot Repairs & Remodeling"
                description="Explore our portfolio of high-end home remodeling projects across Westmoreland County, including kitchens, bathrooms, and custom basements."
                keywords="Home Remodeling Gallery, Kitchen Photos, Bathroom Renovation Portfolio, Custom Carpentry Showcase"
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581000089868-38629d6d690a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-6 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            Project <span className="text-primary">Gallery</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            A showcase of our commitment to craftsmanship, quality, and stunning home transformations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <Camera className="text-white w-10 h-10" />
                                    </div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{project.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6 italic">
                                        {project.description}
                                    </p>
                                    <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <Home className="w-4 h-4" />
                                            <span>Full Transformation</span>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="text-primary font-bold text-sm hover:underline"
                                        >
                                            Inquire Project
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                                Ready to start your <span className="text-primary">own story?</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Let's bring this same level of craftsmanship to your home. Contact us today for a consultation.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 font-display"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
