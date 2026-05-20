/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /* ===== MEKLUC FREIGHT V3 — Charte v2.2 + Direction Artistique V3 ===== */
      colors: {
        mekluc: {
          /* Bordeaux primaire */
          bordeaux: '#800020',
          'bordeaux-deep': '#5C0017',
          'bordeaux-soft': '#A04050',
          /* Carmin — hover, interactions */
          carmin: '#D00038',
          /* Encre — texte principal */
          ink: '#1A1612',
          'ink-soft': '#3D3530',
          /* Charcoal — texte secondaire */
          charcoal: '#6B645E',
          /* Mute — labels, captions (V4.7 PATCH P1 WCAG : 9D958E -> 776E67 = 4.55:1) */
          mute: '#776E67',
          /* Lignes, séparateurs */
          line: '#D8CFC2',
          'line-soft': '#E8E0D2',
          /* Surfaces — V3.6 PATCH: all WHITE */
          cream: '#FFFFFF',
          'cream-deep': '#F5F5F5',
          paper: '#FFFFFF',
          ivory: '#FFFFFF',
          /* Cuivre — accent secondaire (V4.7 PATCH P1 WCAG : B07A4F -> 95643E = 5.04:1) */
          copper: '#95643E',
          'copper-deep': '#7A5234',
          /* Statut */
          success: '#2F6B3F',
          alert: '#8B3A2F',

          /* Legacy aliases (backward compat during migration) */
          dark: '#1A1612',
          anthracite: '#3D3530',
          gray: '#6B645E',
          'gray-light': '#776E67',
          surface: '#F7F2E8',
          border: '#D8CFC2',
          navy: '#1A1612',
          orange: '#95643E',
        },
      },
      fontFamily: {
        /* V4.0 — Plus Jakarta Sans partout (display + serif + sans) */
        display: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
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
