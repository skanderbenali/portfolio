# Personal Portfolio Website

A professional portfolio website for a CTO & Full-Stack Developer with 5+ years of experience in web development. This responsive, modern website showcases technical skills, projects, and professional experience.

## Features

- **Modern UI/UX Design**: Sleek and professional interface with animations and transitions
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between color themes based on preference
- **Animated Sections**: Using Framer Motion for smooth animations and transitions
- **Multiple Content Areas**:
  - Hero section with call-to-action
  - About Me section with professional background
  - Skills section with filterable categories
  - Projects showcase with filtering by technology
  - Certifications display
  - Contact form with social links

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form
- **Theme Switching**: next-themes
- **Email Integration**: EmailJS

## Prerequisites

You need:

- Node.js 18.18.0 or later
- npm or yarn

## Getting Started

1. **Update Node.js**: This project requires Node.js version 18.18.0 or newer

2. **Install dependencies**:

```bash
npm install
# or
yarn install
```

3. **Run the development server**:

```bash
npm run dev
# or
yarn dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** with your browser to see the result.

## Customization

- Update personal details in data files (`src/data/` directory)
- Add your own projects, skills, and certifications
- Customize colors in the TailwindCSS config
- Add your own images to the `public/images/` directory

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com/new), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/).

```bash
npm run build
```

This command creates an optimized production build of your website.
