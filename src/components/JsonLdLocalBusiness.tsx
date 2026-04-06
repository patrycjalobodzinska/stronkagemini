import { siteConfig, absoluteUrl } from '@/lib/seo';

/** Schema.org – lokalna firma (strona główna). */
export function JsonLdLocalBusiness() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.0204411,
      longitude: 22.0142894,
    },
    areaServed: {
      '@type': 'City',
      name: 'Rzeszów',
    },
    sameAs: [
      'https://www.facebook.com/gemini.monitoringkamer',
      'https://www.instagram.com/p/Bfv7JfjBL9F/?img_index=1',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
