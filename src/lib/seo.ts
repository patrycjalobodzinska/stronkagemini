/** Bazowy adres witryny (np. w Vercel: Project → Environment → NEXT_PUBLIC_SITE_URL). */
export const siteConfig = {
  name: 'GEMINI',
  legalName: 'GEMINI',
  defaultDescription:
    'Monitoring, kamery CCTV, drzwi Gerda i DRE, bramy garażowe, alarmy, rolety – Rzeszów i okolice. Ponad 20 lat doświadczenia. Wycena z dojazdem.',
  /** Kanoniczny URL bez końcowego slasha */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.geminirzeszow.pl'
  ).replace(/\/$/, ''),
  locale: 'pl_PL',
  /** Obraz OG (ścieżka względem public/) */
  ogImage: '/Postprodukcja_4.png',
  address: {
    street: 'al. Tadeusza Rejtana 36',
    city: 'Rzeszów',
    postalCode: '35-310',
    region: 'Podkarpackie',
    country: 'PL',
  },
  phone: '+48513001600',
  email: 'janusz@geminirzeszow.pl',
  geo: {
    region: 'PL-PK',
    placename: 'Rzeszów',
  },
} as const;

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${p}`;
}
