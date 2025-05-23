# Toca Website

[DEMO](https://toca-test-six.vercel.app/)

A modern, responsive website built with Next.js 15 and Sanity CMS. This project features dynamic content management, beautiful UI components, and a custom admin interface.

## Features

- 🚀 Built with Next.js 15 and React 19
- 📝 Sanity CMS integration for content management
- 🎨 Custom UI components with Tailwind CSS
- 🖼️ Optimized image handling with next/image and Sanity Image URL builder
- 📱 Fully responsive design
- 🎠 Interactive carousels using Embla Carousel
- 💅 Custom fonts (Brandon Grotesque and Karl Geoff)
- ⚡ Turbopack for fast development experience

## Prerequisites

- Node.js 18 or later
- Bun (recommended) or npm/pnpm
- Sanity account and project credentials

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Create a `.env.local` file in the root directory with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Start the development server:

```bash
pnpm dev
# or
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).
The Sanity Studio will be available at [http://localhost:3000/admin](http://localhost:3000/admin).

## Project Structure

- `src/app` - Next.js app router pages and layouts
- `src/components` - React components organized by category
  - `layout` - Layout components including header and navigation
  - `sections` - Main content section components
  - `ui` - Reusable UI components
  - `utility` - Utility components and helpers
- `src/sanity` - Sanity CMS configuration and schemas
- `src/styles` - Global styles and Tailwind configuration
- `public` - Static assets

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
