/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /* ===== MEKLUC FREIGHT — Charte v3 (V5.0, validé Gracia juin 2026) ===== */
      colors: {
        mekluc: {
          /* Bordeaux primaire #7a1f2a */
          bordeaux: '#7a1f2a',
          'bordeaux-deep': '#5e1620',
          'bordeaux-soft': '#9a4450',
          /* Carmin — hover, interactions */
          carmin: '#b8323f',
          /* Encre — texte principal (brun-noir chaud) */
          ink: '#2c1810',
          'ink-soft': '#4a3328',
          /* Charcoal — texte secondaire (gris WCAG-safe) */
          charcoal: '#6B645E',
          /* Mute — labels, captions (WCAG 4.55:1) */
          mute: '#776E67',
          /* Lignes, séparateurs */
          line: '#D8CFC2',
          'line-soft': '#E8E0D2',
          /* Surfaces — V5.0 off-white #faf9f5 chaud */
          cream: '#faf9f5',
          'cream-deep': '#f2efe8',
          paper: '#faf9f5',
          ivory: '#ffffff',
          /* OR #c9a84c — accent fonds sombres + boutons (échoue WCAG sur blanc) */
          copper: '#c9a84c',
          'copper-deep': '#b08f3a',
          gold: '#c9a84c',
          'gold-ink': '#8a6a1f', /* or sombre WCAG-safe pour texte sur fond clair */
          /* Statut */
          success: '#2F6B3F',
          alert: '#8B3A2F',

          /* Legacy aliases (backward compat during migration) */
          dark: '#2c1810',
          anthracite: '#4a3328',
          gray: '#6B645E',
          'gray-light': '#776E67',
          surface: '#faf9f5',
          border: '#D8CFC2',
          navy: '#2c1810',
          orange: '#c9a84c',
        },
      },
      fontFamily: {
        /* V5.0 — Playfair Display (titres) + Inter (corps), IBM Plex Mono (labels) */
        display: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        /* V3 typographic scale — editorial magazine (sizes increased for readability) */
        'display': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.02em', fontWeight: '400' }],
        'h1': ['clamp(2.75rem, 5.5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '400' }],
        'h2': ['clamp(2.25rem, 4.5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h3': ['1.875rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h4': ['1.375rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.375rem)', { lineHeight: '1.6' }],
        'body': ['1.0625rem', { lineHeight: '1.65' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],
        'caption': ['0.8125rem', { lineHeight: '1.4' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '500' }],
        'mono-sm': ['0.75rem', { lineHeight: '1', letterSpacing: '0.16em', fontWeight: '400' }],
      },
      maxWidth: {
        'measure': '1200px',
        'content': '800px',
      },
      spacing: {
        'gutter': 'clamp(1.25rem, 4vw, 3rem)',
        'section-gap': 'clamp(5rem, 12vw, 10rem)',
      },
      borderRadius: {
        'mekluc': '0px', /* V3: angles droits, pas de rounded */
      },
    },
  },
  plugins: [],
};
