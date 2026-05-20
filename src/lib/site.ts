/**
 * Mekluc Freight — Site configuration
 * Source unique de verite pour les donnees du site
 */

/**
 * Helper for asset URLs that respects the Astro base path.
 * Use with all /images/, /fonts/, etc. references in templates.
 * Example: <img src={asset('/images/logos/mekluc.svg')} />
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}

export const site = {
  name: 'Mekluc Freight',
  tagline: 'With us nothing stands in your way',
  url: 'https://meklucfreight.co.za',
  domain: 'meklucfreight.co.za',

  /* Contact — D4 acte 18/05/2026 */
  phone: '+27 11 392 1699',
  phoneRaw: '27113921699',
  email: 'info@mekluc.co.za',
  /**
   * WhatsApp temporary mobile (Gracia personal/business mobile)
   * until WhatsApp Business Cloud API setup July 2026 (D5)
   * Switch back to dedicated business number then.
   * Main phone +27 11 392 1699 stays displayed publicly — wa.me uses mobile only.
   */
  whatsapp: '27837456483',

  /* Adresse — D2 acte, Isando supprime */
  address: {
    short: 'Morningside, Sandton, Johannesburg',
    full: 'Morningside, Sandton, Johannesburg, South Africa',
    city: 'Sandton',
    province: 'Gauteng',
    country: 'South Africa',
  },

  /* Identity */
  founded: 2007,
  yearsActive: new Date().getFullYear() - 2007,
  ceo: 'Anne-Marie Mandtoumbi',

  /* Accreditations — ordre impose */
  accreditations: [
    { key: 'aeo', label: 'AEO South Africa', short: 'AEO' },
    { key: 'sars', label: 'SARS Customs Clearing Agent', short: 'SARS' },
    { key: 'bee', label: 'Level 1 B-BBEE', short: 'B-BBEE L1' },
    { key: 'saaff', label: 'SAAFF Member', short: 'SAAFF' },
    { key: 'bwo', label: '100% Black Woman Owned', short: 'BWO' },
  ],

  /* Social */
  social: {
    linkedin: 'https://www.linkedin.com/company/mekluc-freight',
    facebook: 'https://www.facebook.com/meklucfreight',
    whatsappLink: 'https://wa.me/27837456483',
  },

  /* SEO defaults */
  seo: {
    titleTemplate: '%s | Mekluc Freight',
    defaultDescription: '19 years of multimodal freight forwarding from South Africa. AEO accredited. Level 1 B-BBEE. 100% Black Woman Owned.',
  },
} as const;
