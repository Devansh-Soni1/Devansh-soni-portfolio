# Devansh Soni — Portfolio

Boys-type dark portfolio with 3D effects, glow animations & particle network.

## Tech Stack
- **React 18** + **Vite**
- **Framer Motion** — animations & scroll reveals
- **Tailwind CSS** — utility styling
- **JetBrains Mono + Orbitron + Rajdhani** — fonts

## Features
- 🖱️ Custom glowing cursor with lagging ring
- 🃏 3D card tilt effect on mouse move
- ✨ Connected particle network background
- ⌨️ Typewriter with multiple roles
- 🔢 Counter animation on scroll
- 📜 Scroll reveal on every section
- 💥 Click burst particles
- 📡 Scan line animations
- 🔵 Blue / Cyan / Red boys color palette

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── App.jsx          ← root, click burst
│   ├── Cursor.jsx       ← custom cursor
│   ├── ParticleCanvas.jsx
│   ├── BgGrid.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Card3D.jsx
│   ├── StatsBar.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Background.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHeader.jsx
│   └── useTypewriter.js
├── data/
│   └── data.js          ← all content here, easy to edit
├── index.css
└── main.jsx
```

## Customization

All your personal info, projects, skills & education is in **`src/data/data.js`**.  
Just edit that file — no need to touch any component.

## Deploy

Works on **Vercel**, **Netlify**, or **GitHub Pages** (with Vite base config).

```bash
npm run build
# upload /dist folder
```
