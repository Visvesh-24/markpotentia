'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';
import { oemPoints } from '@/lib/data';

export default function OEM() {
  return (
    <section id="oem" className="relative overflow-hidden bg-ink py-28 md:py-36">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/manufacturing/fabrication.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/60" />
        <div className="absolute inset-0 bg-grid-fade bg-[size:64px_64px] opacity-30" />
      </div>

      <div className="shell-wide relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal variant="fade">
              <span className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-accent/60" />
                OEM Excellence
              </span>
            </Reveal>
            <Reveal>
              <h2 className="h-display mt-5 text-[clamp(2rem,4.6vw,3.4rem)] text-fg">
                Built to original-equipment standard. Not assembled to a price.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
                Mark Potentia is an authorised Ashok Leyland OEM, building 15–250 KVA
                generating sets to the engine maker&apos;s own specification rather than
                assembling from mixed sourcing. Engine integration, enclosure fabrication,
                control panels and load testing are completed in-house under one quality
                system — every set traceable from raw material to commissioning, and backed
                by our own service team across Tamil Nadu and Kerala. The same sheet-metal
                fabrication discipline supplies enclosures and assemblies to clients across
                India and beyond.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {oemPoints.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.07} className="bg-ink/70 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5l3.2 3L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-medium text-fg">{o.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-fg-dim">{o.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: badge / featured image card */}
          <div className="lg:col-span-6 lg:pl-8">
            <Reveal variant="scale" className="relative overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/manufacturing/cutting-sparks.jpg"
                alt="Precision fabrication under OEM quality control"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-line bg-ink/70 p-5 backdrop-blur-md"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-label text-accent-soft">
                    Authorised Engine OEM
                  </div>
                  <div className="mt-1 font-display text-lg text-fg">Ashok Leyland</div>
                </div>
                <div className="text-right">
                  <div className="h-display text-2xl text-fg">100%</div>
                  <div className="text-[10px] text-fg-dim">Factory load-tested</div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
