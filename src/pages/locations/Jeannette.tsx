
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
            answer: `The City of Jeannette requires building and zoning permits for structural, electrical, and plumbing changes. We coordinate with the city's code enforcement to ensure all renovations meet the latest standards.`
        },
        {
            question: `Does BrownBoot handle historic home repairs in ${city}?`,
            answer: `Absolutely. Jeannette's history as a glass industry hub means many homes have unique character. We take pride in preserving that history during our modern remodeling projects.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Quality home remodeling in 'The Glass City'—${fullCity}. From historic urban renovations to modern sub-division updates, trust the local craftsmen at BrownBoot.`}
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
                subtitle={`In 'The Glass City', we're bringing crystal-clear quality and craftsmanship to every home we touch.`}
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            />

            <RelatedProjects city={city} />

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24345.8436402434!2d-79.6156!3d40.3278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db9f79391ab1%3A0x6337a5be893c52e1!2sJeannette%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Jeannette Public Library",
                        text: "We serve all historic neighborhoods branching out from the downtown library area, bringing modern efficiency to classic homes."
                    }
                ]}
            />

            <ServiceFAQ faqs={faqs} title={`${city} Remodeling FAQ`} />
        </>
    );
};

export default Jeannette;
