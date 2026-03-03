
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/shared/ServiceFAQ';
import RelatedProjects from '../../components/locations/RelatedProjects';
import SEO from '../../components/SEO';

const Irwin = () => {
    const city = "Irwin";
    const fullCity = "Irwin, PA";

    const faqs = [
        {
            question: `How does the building permit process work in Irwin Borough vs. North Huntingdon?`,
            answer: `While we serve the entire Norwin area, the processes differ. Irwin Borough handles its own zoning, while many surrounding addresses fall under North Huntingdon's jurisdiction. We coordinate directly with the respective municipal offices (including Shari Martino's office in Irwin) to ensure your project complies with the specific local codes of your street.`
        },
        {
            question: `Does the clay-heavy soil in neighborhoods like Penns Woods affect remodeling?`,
            answer: `Yes, the Westmoreland series silt loam in the Irwin area can have high clay content. This is a critical factor for additions and basement projects. We ensure all footings and drainage systems are engineered specifically for these local soil conditions to prevent settling.`
        },
        {
            question: `Are you a registered contractor for MAWC service areas?`,
            answer: `Absolutely. We work frequently within the Municipal Authority of Westmoreland County (MAWC) service area in Irwin. We handle all coordination for plumbing upgrades and new line segments as part of our full-service remodeling.`
        },
        {
            question: `Do you handle historic renovations near the Lamp Theatre?`,
            answer: `Yes, we specialize in the unique structural needs of Irwin's older homes. Whether it's restoring crown molding in a Victorian-style home downtown or modernizing a kitchen in the Norwin area, we preserve the historic integrity while adding modern value.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Premium home remodeling in ${fullCity}. From historic downtown Irwin near the Lamp Theatre to modern renovations in Sunset Valley, Penns Woods, and Norwin Estates.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Irwin's local remodeling experts. Specializing in custom kitchens, baths, and structural repairs across the Norwin area and historic Irwin.`}
                image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
                url={`https://brownbootrr.com/locations/irwin`}
                telephone="724-995-3320"
                address={{ streetAddress: "115 McMahon Dr.", addressLocality: "Manor", addressRegion: "PA", postalCode: "15665", addressCountry: "US" }}
                geo={{ latitude: 40.3340, longitude: -79.7028 }}
                areaServed={[{ name: city, wikidataId: "Q1017387" }]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.374465804245!2d-79.7028!3d40.3340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ef1f79391ab1%3A0x6337a5be893c52e1!2sIrwin%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`From the historic charm near the Lamp Theatre to the modern estates of Lincoln Hills, Sunset Valley, and Norwin Estates, we're your trusted neighborhood craftsmen.`}
            />

            <RelatedProjects city={city} />

            {/* Hyper-Local Advantage Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Irwin Expert Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Deep Roots in the <span className="text-primary">Norwin Community</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Remodeling in the Irwin area requires a contractor who understands the specific geological and municipal nuances of Westmoreland County. From the well-drained loams of <strong>Circleville</strong> to the complex zoning boundaries of <strong>North Huntingdon</strong> and the Borough, we bring the boots-on-the-ground knowledge your project deserves.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Specialized Soil Mitigation (Westmoreland Series)</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Norwin School District Area Specialist</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>MAWC Infrastructure Coordination</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic border-l-4 border-primary pl-6 py-2">
                                "Whether we're working on a historic brick Victorian near Main Street or a modern colonial in <strong>Penns Woods</strong>, our commitment to Irwin families is unwavering."
                            </p>
                        </motion.div>

                        <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold mb-6">Local Building Standards</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    We navigate the <strong>Pennsylvania UCC</strong> and local Borough amendments so you don't have to. Our familiarity with regional inspectors ensures a smooth process from permit to final inspection.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Zoning Authority Knowledge</h4>
                                            <p className="text-sm text-slate-400">Coordination with Irwin Borough & N. Huntingdon offices.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Neighborhood Logistics</h4>
                                            <p className="text-sm text-slate-400">Efficient staging for <strong>Sunset Valley</strong> & <strong>Lincoln Hills</strong> sites.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                >
                                    Start Your Irwin Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12173.8436402434!2d-79.713532!3d40.334032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e94b7e19277f%3A0x6337a5be893c52e1!2sIrwin%2C%20PA%2015642!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "The Lamp Theatre / Main Street",
                        text: "We serve all the historic residences in the downtown Irwin corridor, bringing modern functionality to 19th-century architecture."
                    },
                    {
                        from: "Norwin High School Area",
                        text: "Just minutes from the high school, we're the go-to contractor for family home updates in <strong>Penns Woods</strong> and <strong>Norwin Estates</strong>."
                    }
                ]}
            />

            <ServiceFAQ faqs={faqs} title={`${city} Remodeling FAQ`} />

            {/* Local Conversion Guide */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
                        <FileText className="w-16 h-16 text-primary mx-auto mb-8" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Planning a Remodel in {city}?</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Don't start without the local data. Our <strong>Irwin Homeowner's Guide</strong> includes current permit fee estimates and Norwin-area material delivery costs for 2025.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 font-display"
                        >
                            Get the {city} Guide
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Irwin;
