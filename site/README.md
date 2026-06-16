# Mark Potentia — Enterprise Website

A premium, enterprise-grade marketing site for **Mark Potentia Pvt. Ltd.**, a power
infrastructure & energy-solutions manufacturer (diesel gensets, acoustic enclosures,
control systems — 5–750 KVA).

Built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, and **Framer Motion**.

## Run

```bash
cd site
npm install
npm run dev      # http://localhost:3000  (development)
# or
npm run build && npm run start   # production
```

## Architecture

```
app/
  layout.jsx        Fonts (Space Grotesk / Inter / IBM Plex Mono), SEO metadata, viewport
  page.jsx          Page composition + Organization JSON-LD structured data
  globals.css       Design tokens, component utilities, logo/portrait treatments
  sitemap.js  robots.js  icon.png
components/
  Nav, Hero, TrustBar, About, Products, WhyChooseUs, OEM, Industries,
  Installations, Leadership, Process, SocialProof, Contact, Footer
  ui/  Logo, Reveal (+ Stagger), Counter, SectionHeading, ScrollProgress
lib/data.js         Single source of truth for all copy, stats, products, clients
public/images/      Organized assets (products, manufacturing, installations,
                    leadership, clients, brand, texture)
```

## Content source

All business facts (29+ years, 3,000+ installations, 1,111+ clients, 5–750 KVA range,
Ashok Leyland OEM, leadership, client roster, contact details) are derived from
markpotentia.in and centralized in `lib/data.js` for easy editing.

## Images

- **Authentic company assets** (originals in the project `IMAGES/` folder) are used for
  all products, manufacturing, installations, leadership and client logos.
- **Supplementary atmospheric imagery** in `public/images/texture/` is royalty-free
  (Unsplash, commercial-use) for the control-room, power-grid and data-center backdrops.

## Design system

- Dark "industrial" base (`#06090F` / `#0A0E15`) with an electric blue → signal-green
  accent gradient echoing the original brand mark.
- Type: Space Grotesk (display), Inter (body), IBM Plex Mono (technical labels).
- Motion: restrained scroll reveals, animated counters, marquee logo wall, scroll
  progress bar; respects `prefers-reduced-motion`.

The contact form is front-end only (no backend wired). Connect it to your CRM / email
handler in `components/Contact.jsx` (`onSubmit`).
