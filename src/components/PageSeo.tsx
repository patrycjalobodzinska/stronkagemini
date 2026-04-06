import { NextSeo } from 'next-seo';
import { absoluteUrl, siteConfig } from '@/lib/seo';

export type PageSeoProps = {
  /** Krótki tytuł (doklejany przez titleTemplate w _app: „… | GEMINI”) */
  title: string;
  description?: string;
  /** Ścieżka kanoniczna, np. "/cameras" lub "/" */
  path: string;
  noindex?: boolean;
  /** Nadpisanie obrazu OG (ścieżka od /public) */
  ogImage?: string;
};

export function PageSeo({
  title,
  description = siteConfig.defaultDescription,
  path,
  noindex = false,
  ogImage,
}: PageSeoProps) {
  const url = absoluteUrl(path);
  const imagePath = ogImage ?? siteConfig.ogImage;
  const imageUrl = absoluteUrl(imagePath);
  const fullTitle = `${title} | GEMINI`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      noindex={noindex}
      nofollow={noindex}
      openGraph={{
        title: fullTitle,
        description,
        url,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: 'website',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: siteConfig.name,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        { name: 'author', content: siteConfig.name },
        { name: 'geo.region', content: siteConfig.geo.region },
        { name: 'geo.placename', content: siteConfig.geo.placename },
      ]}
    />
  );
}
