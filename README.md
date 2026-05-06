# CUTBAE Barbershop - Landing Page

A premium, high-performance landing page for **CUTBAE Barbershop** in Karawang. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, featuring a modular architecture and immersive design aesthetics.

## 🚀 Technologies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescript.org/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) via `next/font` (DM Sans & DM Serif Display)
- **Icons**: Custom SVG Components

## 🏗️ Project Structure

The project follows a modular architecture for better maintainability:

```text
/app
  ├── page.tsx          # Main entry point (composition of sections)
  ├── layout.tsx        # Root layout & Metadata
  ├── Hero.tsx          # Hero section with cinematic background
  ├── About.tsx         # About section with brand watermark
  ├── Services.tsx      # Categorized service list
  ├── Gallery.tsx       # Work showcase with image grid
  └── ...               # Other core sections
/components
  ├── data.ts           # Centralized content & configuration
  ├── hooks.ts          # Custom React hooks (Scroll Reveal, etc.)
  ├── Icons.tsx         # SVG Icon components
  ├── Navbar.tsx        # Responsive navigation
  ├── Footer.tsx        # Brand footer
  └── Shared.tsx        # Reusable UI primitives
/public                 # Static assets (images, logos, SVGs)
```

## ✨ Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Cinematic Hero**: Background video/image with high-contrast overlays.
- **Modular Components**: Each section is isolated for easy updates.
- **Centralized Data**: Change prices or services in `data.ts` without touching UI code.
- **Scroll Animations**: Smooth intersection-observer based reveal effects.
- **WhatsApp Integration**: Direct booking links and a sticky chat button.
- **SEO Optimized**: Semantic HTML and proper Next.js metadata.

## 🛠️ Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📄 License

This project is private and intended for CUTBAE Barbershop.
