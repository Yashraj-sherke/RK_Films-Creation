# RK Photography – Premium Cinematic Photography & Videography 📸

<div align="center">
  <p>A luxury, modern photography brand and client booking platform built with Next.js 15, TypeScript, and Tailwind CSS.</p>
</div>

---

## 🌟 Overview

RK Photography is a high-converting, production-ready website designed for a professional photography and videography studio. It features a cinematic, mobile-first design with smooth framer-motion animations, comprehensive service discovery, a dynamic masonry portfolio, and a fully functional multi-step booking system.

The application is engineered to feel like a premium brand experience, avoiding the "standard portfolio" look in favor of a **luxury business management platform**.

## ✨ Visual Showcase

*(Note: Save the screenshots you took into the `public/screenshots/` directory with these names, or update the paths below to match your files!)*

### 1. Home Page Hero Experience
<img width="1918" height="905" alt="Screenshot 2026-05-10 173901" src="https://github.com/user-attachments/assets/deb3d113-01c3-454e-a06b-0e984b9e7050" />


### 2. Services Discovery
<img width="1919" height="913" alt="Screenshot 2026-05-10 173922" src="https://github.com/user-attachments/assets/1f95c893-8f86-46c1-8296-c1db7fb6a1a4" />


### 3. Transparent Pricing
<img width="1919" height="907" alt="Screenshot 2026-05-10 173948" src="https://github.com/user-attachments/assets/f606bfec-9f27-4346-a15e-543002d47289" />


---

## 🚀 Key Features

- **Cinematic UI/UX:** Dark mode aesthetics with gold accents, glassmorphism, and premium typography (Playfair Display & Inter).
- **Smooth Animations:** Integrated `framer-motion` for scroll effects, page transitions, staggering grids, and animated counters.
- **Dynamic Portfolio:** Masonry grid layout with a custom fullscreen interactive lightbox.
- **Service Catalog:** Detailed pages for weddings, pre-weddings, maternity, products, and cinematic films.
- **Multi-Step Booking:** A professional, responsive booking system capturing event details and client information.
- **SEO Optimized:** Full meta-tag implementation, clean semantic HTML, and fast loading Next.js App Router architecture.
- **Fully Responsive:** Beautifully crafted mobile-first experiences across all devices.

## 🛠️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVGs
- **Fonts:** `next/font/google` (Playfair Display, Inter, Poppins)

## 📁 Project Structure

```text
rk-photography/
├── public/                 # Static assets and images
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── about/          # About Us Page
│   │   ├── blog/           # Blog Listing & Articles
│   │   ├── booking/        # Multi-Step Booking System
│   │   ├── contact/        # Contact Form & Details
│   │   ├── faq/            # Frequently Asked Questions
│   │   ├── portfolio/      # Masonry Portfolio Gallery
│   │   ├── pricing/        # Pricing Packages
│   │   └── services/       # Services Catalog & Detail Pages
│   ├── components/         # Reusable React Components
│   │   ├── layout/         # Navbar & Footer
│   │   └── ui/             # Section Headings, Animated Counters, etc.
│   └── lib/                # Utility Functions & Data
│       └── data.ts         # Centralized Data Store
└── tailwind.config.ts      # Tailwind Configuration
```

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System

The application uses a carefully curated design system defined in `globals.css`:

- **Primary Colors:** Warm White (`#f5f2eb`), Gold (`#c9a84c`), Dark Gold (`#a38533`)
- **Backgrounds:** Deep Black (`#0a0a0a`), Black Light (`#141414`), Black Medium (`#1a1a1a`)
- **Typography:**
  - `font-display`: Playfair Display (Headings)
  - `font-sans`: Inter (Body text)
  - `font-accent`: Poppins (Small caps, buttons, tags)

## 📄 License

This project is licensed under the MIT License.
