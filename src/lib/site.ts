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

  /* Accreditations — ordre impose (V4.4 2026-05-20 : SAAFF Member retire — voir terms.astro pour STC) */
  accreditations: [
    { key: 'aeo', label: 'AEO South Africa', short: 'AEO' },
    { key: 'sars', label: 'SARS Customs Clearing Agent', short: 'SARS' },
    { key: 'bee', label: 'Level 1 B-BBEE', short: 'B-BBEE L1' },
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

  /* Promotion bar (V4.6.4 — Deo 2026-05-20)
   * Active by default with the AEO trust message (Deo: "notre arme atout pour
   * les importation"). Replace label/text/ctaHref when a commercial promo
   * is live (e.g. DRC mining rate, citrus to GCC, pharma cold-chain).
   * To hide the bar entirely, set active=false.
   *
   * Sample replacements:
   *   - { label: 'PROMO', text: 'Special rate to DRC mining corridor — book before end of June.', ctaText: 'Get the rate', ctaHref: '/contact?quote=1&promo=drc' }
   *   - { label: 'NEW',   text: 'Direct sea sailing to GCC every Friday — citrus, wine, table grapes.', ctaText: 'Book a slot',  ctaHref: '/contact?quote=1&promo=gcc' }
   *   - { label: 'PHARMA', text: 'Free GDP audit on your first cold-chain shipment.', ctaText: 'Claim it', ctaHref: '/contact?quote=1&promo=pharma' }
   */
  promo: {
    active: true,
    label: 'AEO',
    text: 'Top 1% AEO-accredited freight forwarder — faster customs, less inspection, mutual recognition with EU/CN/JP/CH.',
    ctaText: 'Request your quote',
    ctaHref: '/contact?quote=1',
  },
} as const;
