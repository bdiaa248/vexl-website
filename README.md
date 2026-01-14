# 🌐 VEXL | The Architects of Spatial Intelligence

[![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=vexl-website)](https://vexl.vercel.app)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> **"Bridging the gap between academic theory and market reality in GeoAI & Spatial Computing."**

## 🚀 Overview

**VEXL** is a cutting-edge digital platform designed to serve as a hub for the next generation of Geo-Engineers. It is not just a landing page; it is a **Progressive Web Application (PWA)** built with the latest web technologies to deliver a cinematic, high-performance user experience.

The platform serves two main pillars:
1.  **The Studio:** Delivering high-end spatial data solutions and consultancy.
2.  **The Academy:** Empowering students with market-ready skills in GIS, RS, and AI.

---

## ⚡ Tech Stack & Tools

This project is engineered for **speed, scalability, and visual impact**:

* **Core:** [React 19](https://react.dev/) (Latest Features), [Vite](https://vitejs.dev/) (Next Gen Bundler).
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Type Safety).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-First), Custom Glassmorphism UI.
* **Animations:** [Framer Motion](https://www.framer.com/motion/) (Complex Orchestration), [Three.js / React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (3D Elements).
* **Performance:** Code Splitting, Lazy Loading, Image Optimization.
* **Analytics:** Microsoft Clarity, Google Search Console.
* **Integrations:** EmailJS (Serverless Contact System).
* **Deployment:** Vercel Edge Network.

---

## 🌟 Key Features

* **Cinematic UI/UX:** Dark-themed, immersive interface with fluid animations.
* **High Performance:** Scored **96/100** in Accessibility and **100/100** in Best Practices on Lighthouse.
* **Responsive Design:** Fully optimized for all devices (Mobile, Tablet, Desktop).
* **SEO Optimized:** Semantic HTML5, Dynamic Meta Tags, Sitemap, and Schema Markup.
* **Secure:** Environment variables protection and sanitized inputs.

---

## 🛠️ Installation & Local Setup

To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/bdiaa248/vexl-website.git](https://github.com/bdiaa248/vexl-website.git)
    cd vexl-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your keys:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 📊 Project Structure

```bash
vexl-website/
├── public/             # Static assets (sitemap, robots.txt, images)
├── src/
│   ├── components/     # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/          # Main route pages (Home, Studio, Academy)
│   ├── App.tsx         # Main Application Entry
│   └── index.css       # Tailwind & Global Styles
├── package.json        # Dependencies & Scripts
├── vite.config.ts      # Vite Configuration
└── README.md           # Documentation
