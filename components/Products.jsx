'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { products } from '@/lib/data';

function ProductCard({ p, featured }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-1 ${
        featured ? 'lg:col-span-2 lg:flex-row' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-ink ${
          featured ? 'aspect-[4/3] lg:aspect-auto lg:w-1/2' : 'aspect-[16/11]'
        }`}
      >
        <Image
          src={`/images/${p.image}`}
          alt={p.name}
          fill
          sizes={featured ? '(max-width:1024px) 100vw, 640px' : '(max-width:768px) 100vw, 420px'}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-accent-soft backdrop-blur">
          {p.range}
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-7 ${featured ? 'lg:justify-center lg:p-10' : ''}`}>
        <h3 className="h-display text-xl text-fg md:text-2xl">{p.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{p.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.highlights.map((h) => (
            <span
              key={h}
              className="rounded-md border border-line bg-base px-2.5 py-1 font-mono text-[10px] text-fg-dim"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="text-[11px] text-fg-dim">
            {p.applications.slice(0, 3).join(' · ')}
          </span>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-medium text-accent-soft transition-colors hover:text-fg"
          >
            Enquire
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-signal/10 blur-[150px]" />
      <div className="shell-wide relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Products & Solutions"
            title="A complete power portfolio, single-source."
            intro="From 15–250 KVA generating sets to acoustic enclosures, control systems and sheet-metal fabrication — every product is engineered, built and supported in-house."
          />
          <Reveal variant="fade" className="hidden md:block">
            <a href="#contact" className="btn-ghost text-sm">
              Request full specification
            </a>
          </Reveal>
        </div>

        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} featured={false} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
