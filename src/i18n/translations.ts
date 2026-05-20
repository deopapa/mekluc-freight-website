/**
 * Mekluc Freight — i18n translations
 * EN (default) + FR (V1.5)
 * AF placeholder pour V2 2027
 */

export const languages = {
  en: 'English',
  fr: 'Francais',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    /* Navigation */
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',

    /* Utility bar */
    'util.track': 'Track Shipment',
    'util.quote': 'Request Quote',
    'util.whatsapp': 'WhatsApp Us',

    /* Services */
    'services.air': 'Air Freight',
    'services.sea': 'Sea Freight',
    'services.road': 'Road Freight',
    'services.customs': 'Customs Clearing',
    'services.warehousing': 'Warehousing',
    'services.insurance': 'Cargo Insurance',
    'services.packaging': 'Packaging & Crating',
    'services.specialised': 'Specialised Cargo',

    /* Solutions */
    'solutions.export': 'SA Export Diversification',
    'solutions.mining': 'Mining & Project Cargo Africa',
    'solutions.pharma': 'Pharma & Perishables GDP-Ready',

    /* Footer */
    'footer.accreditations': 'Accreditations',
    'footer.careers': 'Careers',
    'footer.news': 'News',
    'footer.sustainability': 'Sustainability',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    /* Common */
    'common.learnMore': 'Learn more',
    'common.getQuote': 'Get a quote',
    'common.callUs': 'Call us',
    'common.emailUs': 'Email us',

    /* Trust signals (V4.4 : 'trust.saaff' retire — voir terms.astro pour STC) */
    'trust.aeo': 'AEO South Africa',
    'trust.sars': 'SARS Customs Clearing Agent',
    'trust.bee': 'Level 1 B-BBEE',
    'trust.bwo': '100% Black Woman Owned',
    'trust.years': '19 years of expertise',

    /* Brand */
    'brand.tagline': 'With us nothing stands in your way',
    'brand.name': 'Mekluc Freight',
  },

  fr: {
    /* Navigation */
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.about': 'A propos',
    'nav.insights': 'Analyses',
    'nav.contact': 'Contact',

    /* Utility bar */
    'util.track': 'Suivre un envoi',
    'util.quote': 'Demander un devis',
    'util.whatsapp': 'WhatsApp',

    /* Services */
    'services.air': 'Fret aerien',
    'services.sea': 'Fret maritime',
    'services.road': 'Transport routier',
    'services.customs': 'Dedouanement',
    'services.warehousing': 'Entreposage',
    'services.insurance': 'Assurance cargo',
    'services.packaging': 'Emballage & Mise en caisse',
    'services.specialised': 'Cargo specialise',

    /* Solutions */
    'solutions.export': 'Diversification export SA',
    'solutions.mining': 'Cargo minier & Projets Afrique',
    'solutions.pharma': 'Pharma & Perissables GDP',

    /* Footer */
    'footer.accreditations': 'Accreditations',
    'footer.careers': 'Carrieres',
    'footer.news': 'Actualites',
    'footer.sustainability': 'Developpement durable',
    'footer.privacy': 'Politique de confidentialite',
    'footer.terms': 'Conditions generales',

    /* Common */
    'common.learnMore': 'En savoir plus',
    'common.getQuote': 'Demander un devis',
    'common.callUs': 'Appelez-nous',
    'common.emailUs': 'Ecrivez-nous',

    /* Trust signals (V4.4 : 'trust.saaff' retire — voir terms.astro pour STC) */
    'trust.aeo': 'AEO Afrique du Sud',
    'trust.sars': 'Agent de dedouanement SARS',
    'trust.bee': 'Niveau 1 B-BBEE',
    'trust.bwo': '100% detenue par une femme noire',
    'trust.years': '19 ans d\'expertise',

    /* Brand */
    'brand.tagline': 'Avec nous rien ne vous arrete',
    'brand.name': 'Mekluc Freight',
  },
} as const;

/** Helper — get translation for current lang */
export function t(lang: Lang, key: keyof typeof translations['en']): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

/** Helper — get lang from URL */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}
