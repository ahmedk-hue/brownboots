
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/shared/ServiceFAQ';
import RelatedProjects from '../../components/locations/RelatedProjects';
import SEO from '../../components/SEO';

const Export = () => {
    const city = "Export";
    const fullCity = "Export, PA";

    const faqs = [
        {
            question: `What are the building permit requirements for Export Borough?`,
            answer: `Export Borough requires permits for structural modifications and significant plumbing or electrical work. As a smaller borough, the process is often more direct, and we coordinate directly with the borough's officials to ensure your project meets all community standards.`
        },
        {
            question: `Does BrownBoot handle remodeling for older properties in downtown ${city}?`,
            answer: `Yes, many homes in Export have unique historical character linked to the area's coal mining and industrial heritage. We specialize in preserving that historic charm while upgrading the home's efficiency and modern amenities.`
        },
        {
            question: `Which neighborhoods in Export do you serve?`,
            answer: `We serve the entire Export area, including residential neighborhoods bordering the Westmoreland Heritage Trail, Lincoln Avenue, and developments like Manordale Farms.`
        },
        {
            question: `How do you handle site logistics near the Heritage Trail?`,
            answer: `Working near landmarks like the Westmoreland Heritage Trail requires careful staging and logistics. We manage our job sites to ensure minimal impact on trail traffic while maintaining high efficiency for your remodeling project.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Premium home remodeling in ${fullCity}. Local craftsmen dedicated to quality kitchen, bath, and structural repairs in the heart of Export.`}
                keywords={`Export PA Remodeling, Home Repair Export, Kitchen Remodel Export PA, Bathroom Renovation Export, ${fullCity} Contractor`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Specialist in custom carpentry and historic home updates near the Westmoreland Heritage Trail.`}
                image="/logo-primary.png"
                url={`https://brownbootrr.com/locations/export`}
                telephone="724-995-3320"
                address={{ streetAddress: "115 McMahon Dr.", addressLocality: "Manor", addressRegion: "PA", postalCode: "15665", addressCountry: "US" }}
                geo={{ latitude: 40.4187, longitude: -79.6231 }}
                areaServed={[{ name: city, wikidataId: "Q2453673" }]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12170.8436402434!2d-79.6231!3d40.4187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ef1f79391ab1%3A0x6337a5be893c52e1!2sExport%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`Right at the heart of the Westmoreland Heritage Trail, we're providing the craftsmanship that keeps ${city} homes looking their best.`}
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Export Expert Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Quality Craftsmanship in the <span className="text-primary">Historic Heritage District</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Export's history as a hub of Westmoreland County's coal industry is reflected in its unique architectural character. From the downtown residences near the <strong>Heritage Trail trailhead</strong> to the established homes of <strong>Manordale Farms</strong>, we bring specialized local knowledge to every project.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Heritage District Historic Preservation Expertise</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Export Borough Planning & Zoning Knowledge</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Heritage Trail Proximity Site Logistics</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic border-l-4 border-primary pl-6 py-2">
                                "We take pride in building for our neighbors in Export, maintaining the historic charm of downtown while providing modern transformations in <strong>Manordale Farms</strong>."
                            </p>
                        </motion.div>

                        <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold mb-6">Export Building Standards</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Navigating the permit process in a smaller borough like Export requires a personal touch and a knowledge of the local code office. We manage the entire process for you.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Borough-Specific Zoning</h4>
                                            <p className="text-sm text-slate-400">Direct coordination with Export's local planners.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Neighborhood Reach</h4>
                                            <p className="text-sm text-slate-400">Serving <strong>Lincoln Avenue</strong> & <strong>Manordale Farms</strong>.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                >
                                    Start Your Export Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12170.8436402434!2d-79.6231!3d40.4187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ef1f79391ab1%3A0x6337a5be893c52e1!2sExport%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Westmoreland Heritage Trail Trailhead",
                        text: "We frequently serve the residential neighborhoods bordering the trail, bringing modern remodeling to this historic industrial corridor."
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
                            Don't start without the local data. Our <strong>Export Homeowner's Guide</strong> includes current permit fee estimates and borough-area delivery logistics for 2025.
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

export default Export;
