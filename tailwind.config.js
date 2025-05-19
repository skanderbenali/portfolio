/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Font families
        'mono': ['var(--font-ibm-plex-mono)', 'monospace'],
        'body': ['var(--font-ibm-plex-sans)', 'sans-serif'],
        'code': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        // Custom font size for better header scaling
        '2xs': '0.625rem', // For super small labels
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '0.02em' }],
      },
      letterSpacing: {
        'tech': '0.05em', // Tech-inspired letter spacing
        'wide': '0.1em',
      },
      colors: {
        // Primary colors
        'tech-dark': '#0f172a', // Dark Blue Slate
        'tech-blue': '#38bdf8', // Sky Blue
        'tech-amber': '#facc15', // Amber
        'tech-red': '#ef4444', // For errors and warnings
        'tech-green': '#10b981', // For success states
        
        // Accent colors
        'tech-cyan': '#22d3ee', // Data vibes
        'tech-purple': '#a78bfa', // ML/AI touch
        'tech-gray': '#94a3b8', // For text and charts
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(56, 189, 248, 0.5)',
        'glow-cyan': '0 0 15px rgba(34, 211, 238, 0.5)',
        'glow-purple': '0 0 15px rgba(167, 139, 250, 0.5)',
        'glow-amber': '0 0 15px rgba(250, 204, 21, 0.5)',
        'glow-red': '0 0 15px rgba(239, 68, 68, 0.5)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': "url('/images/grid-pattern.svg')",
        'tech-gradient': 'linear-gradient(to bottom right, #0f172a, #1e293b)',
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      lineHeight: {
        'tech': '1.7',
        'relaxed': '1.8',
      },
    },
  },
  plugins: [],
};
