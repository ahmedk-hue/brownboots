
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
            answer: `Export Borough requires permits for structural modifications and significant plumbing or electrical work. As a smaller borough, the process is often personalized, and we coordinate directly with local officials to ensure your project meets all community standards.`
        },
        {
            question: `Does BrownBoot handle remodeling for older properties in ${city}?`,
            answer: `Yes, many homes in Export have historical character linked to the area's coal mining heritage. We specialize in preserving that historic charm while upgrading the home's efficiency and modern amenities.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Quality Home Remodeling | BrownBoot`}
                description={`Reliable home remodeling and repairs in ${fullCity}. From Heritage Trail neighbors to historic borough homes, we're Export's trusted choice for quality.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Specialist in custom carpentry and historic home updates near the Westmoreland Heritage Trail.`}
                image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070&auto=format&fit=crop"
                url={`https://brownbootrr.com/locations/${city.toLowerCase()}`}
                telephone="724-995-3320"
                address={{ streetAddress: "115 McMahon Dr.", addressLocality: "Manor", addressRegion: "PA", postalCode: "15665", addressCountry: "US" }}
                geo={{ latitude: 40.4187, longitude: -79.6231 }}
                areaServed={[{ name: city, wikidataId: "Q2453673" }]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12170.8436402434!2d-79.6231!3d40.4187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ef1f79391ab1%3A0x6337a5be893c52e1!2sExport%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`Right at the heart of the Westmoreland Heritage Trail, we're providing the craftsmanship that keeps ${city} homes looking their best.`}
                image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070&auto=format&fit=crop"
            />

            <RelatedProjects city={city} />

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12170.8436402434!2d-79.6231!3d40.4187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ef1f79391ab1%3A0x6337a5be893c52e1!2sExport%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Westmoreland Heritage Trail / Export Trailhead",
                        text: "We frequently serve the residential neighborhoods bordering the trail, bringing modern remodeling to this historic corridor."
                    }
                ]}
            />

            <ServiceFAQ faqs={faqs} title={`${city} Remodeling FAQ`} />
        </>
    );
};

export default Export;
