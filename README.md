# ⚡ Ben 10 Character Universe

> **The Definitive Fan Encyclopedia, Interactive Omnitrix Hub & Canonical Research Archive**  
> Strictly focused on the Prime Timeline Trilogy: *Ben 10 (2005)*, *Ben 10: Alien Force (2008)*, and *Ben 10: Ultimate Alien (2010)*.

---

## 🌟 Key Features

- **🧬 Authentic Alien Force Transformation Sequence**:
  - Recreates the iconic *Ben 10: Alien Force* transformation sequence with the Recalibrated Omnitrix, green upward laser scanner, biological X-ray skeletal morph, and emerald flash detonation.
  - Interactive Codon Selector for Swampfire, Humungousaur, Big Chill, Chromastone, Echo Echo, and Alien X.
  - Ambient Web Audio synthesizers (zero external audio dependencies).
- **⌚ Interactive Omnitrix Dial**:
  - Live Codon Stream switching interface with interactive biometric sliders (Energy Output, Durability, Agility).
- **📊 Biometric Radar & Combat Comparison**:
  - Side-by-side alien matchup tool (`/compare`) with dynamic attribute delta bars and overlapping SVG radar charts.
- **🛡️ Evidence-Backed Fact & Citation Architecture**:
  - Rigorous canonical verification model ensuring non-canon reboots and fan wikis are filtered out.
- **📱 100% Fully Responsive Design**:
  - Custom sci-fi dark HUD styling tailored across Mobile, Tablet, Laptop, and 4K Desktop viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: HTML5 Web Audio API Synth Engine
- **Database Architecture**: PostgreSQL / Supabase Schema (`supabase/migrations/001_initial_schema.sql`)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/emon35410/Ben-10.git
   cd ben10-universe
   ```

2. **Install dependencies**:
   ```bash
   npm run dev
   # or inside the Next.js app:
   cd ben10-universe && npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🌐 Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is through [Vercel](https://vercel.com):

1. Push this repository to your GitHub account.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Set the **Root Directory** to `ben10-universe` (if deploying from monorepo root) or leave as root.
5. Click **Deploy**!

---

## 📜 Canonical Scope & Disclaimer

This project is an educational, evidence-backed fan encyclopedia strictly covering the Prime Timeline (2005–2012).  
All Ben 10 character rights, names, and original assets belong to **Cartoon Network** and **Warner Bros. Discovery**.
