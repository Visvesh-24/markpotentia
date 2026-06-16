'use client';

import SectionHeading from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';
import { process } from '@/lib/data';

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="shell-wide relative">
        <SectionHeading
          align="center"
          eyebrow="How We Deliver"
          title="From load study to lifecycle support."
          intro="A single, accountable process — the same team carries your project from first survey to long-term service."
          className="mb-16"
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
          {process.map((step) => (
            <StaggerItem key={step.k}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface-1 p-7 transition-colors hover:bg-surface-2">
                <div className="flex items-center justify-between">
                  <span className="h-display text-4xl text-surface-3 transition-colors group-hover:text-accent/50">
                    {step.k}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent/40 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent" />
                </div>
                <h3 className="mt-5 font-display text-lg text-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
