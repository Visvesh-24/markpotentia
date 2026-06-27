'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { company } from '@/lib/data';

const ease = [0.22, 0.7, 0.3, 1];

// Headline split into FIXED lines — each line is a block; words reveal in turn.
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
          className="object-cover object-center opacity-40"
        />
      </motion.div>

      {/* Left-weighted overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
      <div className="absolute inset-0 bg-grid-fade bg-[size:64px_64px] opacity-25" />
      {/* Accent glow behind the floating genset */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-[420px] w-[460px] -translate-y-1/2 rounded-full bg-accent/15 blur-[150px] lg:block" />

      {/* Intro curtain */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
        className="pointer-events-none absolute inset-0 z-20 bg-ink"
      />

      <div className="shell-wide relative z-10 grid min-h-screen items-center gap-10 pt-28 pb-16 lg:grid-cols-10 lg:gap-10">
        {/* LEFT — copy (70%, left-aligned on all devices) */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-accent/70" />
            <span className="eyebrow text-fg-muted">
              {company.positioning} · Since 1996
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-6">
            <span className="h-display block text-[clamp(2.1rem,7.6vw,2.7rem)] leading-[1.08] text-fg lg:text-[clamp(2.6rem,4vw,4rem)] lg:leading-[1.04]">
              {lines.map((line, li) => (
                <span key={li} className="block">
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
                            w.accent ? 'bg-accent-grad bg-clip-text text-transparent' : ''
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
            className="mt-7 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg"
          >
            For three decades, Mark Potentia has designed, manufactured and supported
            diesel generating systems from 15 to 250 KVA — built to original-equipment
            standard and trusted across Tamil Nadu and Kerala.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
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
        </div>

        {/* RIGHT — floating genset (30%) */}
        <div className="relative flex items-center justify-center lg:col-span-3 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="relative mx-auto w-full max-w-[340px] sm:max-w-[440px] lg:mx-0 lg:w-[540px] lg:max-w-none"
          >
            {/* soft floor glow */}
            <div className="pointer-events-none absolute inset-x-6 bottom-2 h-8 rounded-[50%] bg-black/50 blur-2xl" />
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/products/hero-img.png"
                alt="LEYPOWER 15 kVA Ashok Leyland diesel generator by Mark Potentia"
                width={1157}
                height={859}
                priority
                className="h-auto w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
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
