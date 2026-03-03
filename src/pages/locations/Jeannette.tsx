
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/shared/ServiceFAQ';
import RelatedProjects from '../../components/locations/RelatedProjects';
import SEO from '../../components/SEO';

const Jeannette = () => {
    const city = "Jeannette";
    const fullCity = "Jeannette, PA";

    const faqs = [
        {
            question: `What building permits are required in the City of ${city}?`,
            answer: `The City of Jeannette requires building and zoning permits for structural, electrical, and plumbing changes. We coordinate with the city's code enforcement and planning department to ensure all renovations meet the latest PA UCC standards.`
        },
        {
            question: `Does BrownBoot handle historic home repairs in ${city}?`,
            answer: `Absolutely. Jeannette's history as a glass industry hub means many homes, particularly near Clay Avenue and the historic downtown, have unique character. We take pride in preserving that history during our modern remodeling projects.`
        },
        {
            question: `Which neighborhoods in Jeannette do you serve?`,
            answer: `We serve all of Jeannette, including Jeannette South, Penn, and the historic residential areas branching out from the City Center.`
        },
        {
            question: `Are you a registered contractor for the Jeannette area?`,
            answer: `Yes, we are a registered contractor serving Westmoreland County and the City of Jeannette. We are familiar with the specific urban development standards of 'The Glass City'.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Quality home remodeling in 'The Glass City'—${fullCity}. From historic Clay Avenue renovations to modern transformations in Jeannette South.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Expert in custom kitchen and bath transformations for 'The Glass City' homeowners.`}
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                url={`https://brownbootrr.com/locations/jeannette`}
                telephone="724-995-3320"
                address={{ streetAddress: "115 McMahon Dr.", addressLocality: "Manor", addressRegion: "PA", postalCode: "15665", addressCountry: "US" }}
                geo={{ latitude: 40.3278, longitude: -79.6156 }}
                areaServed={[{ name: city, wikidataId: "Q1017370" }]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24345.8436402434!2d-79.6156!3d40.3278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db9f79391ab1%3A0x6337a5be893c52e1!2sJeannette%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`From the historic charm of Clay Avenue to the residential communities of Jeannette South and Arlington Ave, we're the City of Glass's trusted remodeling partners.`}
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Jeannette Expert Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Quality Craftsmanship in <span className="text-primary">The Glass City</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Jeannette's industrial heritage is built into the very fabric of its homes. From the historic brick facades near <strong>Clay Avenue</strong> to the established neighborhoods of <strong>Jeannette South</strong>, we bring a deep respect for local history combined with modern technical expertise.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Historic 'Glass City' Structural Expertise</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>City Center Urban Remodeling Specialist</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Jeannette Municipal Code Compliance Coordination</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic border-l-4 border-primary pl-6 py-2">
                                "Bringing high-end craftsmanship to the historic streets of <strong>Jeannette</strong> is a point of personal pride for our local team."
                            </p>
                        </motion.div>

                        <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold mb-6">Jeannette Building Standards</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    We manage the entire building permit process within the City of Jeannette, coordinating with code enforcement to ensure your urban transformation is built to last.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Clay Avenue Historic Proximity</h4>
                                            <p className="text-sm text-slate-400">Respecting the architectural character of downtown.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Neighborhood Mapping</h4>
                                            <p className="text-sm text-slate-400">Serving <strong>Penn</strong> & <strong>Jeannette South</strong>.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                >
                                    Start Your Jeannette Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24345.8436402434!2d-79.6156!3d40.3278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db9f79391ab1%3A0x6337a5be893c52e1!2sJeannette%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Jeannette Public Library / City Center",
                        text: "We serve all historic neighborhoods branching out from the City Center, bringing modern efficiency to classic Jeannette homes."
                    },
                    {
                        from: "Clay Avenue Historic District",
                        text: "Positioned near the heart of the city, we're the premier choice for renovations that respect Jeannette's industrial heritage."
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
                            Don't start without the local data. Our <strong>Jeannette Homeowner's Guide</strong> includes current permit fee estimates and Glass City material delivery costs for 2025.
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

export default Jeannette;
