'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { projects } from '@/lib/data';

// Bento span map for visual rhythm
const spans = [
  'md:col-span-7 md:row-span-2',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-7',
  'md:col-span-5',
];

function Tile({ p, span, i }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.21, 0.6, 0.35, 1] }}
      className={`group relative min-h-[220px] overflow-hidden rounded-2xl border border-line bg-ink ${span}`}
    >
      <Image
        src={`/images/${p.image}`}
        alt={p.title}
        fill
        sizes="(max-width:768px) 100vw, 640px"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-6 transition-transform duration-500 group-hover:translate-y-0">
        <div className="font-mono text-[10px] uppercase tracking-label text-accent-soft">{p.meta}</div>
        <div className="mt-1.5 font-display text-lg text-fg">{p.title}</div>
      </figcaption>
    </motion.figure>
  );
}

export default function Installations() {
  return (
    <section id="projects" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="shell-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Installations & Projects"
            title="3,000+ sites, commissioned and supported."
            intro="A selection from three decades of standby plant, mobile units and control rooms delivered across India."
          />
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-display text-5xl text-fg">3K+</span>
            <span className="max-w-[120px] text-xs text-fg-dim">Installations across the country</span>
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-12">
          {projects.map((p, i) => (
            <Tile key={p.title} p={p} span={spans[i] || 'md:col-span-4'} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
