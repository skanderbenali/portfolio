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
        // Colors moved to CSS variables in globals.css
        // Using custom utility classes instead of Tailwind for tech colors
      },
      boxShadow: {
        // Glow effects moved to CSS variables in globals.css
        // Using custom utility classes instead of Tailwind
      },
      backgroundImage: {
        'grid-pattern': "url('/portfolio/images/grid-pattern.svg')",
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
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
