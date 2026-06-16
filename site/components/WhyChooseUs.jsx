'use client';

import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import Reveal, { Stagger, StaggerItem } from './ui/Reveal';
import Counter from './ui/Counter';
import { differentiators, trustStats } from '@/lib/data';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-base py-28 md:py-36">
      <div className="shell-wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left copy + list */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Why Mark Potentia"
              title="Accountability that survives the warranty period."
              intro="Mixed-source assemblers disappear after handover. We own the engineering, the build and the lifecycle — so reliability is a contractual reality, not a brochure claim."
            />
            <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {differentiators.map((d) => (
                <StaggerItem key={d.k} className="group bg-base p-7 transition-colors hover:bg-surface-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">{d.k}</span>
                    <h3 className="font-display text-base font-medium text-fg">{d.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{d.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5">
            <Reveal variant="scale" className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/texture/controlroom.jpg"
                alt="Mission-critical control environment"
                fill
                sizes="(max-width:1024px) 100vw, 440px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="eyebrow text-accent-soft">Uptime engineered</div>
                <p className="mt-2 max-w-xs text-sm text-fg">
                  Designed for facilities where a power interruption is never an option.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stat band */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="bg-surface-1 p-8">
              <div className="h-display text-4xl text-fg md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-display text-sm font-medium text-fg">{s.label}</div>
              <div className="mt-1 text-xs leading-relaxed text-fg-dim">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
