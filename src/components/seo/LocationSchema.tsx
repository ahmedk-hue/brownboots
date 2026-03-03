
import { Helmet } from 'react-helmet-async';

interface LocationSchemaProps {
    name: string;
    description: string;
    image: string;
    url: string;
    telephone: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    areaServed: { name: string; wikidataId?: string }[];
    hasMap: string;
}

const LocationSchema = (props: LocationSchemaProps) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": props.name,
        "description": props.description,
        "image": props.image,
        "@id": props.url,
        "url": props.url,
        "telephone": props.telephone,
        "address": {
            "@type": "PostalAddress",
            ...props.address
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": props.geo.latitude,
            "longitude": props.geo.longitude
        },
        "areaServed": props.areaServed.map(area => ({
            "@type": "City",
            "name": area.name,
            ...(area.wikidataId && { "sameAs": `https://www.wikidata.org/wiki/${area.wikidataId}` })
        })),
        "hasMap": props.hasMap
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default LocationSchema;
