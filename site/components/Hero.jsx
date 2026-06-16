'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Counter from './ui/Counter';
import { heroStats, company } from '@/lib/data';

const ease = [0.22, 0.7, 0.3, 1];

// Headline split into FIXED lines (always 3) — each line stays on one row.
// Font scales fluidly so the longest line never overflows at any width.
const lines = [
  [{ t: 'Engineering' }, { t: 'reliable' }],
  [{ t: 'power' }, { t: 'for' }, { t: 'mission-critical', accent: true }],
  [{ t: 'operations.' }],
];

export default function Hero() {
  let idx = -1;
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink">
      {/* Background with slow zoom-in */}
      <motion.div
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/manufacturing/production-line.jpg"
          alt="Mark Potentia generator manufacturing line"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
      </motion.div>

      {/* Center-weighted overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(115% 80% at 50% 35%, transparent 30%, rgba(6,9,15,0.85) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-grid-fade bg-[size:64px_64px] opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/15 blur-[170px]" />

      {/* Intro curtain - fades away to reveal */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
        className="pointer-events-none absolute inset-0 z-20 bg-ink"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="shell-wide w-full pt-28 pb-16 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-accent/70 md:w-10" />
            <span className="eyebrow text-fg-muted">
              {company.positioning} · Since 1996
            </span>
            <span className="h-px w-8 bg-accent/70 md:w-10" />
          </motion.div>

          {/* Headline - fixed 3 lines, masked word reveal */}
          <h1 className="mt-7">
            <span className="h-display block text-[clamp(2rem,8.2vw,2.6rem)] leading-[1.12] text-fg md:text-[clamp(1.55rem,5.4vw,4.4rem)] md:leading-[1.05]">
              {lines.map((line, li) => (
                <span key={li} className="block whitespace-normal md:whitespace-nowrap">
                  {line.map((w, wi) => {
                    idx += 1;
                    const delay = 0.5 + idx * 0.085;
                    return (
                      <span
                        key={wi}
                        className={`inline-block overflow-hidden pb-[0.12em] align-bottom ${
                          wi < line.length - 1 ? 'mr-[0.26em]' : ''
                        }`}
                      >
                        <motion.span
                          initial={{ y: '120%' }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.85, delay, ease }}
                          className={`inline-block ${
                            w.accent
                              ? 'bg-accent-grad bg-clip-text text-transparent'
                              : ''
                          }`}
                        >
                          {w.t}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </span>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-fg-muted md:text-lg"
          >
            For 29 years, Mark Potentia has designed, manufactured and supported
            diesel generating systems from 5 to 750 KVA — built to original-equipment
            standard and trusted across India&apos;s most demanding industries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get a Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#products" className="btn-ghost">
              Explore Solutions
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease }}
            className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="bg-base/70 px-6 py-6 backdrop-blur-sm">
                <div className="h-display text-3xl text-fg md:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs text-fg-dim">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-label text-fg-dim">Scroll</span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-line">
          <motion.span
            animate={{ y: [3, 14, 3], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-1.5 h-1.5 w-1 rounded-full bg-accent"
          />
        </span>
      </motion.div>
    </section>
  );
}
