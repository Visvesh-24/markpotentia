'use client';

import Image from 'next/image';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { timeline } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-base py-28 md:py-36">
      <div className="shell-wide">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: narrative */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="The Company"
              title="Three decades of building dependable power."
              intro="Mark Potentia is a power-infrastructure manufacturer, not a reseller. Since 1996 we have engineered and built complete generating systems — engine, enclosure, controls and commissioning — under one accountable roof."
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-fg-muted">
              <Reveal delay={0.05}>
                <p>
                  What began as a light-engineering workshop in Coimbatore has grown into a
                  vertically integrated operation: in-house fabrication, acoustic enclosure
                  manufacturing, control-panel assembly and a 70+ strong engineering and
                  service organisation.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  As an authorised OEM manufacturer for Ashok Leyland diesel engines, every
                  set we deliver is built to original-equipment specification and verified
                  before it leaves the floor — which is why 1,100+ enterprise clients return
                  to us for mission-critical power.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {[
                ['Coimbatore', 'Manufacturing base'],
                ['15–250 KVA', 'Genset capacity band'],
                ['Ashok Leyland', 'Authorised engine OEM'],
              ].map(([k, v]) => (
                <Reveal key={k} variant="fade" className="border-l border-accent/40 pl-4">
                  <div className="h-display text-lg text-fg">{k}</div>
                  <div className="text-xs text-fg-dim">{v}</div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: image stack — stretches to match the left column height */}
          <div className="lg:col-span-6">
            <div className="flex h-full flex-col gap-4">
              {/* Our genset — full unit visible (16:9 tile) */}
              <Reveal
                variant="scale"
                className="aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink"
              >
                <Image
                  src="/images/products/genset.png"
                  alt="LEYPOWER 40 kVA Ashok Leyland diesel generator by Mark Potentia"
                  width={1280}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </Reveal>
              {/* Supporting fabrication imagery — fills the remaining height */}
              <div className="grid grid-cols-3 gap-4 lg:flex lg:min-h-0 lg:flex-1">
                {[
                  ['/images/manufacturing/facility.jpg', 'Mark Potentia manufacturing facility', 0.12],
                  ['/images/manufacturing/cutting-sparks.jpg', 'Precision metal fabrication', 0.2],
                  ['/images/manufacturing/engine-assembly.png', 'Engine integration and assembly', 0.28],
                ].map(([src, alt, d]) => (
                  <Reveal
                    key={src}
                    variant="scale"
                    delay={d}
                    className="aspect-[3/4] overflow-hidden rounded-2xl border border-line lg:aspect-auto lg:h-full lg:flex-1"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={700}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <Reveal variant="fade">
            <span className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" />
              Growth journey
            </span>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
            {timeline.map((t, i) => (
              <Reveal
                key={t.year}
                delay={i * 0.06}
                className="group relative bg-base p-7 transition-colors hover:bg-surface-1"
              >
                <div className="h-display text-2xl text-accent-soft">{t.year}</div>
                <div className="mt-3 font-display text-sm font-medium text-fg">{t.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-fg-dim">{t.body}</p>
                <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
