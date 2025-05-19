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
      colors: {
        // Primary colors
        'tech-dark': '#0f172a', // Dark Blue Slate
        'tech-blue': '#38bdf8', // Sky Blue
        'tech-amber': '#facc15', // Amber
        
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
      },
      backgroundImage: {
        'grid-pattern': "url('/images/grid-pattern.svg')",
        'tech-gradient': 'linear-gradient(to bottom right, #0f172a, #1e293b)',
      },
    },
  },
  plugins: [],
};
